import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    // Fetch the initial GET message
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/hello');
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error fetching message:', error);
            }
        };
        fetchMessage();
    }, []);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/world', {
                input: inputValue,
            });
            setResponseMessage(response.data.message);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    return (
        <div>
            <h1>{message}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something..."
                />
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default App;
