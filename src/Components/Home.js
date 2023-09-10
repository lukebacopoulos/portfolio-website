import React, {forwardRef} from "react";
import "./Home.css";

const Home = forwardRef((props, ref) => {
    return (
        <div className="home" ref={ref}>
            <h1 className="header">Hi, I'm Luke Bacopoulos.</h1>
        </div>
    );
});

export default Home;