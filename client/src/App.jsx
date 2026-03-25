import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';     // ← NEW
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/api/visitor')
      .then(res => res.json())
      .catch(() => {});
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />           {/* ← NEW */}
              <Skills />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;