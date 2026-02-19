import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid, { apparelCategories, gearCategories } from "@/components/CategoryGrid";
import { ProductRow } from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        {/* Apparel Categories */}
        <CategoryGrid title="Shop by Category" categories={apparelCategories} />

        {/* Men Highlights */}
        <ProductRow title="New This Season" subtitle="Men" category="men" />
        <div className="border-t border-border" />

        {/* Women Highlights */}
        <ProductRow title="Spring Essentials" subtitle="Women" category="women" />
        <div className="border-t border-border" />

        {/* Kids Highlights */}
        <ProductRow title="Junior Collection" subtitle="Kids" category="kids" />
        <div className="border-t border-border" />

        {/* Gear Categories */}
        <CategoryGrid title="Shop by Category" categories={gearCategories} />

        {/* Accessories Highlights */}
        <ProductRow title="Complete Your Look" subtitle="Accessories" category="accessories" />
        <div className="border-t border-border" />

        {/* Bags Highlights */}
        <ProductRow title="Carry in Style" subtitle="Bags" category="bags" />

        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
