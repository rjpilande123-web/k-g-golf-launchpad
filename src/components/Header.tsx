import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Menu, Search, X, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import productsData from "@/data/products.json";
import logo from "@/assets/kng-logo.png";

const menuItems = [
  { label: "Men", href: "/products?category=men" },
  { label: "Women", href: "/products?category=women" },
  { label: "Kids", href: "/products?category=kids" },
  { label: "Families", href: "/products?category=families" },
  { label: "Bags and Pouches", href: "/products?category=bags" },
  { label: "Golf Bags", href: "/products?category=golf-bags" },
  { label: "Accessories", href: "/products?category=accessories" },
  { label: "Gifts", href: "/products?category=gifts" },
  { label: "Customized", href: "/products?category=customized" },
  { label: "Casual", href: "/products?category=casual" },
  { label: "Inner Wear", href: "/products?category=inner-wear" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const imageModules = import.meta.glob(
  "@/assets/images/products/*",
  { eager: true, import: "default" }
) as Record<string, string>;

const imageMap: Record<string, string> = {};
Object.entries(imageModules).forEach(([path, url]) => {
  const filename = path.split("/").pop() as string;
  imageMap[filename] = url;
});

const MenuList = ({ onClose }: { onClose: () => void }) => (
  <nav className="flex-1 overflow-y-auto px-6 py-4">
    <ul>
      {menuItems.map((item) => (
        <li key={item.label}>
          <Link
            to={item.href}
            className="flex items-center justify-between py-4 text-sm font-body tracking-widest uppercase hover:text-muted-foreground transition-colors"
            onClick={onClose}
          >
            {item.label}
            <ChevronRight size={16} className="text-muted-foreground" />
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const isLanding = location.pathname === "/";

  const active = !isLanding || scrolled || hovered;

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [searchOpen]);

  const searchResults = query.trim().length > 1
    ? (productsData as any[]).filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.subcategory?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, isMobile]);

  const headerActive = active || (isMobile && menuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[95] transition-all duration-300 ${
          headerActive ? "bg-white shadow-md" : "bg-transparent"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            {/* Desktop: Sheet menu */}
            {!isMobile ? (
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className={`flex items-center transition-colors ${
                      headerActive ? "text-foreground" : "text-white"
                    }`}
                    aria-label="Open menu"
                  >
                    <Menu size={22} />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[400px] p-0 pt-6 bg-background">
                  <div className="px-6 pb-4">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      <img src={logo} alt="K&G" className="h-10 object-contain" />
                    </Link>
                  </div>
                  <MenuList onClose={() => setMenuOpen(false)} />
                </SheetContent>
              </Sheet>
            ) : (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex items-center transition-colors ${
                  headerActive ? "text-foreground" : "text-white"
                }`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={logo}
              alt="K&G"
              className="h-10 sm:h-12 object-contain"
            />
          </Link>

          <div className="flex items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className={`flex items-center transition-colors ${
                headerActive ? "text-foreground" : "text-white"
              }`}
              aria-label="Search"
            >
              <Search size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-screen Menu Overlay — renders below the fixed header */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 top-0 z-[90] bg-background pt-[72px] animate-fade-in flex flex-col overflow-y-auto">
          <MenuList onClose={() => setMenuOpen(false)} />
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-foreground/60 animate-fade-in"
            onClick={() => setSearchOpen(false)}
          />
          <div className="absolute top-0 left-0 w-full bg-background shadow-lg animate-fade-in">
            <div className="max-w-[800px] mx-auto px-6 py-8">
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <Search size={20} className="text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setSearchOpen(false);
                  }}
                  placeholder="Search products..."
                  className="flex-1 bg-transparent text-lg font-body outline-none placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                  <X size={20} />
                </button>
              </div>

              {query.trim().length > 1 && (
                <div className="mt-4 max-h-[60vh] overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <p className="text-center text-muted-foreground font-body py-8 text-sm">
                      No products found for "{query}"
                    </p>
                  ) : (
                    <ul className="divide-y divide-border">
                      {searchResults.map((product: any) => (
                        <li key={product.id}>
                          <Link
                            to={`/products/${product.id}`}
                            onClick={() => setSearchOpen(false)}
                            className="flex items-center gap-4 py-4 hover:bg-secondary/50 px-2 transition-colors"
                          >
                            <img
                              src={imageMap[product.images[0]]}
                              alt={product.name}
                              className="w-14 h-14 object-cover bg-secondary"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-body font-medium truncate">{product.name}</p>
                              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">{product.category}</p>
                            </div>
                            <p className="text-sm font-body shrink-0">₱{product.price}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
