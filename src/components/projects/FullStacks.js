import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import ecom from "../../assets/e-com.png";
import library from "../../assets/library.png";
import expenses from "../../assets/expenses.png";
import movielist from "../../assets/movielist.png";
import notodolist from "../../assets/notodolist.png";

export const FullStacks = () => {
  const projects = [
    {
      title: "E-Commerce project",
      description: "Develop and Deployment",
      imgUrl: ecom,
    },

    {
      title: "Library Management System",
      description: "Design & Development",
      imgUrl: library,
    },
    {
      title: "Expenses Tracker App",
      description: "Design & Development",
      imgUrl: expenses,
    },
    {
      title: "Not-To-Do List App",
      description: "Design & Development",
      imgUrl: notodolist,
    },
    {
      title: "Movie List App",
      description: "Design & Development",
      imgUrl: movielist,
    },
  
]
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
