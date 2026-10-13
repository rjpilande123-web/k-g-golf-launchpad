import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import productsData from "@/data/products.json";
import logo from "@/assets/kng-logo.png";

const menuItems = [
  { label: "Order Now", href: "/products" },
  { label: "Personalization", href: "/contact" },
  { label: "Events", href: "/contact" },
  { label: "Collections", href: "/products" },
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [searchOpen]);

  const searchResults =
    query.trim().length > 1
      ? (productsData as any[])
          .filter(
            (p) =>
              p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.category.toLowerCase().includes(query.toLowerCase()) ||
              p.subcategory?.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 8)
      : [];

  // Prevent body scrolling when the mobile menu is open.
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  // Close overlays when navigating to another page.
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Always-transparent header */}
      <header className="absolute top-0 left-0 w-full z-[95] bg-gradient-to-b from-black via-black/70 to-transparent">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center">
            {/* Desktop menu */}
            {!isMobile ? (
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="flex items-center text-white transition-colors"
                    aria-label="Open menu"
                  >
                    <Menu size={22} />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="left"
                  className="z-[110] w-[400px] p-0 pt-6 bg-background"
                >
                  <div className="px-6 pb-4">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      <img
                        src={logo}
                        alt="K&G"
                        className="h-10 object-contain"
                      />
                    </Link>
                  </div>

                  <div className="w-full border-b"></div>

                  <MenuList onClose={() => setMenuOpen(false)} />
                </SheetContent>
              </Sheet>
            ) : (
              /* Mobile menu */
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center text-white transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>

          {/* Centered logo and brand name */}
          <Link
            to="/"
            className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={logo}
              alt="K&G"
              className="h-10 sm:h-12 object-contain"
            />

            <span className="hidden md:block text-5xl text-white">
              KEEP ON GOING
            </span>
          </Link>

          {/* Search button */}
          <div className="flex items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center text-white transition-colors"
              aria-label="Search"
            >
              <Search size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu overlay */}
      
      {/* Mobile full-screen menu overlay */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-[110] bg-background animate-fade-in flex flex-col overflow-y-auto">
          {/* Mobile menu header */}
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b px-6">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img
                src={logo}
                alt="K&G"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center p-2 text-foreground transition-colors hover:text-muted-foreground"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile menu links */}
          <MenuList onClose={() => setMenuOpen(false)} />
        </div>
      )}


      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/60 animate-fade-in"
            onClick={() => setSearchOpen(false)}
          />

          {/* Search panel */}
          <div className="absolute top-0 left-0 w-full bg-background shadow-lg animate-fade-in">
            <div className="max-w-[800px] mx-auto px-6 py-8">
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <Search
                  size={20}
                  className="text-muted-foreground shrink-0"
                />

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

                <button
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search results */}
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
                              <p className="text-sm font-body font-medium truncate">
                                {product.name}
                              </p>

                              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                                {product.category}
                              </p>
                            </div>

                            <p className="text-sm font-body shrink-0">
                              ₱{product.price}
                            </p>
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