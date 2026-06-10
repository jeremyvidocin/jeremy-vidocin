import { motion } from 'framer-motion';
import { ArrowUpRight, Workflow, GitBranch, ShieldCheck, Database, LineChart, BellRing, FileDown, Users } from 'lucide-react';

const projects = [
  {
    n: '01',
    tag: 'Automatisation · 2025',
    title: "Moteur d'automatisation de workflows",
    art: '/art/project-blue.png',
    theme: 'cobalt',
    description:
      "Un outil low-code inspiré de n8n / Zapier : l'utilisateur compose visuellement ses workflows en drag-and-drop, et le moteur backend les exécute en parcours BFS sur le graphe de nœuds.",
    features: [
      { icon: Workflow, text: 'Éditeur visuel React Flow — nœuds typés, connecteurs, validation en direct' },
      { icon: GitBranch, text: "Moteur d'exécution BFS côté serveur — dépendances et branches conditionnelles" },
      { icon: ShieldCheck, text: 'API REST documentée Swagger, auth JWT, séparation lecture / écriture' },
      { icon: Database, text: 'Persistance PostgreSQL + cache Redis pour les exécutions en flux' },
    ],
    tech: ['React Flow', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'JWT', 'Swagger'],
    github: 'https://github.com/jeremyvidocin',
  },
  {
    n: '02',
    tag: 'Data & KPI · 2024—25',
    title: 'Tableau de bord financier avec alertes',
    art: '/art/project-green.png',
    theme: 'forest',
    description:
      "Une application de pilotage budgétaire : KPIs dynamiques (recettes, dépenses, marge, runway), graphes interactifs, alertes par seuils et export CSV. Architecture front / back découplée et sécurisée.",
    features: [
      { icon: LineChart, text: 'Graphes Chart.js recomposables — line, bar, gauge, sparklines' },
      { icon: BellRing, text: "Système d'alertes budgétaires configurables par seuils + notifications" },
      { icon: FileDown, text: 'Export CSV filtrable par période, catégorie et scénario' },
      { icon: Users, text: 'API REST sécurisée avec contrôle d\'accès par rôle (admin / lecteur)' },
    ],
    tech: ['Chart.js', 'PHP / Symfony', 'REST API', 'JWT', 'MySQL', 'CSV'],
    github: 'https://github.com/jeremyvidocin',
  },
];

const themes = {
  cobalt: { card: 'bg-cobalt', soft: 'bg-white/12', chip: 'border-white/25 text-white bg-white/10', icon: 'text-white' },
  forest: { card: 'bg-forest', soft: 'bg-white/12', chip: 'border-white/25 text-white bg-white/10', icon: 'text-white' },
};

const ProjectCard = ({ p, index }) => {
  const t = themes[p.theme];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`${t.card} text-cream p-7 md:p-9 flex flex-col`}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden border border-white/20 shrink-0">
            <img src={p.art} alt="" className="w-full h-full object-cover scale-[1.08]" />
          </div>
          <span className="border border-white/30 px-2.5 py-1 text-[0.72rem] font-bold tracking-widest uppercase">
            Projet {p.n}
          </span>
        </div>
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir le code"
          className="grid place-items-center w-10 h-10 border border-white/30 hover:bg-white hover:text-ink transition-colors"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      <h3 className="font-display text-2xl md:text-[2rem] uppercase leading-tight mb-3">
        {p.title}
      </h3>
      <p className="text-white/80 leading-relaxed mb-6">{p.description}</p>

      <ul className="space-y-3 mb-7">
        {p.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/85">
            <span className={`grid place-items-center w-7 h-7 ${t.soft} shrink-0`}>
              <f.icon size={15} className={t.icon} />
            </span>
            <span className="pt-1">{f.text}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {p.tech.map((tech) => (
          <span key={tech} className={`text-[0.74rem] font-semibold px-2.5 py-1 border ${t.chip}`}>
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 md:py-32 px-5 md:px-8 bg-ink text-cream">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-3xl"
      >
        <p className="eyebrow text-cream/40 mb-3"><span className="text-orange">03</span> — Projets phares</p>
        <h2 className="display-xl text-[2.4rem] sm:text-[3.4rem] text-cream mb-5">
          Deux preuves qu'un dev<br />peut piloter du SI<span className="text-orange">.</span>
        </h2>
        <p className="text-cream/60 text-lg leading-relaxed">
          Pas une vitrine de side-projects sans contexte. Chacun a un cahier des charges, des choix
          d'architecture défendables, et une livraison qui tient en démo de 5 minutes devant un comité.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.n} p={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
