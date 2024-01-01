import html from "../Assets/images/html-5.png";
import css from "../Assets/images/css-3.png";
import js from "../Assets/images/js.png";
import scss from "../Assets/images/sass.png";
import react from "../Assets/images/react.png";
import tw from "../Assets/images/tailwind-css-icon.png";
import next from "../Assets/images/next-logo.png";
import firebase from "../Assets/images/firebase.png";
import github from "../Assets/images/github.png";
import git from "../Assets/images/git.png";
import figma from "../Assets/images/figma.png";
import weatherApp from "../Assets/images/weatherApp.png"
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";



export const projectDetails = [
  {
    id: 1,
    imgUrl: weatherApp,
    about: "Explore weather with my app—humidity, wind speed, astronomy, air quality, and more. Get detailed insights for your location effortlessly",
    href: "https://weather-app-smoky-gamma-35.vercel.app/",
    github: "https://github.com/DannyUzo/Weather-App",
    framework: "React App & Css",
    name: "Weather App",
  },
  {
    id: 2,
    about: "Search and explore a diverse collection of captivating images to enhance your creative projects.",
    href: "https://gallery-task3.vercel.app/",
    github: "https://github.com/DannyUzo/GalleryTask3",
    framework: "React & Firebase",
    name: "Image Gallery",
  },
  {
    id: 3,
    about: "Savor the flavors at my restaurant site. Explore our menu, ambiance, and events. A culinary experience awaits",
    href: "https://resturantsite.vercel.app/",
    github: "https://github.com/DannyUzo/DannyUzo.github.io",
    framework: "HTML, CSS & JS",
    name: "Restaurant Landing Page",
  },
  {
    id: 4,
    about: "Organize tasks effortlessly with my todo app. Edit tasks, delete tasks, and stay on top of your daily agenda with simplicity and ease",
    href: "https://todo-app-danny.vercel.app/",
    github: "https://github.com/DannyUzo/TodoApp",
    framework: "React, Vanilla Js & Sass",
    name: "To-do App",
  },
  {
    id: 5,
    about: "Build Bridge is a startup that deals in software Products. I designed the landing with next.js and framer motion",
    href: "https://buildbridge-res.vercel.app/",
    github: "https://github.com/DannyUzo/buildbridge",
    framework: "Next.js & Framer motion",
    name: "Build Bridge",
  },
];

export const collabProjects = [
  { 
    id:1, 
    about: "Glory center community church",
    href: "https://main--stupendous-creponne-4862ca.netlify.app/",
    name: "GCCC",
   },
   {
    id:2,
    about: "This is a movie search engine with user authenticaion. I developed the frontend while consuming the data from an api endpoint",
    href: "https://dapm.vercel.app/",
    name: "DAPM"
   }
]

export const Skills = [
  { id: 1, imgUrl: html, label: "Html" },
  { id: 2, imgUrl: css, label: "Css" },
  { id: 3, imgUrl: js, label: "Javascript" },
  { id: 4, imgUrl: scss, label: "scss" },
  { id: 5, imgUrl: react, label: "ReactJs" },
  { id: 6, imgUrl: tw, label: "Tailwind" },
  { id: 7, imgUrl: next, label: "NextJs" },
  { id: 8, imgUrl: git, label: "Git"},
  { id: 9, imgUrl: firebase, label: "Firebase" },
  { id: 10, imgUrl: github, label: "Github" },
  { id: 11, imgUrl: figma, label: "Figma"}
];

export const ContactInfo = [
  {
    id:1,
    href: "https://linkedin.com/in/daniel-uzodinma-6ba3b7293",
    icon: <FaLinkedin />,
  },
  {
    id:2,
    href: "https://github.com/DannyUzo",
    icon: <FaGithub />,
  },
  {
    id:3,
    href: "mailto:uzodinmadaniel42@gmail",
    icon:  <CiMail />,
  },
  {
    id:4,
    href: "https://wa.me/+2348079328196",
    icon: <FaWhatsapp />,
  },
  {
    id:5,
    href: "tel:+2348079328196",
    icon: <IoCallOutline />
  }
]