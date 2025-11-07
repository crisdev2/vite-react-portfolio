import { Fragment, useState, type FC } from "react";
import type { IProject } from "../../models/project";

interface Props {
  project: IProject;
}

const ProjectItem: FC<Props> = ({ project }) => {
  const [open, setOpen] = useState(false);

  const handleSeeMore = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div className="project-image">
        <img src={project.image} alt={project.name} />
        <div className="project-role">{project.role}</div>
      </div>
      <div className={`project-info${open ? " info-open" : ""}`}>
        <div className="project-name">{project.name}</div>
        <div className={`project-description${open ? " info-open" : ""}`}>
          {project.description}
        </div>
        <div className="see-more">
          <button onClick={handleSeeMore}>
            {open ? "▲ See less" : "▼ Read more"}
          </button>
        </div>
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectItem;
