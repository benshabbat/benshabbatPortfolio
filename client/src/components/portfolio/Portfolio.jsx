import React from "react";
import cryptoapp1 from "../../assets/cryptoapp1.jpg";
import "./portfolio.css";
const Portfolio = () => {
  const projects = [
    {
      name: "cryptoapp",
      image: cryptoapp1,
      github: "https://github.com/benshabbat/Cryptoapp",
      link: "https://cryptoappbenshabbat.netlify.app/",
    },
    {
      name: "garage",
      image: cryptoapp1,
      github: "https://github.com/benshabbat/garage-js-react-node",
      link: null,
    },
    {
      name: "airBnb",
      image: cryptoapp1,
      github: "https://github.com/benshabbat/airbnb",
      link: null,
    },
    {
      name: "netflix",
      image: cryptoapp1,
      github: "https://github.com/benshabbat/netflix-ts",
      link: null,
    },
  ];

  const printProject = projects.map((project) => {
    return (
      <article key={project.name} className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={project.image} alt={project.name} />
        </div>
        <h3>{project.name} </h3>
        <a href={project.github} className="btn" target="_blank">
          Github
        </a>
        {project.link && (
          <a href={project.link} className="btn" target="_blank">
            Link
          </a>
        )}
      </article>
    );
  });
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">{printProject}</div>
    </section>
  );
};

export default Portfolio;
