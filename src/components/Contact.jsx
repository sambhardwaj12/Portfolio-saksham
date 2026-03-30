import Container from './Container';
import SectionHeading from './SectionHeading';

function Contact({ links, email }) {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <div className="panel overflow-hidden">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk if you're hiring for an entry-level analytics role."
            description="I'm looking for opportunities where I can contribute as a data analyst, keep improving technically, and learn from a strong team."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-teal-200/80">Email</p>
              <a
                href={`mailto:${email}`}
                className="mt-3 inline-block text-2xl font-semibold text-white hover:text-teal-200"
              >
                {email}
              </a>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                If you're hiring for a data analyst or analytics-focused role, I'd love to hear
                from you.
              </p>
            </div>

            <div className="grid gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.08]"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-teal-200/80">{link.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
