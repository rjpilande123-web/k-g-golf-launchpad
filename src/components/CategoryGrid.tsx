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
  Men: { name: "Men", image: productPolo },
  Women: { name: "Women", image: heroWomen },
  Kids: { name: "Kids", image: categoryKids },
  Accessories: { name: "Accessories", image: productAccessories },
  Bags: { name: "Bags", image: productBag },
};

export const apparelCategories = [allCategories.Men, allCategories.Women, allCategories.Kids];
export const gearCategories = [allCategories.Accessories, allCategories.Bags];

const CategoryGrid = ({ title, categories }: CategoryGridProps) => {
  return (
    <section className="py-16 px-6">
      <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
        {title}
      </h2>
      <div className={`max-w-[1400px] mx-auto grid grid-cols-${categories.length > 2 ? '3' : '2'} gap-4`}>
        {categories.map((cat) => (
          <a key={cat.name} href="#" className="group block">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-sm font-body tracking-widest uppercase">
              {cat.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
