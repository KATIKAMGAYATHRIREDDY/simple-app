import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Certificates from "./Certificates";
import Skills from "./Skills";
import Projects from "./Projects";

function Home() {
  return (
    <Router>
    <nav>
        <ul>
            {/* <li>
                <Link to="/">About</Link>
            </li> */}
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
    </Routes>
</Router>
  );
}
export default Home;
