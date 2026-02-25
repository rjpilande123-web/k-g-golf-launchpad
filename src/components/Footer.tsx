import { Link } from "react-router-dom";
import footerLogo from "@/assets/footer-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Shop */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Shop</h3>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li><Link to="/products?category=men" className="hover:text-foreground transition-colors">Men</Link></li>
            <li><Link to="/products?category=women" className="hover:text-foreground transition-colors">Women</Link></li>
            <li><Link to="/products?category=kids" className="hover:text-foreground transition-colors">Kids</Link></li>
            <li><Link to="/products?category=accessories" className="hover:text-foreground transition-colors">Accessories</Link></li>
            <li><Link to="/products?category=bags" className="hover:text-foreground transition-colors">Bags & Pouches</Link></li>
            <li><Link to="/products?category=golf-bags" className="hover:text-foreground transition-colors">Golf Bags</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Company</h3>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-foreground transition-colors">FAQs</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Follow Us</h3>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li><a href="https://www.facebook.com/GolfKNG" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/golfkng/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="https://x.com/GolfKNG" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X (Twitter)</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Stay Connected</h3>
          <p className="text-sm font-body text-muted-foreground mb-4">
            Subscribe for exclusive updates, new arrivals, and member-only offers.
          </p>
          <a href="#" className="text-sm font-body underline underline-offset-4 hover:text-muted-foreground transition-colors">
            Subscribe
          </a>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-xs font-body text-muted-foreground">
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          <Link to="/faqs" className="hover:text-foreground transition-colors">FAQs</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <img src={footerLogo} alt="K&G - Keep On Going" className="h-10 object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
