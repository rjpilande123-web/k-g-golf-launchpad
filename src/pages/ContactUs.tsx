import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative bg-foreground text-background px-6 py-24">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-xs font-body tracking-[0.3em] uppercase opacity-60 mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">Contact Us</h1>
            <p className="font-body text-base leading-relaxed opacity-70 max-w-[600px] mx-auto">
              Thank you for visiting our website! If you have any questions or inquiries, feel free to reach out to us using the contact information below.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="px-6 py-20 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-secondary/30 p-10 text-center group hover:bg-secondary/50 transition-colors">
              <div className="w-14 h-14 mx-auto mb-6 border border-foreground/20 flex items-center justify-center">
                <MapPin size={22} className="text-foreground/70" />
              </div>
              <h2 className="font-heading text-base uppercase tracking-wider mb-4">Our Office</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Room 1605, Ho King Commercial Centre,<br />
                2-16 Fa Yuen Street, Mongkok,<br />
                Kowloon, Hong Kong
              </p>
            </div>

            {/* Email */}
            <div className="bg-secondary/30 p-10 text-center group hover:bg-secondary/50 transition-colors">
              <div className="w-14 h-14 mx-auto mb-6 border border-foreground/20 flex items-center justify-center">
                <Mail size={22} className="text-foreground/70" />
              </div>
              <h2 className="font-heading text-base uppercase tracking-wider mb-4">Email Us</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                inquiries@keepgoinggolf.com
              </p>
            </div>

            {/* Phone */}
            <div className="bg-secondary/30 p-10 text-center group hover:bg-secondary/50 transition-colors">
              <div className="w-14 h-14 mx-auto mb-6 border border-foreground/20 flex items-center justify-center">
                <Phone size={22} className="text-foreground/70" />
              </div>
              <h2 className="font-heading text-base uppercase tracking-wider mb-4">Call Us</h2>
              <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-1">
                <p>00852-61588111</p>
                <p>00852-69917688</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="px-6 pb-20">
          <div className="max-w-[800px] mx-auto border-t border-b border-border py-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Clock size={18} className="text-muted-foreground" />
            <p className="font-body text-sm text-muted-foreground tracking-wide">
              Monday – Friday &nbsp;|&nbsp; 9:00 AM – 6:00 PM (HKT)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
