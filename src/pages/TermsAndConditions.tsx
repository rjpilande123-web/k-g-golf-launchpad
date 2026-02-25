import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="px-6 py-20 max-w-[900px] mx-auto">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
            Legal
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-center mb-16">
            Terms and Conditions
          </h1>

          <div className="space-y-10 font-body text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-heading text-lg text-foreground mb-4">
                Return Policy for K&G Golf Fashion Co., Ltd Apparel
              </h2>
              <p>
                At K&G Golf Fashion Co., Ltd, we strive to provide our customers with high-quality golf apparel that exceeds expectations. However, if you're not entirely satisfied with your purchase, we're here to help.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Eligibility</h3>
              <p>
                To be eligible for a return, your item must be unused, unworn, and in the same condition that you received it. Returns must be initiated within 30 days of the original purchase date.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Refunds</h3>
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your return is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 days.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Exchanges</h3>
              <p>
                If you need to exchange an item for a different size or color, please contact us to arrange the exchange. Exchanges are subject to availability.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Shipping</h3>
              <p>
                Customers are responsible for paying the shipping costs associated with returning their item. Shipping costs are non-refundable.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">How to Initiate a Return</h3>
              <p>
                To initiate a return, please contact our customer service team at{" "}
                <a href="mailto:mycie@golftime.ph" className="text-foreground underline underline-offset-4">mycie@golftime.ph</a>{" "}
                / <a href="tel:+639953964667" className="text-foreground underline underline-offset-4">+63 995 396 4667</a>. Our team will provide you with further instructions on how to proceed with your return.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Damaged or Defective Items</h3>
              <p>
                If you receive a damaged or defective item, please contact us immediately so that we can resolve the issue promptly.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Final Sale Items</h3>
              <p>
                Please note that final sale items are not eligible for return or exchange unless they are damaged or defective upon receipt.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-base text-foreground mb-3">Contact Us</h3>
              <p>
                If you have any questions about our return policy or need assistance with a return, please don't hesitate to contact us at{" "}
                <a href="mailto:mycie@golftime.ph" className="text-foreground underline underline-offset-4">mycie@golftime.ph</a>{" "}
                / <a href="tel:+639953964667" className="text-foreground underline underline-offset-4">+63 995 396 4667</a>. Thank you for choosing K&G Golf Fashion Co., Ltd. We appreciate your business and are committed to ensuring your satisfaction with every purchase.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
