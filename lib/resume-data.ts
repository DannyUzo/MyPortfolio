import XplicMode from "@/public/images/image.png"
import Zuri from "@/public/images/zuriLogo.jpeg"
import Nutec from "@/public/images/nutec.jpg"
import Nuesa from "@/public/images/nuesa.png"
import Zendfi from "@/public/images/zendfi.png"


export const resumeData = {
  personalInfo: {
    name: "UZODINMA DANIEL",
    title: "FRONTEND ENGINEER",
    email: "uzodinmadaniel42@gmail.com",
    phone: "08079328196",
    location: "Abeokuta, Ogun state.",
    portfolio: "dannyuzo.vercel.app",
    socialMedia: {
      linkedin: "Daniel Uzodinma",
      github: "DannyUzo",
    },
  },
  profile:
    "I'm a frontend engineer passionate about turning complex ideas into clean, responsive, and user-friendly web experiences. With a strong grasp of modern frontend technologies, I build scalable, fast, and functional web applications. Beyond just writing code, I think in terms of product value, focusing on user experience, performance, and maintainability. From integrating real-time features to handling tricky bugs or auth flows, I bring problem-solving and attention to detail. I'm constantly learning, and I love collaborating to ship features that make users happy and businesses grow.",
  professionalExperience: [
    {
      company: "ZendFi",
      image: Zendfi,
      position: "Software Engineer",
      duration: "11/2025 - Present",
      location: "Lagos, Nigeria",
      description:
        "At ZendFi, I work across product development, SDKs, and production UI/UX updates—conducting user pain-point research to improve product experience and drive impact. I build and optimise scalable interfaces using Next.js, TypeScript, and Tailwind CSS; and implement client-side queries, payment gateways, onboarding flows, state management (Context API, Redux), Axios token handling, order and service management, real-time messaging, and role-based authentication.",
      desc: "Worked across product development, SDKs, production UI/UX updates, and user research to improve product experience and ship scalable frontend features.",
    },
    {
      company: "XplicitMode",
      image: XplicMode,
      position: "Frontend Engineer",
      duration: "11/2024 – 09/2025",
      location: "Abuja, Nigeria",
      description:
        "At XplicitMode, I optimise and maintain fast, scalable, and smooth user interfaces using modern technologies such as Next.js, TypeScript, and Tailwind CSS. I work on client-side queries, payment gateways, user onboarding, and other major user experiences across platforms like AFRUNA (e-commerce) and a freelance service platform, implementing features such as state management with context api and redux, Axios token handling, order management, service listings, real-time messaging, and role-based authentication.",
      desc: "At XplicitMode, I optimise and maintain client-side queries, payment gateways, user onboarding, and other major user interfaces and experiences.",
    },
    {
      company: "Nuesa Funaab",
      image: Nuesa,
      position: "Lead Frontend Engineer & System Architect",
      duration: "07/2025 (contract)",
      location: "Abeokuta, Nigeria",
      description:
        "As Lead Frontend Engineer and System Architect, I spearheaded the development of NUESA-FUNAAB’s digital platform, transitioning the association’s operations online. I architected the overall system design and led the frontend team in building core features including: a dynamic blog, events management, an e-library, dues payment integration, member dashboards, and an admin control center. I was responsible for designing intuitive user workflows, optimizing data structures for scalability, and ensuring seamless integration across modules. My leadership improved project delivery speed by 70%, reduced frontend bugs during deployment by 40%, and directly enabled over 1,000+ students to access academic resources, pay dues, and engage with events digitally for the first time.",
      desc: "Led the frontend engineering and system design, delivering key features like blog, events, e-library, payment gateways, user/admin dashboards. Empowering 1,000+ students to engage with the platform online."
    },
  ],
  internships: [
    {
      company: "NUTEC-FUNAAB",
      image: Nutec,
      position: "Frontend Engineering Intern",
      duration: "2024",
      location: "Abeokuta, Nigeria",
      description:
        "Assisted senior developers with frontend development tasks while gaining hands-on experience with JavaScript, TypeScript, Tailwind CSS, and modern frontend frameworks like React and Next.js. Actively contributed in team meetings, shared ideas to improve workflows, and participated in real project cycles. During the internship, I took up a tutor role, where I trained and mentored fellow students in frontend engineering, helping them grasp key concepts and apply best practices in real-world projects.",
      desc: "Assisted senior developers with frontend development tasks while gaining hands-on experience with JavaScript, TypeScript, Tailwind CSS and then took up a tutor role for the community",
    },
    {
      company: "Zuri Internship(HNGx)",
      image: Zuri,
      position: "Frontend Engineering Intern",
      duration: "2023",
      location: "Remote, Nigeria",
      description:
        "I built a lightweight video recording tool, a responsive movie listing site, and an image gallery with download features among other projects; all styled using HTML, CSS, React, and Next.js to ensure smooth and user-friendly experiences. I collaborated closely with mentors, project managers, backend engineers and team members, refined UI interactions, optimized asset loading, and ensured cross-browser compatibility while delivering these projects on schedule.",
      desc: "I built fast and scalable user interfaces, collaborated with teams, and met deadlines in a fast-paced environment.",
    },
  ],
  skills: {
    languagesAndFrameworks: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJs", "NextJs"],
    stateAndData: ["Zustand", "React Redux", "React Query", "React Context API"],
    softSkills: ["Team collaboration", "Good Communication skills", "Attention to Detail", "Continuous learning"],
    stylingTools: ["TailwindCSS", "SCSS"],
    toolsAndPlatforms: ["Git", "Firebase", "Framer-motion", "Shadcn/ui"],
  },
  projects: [
    {
      name: "FileDrift",
      technologies: ["Next.js", "TypeScript", "Serverless Functions", "ShadCn"],
      description: "A device agnostic file sharing tool that works anywhere for multiple users at a time.",
      link: "https://file-drift.vercel.app",
      github: "https://github.com/DannyUzo/FileDrift"
    },
    {
      name: "DevTalk",
      technologies: ["Next.js", "TypeScript", "Firebase", "Zustand", "ShadCn"],
      description:
        "A full-stack developer blogging platform with authentication, post editing, post sharing, and image support.",
      link: "https://dev-talk-5ge3.vercel.app/",
      github: "https://github.com/DannyUzo/DevTalk",
    },
    {
      name: "Object Detection",
      technologies: ["TypeScript", "NextJs", "Flask", "Yolov5"],
      description:
        "A Real-time web app for object detection, recognition, and labelling integrated with browser webcam.",
      github: "https://github.com/DannyUzo/yolov5-web-app",
      link: ""
    },
    {
      name: "Jotion",
      technologies: ["TypeScript", "NextJs", "ShadCn", "Zustand", "Clerk", "Convex DB"],
      description: "A minimal notion clone.",
      link: "https://jotion-kappa.vercel.app/",
      github: "https://github.com/DannyUzo/Jotion",
    },
    {
      name: "ImageGo",
      technologies: ["ReactJs", "Unsplash API"],
      description: "Responsive image gallery application with image download.",
      link: "https://image-go.vercel.app/",
      github: "https://github.com/DannyUzo/GalleryTask3",
    },
    {
      name: "WeatherVista",
      technologies: ["ReactJs/Vite", "Weather API"],
      description:
        "Realtime weather updates all around the world with forecast, with details weather updates such as air quality, wind speed, humility, longitude & latitude and astronomical data.",
      link: "https://weather-vistaa.vercel.app/",
      github: "https://github.com/DannyUzo/GalleryTask3",
    },
  ],
  certificates: [
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
    },
    {
      name: "Search Engine Optimization with SquareSpace",
      issuer: "Coursera Project Network",
    },
  ],
  education: [
    {
      degree: "Mechatronics Engineering",
      institution: "Federal University of Agriculture Abeokuta",
      duration: "12/2023 – present",
      location: "Abeokuta, Nigeria",
    },
  ],
}
