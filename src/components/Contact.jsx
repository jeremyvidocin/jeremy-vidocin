import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone, ArrowUpRight, Check, Copy } from 'lucide-react';

const checklist = [
  'Rythme : 3 semaines entreprise / 2 semaines école',
  'Démarrage septembre 2026, durée 24 mois',
  "Basé en Île-de-France à partir d'août 2026",
  'Profil rare double compétence Dev + MOA · anglais C1',
];

const PHONE_DISPLAY = '+590 690 71 53 09';
const PHONE_HREF = 'tel:+590690715309';

const contacts = [
  { icon: Mail, label: 'Email', value: 'jeremyvidocin@gmail.com', href: 'mailto:jeremyvidocin@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/jeremyvidocin', href: 'https://github.com/jeremyvidocin' },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/jeremy-vidocin', href: 'https://www.linkedin.com/in/jeremy-vidocin/' },
  { icon: Phone, label: 'Téléphone', value: PHONE_DISPLAY, href: PHONE_HREF },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('jeremyvidocin@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ink text-cream p-8 md:p-14 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center"
        >
          <div>
            <p className="eyebrow text-orange mb-4">06 — Contact</p>
            <h2 className="display-xl text-[2.4rem] sm:text-[3.6rem] text-cream mb-5">
              Prêt à contribuer<br />à vos projets dès<br />
              <span className="text-orange">septembre 2026.</span>
            </h2>
            <p className="text-cream/65 text-lg leading-relaxed max-w-xl">
              Vous cherchez quelqu'un capable de livrer un module React le matin et de cadrer un
              sprint avec les métiers l'après-midi ? Écrivez-moi — je réponds sous 24 h.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:jeremyvidocin@gmail.com"
                className="inline-flex items-center gap-2.5 bg-orange text-ink font-bold px-7 py-4 hover:bg-cream transition-colors"
              >
                Échanger avec moi
                <ArrowUpRight size={18} />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2.5 border border-cream/30 text-cream font-semibold px-6 py-4 hover:bg-cream/10 transition-colors"
              >
                {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={17} />}
                {copied ? 'Email copié !' : 'jeremyvidocin@gmail.com'}
              </button>
            </div>
          </div>

          {/* checklist */}
          <div className="border-t lg:border-t-0 lg:border-l border-cream/15 pt-8 lg:pt-0 lg:pl-10">
            <p className="eyebrow text-cream/55 mb-5">Ce que je recherche</p>
            <ul className="space-y-4">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="grid place-items-center w-5 h-5 bg-orange text-ink shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-cream/85 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 border-t-0 mt-px">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-cream p-6 group hover:bg-paper transition-colors"
            >
              <div className="grid place-items-center w-10 h-10 bg-ink text-cream mb-4 group-hover:bg-cobalt transition-colors">
                <c.icon size={18} />
              </div>
              <p className="eyebrow text-ink/55 mb-1">{c.label}</p>
              <p className="font-semibold text-ink text-sm break-all">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
