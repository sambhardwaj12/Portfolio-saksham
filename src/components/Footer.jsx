import Container from './Container';

function Footer({ name }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{name}.</p>
        <p>Built with React, Vite, Tailwind CSS, and JavaScript.</p>
      </Container>
    </footer>
  );
}

export default Footer;
