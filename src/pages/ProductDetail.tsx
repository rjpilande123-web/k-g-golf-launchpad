import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [descOpen, setDescOpen] = useState(true);
  const [careOpen, setCareOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 px-6 py-20 text-center">
          <h1 className="font-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/products" className="font-body text-sm underline">Back to Products</Link>
        </main>
        <Footer />
      </div>
    );
  }

  // When color changes, switch to that color's image
  const handleColorChange = (index: number) => {
    setSelectedColor(index);
    if (product.images[index]) {
      setSelectedImage(index);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="px-6 py-4 max-w-[1400px] mx-auto">
          <Link to="/products" className="inline-flex items-center gap-1 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Products
          </Link>
        </div>

        <div className="px-6 pb-20 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div>
            <div className="aspect-square overflow-hidden bg-white mb-4">
              <img
                src={imageMap[product.images[selectedImage]]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img src={imageMap[img]} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{product.id}</p>
            {product.status === "Trends" && (
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">NEW</p>
            )}
            <h1 className="font-heading text-2xl sm:text-3xl mb-6">{product.name}</h1>

            {/* Colors */}
            {product.hexcode.length > 1 && (
              <div className="mb-6">
                <p className="font-body text-xs tracking-widest uppercase mb-3">
                  Color: {product.colors[selectedColor]}
                </p>
                <div className="flex gap-2">
                  {product.hexcode.map((hex, i) => (
                    <button
                      key={i}
                      onClick={() => handleColorChange(i)}
                      className={`w-8 h-8 rounded-full border-2 transition-colors ${
                        selectedColor === i ? "border-foreground" : "border-border"
                      }`}
                      style={{ backgroundColor: hex }}
                      aria-label={product.colors[i]}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes[0] !== "NA" && product.sizes[0] !== "FS" && (
              <div className="mb-6">
                <p className="font-body text-xs tracking-widest uppercase mb-3">Select your size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm font-body transition-colors ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes[0] === "FS" && (
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-6">Free Size</p>
            )}

            {/* Add to Cart */}
            <button className="w-full bg-foreground text-background py-4 text-sm font-body tracking-widest uppercase hover:opacity-90 transition-opacity mb-3">
              Place in Cart
            </button>

            <div className="flex justify-center mb-8">
              <button className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Heart size={16} /> Add to Wishlist
              </button>
            </div>

            {/* Description Accordion */}
            <div className="border-t border-border">
              <button
                onClick={() => setDescOpen(!descOpen)}
                className="w-full flex items-center justify-between py-4 font-body text-sm tracking-widest uppercase"
              >
                Description
                {descOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {descOpen && (
                <p className="font-body text-sm text-muted-foreground leading-relaxed pb-4">
                  {product.description}
                </p>
              )}
            </div>

            <div className="border-t border-border">
              <button
                onClick={() => setCareOpen(!careOpen)}
                className="w-full flex items-center justify-between py-4 font-body text-sm tracking-widest uppercase"
              >
                Product Details
                {careOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {careOpen && (
                <div className="font-body text-sm text-muted-foreground pb-4 space-y-1">
                  <p>Type: {product.type}</p>
                  {product.material[0] && <p>Material: {product.material.join(", ")}</p>}
                  <p>Category: {product.category}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
