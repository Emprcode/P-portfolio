import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import portfolio from "../../assets/portfolio.png";
import calc from "../../assets/calc.png";
import contact from "../../assets/contact-list.png";
import movielist from "../../assets/movielist.png";
import boringCompany from "../../assets/boring-company.png";
import tesla from "../../assets/tesla.png";
import counter from '../../assets/counter.png'

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
        title: "Tesla Clone",
        description: "Design & Development",
        imgUrl: tesla,
        github: "https://github.com/Emprcode/Tesla-Clone",
        live: "https://tesla-clone-emprcode.vercel.app/",
      },
      {
        title: "The Boring Company Clone",
        description: "Design & Development",
        imgUrl: boringCompany,
        github: "https://github.com/Emprcode/Boring-Company-Clone",
        live: "https://boring-company-clone.vercel.app/",
      },
    
      {
        title: "Movie List App",
        description: "Design & Development",
        imgUrl: movielist,
        github: " https://github.com/Emprcode/movie-list-app",
        live: "https://react-movie-list-kappa.vercel.app/",
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
      {
        title: "Counter App",
        description: "Design & Development",
        imgUrl: counter,
        github: "https://github.com/Emprcode/counter-js-project",
        live: "https://counter-js-project-drab.vercel.app/",
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
