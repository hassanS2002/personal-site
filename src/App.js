import "./App.css";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Project from './Project';
import Home from './Home';
import resume from './resume.pdf';

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  // Define the function to open the resume
  const openResume = () => {
    window.open(resume, "_blank");
  };

  // Define the function to open LinkedIn profile
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hassan-siddiqui-02/", "_blank");
  };

  // Define the function to open LinkedIn profile
  const openGithub = () => {
      window.open("https://github.com/hassanS2002", "_blank");
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <section id="profile">
          <div className="section-pic">
            <img src="./profilepic.jpeg" alt="Hassan Profile Pic"></img>
          </div>
          <div className="section_text">
            <p className="Section_text_p1">Hello, I'm</p>
            <h1 className="title">Hassan Siddiqui</h1>
            <p className="section_text_p2">Aspiring Software Engineer</p>
            <div className="Button-ctn">
              <button className="btn btn-color-2 mr-4" onClick={openResume}>Resume</button>
              <Link to="/contact" className="btn btn-color-1">Contact</Link>
            </div>
          </div>
          <div id="socials-container">
            <img src="./61109.png" alt="My Linkedin Profile" className="icon" onClick={openLinkedIn} />
            <img src="./gitlogo.png" alt="My Github Profile" className="icon2" onClick={openGithub} />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
