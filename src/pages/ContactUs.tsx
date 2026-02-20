import { Phone, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="px-6 py-16 max-w-[1200px] mx-auto">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">Need Help?</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-center mb-4">Contact Us</h1>
          <p className="font-body text-base text-muted-foreground text-center max-w-[700px] mx-auto mb-16">
            Choose your preferred method of contact to connect with our Client Services team or find out more information through our FAQ page.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Call Us */}
            <div className="border border-border p-8">
              <h2 className="font-heading text-lg mb-4 uppercase tracking-wider">Call Us</h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Our Client Advisors are here to help, providing information on your inquiries and advice on your purchases.
              </p>
              <ul className="font-body text-sm text-muted-foreground mb-6 space-y-1">
                <li>Monday to Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 4pm</li>
              </ul>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>
            </div>

            {/* Chat With Us */}
            <div className="border border-border p-8">
              <h2 className="font-heading text-lg mb-4 uppercase tracking-wider">Chat With Us</h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Our Live Chat Client Advisors are available to assist:
              </p>
              <ul className="font-body text-sm text-muted-foreground mb-6 space-y-1">
                <li>Monday to Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 4pm</li>
              </ul>
              <button className="flex items-center justify-center gap-2 w-full border border-foreground px-6 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
                <MessageCircle size={16} />
                Start Chat
              </button>
            </div>

            {/* Email Us */}
            <div className="border border-border p-8">
              <h2 className="font-heading text-lg mb-4 uppercase tracking-wider">Email Us</h2>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Please complete this form to email us with any questions regarding accessibility, data privacy, or any other legal matters.
              </p>
              <div className="mb-6" />
              <a
                href="mailto:support@kandg.com"
                className="flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail size={16} />
                Send an Email
              </a>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* FAQ */}
          <section className="py-16">
            <h2 className="font-heading text-2xl mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-[800px]">
              {[
                { q: "What is your return policy?", a: "We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in original packaging." },
                { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery." },
                { q: "Do you offer custom fitting?", a: "Yes, we offer custom fitting services. Please contact our Client Advisors for more details." },
                { q: "Where are your products made?", a: "Our products are crafted using premium materials sourced globally, with quality control at every step." },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="font-heading text-base mb-2">{faq.q}</h3>
                  <p className="font-body text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
