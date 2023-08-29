import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Everything } from "./projects/Everything";
import { FullStacks } from "./projects/FullStacks";
import { Websites } from "./projects/Websites";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container className="bg-none mb-0">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <Row className="info  p-5 text-center ">
                    <div className="mt-5 p-3 d-flex justify-content-center align-items-center">
                      <h2 className="fw-bold">My Recent Works </h2>
                    </div>
                    <h6 className="mt-4">
                      Here are a few projects I've worked on. Want to see more?{" "}
                      <a
                        href="https://github.com/Emprcode"
                        target="_blank"
                        rel="noreferrer">
                        Check here.
                      </a>
                    </h6>
                  </Row>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Everything</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full Stack Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Webapps</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Everything />
                      <FullStacks />
                      <Websites />
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
