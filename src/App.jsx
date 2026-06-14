import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-cream text-ink overflow-x-hidden">
        {/* Paper grain overlay */}
        <div className="grain" />

        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
};

export default App;
