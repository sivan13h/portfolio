import "./ProjectCard.scss";

function ProjectCard({project, isDark}) {
  return (
    <div
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image}
            alt={project.projectName}
            className="card-image"
          ></img>
        </div>
      ) : null}
      <div className="project-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.projectName}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {project.projectDesc}
        </p>
        {project.footerLink ? (
          <div className="project-card-footer">
            {project.footerLink.map((link, i) => {
              return (
                <a
                  key={i}
                  className={isDark ? "dark-mode project-tag" : "project-tag"}
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
