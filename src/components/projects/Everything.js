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
          github:"https://github.com/Emprcode/E-commerce_api_admin",
          live:"/build"
        },
        {
          title: "Portfolio",
          description: "Develop and Deployment",
          imgUrl: portfolio,
          github:"https://github.com/Emprcode/P-portfolio",
          live:""
        },
    
        {
          title: "Library Management System",
          description: "Design & Development",
          imgUrl: library,
          github:"https://github.com/Emprcode/client-Library-management",
          live:""
        },
        {
          title: "Expenses Tracker App",
          description: "Design & Development",
          imgUrl: expenses,
          github:"https://github.com/Emprcode/Self-time-management",
          live:""
        },
        {
          title: "Not-To-Do List App",
          description: "Design & Development",
          imgUrl: notodolist,
          github:" https://github.com/Emprcode/node-API-ntdl",
          live:""
        },
        {
          title: "Movie List App",
          description: "Design & Development",
          imgUrl: movielist,
          github:" https://github.com/Emprcode/movie-list-app",
          live:" https://emprcode.github.io/movie-list-app/"
        },
        {
          title: "Contact List App",
          description: "Design & Development",
          imgUrl: contact,
          github:" https://github.com/Emprcode/contact-list",
          live:"https://emprcode.github.io/contact-list/"
        },
        {
          title: "The prank calculator",
          description: "Design & Development",
          imgUrl: calc,
          github:" https://github.com/Emprcode/Prank-calculator-app",
          live:"https://emprcode.github.io/Prank-calculator-app/"
        },
        {
          title: "The Counter App",
          description: "Design & Development",
          imgUrl: calc,
          github:" https://github.com/Emprcode/React-counter-app",
          live:"https://emprcode.github.io/Prank-calculator-app/"
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
