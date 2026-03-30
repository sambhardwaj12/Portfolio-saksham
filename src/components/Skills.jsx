import Container from './Container';
import SectionHeading from './SectionHeading';

function Skills({ skillGroups }) {
  return (
    <section id="skills" className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for analytics and decision-making."
          description="My core stack combines programming, business intelligence, and data science concepts that support end-to-end analysis work."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="panel hover:-translate-y-1"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
