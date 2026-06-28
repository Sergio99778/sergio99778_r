import { SectionHead } from './Chrome';

interface TLEntry {
  date: string;
  role: string;
  co: string;
  desc: string;
  tags: string[];
}

const TL: TLEntry[] = [
  {
    date: '2024 — 2025',
    role: 'Backend & AI Developer Lead',
    co: 'Agora Partnerships',
    desc: 'Led AI implementation for Project Colmena. Developed production-grade RAG systems and high-value REST APIs. Mentored developers and served as the primary AI architect for LLM solutions (OpenAI, Gemini, Llama).',
    tags: ['TypeScript', 'AI', 'RAG', 'LLMs', 'Node.js'],
  },
  {
    date: '2022 — 2024',
    role: 'Backend Developer Lead',
    co: 'Geek Studio',
    desc: 'Supervised all backend developments. Implemented 30+ APIs (GraphQL, REST, SOAP). Automated report generation and ETL processes for SQL/NoSQL servers, reducing task time from months to seconds.',
    tags: ['Python', 'NestJS', 'MongoDB', 'ETL', 'Automation'],
  },
  {
    date: '2021 — 2022',
    role: 'Freelance Full Stack Developer',
    co: 'Personal Projects & Freelance',
    desc: 'Developed promotional sites and REST APIs for smart payment kiosks (Siteco) and fashion brands (Clandestine). Integrated WhatsApp API and managed deployments.',
    tags: ['JavaScript', 'NestJS', 'TypeORM', 'API Integration'],
  },
  {
    date: 'University',
    role: "Bachelor's Degree in Mathematics",
    co: 'UnADM (Mexico)',
    desc: 'Computational mathematics focus. Applying rigorous logic, algorithms, and probability to software engineering and AI problem-solving.',
    tags: ['Mathematics', 'Logic', 'Algorithms'],
  },
  {
    date: 'Certifications',
    role: 'Specialized Training',
    co: 'Platzi & FreeCodeCamp',
    desc: '2+ years of continuous evolution. Specialized in AI & Data Science (Prompt Engineering, RAG) and advanced Backend Engineering.',
    tags: ['AI Engineering', 'Data Science', 'Clean Code'],
  },
];

function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <SectionHead num="04" title="JOURNEY.LOG" badge="// chronological · save points"/>
        <div className="tl">
          {TL.map((t) => (
            <div className="tl-row" key={t.role + t.date}>
              <div className="tl-date">{t.date}</div>
              <div className="tl-card">
                <div className="role">{t.role}</div>
                <div className="co">{t.co}</div>
                <div className="desc">{t.desc}</div>
                <div className="ts">
                  {t.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
