import react from "./assets/react.png";
import mongodb from "./assets/mongodb.png";
import redux from "./assets/redux.png";
import node from "./assets/node.png";
import api from "./assets/fastapi-1.svg";
import python from "./assets/python.png";
import html from "./assets/html.png";
import bootstrap from "./assets/bootstrap.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import movie from "./assets/movie.png";
import coffee from "./assets/coffee.png";
import food from "./assets/food.png";
import curd from "./assets/crud.png";
import outdoor from "./assets/outdoor.png";
import { SiNetlify } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Certifications",
    path: "ceriti",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const skills = [
  {
    id: 1,
    img: react,
    title: "React.js",
    description:
      "Create dynamic user interfaces, component lifecycle management and hooks.",
  },
  {
    id: 2,
    img: redux,
    title: "Redux",
    description:
      "Emphasize your experience with state management, middleware, and integrating Redux with React project.",
  },
  {
    id: 3,
    img: html,
    title: "HTML5, CSS3 & JavaScript",
    description:
      "I possess expertise in HTML5, CSS3, and JavaScript, effectively applied to enhance my web projects.",
  },
  {
    id: 4,
    img: api,
    title: "FastAPI",
    description:
      "I built high-performance APIs with FastAPI, leveraging its speed and efficiency.",
  },
  {
    id: 5,
    img: bootstrap,
    title: "Bootstrap & Tailwind",
    description:
      "Create responsive, mobile-first websites using Bootstrap & Tailwind CSS.",
  },
  {
    id: 6,
    img: node,
    title: "Express.js & Node.js",
    description:
      "I built high-performance APIs with Express.js & Node.js , leveraging its speed and efficiency.",
  },
  {
    id: 7,
    img: mongodb,
    title: "MongoDB",
    description:
      "Leveraging MongoDB's flexibility, I build many detebase models using its MongoDB capabilities.",
  },
  {
    id: 8,
    img: python,
    title: "Python",
    description:
      "I utilize Python for various projects and find it incredibly versatile and efficient.",
  },
];

export const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/priyanka-yadav-7025a9214",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/priyankayadavyy",
  },
  {
    icon: <FaRegEnvelope />,
    path: "https://mail.google.com/mail/u/0/?fs=1&to=priyankayadavyy01@gmail.com&tf=cm",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/priyankayadav_psy_174/",
  },
];

export const project = [
  {
    img: movie,
    title: "MOVIE SEARCH APP",
    category: "Full-stack Developer",
    description:
      "Developed a React-based web application utilizing the TMDB API to provide users with a comprehensive movie search and information platform.Implemented real-time search functionality and details of display movie. ",
    path: "https://movie-search-app-git-f-288e92-priyanka-yadavs-projects-b8c5f326.vercel.app/ ",
  },
  {
    img: coffee,
    title: "COFFERO",
    category: "Front-end Developer",
    description:
      "Developed a dynamic web application using React.js to connect coffee lovers and provide resources such as menu, features, chefs etc.",
    path: "https://cofferopsy.netlify.app/",
  },
  {
    img: food,
    title: "FOOD WEBSITE",
    category: "Front-end Developer",
    description:
      "Just like a zomato app where user can find there favourite food and order them.",
    path: "https://foodpsy.netlify.app/",
  },
  {
    img: outdoor,
    title: "OUTDOOR TRAVEL",
    category: "Front-end Developer",
    description:
      "Create a dynamic and responsive user interface where user can explore there favourite place.",
    path: "https://outdoorpps.netlify.app/",
  },
  {
    img: curd,
    title: "CURD APP",
    category: "Full-stack Developer",
    description:
      "Developed a web application using React.js, Node.js to help users manage and track curd recipes and fermentation processes.",
    path: "https://crud-appflame-omega.vercel.app/",
  },
];
