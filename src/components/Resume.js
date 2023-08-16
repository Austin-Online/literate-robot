import React from "react";
import "../css/Resume.css";
function Resume() {
  return (
    <div className="container">
      <h2>My Resume</h2>
      <section>
        <div className="resume-container">
          <div className="resume-links">
            <a href="/Austin-Shook.pdf" download>
              Download Resume
            </a>
          </div>
          <h3>Proficiencies</h3>
          <div className="proficiencies">

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Bulma</li>
              <li>Bootstraps</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;