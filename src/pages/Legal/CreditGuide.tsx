import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function CreditGuide() {
  return (
    <>
      <NavBar />

      <div className="w-full mx-auto py-8">
        <section className="px-8 sm:px-12 lg:px-16 xl:px-40 pt-16 sm:pt-24 mx-auto">
          <header className="bg-gradient-to-b from-secondary to-primary rounded-2xl py-12 p-6 sm:p-12 lg:p-16 mb-12">
            <h1 className="my-6 md:my-8 text-5xl lg:text-6xl font-bold text-center text-bg-primary">
              Credit Guide
            </h1>
          </header>

          <section className="max-w-6xl mx-auto mb-6 md:mb-12 space-y-8">
            <div>
              <h1 className="text-4xl">Faster.com.au Credit Guide</h1>
              <h2 className="mt-2 text-3xl text-muted-primary">
                (Faster Financial Group Pty Ltd)
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-bold">
                The following are essential details covered in this Credit
                Guide:
              </p>
              <ul className="ml-8 text-lg text-text-primary list-disc">
                <li>
                  Our identity and contact information for easy communication.
                </li>
                <li>
                  Our primary responsibilities and requirements before
                  proceeding with a credit contract.
                </li>
                <li>
                  The steps to take in the event of a complaint and our approach
                  to resolving them efficiently.
                </li>
              </ul>
            </div>

            <h1 className="text-4xl">About Us</h1>
            <div className="space-y-4">
              <p>
                We are a licensed credit provider under the National Consumer
                Credit Protection Act 2009, and holder of Credit Representative
                CRN 549460 of Australian Credit Licence 569825
              </p>
              <p>
                <strong>Faster Financial Group Pty Ltd</strong> <br />
                Trading as “Faster.com.au”
                <br />
                ABN (“we”, “us”, “our”).
                <br />
                Website:{" "}
                <a
                  href="https://www.faster.com.au"
                  className="text-primary underline"
                >
                  www.faster.com.au
                </a>
                <br />
                Address: 302 Burwood Road, Hawthorn VIC 3122. POSTAL ADDRESS PO
                BOX 2224
                <br />
                Email:{" "}
                <a
                  href="mailto:support@faster.com.au"
                  className="text-primary underline"
                >
                  support@faster.com.au
                </a>
              </p>
            </div>

            <h1 className="text-4xl">Our Obligations and Your Rights</h1>
            <div className="space-y-4">
              <h1 className="text-2xl">
                Assessment of Unsuitability for a Credit Contract
              </h1>
              <div className="space-y-4">
                <p>
                  As Faster.com.au is a responsible lender, we have certain
                  obligations to ensure that the credit contract we offer is
                  suitable for you. Before we can provide credit, we are
                  required to assess whether the proposed contract is “not
                  unsuitable.” To do this, we must make reasonable inquiries to
                  determine whether the loan will meet your requirements and
                  objectives and whether you will be able to make the proposed
                  repayments. If our assessment shows that you will experience
                  substantial hardship in meeting the repayments or that the
                  loan will not meet your objectives and requirements, we will
                  be unable to offer you credit.
                </p>
                <p>
                  We are also required to take reasonable steps to verify your
                  financial situation, which may require you to provide us with
                  certain documents. We understand that this process may seem
                  cumbersome, but it is necessary to ensure that you are not
                  placed in a position of financial hardship by the credit
                  contract. As a responsible lender, we take our obligations to
                  you seriously and are committed to ensuring that the credit we
                  offer is suitable for your needs.
                </p>
              </div>

              <h1 className="text-2xl">Requesting a Copy of Our Assessment</h1>
              <div className="space-y-4">
                <p>
                  At any point before or within 7 years of the date of the
                  credit contract, you have the right to request a written copy
                  of our assessment without incurring any fee. If you request to
                  review our assessment within the first two years of the credit
                  contract, we will furnish you with a written copy within 7
                  business days after receiving your request. If you make the
                  request after two years, we will provide you with a written
                  copy within 21 business days after receiving your request.
                </p>
              </div>

              <h1 className="text-2xl">Charges and Fees</h1>
              <div className="space-y-4">
                <p>
                  We will charge fees in relation to the provision of credit to
                  you. The standard fee charged is an Establishment Fee (charged
                  at the settlement of your loan). Along with a monthly account
                  service fee. Additional fees may apply if you miss any
                  required loan repayments. Full details of these fees will be
                  disclosed in the credit contract issued to you on approval of
                  your loan application.
                </p>
              </div>

              <h1 className="text-2xl">Complaints or Disputes</h1>
              <div className="space-y-4">
                <p>
                  If you have any concerns or complaints about our services,
                  please let us know so that we can work towards a solution. Our
                  goal is to deal with complaints promptly, thoroughly, and
                  fairly. Here’s how to make a complaint and what you can expect
                  from the complaints process:
                </p>
                <ul className="ml-8 text-lg text-text-primary list-decimal">
                  <li>
                    The first step is to contact our complaints team by emailing{" "}
                    <a
                      href="mailto:support@faster.com.au"
                      className="text-primary underline"
                    >
                      support@faster.com.au
                    </a>
                    .
                  </li>
                  <li>
                    We may ask you for additional information and request that
                    you submit your complaint in writing so that we can
                    investigate the issue thoroughly.
                  </li>
                  <li>
                    If your complaint cannot be resolved immediately, we will
                    keep you informed of its progress and provide regular
                    updates until it is resolved.
                  </li>
                </ul>
              </div>

              <h1 className="text-2xl">Keeping You Updated</h1>
              <div className="space-y-4">
                <p>
                  Upon receipt of your complaint, our complaints team will
                  acknowledge it within one business day. If we are unable to
                  resolve the matter to your satisfaction within 10 business
                  days, we will send you a letter outlining the procedures we
                  will undertake to investigate and address your complaint. We
                  will provide you with an outcome of the investigation within
                  30 calendar days from the date on which you lodged the
                  complaint with us. In this communication, we will inform you
                  of our decision and the reasons behind it. In the event that
                  we require more time to complete the investigation, we will
                  inform you of the same.
                </p>
              </div>

              <h1 className="text-2xl">Still Not Happy</h1>
              <div className="space-y-4">
                <p>
                  If you are not satisfied with the outcome of our complaint
                  resolution process, you have the option to escalate the matter
                  to the relevant External Dispute Resolution Scheme at no cost
                  to you, provided it falls within the scheme’s terms of
                  reference. However, if our internal process is still underway,
                  the External Dispute Resolution Scheme may request that our
                  internal processes be completed before further considering the
                  matter. Our designated External Dispute Resolution Scheme
                  provider is the Australian Financial Complaints Authority,
                  which you can contact through the following details:
                </p>
                <ul className="ml-8 text-lg text-text-primary list-disc">
                  <li>Phone number: 1800 931 678</li>
                  <li>
                    Website:{" "}
                    <a
                      href="https://www.afca.org.au"
                      className="text-primary underline"
                    >
                      www.afca.org.au
                    </a>
                  </li>
                  <li>Mail: GPO Box 3, Melbourne Vic 3001</li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:info@afca.org.au"
                      className="text-primary underline"
                    >
                      info@afca.org.au
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <h1 className="text-4xl">Privacy</h1>
            <div className="space-y-4">
              <p>
                In order to provide our services, we will need to collect your
                personal information. However, we will only collect and use the
                minimum amount of information required to provide you with the
                finance you need. As a responsible financial services provider,
                we are dedicated to safeguarding the confidentiality and
                security of your personal information and complying with the
                Privacy Act 1988 (Cth). You can find the details of our privacy
                practices in our Privacy Policy, which is available on our
                website at{" "}
                <a href="/privacy-policy" className="text-primary underline">
                  https://faster.com.au/privacy-policy/
                </a>
              </p>
              <p>
                Please note that if you do not provide some or all of the
                requested personal information on our application form, we may
                not be able to process your application and provide you with a
                loan. We will not share your personal information with any third
                party, except in accordance with our Privacy Policy. We will
                always maintain control over the confidentiality of your
                personal information.
              </p>
            </div>

            <h1 className="text-4xl">Payments</h1>
            <div className="space-y-4">
              <p>
                We ONLY accept the following payment methods for repayment of
                our loans:
              </p>
              <ul className="ml-8 text-lg text-text-primary list-disc">
                <li>Debit Card</li>
                <li>PayID</li>
                <li>Direct Debit</li>
              </ul>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
