import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import ecom from "../../assets/e-com.png";
import contact from "../../assets/contact-list.png";
import library from "../../assets/library.png";
import expenses from "../../assets/expenses.png";
import movielist from "../../assets/movielist.png";
import notodolist from "../../assets/notodolist.png";
import calc from "../../assets/calc.png";
import portfolio from "../../assets/portfolio.png";

export const Everything = () => {
    const projects = [
        {
          title: "E-Commerce project",
          description: "In development",
          imgUrl: ecom,
        },
        {
          title: "Portfolio",
          description: "Develop and Deployment",
          imgUrl: portfolio,
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
    <Tab.Pane eventKey="first">
    <Row className="">
      {projects.map((project, i) => {
        return <ProjectCard key={i} {...project} />;
      })}
    </Row>
  </Tab.Pane>
  )
}
