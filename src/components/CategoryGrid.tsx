import productPolo from "@/assets/product-polo.jpg";
import heroWomen from "@/assets/hero-women.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productBag from "@/assets/product-bag.jpg";

const categories = [
  { name: "Men", image: productPolo },
  { name: "Women", image: heroWomen },
  { name: "Kids", image: categoryKids },
  { name: "Accessories", image: productAccessories },
  { name: "Bags", image: productBag },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
        Shop by Category
      </h2>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
