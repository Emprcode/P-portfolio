import React from 'react'
import "animate.css";
import { Row, Tab } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard';
import nextblog from "../../assets/nextblog.png";
// import calc from "../../assets/calc.png";
import contact from "../../assets/contact-list.png";
import movielist from "../../assets/movielist.png";
import boringCompany from "../../assets/boring-company.png";
import uber from "../../assets/uber.png";
import tesla from "../../assets/tesla.png";
// import counter from '../../assets/counter.png'
import carhub from "../../assets/carhub.png";

export const Websites = () => {
    const projects = [
      {
        title: "Car-Hub",
        description: "Your portal to elite automobiles, where you discover and admire world-class cars and their stories.",
        imgUrl: carhub,
        github: "https://github.com/Emprcode/car-hub-nextjs",
        live: "https://carhub-lilac.vercel.app/",
      },
      {
        title: "Uber UI Clone",
        description: "Design & Development",
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
        title: "Tesla UI Clone",
        description: "Design & Development",
        imgUrl: tesla,
        github: "https://github.com/Emprcode/Tesla-Clone",
        live: "https://tesla-clone-emprcode.vercel.app/",
      },
      {
        title: "The Boring Company UI Clone",
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
      
      // {
      //   title: "The prank calculator",
      //   description: "Design & Development",
      //   imgUrl: calc,
      //   github: " https://github.com/Emprcode/Prank-calculator-app",
      //   live: "https://emprcode.github.io/Prank-calculator-app/",
      // },
      // {
      //   title: "Counter App",
      //   description: "Design & Development",
      //   imgUrl: counter,
      //   github: "https://github.com/Emprcode/counter-js-project",
      //   live: "https://counter-js-project-drab.vercel.app/",
      // },
    
  
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
