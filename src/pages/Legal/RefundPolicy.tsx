import SEO from "../../components/SEO";
import { useSEO } from "../../hooks/useSEO";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function RefundPolicy() {
  const seo = useSEO("refund-policy");

  return (
    <>
      <SEO
        title={seo?.title || "Refund Policy | Faster.com.au"}
        description={
          seo?.description ||
          "Understand when refunds may apply, how errors are handled, and what to do if you believe a payment was debited incorrectly."
        }
        ogTitle={seo?.ogTitle || "Refund Policy | Faster.com.au"}
        ogDescription={
          seo?.ogDescription ||
          "Understand when refunds may apply, how errors are handled, and what to do if you believe a payment was debited incorrectly."
        }
        canonicalUrl={seo?.canonicalUrl}
      />

      <NavBar />

      <div className="w-full max-w-[1440px] mx-auto py-4 px-6 sm:p-6 md:p-8">
        <section className="section-padding">
          <header className="bg-final-gradient rounded-2xl p-8 sm:p-12 lg:p-16 mt-8 sm:mt-12 md:mt-0 mb-12">
            <h1 className="my-6 md:my-8 text-4xl md:text-5xl lg:text-6xl font-bold text-center text-bg-primary">
              Refund Policy
            </h1>
          </header>

          <section className="xl:max-w-[1800px] max-w-6xl mx-auto mb-6 md:mb-12 space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl">
                Faster.com.au Refund Policy
              </h1>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl text-muted-primary">
                (Faster Financial Group Pty Ltd)
              </h2>
            </div>
            <ul className="ml-8 text-base sm:text-lg text-text-primary list-disc space-y-6">
              <li>
                All payments made towards your loan with Faster Financial Group
                Pty Ltd are non-refundable under all circumstances, except in
                certain circumstances detailed below.
              </li>
              <li>
                Faster.com.au reserves the right to not refund any payments that
                are correctly debited and in line with the customer’s
                contractual obligation, or provided to us where the customer has
                authorized us or our third-party providers to debit the payment.
              </li>
              <li>
                In the event that a customer considers a debit or payment to be
                fraudulent in nature, incorrectly debited, or an overpayment
                that is outside the contractual obligation, Faster.com.au may,
                at its discretion, refund or partially refund the relevant
                amount.
              </li>
              <li>
                To request a refund of a payment, the customer must submit a
                written request to Faster.com.au. The request will be considered
                in accordance with Faster.com.au’s Complaints and Disputes
                Resolution Statement, which can be found on our website.
              </li>
              <li>
                Please note that any refunds or partial refunds will be issued
                in accordance with Faster.com.au’s standard procedures and may
                take several business days to process.
              </li>
            </ul>
            <p>
              Thank you for choosing Faster Financial Group Pty Ltd for your
              financial needs. If you have any questions or concerns regarding
              our refund policy, please do not hesitate to contact our customer
              service team.
            </p>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
