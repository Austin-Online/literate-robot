import React from "react";
import userImage from "../images/user.jpg";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <div className="container">
      <section className="about-me-container">
        <div className="avatar">
          <img src={userImage} alt="Developer Austin Shook" />
        </div>
        
        <div className="bio">
          <h3>Hey! I'm Austin Shook</h3>
          <p>Current Occupation: Student FullStack Developer</p>
          <p>
            I'm an ethusiastic junior developer recently graduated from EdX Full Stack Bootcamp at University of North Carolina Charlotte.  I deeply enjoy the thrill of complex problem solving and learning the nuances of programming languages.
          </p>
          <p>I'm the father of three wonderful children who I raise with my beautiful wife of 15 years. When I'm not involved with my enjoyment of programming and technology, that's where you'll find me.</p>

        </div>
      </section>
    </div>
  );
}

export default AboutMe;