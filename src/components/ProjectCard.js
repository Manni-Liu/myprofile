import { Col } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, liveUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-card">
        <img src={imgUrl} alt={title} className="project-bg" />

        <div className="project-info">
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="project-links">
            <a href={liveUrl} target="_blank" rel="noreferrer" className="visit-btn">
              Visit <FaExternalLinkAlt />
            </a>

            <a href={githubUrl} target="_blank" rel="noreferrer" className="github-icon">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
