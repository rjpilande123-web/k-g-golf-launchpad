import footerLogo from "@/assets/footer-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Help */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Help</h3>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Customer Service</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Stores</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">Services</h3>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Custom Fitting</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Personalization</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xs font-body tracking-[0.2em] uppercase mb-6 font-bold">About K&G</h3>
          <ul className="space-y-3 text-sm font-body text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
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
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
        </div>
        <img src={footerLogo} alt="K&G - Keep On Going" className="h-10 object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
