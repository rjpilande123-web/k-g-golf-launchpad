import HeroSection from "@/components/HeroSection";
import CategoryGrid, { mainCategories } from "@/components/CategoryGrid";
import { ProductRow } from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import kngBall from "@/assets/images/kng-golfball.png";
import kngBallMobile from "@/assets/images/kng-ball-mobile.jpg";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />

        <section className="w-full px-6 py-16 md:py-24 text-center bg-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
              Essentials for Your Game &amp; Style
            </h2>

            <p className="mx-auto max-w-3xl text-base md:text-2xl text-muted-foreground leading-relaxed">
              Golf apparels that combine style and performance, keeping
              you comfortable and ready for every game.
            </p>
          </div>
        </section>

        <section
          className="w-full min-h-screen bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url(${kngBallMobile})`,
          }}
          aria-label="K&G golf apparel background"
        />

        <section
          className="hidden w-full min-h-screen md:min-h-[1000px] bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: `url(${kngBall})`,
          }}
          aria-label="K&G golf apparel background"
        />

        <section className="w-full bg-white px-6 py-16 md:py-24">
          <div className="mx-auto max-w-5xl text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Functional &amp; Stylish
            </h2>

            {/* Desktop description */}
            <p className="hidden md:block mx-auto max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed">
              Golf apparels that combine style and performance, keeping
              you comfortable and ready for every game.
            </p>

            {/* Mobile description */}
            <p className="md:hidden mx-auto max-w-md text-base text-muted-foreground leading-relaxed">
              Discover style and performance that keeps you
              comfortable and on the go.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="/products"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] px-8 py-3 bg-black text-white font-semibold transition-colors hover:bg-neutral-800"
              >
                Discover
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] px-8 py-3 border border-black text-black font-semibold transition-colors hover:bg-black hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <ImageCarousel />

        {/* Shop by Category */}
        {/* <CategoryGrid title="Explore Our Collections" categories={mainCategories} />
        <div className="w-full h-screen bg-secondary"></div> */}

        {/* Apparel Highlights */}
        {/* <ProductRow title="New This Season" subtitle="Apparel" category="men" />
        <div className="w-full h-screen bg-secondary"></div> */}

        {/* Accessories Highlights */}
        {/* <ProductRow title="Complete Your Look" subtitle="Accessories" category="accessories" />
        <div className="w-full h-screen bg-secondary"></div> */}

        {/* Bags Highlights */}
        {/* <ProductRow title="Carry in Style" subtitle="Bags" category="bags" /> */}

        {/* <ServicesSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
