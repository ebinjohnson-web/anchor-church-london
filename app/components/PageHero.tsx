type PageHeroProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro: string;
};

export default function PageHero({ index, label, title, intro }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="hero-orbit page-orbit-one" aria-hidden="true" />
      <div className="hero-orbit page-orbit-two" aria-hidden="true" />
      <div className="page-shell page-hero-grid">
        <p className="page-hero-index">{index}</p>
        <div>
          <p className="kicker light-kicker"><span /> {label}</p>
          <h1>{title}</h1>
        </div>
        <p className="page-hero-intro">{intro}</p>
      </div>
      <div className="page-hero-line" />
    </section>
  );
}
