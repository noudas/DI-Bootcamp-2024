// In shop.js, require the product objects from the products.js module.
const products = require("./products.js");

// Create a function that takes a product name as a parameter and searches for the corresponding product object.
const searchProduct = (productName) =>{
    const foundProduct = products.find(product => product.name === productName)
    if(foundProduct){
        console.log(foundProduct.name);
        console.log(foundProduct.price);
        console.log(foundProduct.category);
        return foundProduct
    }
    if(!foundProduct){
        return "Product not found"
    }
}

// Call this function with different product names and print the details of the products.

searchProduct("Sony PlayStation 5 Console");


// Run shop.js and verify that the correct product details are displayed.
