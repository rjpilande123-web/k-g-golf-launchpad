import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <section className="px-6 py-20 max-w-[900px] mx-auto">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
            Help Center
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-center mb-16">
            Frequently Asked Questions
          </h1>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-8">
                <h3 className="font-heading text-base mb-3">{faq.q}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
