import {
  about,
  contactLinks,
  experience,
  navLinks,
  profile,
  projects,
  skills,
} from './data/portfolioData';
import Contact from './components/Contact';
import Container from './components/Container';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SectionHeading from './components/SectionHeading';
import Skills from './components/Skills';

function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A graduate profile built around practical analysis, not just theory."
          description="My background mixes academic work in data science with hands-on reporting, dashboarding, feedback analysis, and collaboration across operational teams."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {about.highlights.map((item) => (
              <div key={item.label} className="panel">
                <p className="text-sm uppercase tracking-[0.2em] text-teal-300/80">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-300 selection:text-slate-950">
      <Navbar links={navLinks} />
      <main>
        <Hero profile={profile} />
        <About />
        <Skills skillGroups={skills} />
        <Projects projects={projects} />
        <Experience items={experience} />
        <Contact links={contactLinks} email={profile.email} />
      </main>
      <Footer name={profile.name} />
    </div>
  );
}

export default App;
