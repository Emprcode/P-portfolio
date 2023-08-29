import { Col, Row } from "react-bootstrap";
import { BsRocketTakeoffFill } from "react-icons/bs";

export const ProjectCard = ({ title, description, imgUrl, github, live }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" height="70px" width="50px" />
        <div className="proj-txtx text-light">
          <h4 className="p-2">{title}</h4>
          <span>{description}</span>

          <Row className="p-3">
            <Col>
              <a href={github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github text-light h3"> </i>
              </a>
            </Col>
            <Col>
              <a href={live} target="_blank" rel="noreferrer">
                <div className="h3 ">
                  <BsRocketTakeoffFill color="white" />
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};
