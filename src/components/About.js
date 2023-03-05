import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import code1 from "../assets/code1.png";
import coffee from "../assets/coffee.png";
import hobbies from "../assets/hobbies.png";

export const About = () => {
  return (
    <Container>
      <Row className="info  p-5 text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">Hi, I'm Narayan Aryal </h2>
        </div>
        <h6 className="mt-4">
          {" "}
          I am a <span className="fw-bold">
            {" "}
            full stack MERN developer{" "}
          </span>{" "}
          based in Sydney, Australia. It's nice to see you here. I enjoy
          developing websites and applications and love to work on various
          projects.
        </h6>
      </Row>

      <Row className=" about d-flex flex-wrap ">
        <div> </div>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={code1} className="card-img" />
            <Card.Body>
              <Card.Text>
                I love coding things and enjoy bringing ideas to life.
                Personally, I use JavaScript and its framework to create
                beautiful web applications from the scratch.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={coffee} className="card-img" />
            <Card.Body>
              <Card.Text>
                If you have creative thoughts and want to collaborate with
                someone, I'm always up for a chat.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={hobbies} className="card-img" />
            <Card.Body>
              <Card.Text>
                Besides coding, I enjoy my life travelling, playing various
                sports and listening music and many more.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
