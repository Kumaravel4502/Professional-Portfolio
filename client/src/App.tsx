import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="relative">
      <Toaster position="bottom-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Credentials />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
