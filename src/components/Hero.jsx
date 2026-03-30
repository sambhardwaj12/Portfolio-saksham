import Container from './Container';

function Hero({ profile }) {
  const cvHref = profile.cta.secondaryHref.startsWith('/')
    ? `${import.meta.env.BASE_URL}${profile.cta.secondaryHref.slice(1)}`
    : profile.cta.secondaryHref;

  return (
    <section id="home" className="section-padding overflow-hidden pt-16 sm:pt-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="fade-in">
            <span className="section-label">London-based and open to new opportunities</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[1.05]">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-teal-200 sm:text-2xl">{profile.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{profile.availability}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={profile.cta.primaryHref} className="primary-button">
                {profile.cta.primaryLabel}
              </a>
              <a
                href={cvHref}
                className="secondary-button"
                download
                target="_blank"
                rel="noreferrer"
              >
                {profile.cta.secondaryLabel}
              </a>
            </div>
          </div>

          <div className="fade-in rounded-[2rem] border border-white/10 bg-white/[0.06] p-1 shadow-[0_30px_120px_-50px_rgba(45,212,191,0.65)]">
            <div className="rounded-[calc(2rem-4px)] border border-white/10 bg-slate-900/80 p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-teal-300/15 text-3xl font-semibold text-teal-200">
                  SB
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Contact</p>
                  <p className="mt-2 text-sm font-medium text-white">{profile.phone}</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/5 px-4 py-4"
                  >
                    <span className="text-sm text-slate-300">{stat.label}</span>
                    <span className="text-lg font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-teal-300/15 bg-teal-300/10 px-4 py-5">
                <p className="text-sm uppercase tracking-[0.2em] text-teal-200/80">Based in</p>
                <p className="mt-2 text-lg font-semibold text-white">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
