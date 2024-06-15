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
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";



export const projectDetails = [
  {
    id: 1,
    href: "https://weather-vistaa.vercel.app/",
    github: "https://github.com/DannyUzo/Weather-App",
    framework: "ReactJs & Css",
    name: "Weather Vista",
  },
  {
    id: 2,
    href: "https://image-go.vercel.app/",
    github: "https://github.com/DannyUzo/GalleryTask3",
    framework: "ReactJs & Unsplash api",
    name: "ImageGo",
  },
  {
    id: 3,
    href: "https://nikepage-five.vercel.app/",
    github: "https://github.com/DannyUzo/Nike",
    framework: "NextJs & Tailwind",
    name: "Nike-landing Page"
  },
  {
    id: 4,
    href: "https://chrome-extension-sand.vercel.app/",
    github: "https://github.com/DannyUzo/ChromeExtension",
    framework: "ReactJs",
    name: "Recording Tool"
  }
];


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