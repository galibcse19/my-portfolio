import AboutMe from './AllFiles/AboutMe';
import Banner from './AllFiles/Banner';
import Contact from './AllFiles/Contact';
import Education from './AllFiles/Education';
import Footer from './AllFiles/Footer';
import Navbar from './AllFiles/Navbar';
import Projects from './AllFiles/Projects';
import Skills from './AllFiles/Skills';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="bg-gradient-to-r from-[#9E31F1] to-[#C82CD9]">
        <div className="lg:mx-36 md:mx-20 mx-4">
          <Banner />
        </div>
      </div>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
