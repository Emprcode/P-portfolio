import React from "react";
import { Card, Row } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export const About = () => {
  return (
    <div className="about-color">
      <Row className="info text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">Hi, I'm Narayan Aryal </h2>
        </div>
        <h6 className="mt-4 fw-bold">
          {" "}
          I am a{" "}
          <span className="fw-bold text-primary">
            {" "}
            full stack MERN developer{" "}
          </span>{" "}
          based in Sydney, Australia. It's nice to see you here. I enjoy
          developing web applications and websites and love to work on various
          projects.
        </h6>
        {/* <div className="p-3 ">
          <a href={resume} download={true}>
            <Button
              variant="none"
              className="btn btn-outline-success rounded fw-bold">
              Download Resume <i className="fa-solid fa-download"></i>
            </Button>
          </a>
        </div> */}
      </Row>

      <Row className="justify-content-center gap-5 flex-sm-wrap mt-5 p-3" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <Card
          style={{ width: "17rem" }}
          className="p-4 d-flex justify-content-center align-items-center ">
          <span className="p-2 mb-2 h1 about-icon">
            {" "}
            <i className="fa-solid fa-code"></i>
          </span>

          <Card.Body className="card-body">
            <Card.Text className="h6">
              I love coding things and enjoy bringing ideas to life. Personally,
              I use JavaScript and its framework to create beautiful web
              applications from the scratch.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "17rem" }}
          className=" card p-4 d-flex justify-content-center align-items-center">
          <span className="p-2 mb-2 h1 about-icon">
            {" "}
            <i class="fa-solid fa-comments"></i>
          </span>

          <Card.Body className="card-body">
            <Card.Text className="h6">
              If you have creative thoughts and want to work with someone, I'm
              always up for a chat.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "17rem" }}
          className="p-4 d-flex justify-content-center align-items-center" >
          <span className="p-2 mb-2 h1 about-icon">
            {" "}
            <i class="fa-solid fa-face-smile"></i>
          </span>
          <Card.Body className="card-body">
            <Card.Text className="h6">
              Besides coding, I enjoy my life travelling, playing various sports
              and listening music and many more.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};
