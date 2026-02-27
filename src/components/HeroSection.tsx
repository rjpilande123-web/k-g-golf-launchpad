import video from "@/assets/video/hero-video.mp4";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Header/>
      <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={video}
        />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-sm font-body tracking-[0.3em] uppercase text-primary-foreground/80 mb-3">
          Spring/Summer 2026
        </p>
        <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-primary-foreground">
          The Fairway Collection
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
