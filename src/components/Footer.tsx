import { Phone, Mail, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

import kngLogo from "@/assets/footer-logo.jpg";
import philippinesFlag from "@/assets/images/philippines-flag.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#737373]">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 md:px-10 md:py-16">

        {/* Column 1: Help */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Help</h3>

          <div className="space-y-5 text-sm">
            <a
              href="tel:0085261588111"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <Phone size={18} className="mt-0.5 shrink-0" />
              <span>00852-61588111</span>
            </a>

            <a
              href="mailto:inquiries@keepgoinggolf.com"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <Mail size={18} className="mt-0.5 shrink-0" />
              <span className="break-all">
                inquiries@keepgoinggolf.com
              </span>
            </a>

            <div className="flex items-start gap-3">
              <Building2 size={18} className="mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                Room 1605, Ho King Commercial Centre,
                2-16 Fa Yuen Street, Mongkok, Kowloon,
                Hong Kong
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Services</h3>

          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/personalization"
                className="transition-colors hover:text-white"
              >
                Personalization
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="transition-colors hover:text-white"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Socials</h3>

          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Company Info */}
        <div>
          <h3 className="mb-6 text-lg font-bold">Company Info</h3>

          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/about"
                className="transition-colors hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="transition-colors hover:text-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="transition-colors hover:text-white"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#737373]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row md:px-10">
          {/* Country */}
          <div className="flex items-center gap-3 text-sm">
            <img
              src={philippinesFlag}
              alt="Philippines flag"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>Philippines</span>
          </div>

          {/* K&G Logo */}
          <Link to="/" aria-label="K&G Home">
            <img
              src={kngLogo}
              alt="K&G Keep On Going"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;