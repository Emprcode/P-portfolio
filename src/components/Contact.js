import React from "react";
import { Container, Row } from "react-bootstrap";

export const Contact = () => {
  return (
    <div>
      <Container className="p-4">
        <Row className="info text-center ">
          <div className=" mt-5 p-3 d-flex justify-content-center align-items-center">
            <h2 className="fw-bold">Interested in collaborating with me? </h2>
          </div>
          <h6 className="mt-4">
            I'm always open to provide my services to business/companies or
            partnership opportunities.
          </h6>
        </Row>
        <div className="d-flex justify-content-center mt-3 mb-5">
          {" "}
          <a href="mailto:narayanaryal.code@gmail.com" className="nav-link">
            <span variant="none" className="button fw-bold">
              Email Me
            </span>
          </a>
        </div>
      </Container>
      <hr />
    </div>
  );
};
