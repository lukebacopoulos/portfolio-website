import React, { forwardRef } from "react";
import "./Projects.css";
import EZRiderlogo from "./images/EZRiderlogo.png";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="projects" ref={ref}>
      <h1>Projects:</h1>
      <div className="project">
        <div className="project-info">
        <a href="https://github.com/aymane-eljerari/ezrider" target="_blank" rel="noopener noreferrer">
      EZRider
      <img src={EZRiderlogo} alt="EZRiderlogo" className="EZRlogo" />
        </a>
         </div>
        <div className="project-body">
          <p>
            EZRider is an iOS application that automatically locates and detects potholes and rough roads.  
            The project was a part of Boston University's department of Electical and Computer Engineering's annual capstone design program in the spring semester of 2023.  
            My role within EZRider's group of five was to spearhead the development of our application.  Using Google's Dart programming language and Flutter framework, I successfully
            created a functioning iOS app with an intuitive UI that satisfied the requirements of our customer, Professor Alan Pisano.  Features of the application include on-demand capturing of device's accelerometer, image, and GPS data,
            streamlined uploading to database, and an interactive map with locations of detected rough roads.
          </p>
     </div>
        <div className="project-image">
        </div>
      </div>
    </div>
  );
});

export default Projects;
