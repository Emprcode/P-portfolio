import React from "react";
import "animate.css";
import { Row, Tab } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import eCom from "../../assets/eCom.png";
import adminCms from "../../assets/adminCms.png";
import contact from "../../assets/contact-list.png";
import library from "../../assets/librarymgmt.png";
import finance from "../../assets/finance.png";
import movielist from "../../assets/movielist.png";
import notodolist from "../../assets/notodolist.png";
import nextblog from "../../assets/nextblog.png";
import boringCompany from "../../assets/boring-company.png";
import tesla from "../../assets/tesla.png";
import uber from "../../assets/uber.png";
import carhub from "../../assets/carhub.png";

export const Everything = () => {
  const projects = [
    {
      title: "Admin CMS",
      description: "full stack Content Management System for Admin of the aceXsports",
      imgUrl: adminCms,
      github: "https://github.com/Emprcode/E-commerce_api_admin",
      live: "https://github.com/Emprcode/E-commerce-adminCMS-client",
    },
    {
      title: "aceXsports",
      description: "full stack e-commerce project, space for wide range of sports and street wares.",
      imgUrl: eCom,
      github: "https://github.com/Emprcode/E-commerce-store-client",
      live: "http://my-ecom-store.s3-website-us-east-1.amazonaws.com/",
    },
    {
      title: "Car-Hub",
      description: "Your portal to elite automobiles, where you discover and admire world-class cars and their stories.",
      imgUrl: carhub,
      github: "https://github.com/Emprcode/car-hub-nextjs",
      live: "https://carhub-lilac.vercel.app/",
    },
    {
      title: "Uber UI Clone",
      description: "Develop and Deployment",
      imgUrl: uber,
      github: "https://github.com/Emprcode/Uber-clone",
      live: "https://uber-clone-five-roan.vercel.app/",
    },
    {
      title: "Emprocode Blog",
      description: "Built and deployed a modern blog using Next.js, Typescript, Tailwind.css, and Sanity.io",
      imgUrl: nextblog,
      github: "https://github.com/Emprcode/nextjs-blog-app",
      live: "https://nextjs-blog-app-khaki.vercel.app/",
    },
    {
      title: "Library Management System",
      description: "automates library operations, and retrieval, making it easier for users to find and access resources. ",
      imgUrl: library,
      github: "https://github.com/Emprcode/client-Library-management",
      live: "https://library-mgmt-client.vercel.app/",
    },
    {
      title: "Finance Tracker App",
      description: "help individuals or businesses manage expenses, income, budgets, and investments efficiently, providing insights into financial health.",
      imgUrl: finance,
      github: "https://github.com/Emprcode/ft-v2-api.git",
      live: "https://dark-puce-pangolin-fez.cyclic.app",
    },
    {
      title: "Tesla UI Clone",
      description: "Develop and Deployment",
      imgUrl: tesla,
      github: "https://github.com/Emprcode/Tesla-Clone",
      live: "https://tesla-clone-rho-three.vercel.app/",
    },
    {
      title: "The Boring Company UI Clone",
      description: "Develop and Deployment",
      imgUrl: boringCompany,
      github: "https://github.com/Emprcode/Boring-Company-Clone",
      live: "https://boring-company-clone.vercel.app/",
    },
   
    {
      title: "Not-To-Do List App",
      description: "helps users prioritize tasks by specifying what not to do, and provides reminders for avoidance",
      imgUrl: notodolist,
      github: " https://github.com/Emprcode/To-do-list",
      live: "https://to-do-list-psi-flax.vercel.app/",
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
