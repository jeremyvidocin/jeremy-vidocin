import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

const quickLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Parcours', href: '#parcours' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => (
  <footer className="bg-ink text-cream px-5 md:px-8 pt-16 pb-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-10 pb-12 border-b border-cream/10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-9 h-9 bg-cream text-ink font-display text-lg leading-none">JV</span>
            <span className="font-bold">Jérémy Vidocin</span>
          </div>
          <p className="text-cream/55 text-sm leading-relaxed max-w-xs">
            Développeur Fullstack <span className="text-cream/80">×</span> Business Analyst.
            Disponible en alternance dès septembre 2026.
          </p>
          <div className="flex gap-2.5 mt-5">
            {[
              { Icon: Github, href: 'https://github.com/jeremyvidocin' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/jeremy-vidocin/' },
              { Icon: Mail, href: 'mailto:jeremyvidocin@gmail.com' },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="grid place-items-center w-9 h-9 border border-cream/20 hover:bg-cream hover:text-ink transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="eyebrow text-cream/55 mb-4">Liens rapides</p>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="text-cream/70 text-sm hover:text-cream transition-colors">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow text-cream/55 mb-4">Me contacter</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5 text-cream/70">
              <Mail size={15} className="text-cream/55" /> jeremyvidocin@gmail.com
            </li>
            <li>
              <a href="tel:+5906907155309" className="flex items-center gap-2.5 text-cream/70 hover:text-cream transition-colors">
                <Phone size={15} className="text-cream/55" /> +590 690 71 553 09
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-cream/70">
              <MapPin size={15} className="text-cream/55" /> Île-de-France (dès août 2026)
            </li>
            <li className="flex items-center gap-2.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Disponible dès sept. 2026
            </li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <p className="eyebrow text-cream/55 mb-4">Télécharger</p>
          <a
            href="/cv-jeremy-vidocin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 text-cream/70 text-sm hover:text-cream transition-colors group"
          >
            CV (PDF)
            <Download size={15} className="text-cream/55 group-hover:text-cream transition-colors" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-xs text-cream/55">
        <span>© 2026 Jérémy Vidocin — Tous droits réservés.</span>
        <span className="font-mono">Conçu et codé à la main · React · Tailwind</span>
      </div>
    </div>
  </footer>
);

export default Footer;
