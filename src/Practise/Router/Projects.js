import React from "react";
import { useNavigate } from "react-router-dom";
export default function Projects() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() =>
                navigate("/")}>Back to Home Page</button>
            <h1>Projects Page</h1>
        </>
    );
}
