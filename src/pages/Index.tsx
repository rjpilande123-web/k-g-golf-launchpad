import HeroSection from "@/components/HeroSection";
import CategoryGrid, { mainCategories } from "@/components/CategoryGrid";
import { ProductRow } from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />

        {/* Shop by Category */}
        <CategoryGrid title="Shop by Category" categories={mainCategories} />
        <div className="w-full h-screen bg-secondary"></div>

        {/* Apparel Highlights */}
        <ProductRow title="New This Season" subtitle="Apparel" category="men" />
        <div className="w-full h-screen bg-secondary"></div>

        {/* Accessories Highlights */}
        <ProductRow title="Complete Your Look" subtitle="Accessories" category="accessories" />
        <div className="w-full h-screen bg-secondary"></div>

        {/* Bags Highlights */}
        <ProductRow title="Carry in Style" subtitle="Bags" category="bags" />

        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
