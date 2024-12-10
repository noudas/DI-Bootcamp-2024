// You will create a currencies converter:


// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// Create your own API key by signing up - you will be able to make more requests :)
// Base API URL and Key
const BASE_URL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = "37d4114298cabf53872f585d";

// DOM Elements
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertButton = document.getElementById("convert-button");
const convertResult = document.getElementById("conversion-result")
const switchButton = document.getElementById("switch-values")


// Fetch data helper function
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// GET all of the Region codes
const codeList = async () => {
    let url = `${BASE_URL}${API_KEY}/codes`
    const data = await fetchData(url)
    // Debug response structure
    // console.log(data);
    let codes = data.supported_codes
    return codes
}

async function createCodelist() {
    try {
        const codes = await codeList();

        codes.forEach(country => {
            // So I tried to make only one... but it didn't work, later on i tried to create a function to be recalled... it also didn't weork
            // My last solution was this

            // Create a new option for the "from" select
            const fromOption = document.createElement("option");
            fromOption.value = country[0];
            fromOption.textContent = `${country[0]} - ${country[1]}`;
            fromCurrencySelect.appendChild(fromOption);
            
            // Create a new option for the "to" select
            const toOption = document.createElement("option");
            toOption.value = country[0];
            toOption.textContent = `${country[0]} - ${country[1]}`;
            toCurrencySelect.appendChild(toOption);
        });
        
    } catch (error) {
        console.error("Failed to fetch code list:", error);
    }
}

// Call the function to populate the select dropdown
createCodelist();

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint. 
// Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Event Listener for Convert Button
convertButton.addEventListener("click", async (event) => {
    event.preventDefault();
    
    // Get user inputs
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;
    
    // Build the API URL
    // Hint: You could also supply an optional AMOUNT variable in the query of the request.
    const url = `${BASE_URL}${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    try {
        const data = await fetchData(url);

        // Debug response structure
        // console.log(data);

        // Extract conversion result
        const result = data.conversion_result;
        if (result !== undefined) {
            convertResult.placeholder = result;
        } else {
            convertResult.placeholder = "Unable to retrieve conversion result.";
        }
    } catch (error) {
        console.error("Failed to fetch conversion data:", error);
        convertResult.placeholder = "An error occurred during conversion. Please try again.";
    }
});



// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.
// Event Listener for Switch Button
switchButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Creates a temporary value to just invert the values.. A gets put into C, A becomes B, The A inside of A goes to B, so it becomes the new value
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;

    // Clear the previous result.
    convertResult.placeholder = "";
});




// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, 
// as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, 
// in order to add the currencies options (ie FROM - To) in the currency converter. 
// Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

