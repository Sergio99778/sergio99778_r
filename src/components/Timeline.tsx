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
    date: '2025 — NOW',
    role: 'Software Engineer',
    co: 'Blau Corp · 500 Global LatAm B17',
    desc: 'Full-stack engineer at an AI-powered waste-management startup backed by 500 Global. Build across backend (Python/Node), frontend (React/Nuxt), mobile (Flutter/Kotlin) and AWS infrastructure; integrate LLMs and in-house AI models; own CI/CD and end-to-end observability.',
    tags: ['Python', 'Node.js', 'TypeScript', 'React', 'Flutter', 'AWS', 'LLMs'],
  },
  {
    date: 'JUN — SEP 2025',
    role: 'AI Software Engineer',
    co: 'Platzi',
    desc: 'B2B full-stack engineer on Platzi\'s corporate learning platform and enterprise dashboard. Built backend services with Django and FastAPI on PostgreSQL, and React/Redux interfaces.',
    tags: ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL'],
  },
  {
    date: '2024 — 2025',
    role: 'Backend & AI Developer',
    co: 'Agora Partnerships',
    desc: 'Main AI developer on project Colmena. Built high-value REST APIs and shipped production AI — embeddings, LLMs and RAG with OpenAI, Gemini and Meta\'s Llama. Mentored other developers.',
    tags: ['Node.js', 'TypeScript', 'Python', 'RAG', 'LLMs', 'MongoDB'],
  },
  {
    date: '2022 — 2024',
    role: 'Backend Developer Lead',
    co: 'Geek Studio',
    desc: 'Led all backend development. Shipped 30+ APIs (GraphQL, REST, SOAP, MQTT), automated ETL and reporting (months → seconds), and built an agnostic OpenAI framework for client bots. Many payment, parcel and financial integrations.',
    tags: ['Python', 'NestJS', 'MongoDB', 'ETL', 'OpenAI', 'GraphQL'],
  },
  {
    date: '2021 — 2022',
    role: 'Full Stack Developer · Freelance',
    co: 'Independent',
    desc: 'Built the Clandestino brand website (WhatsApp API) and Siteco — a REST API for smart payment kiosks integrated with their hardware. NestJS + TypeORM + MySQL on Google Cloud and Docker.',
    tags: ['JavaScript', 'NestJS', 'TypeORM', 'MySQL', 'Docker'],
  },
  {
    date: 'University',
    role: "Bachelor's Degree in Mathematics",
    co: 'UnADM · Mexico',
    desc: 'Open and Distance University of Mexico (2021 – 2025). Computational mathematics — rigorous logic, algorithms and probability applied to software and AI.',
    tags: ['Mathematics', 'Logic', 'Algorithms'],
  },
  {
    date: 'Certs',
    role: 'Data Science & Backend Training',
    co: 'BEDU · Platzi · FreeCodeCamp',
    desc: 'BEDU Data Scientist diploma (NoSQL, SQL, R, Python, ML). 30+ Platzi courses across AI, backend and data engineering. FreeCodeCamp React. EFSET C1 English.',
    tags: ['Data Science', 'AI Engineering', 'Clean Code'],
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
