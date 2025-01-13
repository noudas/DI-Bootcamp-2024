const db = require("../config/db");
const bcrypt = require("bcrypt");

module.exports = {
    createUser: async(password, email) =>{
        const trx = await db.transaction();
        try {
            /* Hashing Password */
            const hashPassword = await bcrypt.hash(password + "", 10)
            
            const [user] = await trx("users").insert({
                email: email.toLowerCase(),
                password: hashPassword,
            },
            ["email","id"]
        );
            await trx.commit();
            return user;
        } catch (error) {
            await trx.rollback();
            console.log(error);
            throw error
        }
    },

    getUserByEmail: async (email) =>{
        try {
            const user = await db("user")
                .select("id","email","password")
                .where({email: email.toLowerCase()})
                .first();
            return user
        } catch (error) {
            throw error
        }
    },

    getUsers: async () =>{
        try {
            const user = await db("users").select("id","email");
            return user;
        } catch (error) {
            throw error;
        }
    }

}