import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, Search, X, ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    subcategories: [
      { label: "Men", href: "/products?category=men" },
      { label: "Women", href: "/products?category=women" },
      { label: "Kids", href: "/products?category=kids" },
      { label: "Accessories", href: "/products?category=accessories" },
      { label: "Bags", href: "/products?category=bags" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const active = scrolled || hovered;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          active ? "bg-white shadow-md" : "bg-transparent"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex font-body items-center gap-2 text-foreground hover:text-muted-foreground transition-colors uppercase text-xs ${
                active ? "" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <Menu size={20} /> menu
            </button>
          </div>

          <Link to="/" className={`font-body text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase ${active ? "" : "text-white"}`}>
            K&G
          </Link>

          <div className="flex items-center">
            <button className={`flex font-body items-center gap-2 text-foreground hover:text-muted-foreground transition-colors uppercase text-xs ${
                active ? "" : "text-white"
              }`}>
              <Search size={20} /> search
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-foreground/30 animate-fade-in"
            onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
          />
          <nav className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl animate-slide-in flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-heading text-lg font-semibold tracking-wider uppercase">K&G</span>
              <button
                onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto py-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.subcategories ? (
                    <>
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="w-full flex items-center justify-between px-6 py-4 text-sm font-body tracking-widest uppercase hover:bg-secondary transition-colors"
                      >
                        {item.label}
                        {productsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {productsOpen && (
                        <ul className="bg-secondary/50">
                          {item.subcategories.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.href}
                                className="block px-10 py-3 text-sm font-body tracking-wider hover:bg-secondary transition-colors"
                                onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-6 py-4 text-sm font-body tracking-widest uppercase hover:bg-secondary transition-colors"
                      onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
