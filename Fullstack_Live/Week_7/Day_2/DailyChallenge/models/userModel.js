const db = require("../config/connection");

const addUserTransaction = async (userData, hashedPassword) => {
    return db.transaction(async (trx) => {
        const [userId] = await trx("users").insert({
            email: userData.email,
            username: userData.username,
            first_name: userData.first_name,
            last_name: userData.last_name
        }).returning("id");

        await trx("hashpwd").insert({
            id: userId,
            username: userData.username,
            password: hashedPassword
        });
    });
};

const findUserByUsername = (username) => {
    return db("hashpwd").where({ username }).first();
};

const getAllUsers = () => {
    return db("users").select("*");
};

const getUserById = (id) => {
    return db("users").where({ id }).first();
};

const updateUser = (id, updatedData) => {
    return db("users").where({ id }).update(updatedData);
};

module.exports = {
    addUserTransaction,
    findUserByUsername,
    getAllUsers,
    getUserById,
    updateUser
};
