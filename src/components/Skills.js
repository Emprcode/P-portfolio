import React from "react";
import { Container } from "react-bootstrap";

export const Skills = () => {
  return (
    <Container className="mt-5">
      <div className="text-center mb-3">
        <h2> How do I develop beautiful web apps? </h2>
        <p className="mt-4">
          Well, I am proud to have few friends which are .....
        </p>
      </div>
      <div className="icons p-5 mt-5 ">
        <div>
          <i className="fa-brands fa-react text-primary"></i>REACT
        </div>
        <div>
          <i className="fa-brands fa-node-js text-success "></i>NODE
        </div>
        <div>
          <i className="fa-solid fa-database text-success"></i>MONGODB
        </div>
        <div>
          {" "}
          <i className="fa-brands fa-js text-warning"></i>JavaScript
        </div>
        <div>
          <i className="fa-brands fa-html5 text-danger"></i>HTML
        </div>
        <div>
          {" "}
          <i className="fa-brands fa-css3-alt text-primary"></i>CSS
        </div>
        <div>
          {" "}
          <i className="fa-brands fa-bootstrap text-success"></i> BOOTSTRAP
        </div>
        <div>
          {" "}
          <i className="fa-brands fa-git-alt"></i> Git
        </div>

        <div>
          <i className="fa-brands fa-figma"></i> FIGMA
        </div>
      </div>
    </Container>
  );
};
