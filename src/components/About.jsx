import { motion } from 'framer-motion';

const stats = [
  { value: '2e', label: 'Major BTS SIO', sub: 'Antilles-Guyane', color: 'text-cobalt' },
  { value: 'TB', label: 'Mention au Bac', sub: 'Bac Général Maths-NSI · 2023', color: 'text-orange' },
  { value: '960', label: 'TOEIC / 990', sub: 'Anglais C1', color: 'text-forest' },
  { value: '24 mois', label: 'Alternance recherchée', sub: '3 sem. entreprise · 2 sem. école', color: 'text-pink' },
];

const education = [
  { years: '2026—28', title: 'Master MIAGE SBI — Paris 1 Panthéon-Sorbonne', note: 'Dès sept. 2026' },
  { years: '2025—26', title: 'L3 MIAGE — UFR des Antilles', note: 'En cours' },
  { years: '2023—25', title: 'BTS SIO SLAM — Lycée de Baimbridge', note: 'Major 2e Antilles-Guyane' },
  { years: '2023', title: 'Bac Général — Maths & NSI', note: 'Mention Très Bien' },
];

const SectionLabel = ({ n, children }) => (
  <p className="eyebrow text-ink/40 mb-3">
    <span className="text-cobalt">{n}</span> — {children}
  </p>
);

const About = () => (
  <section id="about" className="py-24 md:py-32 px-5 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <SectionLabel n="02">À propos</SectionLabel>
        <h2 className="display-xl text-[2.4rem] sm:text-[3.4rem] text-ink">
          Coder le produit,<br />parler au métier<span className="text-cobalt">.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-[1.05rem] leading-relaxed text-ink/70"
        >
          <p>
            Originaire de <span className="font-bold text-ink">Guadeloupe</span> et formé à
            l'université des Antilles, j'ai construit un profil qui se prête mal aux cases
            habituelles : <span className="font-bold text-ink">major 2e Antilles-Guyane</span> en
            BTS SIO, aujourd'hui en <span className="font-bold text-ink">L3 MIAGE</span>, et
            cap sur le Master MIAGE <span className="font-bold text-ink">Sustainable Business
            Informatics</span> à Paris 1 Panthéon-Sorbonne pour septembre 2026 — la voie qui forme
            les profils SI à double compétence.
          </p>
          <p>
            En apprentissage chez <span className="font-bold text-ink">Serene Up!</span> depuis
            novembre 2025, je code des solutions fullstack et j'anime des ateliers de cadrage avec
            les métiers : rédaction de SFD, recueil du besoin, UAT, gouvernance. Ce que les
            recruteurs SI cherchent rarement chez un même candidat — un dev qui sait écrire un
            cahier des charges, et un MOA qui sait livrer.
          </p>
          <p>
            Je m'installe en <span className="font-bold text-ink">Île-de-France à partir d'août
            2026</span> pour démarrer mon alternance de Master dès septembre — rythme 3 semaines
            entreprise / 2 semaines école.
          </p>

          {/* Education timeline */}
          <div className="pt-6">
            <p className="eyebrow text-ink/40 mb-5">Formation</p>
            <ul className="space-y-0">
              {education.map((e) => (
                <li
                  key={e.years}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 py-4 border-t border-ink/10"
                >
                  <span className="font-mono text-sm text-cobalt shrink-0 w-20">{e.years}</span>
                  <span className="font-semibold text-ink flex-1">{e.title}</span>
                  <span className="text-sm text-ink/45">{e.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-px bg-ink/10 border border-ink/10 lg:sticky lg:top-28"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-cream p-6">
              <div className={`font-display text-4xl md:text-5xl ${s.color} leading-none mb-3`}>
                {s.value}
              </div>
              <div className="font-semibold text-sm text-ink">{s.label}</div>
              <div className="text-xs text-ink/45 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
