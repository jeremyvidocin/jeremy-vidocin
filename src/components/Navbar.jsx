import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Parcours', href: '#parcours' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-cobalt origin-left z-[70]"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md border-b border-ink/10'
            : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <span className="grid place-items-center w-9 h-9 bg-ink text-cream font-display text-lg leading-none group-hover:bg-cobalt transition-colors">
              JV
            </span>
            <span className="hidden sm:block text-[0.92rem] font-bold tracking-tight text-ink">
              Dev <span className="text-cobalt">×</span> Business Analyst
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`text-sm font-semibold transition-colors relative group ${
                    isActive ? 'text-ink' : 'text-ink/55 hover:text-ink'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-cobalt transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Availability pill */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-cream text-[0.78rem] font-semibold pl-3 pr-4 py-2 rounded-full hover:bg-cobalt transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Dispo dès sept. 2026
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-ink"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-cream border-t border-ink/10 px-5 py-6"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-3 text-lg font-bold py-2.5 border-b border-ink/5 ${
                      isActive ? 'text-cobalt' : 'text-ink'
                    }`}
                  >
                    {isActive && <span className="w-2 h-2 bg-cobalt" />}
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center bg-ink text-cream font-semibold py-3.5 rounded-full"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
