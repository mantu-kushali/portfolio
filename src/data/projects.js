import tender from "../assets/images/projects/tender.png";
import resumeBuilder from "../assets/images/projects/resume-builder.png";
import taskApi from "../assets/images/projects/task-api.png"; // add your Swagger screenshot here
import portfolio from "../assets/images/projects/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Tender Audit System",
    image: tender,
    description:
      "AI-powered tender auditing system that extracts tender requirements, verifies vendor compliance, performs OCR-based document analysis, and generates evaluation reports using MongoDB and local LLMs.",
    technologies: ["Python", "MongoDB", "OCR", "LLM", "Streamlit"],
    github: "https://github.com/mantu-kushali/AI-Tender-Audit-System",
    demo: "",
  },

  {
    id: 2,
    title: "AI Resume Builder",
    image: resumeBuilder,
    description:
      "AI-powered resume builder that helps users create professional ATS-friendly resumes with customizable templates, real-time preview, and PDF export.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AI"],
    github: "https://github.com/mantu-kushali/Resume-builder",
    demo: "",
  },

  {
    id: 3,
    title: "Task API",
    image: taskApi,
    description:
      "REST API for task management with full CRUD, Swagger documentation, a health check endpoint and a layered design (routes, service, repository). Runs with Docker Compose and keeps its data after container restarts.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "Swagger"],
    github: "https://github.com/mantu-kushali/TASK-API",
    demo: "",
  },

  {
    id: 4,
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Modern responsive portfolio website showcasing my projects, skills, certifications, internship experience, and contact information.",
    technologies: ["React", "Vite", "CSS"],
    github: "https://github.com/mantu-kushali/portfolio",
    demo: "https://mantu-kushali-portfolio.netlify.app",
  },
];

export default projects;