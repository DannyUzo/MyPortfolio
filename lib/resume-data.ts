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
    // {
    //   company: "ZendFi",
    //   image: Zendfi,
    //   position: "Software Engineer",
    //   duration: "11/2025 - Present",
    //   location: "Lagos, Nigeria",
    //   description:
    //     "At ZendFi, I work across product development, SDKs, and production UI/UX updates—conducting user pain-point research to improve product experience and drive impact. I build and optimise scalable interfaces using Next.js, TypeScript, and Tailwind CSS; and implement client-side queries, payment gateways, onboarding flows, state management (Context API, Redux), Axios token handling, order and service management, real-time messaging, and role-based authentication.",
    //   desc: "Worked across product development, SDKs, production UI/UX updates, and user research to improve product experience and ship scalable frontend features.",
    // },
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
    languagesAndFrameworks: ["HTML/CSS3", "JavaScript", "TypeScript", "ReactJs", "NextJs", "VueJs"],
    stateAndData: ["Zustand", "React Redux", "React Query", "React Context API", "Axois/ Fetch API"],
    softSkills: ["Team collaboration", "Good Communication skills", "Attention to Detail", "Continuous learning"],
    stylingTools: ["TailwindCSS", "SCSS"],
    toolsAndPlatforms: ["Git", "Firebase & Convex (BaaS)", "Shadcn/ui & Radix UI", "Vercel", "Framer Motion & GSAP (Animations)", "Postman(API Testing)", "Figma (UI Design)"
    ],
    mlTools: ["Python", "CNNs", "LangChain/LlamaIndex", "RAG", "FAISS", "Google Colab ", "Jupyter Notebooks", "NumPy/Pandas"],
    roboticTools: ["Arduino", "ESP32", "Embedded C/C++", "Arduino IDE", "Sensor Integration", "Wireless Protocols", "Circuit Prototyping & Schematics", "Actuators"
    ],
  },
  projects: [
    {
      name: "FileDrift",
      technologies: ["Next.js", "TypeScript", "Serverless Functions", "ShadCn"],
      description: "A device agnostic file sharing tool that works anywhere for multiple users at a time.",
      link: "https://file-drift.vercel.app",
      github: "https://github.com/DannyUzo/FileDrift",
      tags: ["Core"]
    },
    {
      name: "DevTalk",
      technologies: ["Next.js", "TypeScript", "Firebase", "Zustand", "ShadCn"],
      description:
        "A full-stack developer blogging platform with authentication, post editing, post sharing, and image support.",
      link: "https://dev-talk-5ge3.vercel.app/",
      github: "https://github.com/DannyUzo/DevTalk",
      tags: ["Fullstack"]
    },
    {
      name: "Aytee",
      technologies: ["TypeScript", "NextJs", "ThreeJs"],
      description:
        "Hightly animated portfolio website for a video editor. Experience the seamless blend of creativity and technology.",
      github: "https://github.com/DannyUzo/aytee",
      link: "https://aytee.vercel.app/",
      tags: ["3D Animations"],
    },
    {
      name: "Jotion",
      technologies: ["TypeScript", "NextJs", "ShadCn", "Zustand", "Clerk", "Convex DB"],
      description: "A minimal notion clone.",
      link: "https://jotion-kappa.vercel.app/",
      github: "https://github.com/DannyUzo/Jotion",
      tags: ["Fullstack"]
    },
    {
      name: "Sweet Foundry",
      technologies: ["NextJs", "TailwindCSS", "Gsap", "Framer-motion"],
      description: "Responsive image gallery application with image download.",
      link: "https://sweet-foundry.vercel.app/",
      github: "https://github.com/DannyUzo/sweet-foundry",
      tags: ["GSAP Animations"]
    },
    // {
    //   name: "ImageGo",
    //   technologies: ["ReactJs", "Unsplash API"],
    //   description: "Responsive image gallery application with image download.",
    //   link: "https://image-go.vercel.app/",
    //   github: "https://github.com/DannyUzo/GalleryTask3",
    // },
    // {
    //   name: "WeatherVista",
    //   technologies: ["ReactJs/Vite", "Weather API"],
    //   description:
    //     "Realtime weather updates all around the world with forecast, with details weather updates such as air quality, wind speed, humility, longitude & latitude and astronomical data.",
    //   link: "https://weather-vistaa.vercel.app/",
    //   github: "https://github.com/DannyUzo/GalleryTask3",
    // },
  ],
  hardwareProjects: [
    {
      title: "Smart Home Energy Management System (Course Work)",
      description: "A multi-branch energy monitoring and control system that tracks real-time power consumption, enforces energy budgets, and responds automatically to human presence.",
      image: "",
      stack: ["C++", "Embedded C/C++", "Arduino IDE"],
      link: "",
      github: "https://github.com/DannyUzo/LineFollower",
      components: ["PZEM-004T v3.0", "Relay Module", "ILI9341 TFT Display", "4×4 Matrix Keypad", "PIR Motion Sensor", "mmWave Radar Sensor", "EEPROM"],
      microcontrollers: ["Arduino Mega 2560"],
      firmwareStack: ["C++", "PZEM004Tv30", "Adafruit ILI9341", "Keypad", "SoftwareSerial"],
      firmwareSlug: "smart-home-energy-management",
    },
    {
      title: "Fire Suppressor System",
      description: "A fire suppression system that detects fire and suppresses it using a water pump and then alerts the user.",
      image: "",
      stack: ["C++", "ESP8266", "IoT", ""],
      link: "",
      github: "https://github.com/DannyUzo/IoT-Weather",
      components: ["Fire Sensor", "Temperature Sensor (DHT11)", "Smoke Sensor (MQ-2)", "Relay Module", "Water Pump", "Indicator Lights"],
      microcontrollers: ["ESP8266"],
      firmwareStack: ["C++", "Arduino IoT Cloud"],
      firmwareSlug: "fire-suppressor-system",
    }
  ],
  aiProjects: [
    {
      title: "Building RAG Agents with LLMs",
      description: "This project involved building a RAG system using LangChain and FAISS to answer questions about a given context using LLM as a judge.",
      stack: ["Python", "LangChain", "FAISS", "Gradio", "Nvidia Models"],
      link: "",
      github: "https://github.com/DannyUzo/Building-RAG-Agents-with-LLMs",
      modelType: "RAG",
      researchInterests: ["RAG", "LLMs", "Embeddings", "Chunking", "FAISS"]
    },
    {
      title: "Fundamentals of Deep Learning",
      description: "This project involved building, training, and fine-tuning a Convolutional Neural Network (CNN) to classify images of fruit as either fresh or rotten.",
      stack: ["Python", "Kaggle", "TorchVision", "CNNs", "Data Augmentation", "Model Fine-tuning"],
      link: "",
      github: "https://github.com/DannyUzo/Fundamentals-of-DeepLearning",
      modelType: "CNN",
      researchInterests: ["CNNs", "Data Augmentation", "Model Fine-tuning", "Transfer Learning"]
    },
    {
      title: "YOLOv5 Object Detection",
      description: "Real-time object detection web app using YOLOv5 and Flask. Imported pre-trained YOLOv5 model and fine-tuned it for object detection.",
      stack: ["Python", "PyTorch", "Flask", "React"],
      link: "",
      github: "https://github.com/DannyUzo/yolov5-web-app",
      modelType: "YOLOv5 (CNN)",
      researchInterests: ["Computer Vision", "Real-time Edge AI"]
    },
  ],
  researchInterests: [
    "Embedded Systems",
    "Computer Vision",
    "Edge AI",
    "Robotics",
    "Full-Stack Development"
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
