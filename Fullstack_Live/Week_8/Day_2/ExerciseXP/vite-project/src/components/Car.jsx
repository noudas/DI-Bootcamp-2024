import { useState } from "react";
import Garage from "./Garage";

const CarModel = (props) => {
    const [color, setColor] = useState("Silver");

    const toggleColor = () => {
        setColor((prevColor) => (prevColor === "Silver" ? "Puke Green" : "Silver"));
    };

    return (
        <>
            <header>
                <h3>The brand is {props.name}</h3>
                <h3>This car is {props.model} and {color}</h3>
                <button onClick={toggleColor}>Change car color</button>
                <Garage size="small"/>
            </header>
        </>
    );
};

export default CarModel;