import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What sizes do you offer?",
    a: "We offer a wide range of sizes to accommodate all golfers, from XS to XXXL. Please refer to our size chart for detailed measurements.",
  },
  {
    q: "Do you offer customization or personalization services?",
    a: "Yes, we offer customization or personalization services.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes, we offer gift cards for purchase. They make the perfect gift for any golf enthusiast and giveaways to any golf tournament. Gift cards are available in various denominations and can be redeemed through partner ProShops. Please refer to the list of partner Pro Shops.",
  },
  {
    q: "Are your golf apparel items suitable for both men and women?",
    a: "Yes, we offer a diverse selection of golf apparel tailored for both men and women. Each item is designed with attention to fit, style, and performance for respective genders.",
  },
  {
    q: "How can I stay updated on new arrivals and special collections of golf apparel?",
    a: "You can follow us on social media platforms such as Facebook, where we regularly post updates on new arrivals, special collections, promotions, and more. Specifically, you can find us on our Facebook page named K&G Golf Fashion Co., Ltd, where we share the latest news and releases related to our products. Additionally, regularly visiting our website will keep you informed about the latest offerings.",
  },
  {
    q: "What materials are used in your golf apparel?",
    a: "We typically incorporate a variety of materials to provide comfort, performance, and style on the course. Materials used were Polyester and Spandex.",
  },
  {
    q: "Do you offer any warranty or guarantees on your golf apparel?",
    a: "We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, we accept returns within 30 days of purchase. Please ensure the items are unworn, unwashed, and in their original condition with tags attached.",
  },
  {
    q: "Do you offer any discounts or promotions for bulk purchases of golf apparel?",
    a: "Yes, we do offer discounts and promotions. Terms and conditions apply.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative bg-foreground text-background px-6 py-24">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-xs font-body tracking-[0.3em] uppercase opacity-60 mb-4">Help Center</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-base leading-relaxed opacity-70 max-w-[600px] mx-auto">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-6 py-20 max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="font-heading text-sm sm:text-base text-left hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-[800px] mx-auto bg-secondary/30 p-10 sm:p-14 text-center">
            <h2 className="font-heading text-2xl mb-4">Still have questions?</h2>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please reach out to our team.
            </p>
            <a
              href="/contact"
              className="inline-block border border-foreground px-8 py-3 text-sm font-body tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
