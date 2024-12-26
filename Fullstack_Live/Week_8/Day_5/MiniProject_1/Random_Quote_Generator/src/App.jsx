import './App.css';
import quotes from '../data/QuotesDatabase';
import QuoteCard from './components/quoteCard';
import { useEffect, useState } from 'react';

// Nothing is readable... but its fun
// Chatgpt math magic... I wanted to create a perfect tryad of colors
// Utility to convert RGB to HSL
const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l;

    l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
};

// Utility to convert HSL to RGB
const hslToRgb = (h, s, l) => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

// Generate a random base color and its triadic colors
const generateTriadColors = () => {
    const random = () => Math.floor(Math.random() * 256);
    const baseColor = rgbToHsl(random(), random(), random());

    // Base color
    const [h, s, l] = baseColor;

    // Triadic colors
    const color1 = hslToRgb(h, s, l);
    const color2 = hslToRgb((h + 120) % 360, s, l);
    const color3 = hslToRgb((h + 240) % 360, s, l);

    return {
        background: color1,
        text: color2,
        button: color3,
    };
};

function App() {
    const [quoteData, setQuote] = useState(null);
    const [colors, setColors] = useState({
        background: 'white',
        text: 'black',
        button: '#007BFF',
    });

    const getQuote = async () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const fetchQuote = async () => {
        const randomQuote = await getQuote();
        setQuote(randomQuote);
        setColors(generateTriadColors());
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '20px' }}>
            <QuoteCard
                info={quoteData}
                onNewQuote={fetchQuote}
                textColor={colors.text}
                buttonColor={colors.button}
            />
        </div>
    );
}

export default App;
