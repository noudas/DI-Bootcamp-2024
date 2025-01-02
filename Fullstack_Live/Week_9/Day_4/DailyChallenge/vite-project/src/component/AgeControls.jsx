import React from "react";
import { useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "../redux/AgeSlice";

const AgeControls = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Age Controls</h1>
            <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
            <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
        </div>
    );
};

export default AgeControls;