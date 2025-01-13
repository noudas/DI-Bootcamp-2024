const jwt = require("jsonwebtoken")

const myToken = jwt.sign({
    userId: 111,
    email:"mail@mail.mail",
    username:"JohnDoes"
    },
    `123456`,
    {
        expiresIn: "30s" 
    })

console.log(myToken);

const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";