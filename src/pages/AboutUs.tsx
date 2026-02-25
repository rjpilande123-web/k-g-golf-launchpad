import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="px-6 py-20 max-w-[900px] mx-auto text-center">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
          <h1 className="font-heading text-4xl sm:text-5xl mb-8">About Us</h1>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            K&G Golf Fashion Co., Ltd. is a diverse high-class fashion sports apparel for golf that was established in the year 2016. As one of the Top 3 leading high-class fashion sports apparel and accessories for golf, K&G has been satisfying golf enthusiasts with comfort and fashion through its diverse golf products not just in the Philippines but also abroad. As we strive to be trusted golf wear, K&G Golf aims to continue to be the leading choice for golf apparel worldwide, recognized for our commitment to quality, style, and performance.
          </p>
        </section>

        <div className="border-t border-border" />

        {/* Values */}
        <section className="px-6 py-20 max-w-[1200px] mx-auto">
          <h2 className="font-heading text-3xl text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Craftsmanship", desc: "We source only the finest micro polyester sports fabrics and polyurethane leathers, ensuring every product meets the highest standards of quality and durability." },
              { title: "Performance", desc: "Moisture-wicking, breathable, and lightweight — our apparel is engineered for comfort through 18 holes and beyond." },
              { title: "Style", desc: "From bold patterns to timeless classics, our designs let you express yourself while maintaining the refined aesthetic the sport deserves." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-heading text-xl mb-4">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Mission */}
        <section className="px-6 py-20 max-w-[900px] mx-auto text-center">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Mission</p>
          <h2 className="font-heading text-3xl mb-8">Keep on Going</h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            At K&G, we believe golf is more than a game — it's a lifestyle. Our mission is to equip every golfer with apparel and accessories that inspire confidence, enhance performance, and celebrate the spirit of the sport. From the first tee to the nineteenth hole, we're with you every step of the way.
          </p>
        </section>

        <div className="border-t border-border" />

        {/* Numbers */}
        <section className="px-6 py-20 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Products" },
              { num: "10+", label: "Collections" },
              { num: "5", label: "Categories" },
              { num: "100%", label: "Premium Quality" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl mb-2">{s.num}</p>
                <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
