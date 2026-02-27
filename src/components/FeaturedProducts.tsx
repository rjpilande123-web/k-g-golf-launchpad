import { Link } from "react-router-dom";
import productsData from "@/data/products.json";
import imageMap from "@/lib/productImages";

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
          <Link to={`/products/${product.id}`} key={product.id} className="group block">
            <div className="relative overflow-hidden bg-white">
            <img
              src={imageMap[product.images[0]]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs font-body p-4 text-center">
                {product.name}
              </div>
              {product.hexcode.length > 0 && (
                <div className="flex gap-1 p-2">
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
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to={`/products?category=${category}`}
          className="inline-block border border-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
        >
          See More
        </Link>
      </div>
    </section>
  );
};

const FeaturedProducts = () => null;
export default FeaturedProducts;
