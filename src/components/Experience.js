import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ai from "../assets/ai.png";
import { FaCodeBranch } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";
export const Experience = () => {
  return (
    <Container className="p-4">
      <hr />
      <Row className="info text-center ">
        <div className="  mt-5 p-3 d-flex justify-content-center align-items-center">
          <h2 className="fw-bold">
            {" "}
            I'm proud to have worked in awesome startUp project.{" "}
          </h2>
        </div>
        <h6 className="mt-4">
          Over the years, I've explored countless apps and am thrilled to have
          worked as a <span className="fw-bold">lead full stack developer</span>{" "}
          in this awesome startUp project called{" "}
          <span className="fw-bold"> TalenTrova.ai</span>
        </h6>
      </Row>
      <div className="d-flex justify-content-center p-4">
        <Card style={{ width: "25rem", height: "25rem" }} className="p-5">
          <span className="p-4 mb-2 h1 d-flex justify-content-center align-items-center gap-2">
            <img src={ai} alt="ai" className="rounded" width="60px" />
            <span className="h2 title">TalenTrova.ai</span>
          </span>

          <Card.Body className="">
            <Card.Text className="h6">
              A solution that empowers job seekers to effectively keep track of
              their application leveraging AI.
              <Stack direction="column" spacing={2} className="p-3">
                <span>
                  <Chip
                    label="in development"
                    icon={<FaCodeBranch size={20} />}
                  />
                </span>
                <span>
                  <a
                    href="https://www.talentrova.ai/"
                    target="_blank"
                    rel="noreferrer">
                    <Chip
                      label="talentrova.ai"
                      color="success"
                      variant="outlined"
                      size="large"
                      icon={<BsRocketTakeoffFill size={20} color="green" />}
                    />
                  </a>
                </span>
              </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};
