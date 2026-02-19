import { useState } from "react";
import { Menu, Search, Heart, User, ShoppingBag, X, ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  {
    label: "Products",
    href: "#",
    subcategories: [
      { label: "Men", href: "#men" },
      { label: "Women", href: "#women" },
      { label: "Kids", href: "#kids" },
      { label: "Accessories", href: "#accessories" },
      { label: "Bags", href: "#bags" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left: Menu + Search */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
              <span className="hidden sm:inline text-sm font-body tracking-widest uppercase">Menu</span>
            </button>
            <button className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
              <Search size={20} />
              <span className="hidden sm:inline text-sm font-body tracking-widest uppercase">Search</span>
            </button>
          </div>

          {/* Center: Logo */}
          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase">
            K&G
          </h1>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-sm font-body tracking-widest uppercase cursor-pointer hover:text-muted-foreground transition-colors">
              Contact Us
            </span>
            <Heart size={20} className="cursor-pointer hover:text-muted-foreground transition-colors" />
            <User size={20} className="cursor-pointer hover:text-muted-foreground transition-colors" />
            <div className="relative cursor-pointer hover:text-muted-foreground transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-2 text-[10px] font-body bg-accent text-accent-foreground rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/30 animate-fade-in"
            onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
          />
          {/* Drawer */}
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
                              <a
                                href={sub.href}
                                className="block px-10 py-3 text-sm font-body tracking-wider hover:bg-secondary transition-colors"
                                onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-6 py-4 text-sm font-body tracking-widest uppercase hover:bg-secondary transition-colors"
                      onClick={() => { setMenuOpen(false); setProductsOpen(false); }}
                    >
                      {item.label}
                    </a>
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
