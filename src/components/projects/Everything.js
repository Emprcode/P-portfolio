import React from "react";
import "animate.css";
import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import ecom from "../../assets/e-com.png";
import contact from "../../assets/contact-list.png";
import library from "../../assets/library.png";
import expenses from "../../assets/expenses.png";
import movielist from "../../assets/movielist.png";
import notodolist from "../../assets/notodolist.png";
import calc from "../../assets/calc.png";
import portfolio from "../../assets/portfolio.png";
import boringCompany from "../../assets/boring-company.png";
import tesla from "../../assets/tesla.png";
import counter from '../../assets/counter.png'

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
      title: "Counter App",
      description: "Design & Development",
      imgUrl: counter,
      github: "https://github.com/Emprcode/counter-js-project",
      live: "https://counter-js-project-drab.vercel.app/",
    },
    {
      title: "The prank calculator",
      description: "Design & Development",
      imgUrl: calc,
      github: " https://github.com/Emprcode/Prank-calculator-app",
      live: "https://emprcode.github.io/Prank-calculator-app/",
    },
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
