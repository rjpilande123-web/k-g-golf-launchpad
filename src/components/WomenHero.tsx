import heroWomen from "@/assets/hero-women.jpg";

const WomenHero = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <img
        src={heroWomen}
        alt="K&G Women's Collection"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-3">
          Women
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
          Elegance on the Green
        </h2>
        <a
          href="#"
          className="text-sm font-body tracking-widest uppercase text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default WomenHero;
