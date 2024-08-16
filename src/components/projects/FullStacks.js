import React from "react";
import "animate.css";
import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import adminCms from "../../assets/adminCms.png";
import acexsport from "../../assets/acexsport.png";
import library from "../../assets/librarymgmt.png";
import finance from "../../assets/finance.png";
import notodolist from "../../assets/notodolist.png";

export const FullStacks = () => {
  const projects = [
    {
      title: "Admin CMS",
      description:
        "full stack Content Management System for Admin of the aceXsports",
      imgUrl: adminCms,
      github: "https://github.com/Emprcode/E-commerce_api_admin",
      live: "https://admincms-acexsports.vercel.app/",
    },
    {
      title: "aceXsports",
      description:
        "full stack e-commerce project, space for wide range of football kits.",
      imgUrl: acexsport,
      github: "https://github.com/Emprcode/E-commerce-store-client",
      live: "https://acexsports.vercel.app/",
    },

    {
      title: "Library Management",
      description:
        "automates library operations, and retrieval, making it easier for users to find and access resources. ",
      imgUrl: library,
      github: "https://github.com/Emprcode/LM_client_v2",
      live: "https://user-librarymgmt.vercel.app/",
    },
    {
      title: "BudgetBuddy",
      description:
        "help individuals or businesses manage expenses, income, budgets, and investments efficiently, providing insights into financial health.",
      imgUrl: finance,
      github: "https://github.com/Emprcode/ft-v2-api.git",
      live: "https://budgetbuddyfinance.vercel.app/",
    },
    {
      title: "Not-To-Do List App",
      description:
        "helps users prioritize tasks by specifying what not to do, and provides reminders for avoidance",
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
  );
};
