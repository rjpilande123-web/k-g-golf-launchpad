import { Heart } from "lucide-react";
import productPolo from "@/assets/product-polo.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productAccessories from "@/assets/product-accessories.jpg";

interface Product {
  name: string;
  price: string;
  image: string;
}

const menProducts: Product[] = [
  { name: "Heritage Polo Shirt", price: "$185.00", image: productPolo },
  { name: "Tour Golf Shoes", price: "$320.00", image: productShoes },
  { name: "Premium Leather Belt", price: "$95.00", image: productAccessories },
  { name: "Performance Polo", price: "$165.00", image: productPolo },
];

const womenProducts: Product[] = [
  { name: "Cashmere Cardigan", price: "$280.00", image: productCardigan },
  { name: "Classic Golf Shoes", price: "$290.00", image: productShoes },
  { name: "Golf Accessories Set", price: "$120.00", image: productAccessories },
  { name: "Merino Pullover", price: "$240.00", image: productCardigan },
];

const ProductRow = ({ title: sectionTitle, subtitle, products }: { title: string; subtitle: string; products: Product[] }) => (
  <section className="py-16 px-6">
    <p className="text-center text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-2">
      {subtitle}
    </p>
    <h2 className="font-heading text-3xl sm:text-4xl text-center mb-10">
      {sectionTitle}
    </h2>
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product, i) => (
        <a key={i} href="#" className="group block">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <button
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
          <p className="mt-3 text-sm font-body">{product.name}</p>
          <p className="text-sm font-body text-muted-foreground">{product.price}</p>
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
