const TOOLS = [
  { name: 'REACT',      img: 'assets/tools/react_logo.svg' },
  { name: 'TYPESCRIPT', img: 'assets/tools/typescript.png' },
  { name: 'REDUX',      img: 'assets/tools/redux-logo.png' },
  { name: 'GRAPHQL',    img: 'assets/tools/graphql.png' },
  { name: 'EXPRESS',    img: 'assets/tools/express.png' },
  { name: 'MONGODB',    img: 'assets/tools/mongodb.png' },
  { name: 'POSTGRES',   img: 'assets/tools/postgresql.png' },
  { name: 'FIREBASE',   img: 'assets/tools/firebase.png' },
  { name: 'GITHUB',     img: 'assets/tools/github.svg' },
  { name: 'MYSQL',      img: 'assets/tools/mysql-logo.svg' },
];

const LANGS = [
  { name: 'PYTHON', img: 'assets/languages/python-logo.png' },
  { name: 'JAVA',   img: 'assets/languages/java-logo.png' },
  { name: 'C++',    img: 'assets/languages/C++_Logo.svg' },
  { name: 'C',      img: 'assets/languages/c-logo.png' },
  { name: 'PHP',    img: 'assets/languages/php-logo.png' },
  { name: 'WEB',    img: 'assets/languages/web-programation.png' },
];

function ToolItem({ t }) {
  return (
    <div className="tool">
      <img src={t.img} alt={t.name}/>
      <div className="name">{t.name}</div>
    </div>
  );
}

function ToolsSection() {
  return (
    <section id="tools">
      <div className="container">
        <SectionHead num="05" title="INVENTORY.DAT" badge="// equipped · stack & langs"/>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent)', marginBottom: 14, letterSpacing: 1 }}>FRAMEWORKS &amp; SERVICES</div>
          <div className="tools-grid">{TOOLS.map((t) => <ToolItem t={t} key={t.name}/>)}</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent)', marginBottom: 14, letterSpacing: 1 }}>LANGUAGES</div>
          <div className="tools-grid">{LANGS.map((t) => <ToolItem t={t} key={t.name}/>)}</div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ToolsSection });
