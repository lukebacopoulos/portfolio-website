import React, { forwardRef } from "react";
import "./About.css"

const About = forwardRef((props, ref) => {
    return (
        <div className="about" ref={ref}>
            <h1 className="header">About Me</h1>
            <p>I hail from Western Massachusetts, where I attended Westfield High School.  
                Growing up, I would frequently help out at my family pizza restaurant, which my parents founded.  
                When I wasn’t there or at school, I would spend most of my time on various hobbies, including baseball, basketball, skateboarding, and chess.
                My interest in computers stemmed from an early age when I built my first PC in my Freshman year.  
                From there, I decided that I could make a career out of this interest, and attended Boston University’s College of Engineering, where I got my B.S. in Computer and Electrical Engineering in May 2023.  
                I am currently in pursuit of the next chapter of my life, where I want to apply everything I’ve learned in both the classroom and the real world to a full time career.  </p>
        </div>
    );
});

export default About;