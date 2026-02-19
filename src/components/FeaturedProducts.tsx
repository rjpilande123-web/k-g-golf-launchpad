import { Heart } from "lucide-react";
import productsData from "@/data/products.json";

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  status: string;
  colors: string[];
  images: string[];
}

const menProducts = (productsData as Product[])
  .filter((p) => p.category === "men")
  .slice(0, 4);

const womenProducts = (productsData as Product[])
  .filter((p) => p.category === "women")
  .slice(0, 4);

const ProductRow = ({ title: sectionTitle, subtitle, products }: { title: string; subtitle: string; products: Product[] }) => (
  <section className="py-16 px-6">
    <p className="text-center text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-2">
      {subtitle}
    </p>
    <h2 className="font-heading text-3xl sm:text-4xl text-center mb-10">
      {sectionTitle}
    </h2>
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <a key={product.id} href="#" className="group block">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground text-xs font-body">
              {product.name}
            </div>
            <button
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
          <p className="mt-3 text-sm font-body">{product.name}</p>
          <p className="text-sm font-body text-muted-foreground">₱{product.price}</p>
        </a>
      ))}
    </div>
    <div className="text-center mt-8">
      <a
        href="#"
        className="inline-block border border-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
      >
        Shop Now
      </a>
    </div>
  </section>
);

const FeaturedProducts = () => {
  return (
    <>
      <ProductRow title="New This Season" subtitle="Men" products={menProducts} />
      <div className="border-t border-border" />
      <ProductRow title="Spring Essentials" subtitle="Women" products={womenProducts} />
    </>
  );
};

export default FeaturedProducts;
