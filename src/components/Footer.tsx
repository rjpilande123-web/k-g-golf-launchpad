import { Link } from "react-router-dom";
import footerLogo from "@/assets/footer-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

        {/* Contact */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Contact</h3>
          <div className="space-y-3 text-sm font-body text-muted-foreground">
            <p>Room 1605, Ho King Commercial Centre, 2-16 Fa Yuen Street, Mongkok, Kowloon, Hong Kong</p>
            <p><a href="mailto:inquiries@keepgoinggolf.com" className="hover:text-foreground transition-colors">inquiries@keepgoinggolf.com</a></p>
            <p><a href="tel:+85261588111" className="hover:text-foreground transition-colors">00852-61588111</a></p>
            <p><a href="tel:+85269917688" className="hover:text-foreground transition-colors">00852-69917688</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-body text-muted-foreground">© {new Date().getFullYear()} K&G Golf Fashion Co., Ltd. All rights reserved.</p>
        <img src={footerLogo} alt="K&G - Keep On Going" className="h-6 object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
