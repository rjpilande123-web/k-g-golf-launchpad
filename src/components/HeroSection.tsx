import heroImage from "@/assets/hero-golf.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <img
        src={heroImage}
        alt="K&G Golfing Apparel - Premium Golf Fashion"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-3">
          Spring/Summer 2026
        </p>
        <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-primary-foreground mb-4">
          The Fairway Collection
        </h2>
        <div className="flex items-center justify-center gap-6">
          <a
            href="#"
            className="text-sm font-body tracking-widest uppercase text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="text-sm font-body tracking-widest uppercase text-primary-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
