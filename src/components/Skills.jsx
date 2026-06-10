import { motion } from 'framer-motion';
import { Hammer, Boxes, Rocket, Sparkles, Compass } from 'lucide-react';

const method = [
  { n: '01', color: 'text-cobalt', title: 'Comprendre', text: 'Recueil du besoin, ateliers de cadrage, cartographie des processus, SFD.' },
  { n: '02', color: 'text-orange', title: 'Concevoir', text: 'Modélisation MERISE / UML, architecture technique, maquettage et specs.' },
  { n: '03', color: 'text-forest', title: 'Livrer', text: 'Développement itératif, tests, intégration continue et déploiement.' },
  { n: '04', color: 'text-pink', title: 'Améliorer', text: 'UAT, recette, suivi des usages, KPIs et conduite du changement.' },
];

const domains = [
  {
    icon: Hammer, n: '01', kicker: 'Build', title: 'Dev Web & Mobile',
    items: ['React, Next.js, TypeScript', 'React Native (iOS / Android)', 'Node.js, Express, NestJS', 'Java, Spring Boot', 'PHP, Symfony', 'HTML5, CSS3, Tailwind'],
  },
  {
    icon: Boxes, n: '02', kicker: 'Structure', title: 'Architecture & BDD',
    items: ['Architecture REST & microservices', 'Modélisation MERISE / UML', 'PostgreSQL, MySQL, MongoDB', 'Redis (cache, file)', 'Schémas relationnels', 'API design — OpenAPI / Swagger'],
  },
  {
    icon: Rocket, n: '03', kicker: 'Ship', title: 'DevOps & Sécurité',
    items: ['Docker, Docker Compose', 'CI/CD — GitHub Actions, GitLab CI', 'Linux, bash, déploiement Cloud', 'JWT, OAuth2, gestion des secrets', 'Cybersécurité — OWASP Top 10', 'Monitoring & logs structurés'],
  },
  {
    icon: Sparkles, n: '04', kicker: 'Augment', title: 'Automatisation & IA',
    items: ['Workflows n8n / Zapier', 'Scripts Python — data pipelines', 'Intégration LLM & API IA', 'Prompt engineering (RAG, agents)', 'Power BI — modélisation & DAX', 'ETL léger, parsing & scraping'],
  },
  {
    icon: Compass, n: '05', kicker: 'Pilot', title: 'Gestion SI & RGPD',
    items: ['Cadrage métier & SFD', 'UAT, recette, plan de test', 'Gouvernance SI, urbanisation', 'Méthodes Agile & Scrum', 'RGPD — registre, conformité', 'Anglais pro C1 (TOEIC 960)'],
  },
];

const bars = [
  { label: 'Développement Fullstack', v: 90 },
  { label: 'Analyse fonctionnelle & cadrage', v: 90 },
  { label: 'Modélisation (UML / MERISE)', v: 85 },
  { label: 'API & intégrations', v: 85 },
  { label: 'Communication & restitution', v: 95 },
];

const Skills = () => (
  <section id="skills" className="py-24 md:py-32 px-5 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Methodology */}
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center mb-24 md:mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-square overflow-hidden border border-ink/10 bg-paper"
        >
          <img src="/art/method.png" alt="Composition graphique abstraite" className="w-full h-full object-cover scale-[1.05]" />
        </motion.div>

        <div>
          <p className="eyebrow text-cobalt mb-3">Ma méthodologie</p>
          <h2 className="display-xl text-[2rem] sm:text-[2.7rem] text-ink mb-9">
            Comprendre. Concevoir.<br />Livrer. Améliorer<span className="text-cobalt">.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {method.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-t-2 border-ink pt-3"
              >
                <span className={`font-display text-2xl ${m.color}`}>{m.n}</span>
                <h3 className="font-display text-base uppercase text-ink mt-1 mb-1.5">{m.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <p className="eyebrow text-ink/40 mb-3"><span className="text-cobalt">04</span> — Compétences</p>
        <h2 className="display-xl text-[2.4rem] sm:text-[3.4rem] text-ink mb-5">
          Stack technique &<br />vocabulaire métier<span className="text-cobalt">.</span>
        </h2>
        <p className="text-ink/60 text-lg leading-relaxed">
          Je n'ai pas une stack — j'ai cinq surfaces de compétence, parce que livrer un SI utile
          demande bien plus que pousser du code.
        </p>
      </motion.div>

      {/* Domains */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10 mb-20">
        {domains.map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-cream p-7 group"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="grid place-items-center w-11 h-11 bg-ink text-cream group-hover:bg-cobalt transition-colors">
                <d.icon size={20} />
              </div>
              <span className="font-mono text-xs text-ink/30">{d.n} — {d.kicker}</span>
            </div>
            <h3 className="font-display text-lg uppercase text-ink mb-4">{d.title}</h3>
            <ul className="space-y-2">
              {d.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-ink/65">
                  <span className="w-1.5 h-1.5 bg-cobalt mt-1.5 shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Filler cell — key competencies bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-ink text-cream p-7 sm:col-span-2 lg:col-span-1"
        >
          <h3 className="font-display text-lg uppercase mb-5">Niveaux clés</h3>
          <div className="space-y-4">
            {bars.slice(0, 5).map((b, i) => (
              <div key={b.label}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-xs font-semibold text-cream/85">{b.label}</span>
                  <span className="font-mono text-[0.7rem] text-cream/45">{b.v}%</span>
                </div>
                <div className="h-1.5 bg-white/15 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.06 }}
                    className="h-full bg-orange"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
