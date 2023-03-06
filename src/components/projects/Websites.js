import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import avatar from "../../assets/avatar.png";

export const Websites = () => {
    const projects = [
        {
          title: "Library System Management",
          description: "Develop and Deployment",
          imgUrl: avatar,
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
