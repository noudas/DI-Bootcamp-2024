import React from "react";
import { useSelector } from "react-redux";
import "./spinner.css";

const AgeDisplay = () => {
    const age = useSelector((state) => state.age.age);
    const status = useSelector((state) => state.age.status);

    return (
        <div>
            <h1>Current Age</h1>
            {status === "loading" ? (
                <div className="spinner"></div> // Loading spinner
            ) : (
                <h2>{age}</h2>
            )}
        </div>
    );
};

export default AgeDisplay;
