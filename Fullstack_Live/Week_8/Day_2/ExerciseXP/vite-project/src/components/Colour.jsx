import React, { useState, useEffect } from "react";

const Colour = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert("useEffect reached");
    }, [favoriteColor]);

    const changeColor = () => {
        setFavoriteColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    };

    return (
        <div>
            <h1>My Favorite color is: {favoriteColor}</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};

export default Colour;
