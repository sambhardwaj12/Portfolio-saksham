import Container from './Container';
import SectionHeading from './SectionHeading';

function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Projects that show how I think through a problem."
          description="These projects are less about adding buzzwords and more about working from a clear question, messy data, and a useful final result."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="panel flex h-full flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-teal-200/80">{project.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-teal-300/15 bg-teal-300/10 px-3 py-1 text-sm text-teal-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-200"
              >
                View on GitHub
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
