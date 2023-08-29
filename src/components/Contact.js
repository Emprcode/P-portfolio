import React from "react";
import { Container, Row } from "react-bootstrap";
import Chip from '@mui/material/Chip';

export const Contact = () => {
  return (
    <Container className="p-4" >
      <Row className="info text-center ">
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
        <a href="mailto:narayanaryal.code@gmail.com">
        <Chip label="Email Me" color="success" className="fw-bold" variant="outlined fw-bold" />
         
        </a>
      </div>
      <hr />
    </Container>
  );
};
