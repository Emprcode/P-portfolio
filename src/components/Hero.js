import React from "react";
import { Container, Row } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <Container>
      <Row className=" p-5 text-center ">
        <div className="mt-5 p-3 d-flex justify-content-center align-items-center">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              500,
              "Full Stack Developer",
              500,
              "MERN Developer",
              500,
            ]}
            style={{ fontSize: "2.5em", fontWeight: "bold" }}
            repeat={Infinity}
          />
          {/* <h1 className="fw-bold ">Software Engineer</h1> */}
        </div>
        <h5 className="mt-3"> I love to write code</h5>
      </Row>
      <Row>
        <div className="d-flex justify-content-center align-items-center">
          <img src={avatar} alt="my-img" width="30%" />
        </div>
      </Row>
    </Container>
  );
};
