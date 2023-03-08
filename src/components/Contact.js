import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <Container>
      <Row className="info  p-5 text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">Interested in collaborating with me? </h2>
        </div>
        <h6 className="mt-4">
          I'm always open to provide my services to business/companies or
          partnership opportunities.
        </h6>
      </Row>
      <div className="text-center mb-5">
        {" "}
        <a href="mailto:your@email.com" target="_blank" rel="noreferrer">
          <Button
            variant="none"
            
            className="btn btn-outline-success rounded fw-bold">
            {" "}
            Email Me
          </Button>
        </a>
      </div>
      <hr />
    </Container>
  );
};
