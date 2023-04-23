import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const skillsFrontend = [
    { name: "HTML"},
    { name: "CSS"},
    { name: "JavaScript"},
    { name: "TypeScript"},
    { name: "React.js"},
    { name: "Next.js"},
    { name: "Bootstrap"},
    { name: "Tailwind"},
  ];
  const skillsBackend = [
    { name: "Java"},
    { name: "Python" },
    { name: "C"},
    { name: "C#" },
    { name: "MongoDB"},
    { name: "MySQL"},
    { name: "PHP"},
    { name: "Node.Js"},
  ];
  const iconCheck = <BsPatchCheckFill className="experience_details-icon" />;

  const skillsFrontendPrint = skillsFrontend.map((skill) => {
    return (
      <article key={skill.name} className="experience_details">
        {iconCheck}
        <div>
          <h4>{skill.name}</h4>
        </div>
      </article>
    );
  });
  const skillsBackendPrint = skillsBackend.map((skill) => {
    return (
      <article key={skill.name} className="experience_details">
        {iconCheck}
        <div>
          <h4>{skill.name}</h4>
        </div>
      </article>
    );
  });

  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">{skillsFrontendPrint}</div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">{skillsBackendPrint}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
