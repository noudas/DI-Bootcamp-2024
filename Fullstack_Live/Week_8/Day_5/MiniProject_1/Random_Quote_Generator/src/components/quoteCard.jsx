import { useState, useEffect } from 'react';
import './QuoteCard.css';


// 100% copy-pasted from stackoverflow
const speakText = (text) => {
    const synth = window.speechSynthesis;

    if (!synth) {
        alert("Text-to-speech is not supported in this browser.");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-AU"; // You can change this to match the desired language
    utterance.rate = 1.2; // Adjust speed (default is 1)
    utterance.pitch = 10; // Adjust pitch (default is 1)

    synth.speak(utterance);
};


const QuoteCard = (props) => {
    const { quote, author } = props.info || {};
    const { onNewQuote, textColor, buttonColor } = props;
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (quote) {
            speakText(quote);
        }

        setAnimate(false);
        const timeout = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timeout);
    }, [quote]);

    if (!props.info) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card" style={{ backgroundColor: buttonColor}}>
            <div className={animate ? "fadein" : ""}>
                <h1 style={{ color: textColor }}>"{quote}"</h1>
                <h5>-{author}-</h5>
            </div>
            <button 
                onClick={onNewQuote} 
                style={{ backgroundColor: textColor, color: 'white' }}>
                New Quote
            </button>
        </div>
    );
};

export default QuoteCard;