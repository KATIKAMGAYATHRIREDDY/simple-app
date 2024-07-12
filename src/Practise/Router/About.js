import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() =>
                navigate("/certificates")}>Certificates</button>
            <button onClick={() =>
                navigate("/skills")}>Skills</button>
            <button onClick={() =>
                navigate("/projects")}>Projects</button>
        </div>
    );
}
