import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import portfolio from "../../assets/portfolio.png";
import calc from "../../assets/calc.png";
import contact from "../../assets/contact-list.png";

export const Websites = () => {
    const projects = [
        {
          title: "Portfolio",
          description: "Develop and Deployment",
          imgUrl: portfolio,
        },
        {
          title: "Contact List App",
          description: "Design & Development",
          imgUrl: contact,
        },
        {
          title: "The prank calculator",
          description: "Design & Development",
          imgUrl: calc,
        },
    
  
    ]
  return (
    <Tab.Pane eventKey="third">
    <Row className="">
      {projects.map((project, i) => {
        return <ProjectCard key={i} {...project} />;
      })}
    </Row>
  </Tab.Pane>
  )
}
