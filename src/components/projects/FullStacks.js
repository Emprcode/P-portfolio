import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import ecom from "../../assets/e-com.png";
import library from "../../assets/library.png";
import finance from "../../assets/finance.png";
import notodolist from "../../assets/notodolist.png";

export const FullStacks = () => {
  const projects = [
    {
      title: "E-Commerce project",
      description: "In development",
      imgUrl: ecom,
      github: "https://github.com/Emprcode/E-commerce_api_admin",
      live: "",
    },
  

    {
      title: "Library Management System",
      description: "Design & Development",
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
      title: "Not-To-Do List App",
      description: "Design & Development",
      imgUrl: notodolist,
      github: " https://github.com/Emprcode/node-API-ntdl",
      live: "",
    },

  
  
  ];
  return (
    <Tab.Pane eventKey="second">
    <Row className="">
      {projects.map((project, i) => {
        return <ProjectCard key={i} {...project} />;
      })}
    </Row>
  </Tab.Pane>
  )
}
