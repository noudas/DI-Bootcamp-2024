import { useState } from "react"

const Phone = () => {

    const [brand] = useState("Samsung");
    const [model] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year] = useState(2020);

    const toggleColor = () => {
        setColor((prevColor) => (prevColor === "black" ? "puke green" : "black"));
    };

    return (
        <>
        <h1>My phone is a {brand}</h1>
        <h3>It is {model} {color} from {year}</h3>
        <button onClick={toggleColor}>Change the color</button>
        </>
    )

}

export default Phone;