import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import portfolio from "../../assets/portfolio.png";
import calc from "../../assets/calc.png";
import contact from "../../assets/contact-list.png";
import movielist from "../../assets/movielist.png";

export const Websites = () => {
    const projects = [
      {
        title: "Portfolio",
        description: "Develop and Deployment",
        imgUrl: portfolio,
        github: "https://github.com/Emprcode/P-portfolio",
        live: "",
      },
      {
        title: "Movie List App",
        description: "Design & Development",
        imgUrl: movielist,
        github: " https://github.com/Emprcode/movie-list-app",
        live: " https://emprcode.github.io/movie-list-app/",
      },
      {
        title: "Contact List App",
        description: "Design & Development",
        imgUrl: contact,
        github: " https://github.com/Emprcode/contact-list",
        live: "https://emprcode.github.io/contact-list/",
      },
      {
        title: "The prank calculator",
        description: "Design & Development",
        imgUrl: calc,
        github: " https://github.com/Emprcode/Prank-calculator-app",
        live: "https://emprcode.github.io/Prank-calculator-app/",
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
