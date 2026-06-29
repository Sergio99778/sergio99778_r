import React from 'react';
import { SectionHead } from './Chrome';

interface StackLayer {
  icon: string;
  label: string;
  cls: string;
  desc: React.ReactNode;
  tags: string[];
}

const STACK_LAYERS: StackLayer[] = [
  {
    icon: 'FE', label: 'FRONTEND', cls: 'l-frontend',
    desc: <>Pixel-tight UIs in <strong>React</strong> + <strong>TypeScript</strong>. State that doesn't leak, accessibility that isn't an afterthought, animations that respect <code>prefers-reduced-motion</code>.</>,
    tags: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Vite'],
  },
  {
    icon: 'BE', label: 'BACKEND', cls: 'l-backend',
    desc: <>REST + GraphQL APIs on <strong>Node</strong> &amp; <strong>Express</strong>. Real schemas, real migrations, real tests. SQL when shape matters, Mongo when it doesn't.</>,
    tags: ['Node', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    icon: 'AI', label: 'AI / ML', cls: 'l-ai',
    desc: <>Production <strong>RAG systems</strong> and <strong>LLM integrations</strong> — OpenAI, Gemini &amp; Llama. Retrieval pipelines, prompt engineering, and AI workflows automated with <strong>n8n</strong>.</>,
    tags: ['RAG', 'LLMs', 'OpenAI', 'Gemini', 'Llama', 'Python', 'n8n'],
  },
  {
    icon: 'OPS', label: 'DEVOPS', cls: 'l-devops',
    desc: <>Containers in <strong>Docker</strong>, pipelines in <strong>GitHub Actions</strong>, deploys to Firebase / AWS. Logging you can grep, alerts you actually want.</>,
    tags: ['Docker', 'GitHub Actions', 'Firebase', 'AWS', 'Nginx'],
  },
  {
    icon: 'AND', label: 'ANDROID', cls: 'l-android',
    desc: <>Newest chapter — native <strong>Kotlin</strong> with Jetpack Compose, plus <strong>Flutter</strong> for cross-platform. Currently shipping the gym-progress companion app.</>,
    tags: ['Kotlin', 'Compose', 'Room', 'Flutter'],
  },
];

function Stack() {
  return (
    <section id="stack">
      <div className="container">
        <SectionHead num="02" title="THE_STACK.SYS" badge="// top → bottom"/>
        <div className="stack">
          {STACK_LAYERS.map((l) => (
            <div className={`stack-layer ${l.cls}`} key={l.label}>
              <div className="lbl"><span className="icon">{l.icon}</span>{l.label}</div>
              <div className="desc">{l.desc}</div>
              <div className="tags">
                {l.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
