import { motion } from 'framer-motion';

const jobs = [
  {
    period: 'Nov. 2025 — présent',
    badge: 'En poste',
    role: 'Apprenti Business Analyst & Développeur Fullstack',
    org: 'Serene Up! · Île-de-France',
    desc: "Conception et développement de solutions SI sur mesure pour des clients PME / ETI. Double posture : cadrage fonctionnel avec les métiers, puis livraison technique front et back.",
    points: [
      'Recueil du besoin, ateliers de cadrage, rédaction de spécifications fonctionnelles détaillées',
      'Développement React / TypeScript côté front, Node.js & PHP côté back',
      'Pilotage UAT, plans de recette, accompagnement utilisateurs et conduite du changement',
    ],
    accent: 'bg-cobalt',
    active: true,
  },
  {
    period: 'Déc. 2024 — janv. 2025',
    badge: 'Stage dev',
    role: 'Développeur Fullstack — Stage',
    org: 'GIDM · Guadeloupe',
    desc: "Stage de 6 semaines : conception & développement d'un module métier intégré au SI existant. Cycle complet en autonomie — maquettage, dev, tests, mise en production.",
    points: [
      'Stack PHP / Symfony, interface React, base de données MySQL',
      "Refonte de l'écran de pilotage opérationnel — gain de temps côté équipe terrain",
      'Documentation technique & passation au sein de la DSI',
    ],
    accent: 'bg-orange',
  },
  {
    period: 'Été 2024',
    badge: 'Saisonnier',
    role: 'Agent administratif',
    org: 'CGSS / URSSAF · Guadeloupe',
    desc: "Mission administrative saisonnière au sein d'un grand organisme de protection sociale : traitement de dossiers, saisie et appui aux équipes.",
    points: [
      'Traitement et classement de dossiers, saisie administrative',
      'Respect des procédures et de la confidentialité des données',
    ],
    accent: 'bg-forest',
  },
  {
    period: 'Mai — juin 2024',
    badge: 'Stage dev',
    role: 'Développeur — Stage',
    org: 'Alpha Développement · Guadeloupe',
    desc: "Stage de développement de 6 semaines : intégration à une équipe technique, contribution au développement de projets web et prise en main des cycles de projet.",
    points: [
      "Développement et corrections sur des projets web de l'équipe",
      'Prise en main des outils de versioning et de gestion de projet',
    ],
    accent: 'bg-pink',
  },
];

const Experience = () => (
  <section id="parcours" className="py-24 md:py-32 px-5 md:px-8">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <p className="eyebrow text-ink/40 mb-3"><span className="text-cobalt">05</span> — Parcours</p>
        <h2 className="display-xl text-[2.4rem] sm:text-[3.4rem] text-ink">
          Quatre terrains,<br />un fil rouge : livrer<span className="text-cobalt">.</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/15 md:left-[calc(11rem+7px)]" />

        <div className="space-y-12">
          {jobs.map((j, i) => (
            <motion.div
              key={j.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-9 md:pl-0 md:grid md:grid-cols-[11rem_1fr] md:gap-8"
            >
              {/* period (left col on desktop) */}
              <div className="md:text-right md:pr-8 mb-2 md:mb-0">
                <span className="font-mono text-sm text-ink/55">{j.period}</span>
              </div>

              {/* dot */}
              <span
                className={`absolute left-0 top-1.5 w-4 h-4 ${j.accent} border-2 border-cream md:left-[calc(11rem-1px)] ${
                  j.active ? 'ring-4 ring-cobalt/20' : ''
                }`}
              />

              {/* content */}
              <div className="md:pl-2">
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h3 className="font-display text-xl uppercase text-ink">{j.role}</h3>
                  <span className={`text-cream text-[0.68rem] font-bold uppercase tracking-wider px-2 py-0.5 ${j.accent}`}>
                    {j.badge}
                  </span>
                </div>
                <p className="font-semibold text-cobalt mb-3">{j.org}</p>
                <p className="text-ink/65 leading-relaxed mb-3 max-w-2xl">{j.desc}</p>
                {j.points.length > 0 && (
                  <ul className="space-y-2 max-w-2xl">
                    {j.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink/60">
                        <span className="w-1.5 h-1.5 bg-ink/40 mt-1.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
