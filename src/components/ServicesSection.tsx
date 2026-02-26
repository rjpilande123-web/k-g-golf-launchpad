import productBag from "@/assets/product-bag.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const services = [
  { title: "Custom Products", description: "Personalized golf apparel and accessories tailored to your specifications.", image: productBag },
  { title: "Gift Wrapping", description: "Signature gift packaging for every occasion.", image: productShoes },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <h2 className="font-heading text-3xl sm:text-4xl text-center mb-4">
        K&G Services
      </h2>
      <p className="text-center text-sm font-body text-muted-foreground mb-12 max-w-lg mx-auto">
        Expert advice, custom fitting, and exclusive personalization options.
      </p>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <a key={s.title} href="#" className="group block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center text-sm font-body tracking-widest uppercase">{s.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
