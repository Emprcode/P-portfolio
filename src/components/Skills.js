import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

export const Skills = () => {
  return (
    <Container id="skills" className="skills">
      <div className="text-center mb-3">
        <h3 className="fw-bold"> How do I develop beautiful web apps? </h3>
        <p className="mt-4 ">
          Well, I am proud to have few friends which are .....
        </p>
      </div>
      <Marquee direction="left" speed="100" gradient="false">
        <div className="icons p-3 mt-5">
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
            {" "}
            <i class="fa-brands fa-python text-info"></i>Python
          </div>
        </div>
      </Marquee>
      <Marquee direction="right" speed="100" >
        <div className="icons p-3 mt-2  ">
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
      </Marquee>
    </Container>
  );
};
