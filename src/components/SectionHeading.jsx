function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}

export default SectionHeading;
