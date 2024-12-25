import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET request to /api/hello
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello From Express' });
});

// POST request to /api/world
app.post('/api/world', (req, res) => {
    console.log('Request Body:', req.body);
    const inputValue = req.body.input || '';
    res.send({ message: `I received your POST request. This is what you sent me: ${inputValue}` });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
