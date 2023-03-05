import React from "react";
import { Container, Row } from "react-bootstrap";
import avatar from "../assets/avatar.png";

export const Hero = () => {
  return (
    <Container>
      <Row className="info  p-5 text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h1 className="fw-bold">Narayan Aryal</h1>
        </div>
        <h5 className="mt-4"> I love to write code</h5>
      </Row>
      <Row>
        <div className="   d-flex justify-content-center align-items-center">
          <img src={avatar} alt="my-img" width="30%" />
        </div>
      </Row>
    </Container>
  );
};
