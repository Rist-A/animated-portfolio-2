import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import hrental from "../assets/houseproject1/hrental.png";
import houseproject from "../assets/housrproject2/houseproject .png"
import pcdemo1 from "../assets/pcdemo1/pcdemo1.png"
import pcdemo2 from "../assets/pcdemo2/pcdemo2.png"
import paintapp1 from "../assets/paintapp1/paintapp1.jpg"
import painnt from "../assets/paint3/painnt.webp"
import github from "../assets/git/github.png"
import rating from "../assets/Rating/rating.gif"
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import { BrowserRouter } from "react-router-dom";


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SKILLS = [
  {
    Title: "React.js",
    Proficiency: "Expert in Component-Based Frontend Development",
    Level: "High",
    description: `Highly skilled in developing performant and reusable components using React.js. Proficient in state management, hooks, context API, and integrating modern libraries.`,
    technologies: ["95%"],
  },
  {
    Title: "HTML5",
    Proficiency: "Expert in Advanced HTML Development",
    Level: "High",
    description: `I have advanced expertise in HTML, capable of creating fully structured, standards-compliant, and responsive web pages. With a strong understanding of HTML5 features, I craft optimized, semantic, and accessible code for engaging user interfaces.`,
    technologies: ["95%"],
  },
  {
    Title: "CSS3",
    Proficiency: "Master of Responsive Styling and Layouts",
    Level: "High",
    description: `Skilled in designing visually appealing, responsive, and cross-browser compatible web pages using CSS3. Proficient in advanced styling techniques, animations, and grid/flexbox layouts.`,
    technologies: ["85%"],
  },
  {
    Title: "JavaScript",
    Proficiency: "Dynamic and Interactive Web Development",
    Level: "High",
    description: `Experienced in creating dynamic and interactive web applications with JavaScript. Proficient in ES6+ features, DOM manipulation, event handling, and functional programming principles.`,
    technologies: ["85%"],
  },
  {
    Title: "C#",
    Proficiency: "Expert in Object-Oriented Programming",
    Level: "High",
    description: `Experienced in developing scalable applications with C#. Proficient in object-oriented programming principles, .NET framework, and modern backend solutions.`,
    technologies: ["90%"],
  },

  {
    Title: "ASP.NET",
    Proficiency: "Master in Modern Web Application Development",
    Level: "High",
    description: `Highly experienced in building scalable and secure web applications with ASP.NET. Proficient in MVC architecture, Web API, and advanced .NET features.`,
    technologies: ["98%"],
  },
  {
    Title: "Bootstrap",
    Proficiency: "Expert in Rapid UI Prototyping",
    Level: "High",
    description: `Skilled in building responsive, mobile-first web designs using Bootstrap. Proficient in customizing components and themes to deliver polished user interfaces.`,
    technologies: ["87%"],
  },
  {
    Title: "Tailwind CSS",
    Proficiency: "Pro in Utility-First Styling",
    Level: "High",
    description: `Highly skilled in designing clean, modern, and responsive UIs with Tailwind CSS. Proficient in creating custom themes and components for scalable projects.`,
    technologies: ["90%"],
  },
];
export const PROJECTS = [
  {
    title: "Apartment Rental and Sales System",
    image: hrental,
    description:
      "A modern property management system designed to streamline apartment rentals and sales. Features include property browsing with advanced filters, secure user authentication, and an admin dashboard for managing listings and transactions. Built with scalability, performance, and security in mind.",
    technologies: [
      "ASP.NET Core",
      "C#",
      "JWT Authentication",
      "SQL Server",
      "Entity Framework",
      "RESTful Web API"
    ],
    giticon:github,
    gitlink:"https://github.com/Arsema212/anim-reposit-arsema-mengistu/blob/main/inner.html",
    rateicon:rating,
    counter:0,
    Navigate:Project1
  },
  
  {
    title: "Pc Cleaner Website Demo",
    image: pcdemo1,
    description:
   "I developed a demo website for a PC cleaning service using React and Bootstrap. The website provides detailed information about the services offered and features a user-friendly interface for customers to register for PC cleaning services.",
    technologies: ["React", "Bootstrap"],
    giticon:github,
    gitlink:"https://github.com/Arsema212/anim-reposit-arsema-mengistu/blob/main/E%20Commerce%20App%20App.htm",
    rateicon:rating,
    counter:0,
    Navigate:Project2
  },
  {
    title: "Paint Application",
    image: painnt,
    description:
      "A desktop-based Paint Application developed using C# and Windows Forms. This application features a user-friendly interface for drawing, editing, and customizing designs. It includes tools for freehand drawing, shapes, color selection, and other basic editing functionalities.",
    technologies: ["C#", "Windows Forms"],
    giticon:github,
    gitlink:"https://github.com/Arsema212/anim-reposit-arsema-mengistu/blob/main/Paint%20ApplicationFinal.zip",
    rateicon:rating,
    counter:0, 
    Navigate:Project3
  },
  

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
