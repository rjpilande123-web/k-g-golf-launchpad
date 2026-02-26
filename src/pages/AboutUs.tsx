import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative bg-foreground text-background px-6 py-24">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-xs font-body tracking-[0.3em] uppercase opacity-60 mb-4">Our Story</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">About Us</h1>
            <p className="font-body text-base leading-relaxed opacity-70 max-w-[700px] mx-auto">
              K&G Golf Fashion Co., Ltd. is a diverse high-class fashion sports apparel for golf that was established in the year 2016. As one of the Top 3 leading high-class fashion sports apparel and accessories for golf, K&G has been satisfying golf enthusiasts with comfort and fashion through its diverse golf products not just in the Philippines but also abroad.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="px-6 py-20 max-w-[900px] mx-auto text-center">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Mission</p>
          <h2 className="font-heading text-3xl sm:text-4xl mb-8">Keep on Going</h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground">
            As we strive to be trusted golf wear, K&G Golf aims to continue to be the leading choice for golf apparel worldwide, recognized for our commitment to quality, style, and performance. At K&G, we believe golf is more than a game — it's a lifestyle. Our mission is to equip every golfer with apparel and accessories that inspire confidence, enhance performance, and celebrate the spirit of the sport.
          </p>
        </section>

        {/* Values */}
        <section className="bg-secondary/30 px-6 py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-3xl text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {[
                { num: "01", title: "Craftsmanship", desc: "We source only the finest micro polyester sports fabrics and polyurethane leathers, ensuring every product meets the highest standards of quality and durability." },
                { num: "02", title: "Performance", desc: "Moisture-wicking, breathable, and lightweight — our apparel is engineered for comfort through 18 holes and beyond." },
                { num: "03", title: "Style", desc: "From bold patterns to timeless classics, our designs let you express yourself while maintaining the refined aesthetic the sport deserves." },
              ].map((v) => (
                <div key={v.title} className="bg-background p-10 text-center">
                  <p className="font-heading text-4xl opacity-10 mb-4">{v.num}</p>
                  <h3 className="font-heading text-lg mb-4">{v.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="px-6 py-20 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Products" },
              { num: "10+", label: "Collections" },
              { num: "5", label: "Categories" },
              { num: "100%", label: "Premium Quality" },
            ].map((s) => (
              <div key={s.label} className="py-6">
                <p className="font-heading text-4xl sm:text-5xl mb-3">{s.num}</p>
                <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">{s.label}</p>
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
