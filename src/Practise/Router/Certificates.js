import React from "react";
import { useNavigate } from "react-router-dom";
export default function Certificates() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() =>
                navigate("/")}>Back to Home Page</button>
            <h1>Certificates Page</h1>
        </>
    );
}
