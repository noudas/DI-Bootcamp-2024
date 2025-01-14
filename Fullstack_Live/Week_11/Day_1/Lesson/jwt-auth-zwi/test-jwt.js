const jwt = require("jsonwebtoken");

/**
 * jwt.sign(
 *  {userid:'a24fred', email:'john@gmail.com'},
 *  token-secret-code, John!2345TheKing#242
 * {expire time}
 * )
 */

/**
('2 days')  // 172800000
('1d')   // 86400000
('10h')  // 36000000
('2.5 hrs') // 9000000
('2h')      // 7200000
('1m')      // 60000
('5s')      // 5000
('1y')      // 31557600000
('-3 days') // -259200000
('-1h')     // -3600000
*/

// const expireTime = Math.floor(Date.now() / 1000) + 15 * 60; // 15 min

const myToken = jwt.sign(
  { userid: 111, email: "john@gmail.com", username: "JohnJohn" },
  "123456",
  { expiresIn: "1d" }
);

console.log(myToken);

const expiredToken =
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VyaWQiOjExMSwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiSm9obkpvaG4iLCJpYXQiOjE3MzY3NTU2MjUsImV4cCI6MTczNjg0MjAyNX0.RG184GGs50Bbt4zOhmwLBP_KJUTxqAAhnUzfQHRSLJY`
/**
 * jet.verify(
 *    token,
 *    token-secret-code,
 *    (err, decode) => {}
 * )
 */

jwt.verify(expiredToken, "123456", (err, decode) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(decode);
});
