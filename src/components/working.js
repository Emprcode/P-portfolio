import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export const working = () => {
  return (
    <Container>
      <Row className="info  p-5 text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">Work in Progress! </h2>
        </div>
        <h6 className="mt-4">
          I'm still developing the application, but as soon as I deploy it, I'll
          update the live link.
        </h6>
      </Row>
      <div className="text-center mb-5">
        {" "}
        <h6> Why don't you look through my other works in the meantime?</h6>
        <Button
          variant="none"
          href="#/"
          className="btn btn-outline-primary rounded fw-bold">
          {" "}
          Go Back
        </Button>
      </div>
      <hr />
    </Container>
  );
};
