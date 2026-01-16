import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const events: TimelineEvent[] = [
  {
    id: 1,
    date: "2024 - 2025",
    title: "Backend & AI Developer Lead",
    company: "Agora Partnerships",
    description: "Led AI implementation for Project Colmena. Developed production-grade RAG systems and high-value REST APIs. Mentored developers and served as the primary AI architect for LLM solutions (OpenAI, Gemini, Llama).",
    tags: ["TypeScript", "AI", "RAG", "LLMs", "Node.js"],
  },
  {
    id: 2,
    date: "2022 - 2024",
    title: "Backend Developer Lead",
    company: "Geek Studio",
    description: "Supervised all backend developments. Implemented 30+ APIs (GraphQL, REST, SOAP). Automated report generation and ETL processes for SQL/NoSQL servers, reducing task time from months to seconds.",
    tags: ["Python", "NestJS", "MongoDB", "ETL", "Automation"],
  },
  {
    id: 3,
    date: "2021 - 2022",
    title: "Freelance Full Stack Developer",
    company: "Personal Projects & Freelance",
    description: "Developed promotional sites and REST APIs for smart payment kiosks (Siteco) and fashion brands (Clandestine). Integrated WhatsApp API and managed deployments.",
    tags: ["JavaScript", "NestJS", "TypeORM", "API Integration"],
  },
  {
    id: 4,
    date: "University",
    title: "Bachelor's Degree in Mathematics",
    company: "UnADM (Mexico)",
    description: "Computational mathematics focus. Applying rigorous logic, algorithms, and probability to software engineering and AI problem-solving.",
    tags: ["Mathematics", "Logic", "Algorithms"],
  },
  {
    id: 5,
    date: "Certifications",
    title: "Specialized Training",
    company: "Platzi & FreeCodeCamp",
    description: "2+ years of continuous evolution. Specialized in AI & Data Science (Prompt Engineering, RAG) and advanced Backend Engineering.",
    tags: ["AI Engineering", "Data Science", "Clean Code"],
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline--container">
      <motion.h2 
        className="timeline--header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.h2>
      <div className="timeline--content">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="timeline--item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="timeline--marker" />
            <span className="timeline--date">{event.date}</span>
            <div className="timeline--card">
              <h3 className="timeline--title">{event.title}</h3>
              <span className="timeline--company">{event.company}</span>
              <p className="timeline--description">{event.description}</p>
              <div className="timeline--tags">
                {event.tags.map((tag) => (
                  <span key={tag} className="timeline--tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
