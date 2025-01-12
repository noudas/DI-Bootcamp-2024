import './style.css'

// Description:
// Create a function handleData that processes an array of mixed types. 
// The array can contain objects with different structures. 
// Implement type guards to handle each type of object and perform specific operations based on their structure.

// Instructions:
// 1. Define the following types:

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};


// 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:

const handleData = (array: (User | Product | Order)[]) => {
  array.forEach((item) => {

    // Type guard for User
    if (item.type === 'user') {
      // For User objects, return a greeting message with the user’s name and age.
      console.log(`User: ${item.name}, Age: ${item.age}`);
    }

    // Type guard for Product
    else if (item.type === 'product') {
      // For Product objects, return a message with the product ID and its price.
      console.log(`Product ID: ${item.id}, Price: ${item.price}`);
    }

    // Type guard for Order
    else if (item.type === 'order') {
      // For Order objects, return a summary of the order with its ID and amount.
      console.log(`Order ID: ${item.orderId}, Amount: ${item.amount}`);
    } else {
      // 3. Ensure your function handles unexpected cases gracefully.
      console.error('Unknown type');
    }
  });
};


