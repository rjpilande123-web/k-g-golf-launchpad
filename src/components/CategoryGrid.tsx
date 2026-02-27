import { Link } from "react-router-dom";
import productPolo from "@/assets/product-polo.jpg";
import heroWomen from "@/assets/hero-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productBag from "@/assets/product-bag.jpg";

interface CategoryGridProps {
  title: string;
  categories: { name: string; image: string }[];
}

const allCategories: Record<string, { name: string; image: string }> = {
  Apparel: { name: "Apparel", image: productPolo },
  Accessories: { name: "Accessories", image: productAccessories },
  Bags: { name: "Bags", image: productBag },
};

export const mainCategories = [allCategories.Apparel, allCategories.Accessories, allCategories.Bags];

const CategoryGrid = ({ title, categories }: CategoryGridProps) => {
  return (
    <section className="py-16 px-6">
      <h2 className="font-heading text-3xl text-center mb-12">
        {title}
      </h2>
      <div className={`max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4`}>
        {categories.map((cat) => (
          <Link key={cat.name} to={`/products?category=${cat.name.toLowerCase()}`} className="group block">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mt-3 text-center text-sm font-body tracking-widest uppercase">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
