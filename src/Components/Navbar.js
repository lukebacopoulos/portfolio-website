import React, { useRef } from 'react';
import "./Navbar.css";
import githublogo from './images/githublogo.png'
import linkedinlogo from './images/linkedinlogo.png'

const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
    const scrollToSection = (ref) => {  
            ref.current.scrollIntoView({ behavior: "smooth", block: 'center' });
    };

return (
    <div className="navbar">
        <nav>
            <ul>
                <li onClick={() => scrollToSection(homeRef)}>Home</li>
                <li onClick={() => scrollToSection(aboutRef)}>Bio</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li onClick={() => scrollToSection(contactRef)}>Contact</li>
                <li>
            <a href="https://github.com/lukebacopoulos" target="_blank" rel="noopener noreferrer">
              <img src={githublogo} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luke-baco/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinlogo} alt="LinkedIn" />
            </a>
          </li>
            </ul>
        </nav>
    </div>
);
};

export default Navbar;
