const MathHelper = (num1, num2, symbol) => {
    
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(symbol) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero"; // Handling divide by zero
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
};

export default MathHelper