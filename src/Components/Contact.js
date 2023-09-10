import React, { forwardRef } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
    return (
        <div className="contact" ref={ref}>
            <h1>This is the contact section</h1>
            <p>Hi, I'm Luke.  I'm a senior studying Computer Engineering.</p>
        </div>
    );
});

export default Contact;