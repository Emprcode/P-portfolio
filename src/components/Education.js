import {  Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Education = () => {
  return (
    <div className="education">
      <Row className="info p-4 text-center">
        <div className="mt-5">
          <h2 className="fw-bold">Education </h2>
          <p className="mt-4 "></p>
        </div>
      </Row>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work ms-5 me-5"
          date="August 2022 - Feburary 2023"
          iconStyle={{ background: "#5BE9B9", color: "#000000" }}
          icon={
            <span className="h1 p-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-code-compare"></i>{" "}
            </span>
          }>
          <h3 className="vertical-timeline-element-title fw-bold">
            Dented Code Academy
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
            Sydney, Australia
          </h6>
          <div className="mt-3">
            <h6 className="fw-bold"> Full Stack Development Course</h6>
            <p>
              Skills- MERN Stack, MongoDB, Express.js, React, Node. Currently
              Working in Full-Stack E-commerce Project.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work  ms-5 me-5"
          date="2019 - 2022"
          iconStyle={{ background: "#5BE9B9", color: "#fff" }}
          icon={
            <span className="h1 p-3 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-user-graduate text-dark"></i>{" "}
            </span>
          }>
          <h3 className="vertical-timeline-element-title  fw-bold">
            Federation University Australia
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Australia</h6>
          <div className="mt-3">
            <h6 className="fw-bold ">
              {" "}
              Bachelor of Information Technology (Software Development)
            </h6>
            <p>Successfully completed the course with 5.620 GPA.</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work  ms-5 me-5"
          date="2017 - 2019"
          iconStyle={{ background: "#5BE9B9", color: "#fff" }}
          icon={
            <span className="h1 p-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-building-columns text-dark"></i>
            </span>
          }>
          <h3 className="vertical-timeline-element-title  fw-bold">
            Oxford Secondary School
          </h3>
          <h6 className="vertical-timeline-element-subtitle">Nepal</h6>
          <div className="mt-3">
            <h6 className="fw-bold">
              {" "}
              Secondary level education - Major Science
            </h6>
            <p>CGPA: 3.50</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
