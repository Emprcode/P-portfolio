import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import ecom from "../../assets/e-com.png";
import library from "../../assets/library.png";
import expenses from "../../assets/expenses.png";
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
      title: "Expenses Tracker App",
      description: "Design & Development",
      imgUrl: expenses,
      github: "https://github.com/Emprcode/Self-time-management",
      live: "",
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
