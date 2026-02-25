import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="px-6 py-16 max-w-[1200px] mx-auto">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">Get in Touch</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-center mb-4">Contact Us</h1>
          <p className="font-body text-base text-muted-foreground text-center max-w-[700px] mx-auto mb-16">
            Thank you for visiting our website! If you have any questions or inquiries, feel free to reach out to us using the contact information below.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Address */}
            <div className="border border-border p-8">
              <h2 className="font-heading text-lg mb-4 uppercase tracking-wider">Our Office</h2>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Room 1605, Ho King Commercial Centre, 2-16 Fa Yuen Street, Mongkok, Kowloon, Hong Kong
              </p>
              <div className="flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-body tracking-widest uppercase">
                <MapPin size={16} />
                Hong Kong
              </div>
            </div>

            {/* Email */}
            <div className="border border-border p-8">
              <h2 className="font-heading text-lg mb-4 uppercase tracking-wider">Email Us</h2>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:inquiries@keepgoinggolf.com"
                className="flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>

            {/* Phone */}
            <div className="border border-border p-8">
              <h2 className="font-heading text-lg mb-4 uppercase tracking-wider">Call Us</h2>
              <div className="font-body text-sm text-muted-foreground mb-6 space-y-1">
                <p>00852-61588111</p>
                <p>00852-69917688</p>
              </div>
              <a
                href="tel:+85261588111"
                className="flex items-center justify-center gap-2 border border-foreground px-6 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
