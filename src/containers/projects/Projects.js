import {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";

import "./Project.scss";
import {participatedProjects} from "../../portfolio";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="main" id="projects">
      <h1 className="skills-heading">{participatedProjects.title}</h1>
      <p
        className={
          isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
        }
      >
        {participatedProjects.subtitle}
      </p>
      <div className="projects-container">
        {participatedProjects.projects.map((project, i) => {
          return <ProjectCard project={project} key={i} isDark={isDark} />;
        })}
      </div>
    </div>
  );
}
