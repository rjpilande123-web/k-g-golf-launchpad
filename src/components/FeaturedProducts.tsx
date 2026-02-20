import { Heart } from "lucide-react";
import productsData from "@/data/products.json";

const imageModules = import.meta.glob(
  "@/assets/images/products/*",
  { eager: true, import: "default" }
) as Record<string, string>;

const imageMap: Record<string, string> = {};

Object.entries(imageModules).forEach(([path, url]) => {
  const filename = path.split("/").pop() as string;
  imageMap[filename] = url;
});

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  subcategory: string;
  status: string;
  colors: string[];
  hexcode: string[];
  images: string[];
}

const allProducts = productsData as Product[];

const getProductsByCategory = (category: string, count = 4) =>
  allProducts.filter((p) => p.category === category).slice(0, count);

interface ProductRowProps {
  title: string;
  subtitle: string;
  category: string;
  count?: number;
}

export const ProductRow = ({ title, subtitle, category, count = 4 }: ProductRowProps) => {
  const products = getProductsByCategory(category, count);

  if (products.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <p className="text-center text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-2">
        {subtitle}
      </p>
      <h2 className="font-heading text-3xl sm:text-4xl text-center mb-10">
        {title}
      </h2>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <a key={product.id} href="#" className="group block">
            <div className="relative overflow-hidden bg-white">
            <img
              src={imageMap[product.images[0]]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs font-body p-4 text-center">
                {product.name}
              </div>
              <button
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={18} />
              </button>
              {product.hexcode.length > 0 && (
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
            <p className="mt-3 text-sm font-body">{product.name}</p>
            <p className="text-sm font-body text-muted-foreground capitalize">{product.subcategory}</p>
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
};

const FeaturedProducts = () => null;
export default FeaturedProducts;
