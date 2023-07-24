import React from "react";
import "animate.css";
import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import ecom from "../../assets/e-com.png";
import contact from "../../assets/contact-list.png";
import library from "../../assets/library.png";
import finance from "../../assets/finance.png";
import movielist from "../../assets/movielist.png";
import notodolist from "../../assets/notodolist.png";
// import calc from "../../assets/calc.png";
import portfolio from "../../assets/portfolio.png";
import boringCompany from "../../assets/boring-company.png";
import tesla from "../../assets/tesla.png";
import uber from "../../assets/uber.png";
// import counter from '../../assets/counter.png'

export const Everything = () => {
  const projects = [
    {
      title: "E-Commerce project",
      description: "In development",
      imgUrl: ecom,
      github: "https://github.com/Emprcode/E-commerce_api_admin",
      live: "",
    },
    {
      title: "Portfolio",
      description: "Develop and Deployment",
      imgUrl: portfolio,
      github: "https://github.com/Emprcode/P-portfolio",
      live: "https://www.narayanaryal.com/",
    },
    {
      title: "Uber UI Clone",
      description: "Develop and Deployment",
      imgUrl: uber,
      github: "https://github.com/Emprcode/Uber-clone",
      live: "https://uber-clone-five-roan.vercel.app/",
    },
    {
      title: "Library Management System",
      description: "Develop and Deployment",
      imgUrl: library,
      github: "https://github.com/Emprcode/client-Library-management",
      live: "",
    },
    {
      title: "Finance Tracker App",
      description: "Develop and Deployment",
      imgUrl: finance,
      github: "https://github.com/Emprcode/ft-v2-api.git",
      live: "https://dark-puce-pangolin-fez.cyclic.app",
    },
    {
      title: "Tesla Clone",
      description: "Develop and Deployment",
      imgUrl: tesla,
      github: "https://github.com/Emprcode/Tesla-Clone",
      live: "https://tesla-clone-rho-three.vercel.app/",
    },
    {
      title: "The Boring Company Clone",
      description: "Develop and Deployment",
      imgUrl: boringCompany,
      github: "https://github.com/Emprcode/Boring-Company-Clone",
      live: "https://boring-company-clone.vercel.app/",
    },
   
    {
      title: "Not-To-Do List App",
      description: "Design & Development",
      imgUrl: notodolist,
      github: " https://github.com/Emprcode/node-API-ntdl",
      live: "",
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
    // {
    //   title: "Counter App",
    //   description: "Design & Development",
    //   imgUrl: counter,
    //   github: "https://github.com/Emprcode/counter-js-project",
    //   live: "https://counter-js-project-drab.vercel.app/",
    // },
    // {
    //   title: "The prank calculator",
    //   description: "Design & Development",
    //   imgUrl: calc,
    //   github: " https://github.com/Emprcode/Prank-calculator-app",
    //   live: "https://emprcode.github.io/Prank-calculator-app/",
    // },
  ];
  return (
    <Tab.Pane eventKey="first">
      <Row className="">
        {projects.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </Row>
    </Tab.Pane>
  );
};
