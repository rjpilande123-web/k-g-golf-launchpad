import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Return Policy for K&G Golf Fashion Co., Ltd Apparel",
    content: "At K&G Golf Fashion Co., Ltd, we strive to provide our customers with high-quality golf apparel that exceeds expectations. However, if you're not entirely satisfied with your purchase, we're here to help.",
    isIntro: true,
  },
  {
    title: "Eligibility",
    content: "To be eligible for a return, your item must be unused, unworn, and in the same condition that you received it. Returns must be initiated within 30 days of the original purchase date.",
  },
  {
    title: "Refunds",
    content: "Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your return is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 days.",
  },
  {
    title: "Exchanges",
    content: "If you need to exchange an item for a different size or color, please contact us to arrange the exchange. Exchanges are subject to availability.",
  },
  {
    title: "Shipping",
    content: "Customers are responsible for paying the shipping costs associated with returning their item. Shipping costs are non-refundable.",
  },
  {
    title: "How to Initiate a Return",
    content: "To initiate a return, please contact our customer service team at mycie@golftime.ph / +63 995 396 4667. Our team will provide you with further instructions on how to proceed with your return.",
  },
  {
    title: "Damaged or Defective Items",
    content: "If you receive a damaged or defective item, please contact us immediately so that we can resolve the issue promptly.",
  },
  {
    title: "Final Sale Items",
    content: "Please note that final sale items are not eligible for return or exchange unless they are damaged or defective upon receipt.",
  },
  {
    title: "Contact Us",
    content: "If you have any questions about our return policy or need assistance with a return, please don't hesitate to contact us at mycie@golftime.ph / +63 995 396 4667. Thank you for choosing K&G Golf Fashion Co., Ltd. We appreciate your business and are committed to ensuring your satisfaction with every purchase.",
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative bg-foreground text-background px-6 py-24">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-xs font-body tracking-[0.3em] uppercase opacity-60 mb-4">Legal</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-20 max-w-[800px] mx-auto">
          {sections.map((section, i) => (
            <div key={i} className={`${i === 0 ? '' : 'mt-10'} ${section.isIntro ? 'pb-10 border-b border-border' : ''}`}>
              <h2 className={`font-heading ${section.isIntro ? 'text-xl' : 'text-base'} text-foreground mb-4`}>
                {!section.isIntro && (
                  <span className="text-muted-foreground/40 mr-3 font-body text-xs tracking-widest">
                    {String(i).padStart(2, '0')}
                  </span>
                )}
                {section.title}
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
