const fs = require("fs");

// console.log("before");
// try {
//   const data = fs.readFileSync("info", "utf-8");
//   console.log(JSON.parse(data));
// } catch (e) {
//   console.log(e);
// }

// fs.readFile("info.txt", "utf-8", (err, data) => {
//   if (err) return console.log(err.message);

//   console.log(data);
// });

// console.log("after");

// let data = "12345678";

// let users = [
//   { name: "John", email: "jjj@gmail.com" },
//   { name: "Anne", email: "aaa@gmail.com" },
// ];

// fs.writeFile("data.txt", JSON.stringify(users), "utf-8", (err) => {
//   if (err) return console.log(err);
// });


// fs.appendFile('text', 'fghdfjdfdjtdyjtyj', 'utf-8', (err)=>{
//     if (err) return console.log(err);
// })

fs.copyFile('text', 'text-2', err=>{
    
})