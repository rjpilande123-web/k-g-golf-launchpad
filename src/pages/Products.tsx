import { useState } from "react";
import { Heart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productsData from "@/data/products.json";
import imageMap from "@/lib/productImages";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  subcategory: string;
  type: string;
  hexcode: string[];
  colors: string[];
  status: string;
  images: string[];
  sizes: string[];
  material: string[];
}

const allProducts = productsData as Product[];
const categories = ["all", "men", "women", "kids", "accessories", "bags"];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered = activeCategory === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="px-6 py-12 max-w-[1400px] mx-auto">
          <h1 className="font-heading text-4xl text-center mb-2">All Products</h1>
          <p className="text-center text-sm font-body text-muted-foreground tracking-widest uppercase mb-10">
            {activeCategory === "all" ? "Browse our full collection" : activeCategory}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams(cat === "all" ? {} : { category: cat })}
                className={`px-5 py-2 text-xs font-body tracking-widest uppercase border transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="group block">
                <div className="relative overflow-hidden bg-white aspect-square">
                  <img
                    src={imageMap[product.images[0]]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Add to wishlist"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart size={18} />
                  </button>
                  {product.hexcode.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-1">
                      {product.hexcode.slice(0, 4).map((hex, i) => (
                        <span
                          key={i}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {product.status === "Trends" && (
                  <p className="mt-3 text-xs font-body tracking-widest uppercase text-muted-foreground">NEW</p>
                )}
                <p className="mt-1 text-sm font-body">{product.name}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-muted-foreground py-20">No products found in this category.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
