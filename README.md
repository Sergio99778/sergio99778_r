# 💙 Sergio's Portfolio

A professional software engineer portfolio built with React 19 and TypeScript, showcasing projects, skills, and professional experience.

## 🛠️ Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vitejs.dev/) | 7 | Build tool & dev server |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [React Router](https://reactrouter.com/) | v7 | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Social icons (Font Awesome 6) |

## 🚀 Features

- **Projects**: Showcase of personal and professional projects with links
- **Skills**: Visual grid of soft skills and competencies
- **Languages & Tools**: Tech stack and tooling overview
- **Timeline**: Professional experience history
- **About Me**: Personal background and objectives
- **Responsive Design**: Mobile-first layout, works on all screen sizes
- **Accessibility**: Skip-to-content link, ARIA labels, semantic HTML
- **Performance**: Lazy-loaded routes and images, code splitting

## 💻 Getting Started

### Prerequisites

- Node.js ≥ 18

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sergio99778/sergio99778_r.git
   cd sergio99778_r
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on source files |
| `npm run lint:fix` | Run ESLint and auto-fix issues |

## 📁 Project Structure

```
src/
├── App.tsx              # Router, Header, Footer, lazy routes
├── App.css              # Global styles and CSS reset
├── animations/
│   └── variants.ts      # Shared Framer Motion variants
├── types/
│   └── index.ts         # Shared TypeScript interfaces
├── Components/          # Reusable UI components
│   ├── Header.tsx/css
│   ├── Footer.tsx/css
│   ├── Projects.tsx/css
│   ├── Skills.tsx/css
│   ├── Languages.tsx/css
│   ├── Tools.tsx/css
│   ├── Timeline.tsx/css
│   ├── SectionContainer.tsx/css
│   ├── ErrorBoundary.tsx
│   └── SkipToContent.tsx
└── pages/
    ├── Main.tsx         # Home page
    └── AboutMe.tsx      # About page
```

## 🚀 Deployment

This project is deployed on **[Vercel](https://vercel.com/)**. Every push to `main` triggers an automatic deployment.

Live site: [https://sergio99778.vercel.app/](https://sergio99778.vercel.app/)

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
