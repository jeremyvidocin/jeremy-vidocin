import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Code2, BarChart3, Target } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const profiles = [
  {
    icon: Code2,
    color: 'bg-cobalt',
    title: 'Développeur Fullstack',
    text: "Je conçois, développe et déploie des applications performantes, scalables et sécurisées — du schéma de base de données à l'interface.",
  },
  {
    icon: BarChart3,
    color: 'bg-orange',
    title: 'Business Analyst',
    text: "J'analyse le besoin, je structure les processus et je traduis les enjeux métier en spécifications et en solutions concrètes.",
  },
  {
    icon: Target,
    color: 'bg-forest',
    title: 'Valeur ajoutée',
    text: 'Je fais le lien entre la technique et le métier pour livrer un SI utile, mesurable et défendable devant un comité.',
  },
];

const Hero = () => {
  return (
    <section id="hero" className="relative pt-28 md:pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Top meta line */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-ink/10 text-ink/50"
        >
          <span className="eyebrow text-ink/70">Portfolio · 2026</span>
          <span className="text-sm font-medium">Paris · Île-de-France</span>
        </motion.div>

        {/* Hero grid */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center pt-10 md:pt-14">
          {/* Left — text */}
          <div>
            <motion.p
              variants={fade}
              custom={1}
              initial="hidden"
              animate="visible"
              className="eyebrow text-cobalt mb-6"
            >
              Développeur Fullstack <span className="text-ink/40">×</span> Business Analyst
            </motion.p>

            <motion.h1
              variants={fade}
              custom={2}
              initial="hidden"
              animate="visible"
              className="display-xl text-ink text-[3.6rem] sm:text-[5rem] lg:text-[5.8rem]"
            >
              Le code.<br />
              La donnée.<br />
              L'impact<span className="text-cobalt">.</span>
            </motion.h1>

            <motion.p
              variants={fade}
              custom={3}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-lg text-lg leading-relaxed text-ink/70"
            >
              Un profil double, technique <span className="font-bold text-ink">&</span> fonctionnel —
              capable de coder un produit <span className="font-bold text-ink">et</span> de piloter
              un projet SI de bout en bout.
            </motion.p>

            <motion.div
              variants={fade}
              custom={4}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a href="#projects" className="btn-ink group">
                Voir mes projets
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              {/* CV : dépose ton PDF dans public/cv-jeremy-vidocin.pdf */}
              <a href="/cv-jeremy-vidocin.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Télécharger mon CV
              </a>
            </motion.div>
          </div>

          {/* Right — art + availability card */}
          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="group relative aspect-[4/5] overflow-hidden border border-ink/10 bg-paper">
              <img
                src="/art/hero.webp"
                alt="Composition graphique abstraite aux couleurs vives, style collage"
                width="1000"
                height="1339"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover scale-[1.06] transition-transform duration-700 ease-out group-hover:scale-[1.13]"
              />
            </div>

            {/* Availability card */}
            <div className="absolute -bottom-6 -left-3 sm:left-6 right-6 sm:right-auto sm:w-[19rem] bg-cream border border-ink/15 shadow-[6px_6px_0_0_rgba(21,18,13,1)] p-5">
              <div className="flex items-start gap-3">
                <div className="grid place-items-center w-9 h-9 bg-ink text-cream shrink-0">
                  <CalendarDays size={18} />
                </div>
                <div>
                  <p className="font-display text-sm uppercase leading-tight text-ink">
                    Disponible en alternance<br />dès septembre 2026
                  </p>
                  <p className="text-[0.78rem] text-ink/55 mt-1.5">
                    Rythme : 3 semaines entreprise / 2 semaines école · 24 mois
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom band — profil rare */}
        <div className="mt-24 md:mt-28 pt-12 border-t border-ink/10 grid md:grid-cols-[0.8fr_2.2fr] gap-10">
          <div>
            <p className="eyebrow text-cobalt mb-3">Un profil rare</p>
            <h2 className="display-xl text-[1.9rem] sm:text-[2.4rem] text-ink">
              À l'intersection du <span className="underline-scribble">tech</span> et du métier.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {profiles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`grid place-items-center w-11 h-11 ${p.color} text-cream mb-4`}>
                  <p.icon size={20} />
                </div>
                <h3 className="font-display text-base uppercase text-ink mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
