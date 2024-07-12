import React from "react";
import { useNavigate } from "react-router-dom";
export default function Skills() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() =>
                navigate("/")}>Back to Home Page</button>
            <h1>Skills Page</h1>
        </>
    );
}
