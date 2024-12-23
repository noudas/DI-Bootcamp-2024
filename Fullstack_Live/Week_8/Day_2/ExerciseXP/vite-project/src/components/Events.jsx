import { useState } from "react";

const ClickMe = () => {
    const [message, setMessage] = useState("Hello!");
    const [inputValue, setInputValue] = useState("Hold down a key"); 
    const [isToggleOn, setToggle] = useState(false)

    const handleClick = () => {
        alert(message);
        setMessage("You clicked the button!");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            alert(`You pressed Enter! Input Value: ${e.target.value}`);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };



    return (
        <>
            <button onClick={handleClick}>Click me!</button>
            <input
                type="text"
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Type and press Enter"
            />
        
            <button onClick={() => {
                setToggle(!isToggleOn)
            }}>
                {isToggleOn ? 'ON' : 'OFF'}
            </button>
        </>
    );
};

export default ClickMe;
