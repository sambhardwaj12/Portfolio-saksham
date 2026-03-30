import Container from './Container';
import SectionHeading from './SectionHeading';

function Experience({ items }) {
  return (
    <section id="experience" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Experience that taught me to connect data with day-to-day operations."
          description="The common thread across my roles has been understanding what is happening, identifying what needs attention, and communicating it clearly enough for teams to act on it."
        />
        <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-4">
          {items.map((item) => (
            <article key={`${item.role}-${item.company}`} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-teal-300 shadow-[0_0_0_6px_rgba(45,212,191,0.12)]" />
              <div className="panel">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-base text-teal-200">{item.company}</p>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
