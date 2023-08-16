import React from "react";
import "../css/Portfolio.css";
import Img1 from "../images/Screenshot_1.png";
import Img2 from "../images/Screenshot_2.png";
import Img3 from "../images/Screenshot_3.png";
import Img4 from "../images/Screenshot_4.png";

function Portfolio() {
  const projects = [
    {
      title: "Boredom Killer",
      imageUrl: Img1,
      deployedLink: "https://mahlheim.github.io/fuzzy-octo-succotash/",
      githubLink: "https://github.com/mahlheim/fuzzy-octo-succotash",
      languages: [
        "HTML",
        "JavaScript",
        "CSS",
      ],
    },
    {
      title: "Movies Are Us",
      imageUrl: Img2,
      deployedLink: "https://arcane-everglades-12126-c502ea749e86.herokuapp.com/",
      githubLink: "https://github.com/sam-stikeleather/Movies-Are-Us",
      languages: ["HTML", "CSS", "JavaScript", "Bulma", "Express.js", "Node.js"],
    },
    {
      title: "Note Taker",
      imageUrl: Img3,
      deployedLink:"https://module-11-af6de57ca3bc.herokuapp.com/",
      githubLink: "https://github.com/Austin-Online/musical-octo-waffle",
      languages: ["Express.js"],
    },
    {
      title: "5 Day Weather Forecast",
      imageUrl: Img4,
      deployedLink: "https://austin-online.github.io/glowing-potato/",
      githubLink: "https://github.com/Austin-Online/glowing-potato",
      languages: ["HTML", "CSS", "JS", "Server-side APIs"],
    },
  ];
  return (
    <div className="container">
      <h2>My Portfolio</h2>
      <section className="portfolio-section">
        <div className="portfolio-items">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <h3>{project.title}</h3>

              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="portfolio-item-hover">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="languages">
                    {project.languages.map((language, langIndex) => (
                      <span key={langIndex}>{language}</span>
                    ))}
                  </div>
                </div>
              </a>

              <div className="links">
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed Link
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Portfolio;