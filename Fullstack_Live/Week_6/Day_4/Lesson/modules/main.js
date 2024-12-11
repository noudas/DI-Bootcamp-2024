console.log("My first Node js file");

let arr = [1,2,3]
arr.map(item => {
    console.log(item);
});

const hello = (name) => {
    console.log(`Hello ${name}!, Welcome to Node!`);
};

let a = 10;

module.exports = {
    hello,
    a,
}