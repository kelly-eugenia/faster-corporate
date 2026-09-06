import React from "react";
import { Link } from "react-router-dom";

export interface FaqEntry {
  question: string;
  answer: React.ReactNode;
  keywords?: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  blurb: string;
  icon: React.ReactNode;
  faqs: FaqEntry[];
}

export const HOME_FAQS: FaqEntry[] = [
  {
    question: "What is Faster?",
    answer: (
      <>
        Faster offers a flexible Line of Credit you can draw from, repay, and
        reuse up to your approved limit. It's designed to help manage short-term
        cashflow, not as a long-term loan.
      </>
    ),
  },
  {
    question: "Do I need an account with Faster to use the service?",
    answer: (
      <>
        Yes. You'll need a Faster account to apply for our Line of Credit and
        manage your repayments. Your account gives you secure access to your
        application, contract, transaction history and support.
      </>
    ),
  },
  {
    question: "How much can I borrow with Faster?",
    answer: (
      <>
        Eligible customers may be approved for a Line of Credit of up to
        $10,000, subject to our lending criteria and your financial situation.
      </>
    ),
  },
  {
    question: "Are there any fees for using Faster?",
    answer: (
      <>
        Yes. The only cost while you're borrowing is interest at 47% p.a. on
        your outstanding balance, calculated daily. There's no establishment
        fee, monthly fee, redraw fee or early-repayment penalty. A 20% fee
        applies only if we need to redo a manual assessment of your account,
        never on your first loan. All terms are shown clearly in your credit
        contract before you sign.
        <div className="mt-3">
          <Link
            to="/fees"
            className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
          >
            See our fees →
          </Link>
        </div>
      </>
    ),
  },
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes. We use secure, industry-standard technology to protect your data,
        including encryption and strict access controls. We also comply with
        Australian credit and privacy laws and apply responsible-lending
        practices.
        <div className="mt-2">
          <Link
            to="/about#security"
            className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
          >
            See our security →
          </Link>
        </div>
      </>
    ),
  },
  {
    question: "How can I contact Faster for support or enquiries?",
    answer: (
      <>
        Email{" "}
        <a
          href="mailto:support@faster.com.au"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          support@faster.com.au
        </a>{" "}
        anytime (we reply within one business day), or start a live chat on our
        website or the platform when you're logged in. We're here to help with
        account access, repayments, fee questions, or anything else you're
        unsure about.{" "}
        <Link
          to="/contact"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          Contact us →
        </Link>
        .
      </>
    ),
  },
];

export const FEES_FAQS: FaqEntry[] = [
  {
    question: "How is interest calculated, day-by-day?",
    answer: (
      <>
        Each day, we take your outstanding balance, multiply by{" "}
        <code className="font-mono text-[13px] bg-bg-secondary px-1.5 py-0.5 rounded text-primary">
          47% ÷ 365
        </code>{" "}
        (≈ 0.1288% per day), and add that as accrued interest. We charge it
        against your balance once per repayment period. Interest stops the day
        your balance reaches $0, so paying anything extra immediately reduces
        the next day's interest charge.
      </>
    ),
  },
  {
    question: "Is there a fee when I first draw down?",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> Interest on the drawn
        amount starts accruing from the moment you draw; there's no drawdown
        fee, establishment fee, or setup charge.
      </>
    ),
  },
  {
    question:
      "What happens if my circumstances change and you need to reassess my account?",
    answer: (
      <>
        In most cases, nothing changes and you simply keep borrowing and
        repaying as normal. In specific circumstances set out in your credit
        contract, we may need to carry out a manual reassessment of your
        account. If that happens, a fee of 20% of your drawdown amount applies.{" "}
        <strong className="text-text-primary">
          It never applies to your first loan
        </strong>
        .
      </>
    ),
  },
  {
    question: "Are there any fees if I repay early or in full?",
    answer: (
      <>
        <strong className="text-text-primary">None.</strong> No early-repayment
        fee, no balance closeout fee, no minimum interest period. Pay any
        amount, any time, with no penalty, and you only pay interest for the
        days the balance was outstanding.
      </>
    ),
  },
  {
    question: "Why is my weekly repayment $55 regardless of how much I draw?",
    answer: (
      <>
        We use a fixed-amount repayment schedule so your per-period commitment
        stays predictable. Drawing more <em>extends</em> the time you'll spend
        repaying. It doesn't raise the repayment amount. You can always make
        extra repayments to clear it sooner.
      </>
    ),
  },
  {
    question: "What happens to the interest I'd have paid if I repay early?",
    answer: (
      <>
        You simply don't pay it. Interest only accrues on days you have an
        outstanding balance: repay early and the future days never happen.
        There's nothing to refund because we never charged it.
      </>
    ),
  },
  {
    question: "Where can I see all of this in writing before I commit?",
    answer: (
      <>
        Your full terms are set out in your Credit Contract, with the exact
        amounts and timings for your specific limit. You'll see the contract
        before you accept, never after.
      </>
    ),
  },
];

export const HIW_FAQS: FaqEntry[] = [
  {
    question: "How long does the whole thing actually take?",
    answer: (
      <>
        Most applications complete the same business day. The form itself takes
        about 5 minutes; credit assessment is usually done within a couple of
        hours during business hours. Weekend and evening applications are slower
        because human review waits for the next business morning.
      </>
    ),
  },
  {
    question: "Why do you need to read my bank statements?",
    answer: (
      <>
        To meet our responsible-lending obligations under the NCCP Act. We have
        to be reasonably confident the repayment fits your situation: that means
        seeing income regularity and existing commitments. We use a
        CDR-accredited open-banking partner with{" "}
        <strong className="text-text-primary">read-only</strong> access. We can
        never move money out of your account.
      </>
    ),
  },
  {
    question: "Does applying hurt my credit score?",
    answer: (
      <>
        No. Applying with us never leaves a footprint on your credit file and
        never affects your credit score.
      </>
    ),
  },
  {
    question: "Can I have more than one drawdown at once?",
    answer: (
      <>
        Yes, that's the point of a line of credit. As long as your outstanding
        balance plus the new draw stays within your approved limit, you can draw
        additional amounts whenever you need. There's no fee to draw, only daily
        interest on the outstanding balance.
      </>
    ),
  },
  {
    question: "What if my income drops after I'm approved?",
    answer: (
      <>
        Contact us{" "}
        <strong className="text-text-primary">
          before your next payment is due
        </strong>
        . We can pause, reduce, or restructure payments under a hardship
        arrangement while we sort it out. You can also call the National Debt
        Helpline on <strong className="text-text-primary">1800 007 007</strong>{" "}
        for free, independent advice that has nothing to do with us.
      </>
    ),
  },
  {
    question: "Can I close my line of credit and walk away?",
    answer: (
      <>
        Yes, anytime. Repay your outstanding balance in full, then ask us to
        close the account. No closeout fee, no exit fee, no minimum interest
        period. We retain your records for the period required by law (typically
        7 years for credit data) and that's it.
      </>
    ),
  },
  {
    question: "If I'm declined, can I reapply?",
    answer: (
      <>
        You can reapply after{" "}
        <strong className="text-text-primary">90 days</strong>, which is also
        the window across which we'd see a meaningful change in your
        bank-statement history. Reapplying inside 90 days is unlikely to change
        the outcome. Applications are assessed based on your financial
        circumstances. If hardship is the underlying reason, please use the NDH
        first.
      </>
    ),
  },
  {
    question:
      "Why does the same limit produce different repayment terms for different people?",
    answer: (
      <>
        The per-period repayment amount ($55 / $110 / $220 for weekly /
        fortnightly / monthly) is fixed for the product. What changes is the{" "}
        <strong className="text-text-primary">term</strong>: how many periods
        you'll be paying. Drawing more means a longer term, not a higher
        payment. You can always shorten it by paying extra.
      </>
    ),
  },
];

export const ABOUT_FAQS: FaqEntry[] = [
  {
    question: "Is Faster safe to use?",
    answer: (
      <>
        Yes. Faster is a registered Australian credit provider (
        <strong className="text-text-primary">ACL 569825</strong>), bound by the
        National Consumer Credit Protection Act and the Australian Privacy
        Principles. Our information security is independently certified to{" "}
        <strong className="text-text-primary">ISO 27001</strong> by Lloyd&apos;s
        Register, and we follow ASIC&apos;s RG 234 guidance on clear, fair
        advertising.
      </>
    ),
  },
  {
    question: "Can Faster move money from my bank account?",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> The bank connection
        used to assess your application is{" "}
        <strong className="text-text-primary">read-only</strong>. We can view
        transaction history, but we can never withdraw or transfer funds.
        Repayments happen only through the direct-debit arrangement you
        authorise separately, on the schedule set out in your contract.
      </>
    ),
  },
  {
    question: "How is my personal and financial information used?",
    answer: (
      <>
        Only to assess your application and operate your account, under the
        Australian Privacy Principles. We collect what we need (identity, income
        and expense history, credit information) and nothing we don&apos;t.{" "}
        <strong className="text-text-primary">
          We never sell or rent your data
        </strong>{" "}
        to marketers, affiliates or other lenders. Full detail is in our{" "}
        <a
          href="/privacy-policy"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          Privacy Policy
        </a>
        .
      </>
    ),
  },
  {
    question: "How will Faster contact me about security or account issues?",
    answer: (
      <>
        By email to the address on your account, and through secure messages
        once you&apos;re logged in.{" "}
        <strong className="text-text-primary">
          We&apos;ll never ask for your full banking password, card PIN, or
          one-time codes
        </strong>{" "}
        whether by email, phone or text. If a message asking for those claims to
        be from Faster, it isn&apos;t us; forward it to{" "}
        <a
          href="mailto:support@faster.com.au"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          support@faster.com.au
        </a>
        .
      </>
    ),
  },
  {
    question: 'What does "responsible lending" actually mean here?',
    answer: (
      <>
        Before we lend, we have to be reasonably satisfied the repayments fit
        your situation without causing substantial hardship. That means looking
        at your income regularity and existing commitments, and declining if the
        numbers don&apos;t support it.{" "}
        <a
          href="/how-it-works#check"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          See exactly what we check →
        </a>
      </>
    ),
  },
  {
    question: "What if I can't make a repayment?",
    answer: (
      <>
        Contact us before your payment is due. We can arrange a hardship plan
        while we sort it out. You can also call the{" "}
        <strong className="text-text-primary">
          National Debt Helpline on 1800 007 007
        </strong>{" "}
        for free, independent, confidential advice that has nothing to do with
        us.
      </>
    ),
  },
];

export const TOP_FAQS: FaqEntry[] = [
  {
    question: "What is Faster?",
    keywords:
      "australian digital credit provider one product revolving line of credit draw up to 10000 repay reuse without reapplying short-term cashflow",
    answer: (
      <>
        Faster is an Australian digital credit provider with one product: a{" "}
        <strong className="text-text-primary">revolving line of credit</strong>{" "}
        you can draw from when you need it, up to $10,000. Repay what you've
        drawn and the balance is ready to use again, without reapplying each
        time. It's designed to help manage short-term cashflow, not as a
        long-term loan.
      </>
    ),
  },
  {
    question: "How much can I borrow with Faster?",
    keywords:
      "approved limits up to 10000 individual circumstances responsible lending assessment draw what you need",
    answer: (
      <>
        Approved limits range up to{" "}
        <strong className="text-text-primary">$10,000</strong>. The limit you're
        offered depends on your individual circumstances and our
        responsible-lending assessment. You only ever draw (and pay for) what
        you actually need.
      </>
    ),
  },
  {
    question: "Are there any fees for using Faster?",
    keywords:
      "interest 47 percent outstanding balance daily no establishment monthly redraw early-repayment fee 20% manual reassessment drawdown amount never first loan credit contract",
    answer: (
      <>
        While you're borrowing, the only cost is{" "}
        <strong className="text-text-primary">
          47% p.a. interest on your outstanding balance
        </strong>
        , calculated daily. There's no establishment fee, monthly fee, redraw
        fee or early-repayment penalty. A 20% fee applies only if a manual
        reassessment of your account is ever needed, never on your first loan.
        Every cost is set out in your credit contract before you commit.{" "}
        <Link
          to="/fees"
          className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
        >
          See our fees →
        </Link>
      </>
    ),
  },
  {
    question: "Is Faster safe to use?",
    keywords:
      "registered australian credit provider acl 569825 national consumer credit protection act australian privacy principles iso 27001 lloyds register encryption",
    answer: (
      <>
        Yes. Faster is a registered Australian credit provider (
        <strong className="text-text-primary">ACL 569825</strong>), bound by the
        National Consumer Credit Protection Act and the Australian Privacy
        Principles. Our information security is independently certified to{" "}
        <strong className="text-text-primary">ISO 27001</strong> by Lloyd's
        Register.{" "}
        <Link
          to="/about#security"
          className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
        >
          See our security →
        </Link>
      </>
    ),
  },
  {
    question: "Do I need an account with Faster to use the service?",
    keywords:
      "account apply manage repayments secure access application contract transaction history support",
    answer:
      "Yes. You'll need a Faster account to apply for our Line of Credit and manage your repayments. Your account gives you secure access to your application, contract, transaction history and support.",
  },
  {
    question: "How can I contact Faster for support or enquiries?",
    keywords:
      "email support@faster.com.au one business day live chat anytime contact page account access repayments fee questions",
    answer: (
      <>
        Email{" "}
        <a
          href="mailto:support@faster.com.au"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          support@faster.com.au
        </a>{" "}
        anytime (we reply within one business day), or start a live chat on our
        website or the platform when you're logged in. We're here to help with
        account access, repayments, fee questions, or anything else you're
        unsure about.{" "}
        <Link
          to="/contact"
          className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
        >
          Contact us →
        </Link>
        .
      </>
    ),
  },
];

export const APPLY_FAQS: FaqEntry[] = [
  {
    question: "How do I apply?",
    keywords:
      "online application five minutes verify identity connect bank account income expenses choose limit full process",
    answer: (
      <>
        The online application takes about{" "}
        <strong className="text-text-primary">five minutes</strong>. You'll
        verify your identity, securely connect your bank account so we can
        confirm your income and expenses, and choose your limit.{" "}
        <Link
          to="/how-it-works"
          className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
        >
          See the full process →
        </Link>
      </>
    ),
  },
  {
    question: "What do I need to apply?",
    keywords:
      "australian resident aged 18 government-issued id 90 days regular income bank account in your name eligibility",
    answer: (
      <>
        You'll need to be an{" "}
        <strong className="text-text-primary">
          Australian resident aged 18+
        </strong>
        , have government-issued ID, at least 90 days of regular income, and a
        bank account in your name.
      </>
    ),
  },
  {
    question: "How long does approval take?",
    keywords:
      "most applications same-day decision approved contract signed drawdowns reach bank account same business day whole thing how long",
    answer: (
      <>
        Most applications get a{" "}
        <strong className="text-text-primary">same-day decision</strong>. The
        form itself takes about 5 minutes, and credit assessment is usually done
        within a couple of hours during business hours. Weekend and evening
        applications are slower because review waits for the next business
        morning. Once approved and your contract is signed, drawdowns typically
        reach your bank account the same business day.
      </>
    ),
  },
  {
    question: "Does applying hurt my credit score?",
    keywords:
      "never leaves footprint credit file never affects credit score eligibility apply",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> We don't run a credit
        check at any point in our process, so applying with us never leaves a
        footprint on your credit file and never affects your credit score.
      </>
    ),
  },
  {
    question: "Why do you need to read my bank statements?",
    keywords:
      "responsible lending nccp act income regularity existing commitments cdr-accredited open-banking read-only access never move money",
    answer: (
      <>
        To meet our responsible-lending obligations under the NCCP Act. We have
        to be reasonably confident the repayment fits your situation: that means
        seeing income regularity and existing commitments. We use a
        CDR-accredited open-banking partner with{" "}
        <strong className="text-text-primary">read-only</strong> access. We can
        never move money out of your account.
      </>
    ),
  },
  {
    question: "Which banks are supported by Faster?",
    keywords:
      "secure read-only connections major australian banks credit unions accredited bank-grade data standards network application",
    answer:
      "We support secure, read-only connections to all major Australian banks and most credit unions through accredited, bank-grade data standards. If your bank is part of the network, you'll see it during the application.",
  },
  {
    question: "Why might I be declined?",
    keywords:
      "responsible lending repayments fit situation substantial hardship verify identity income obligation declined",
    answer:
      "We're required to lend responsibly. If the repayments wouldn't fit your situation without causing substantial hardship, we won't approve the application, even if you ask. We may also decline if we can't verify your identity or income. It isn't personal; it's the obligation we're held to.",
  },
  {
    question: 'What does "responsible lending" actually mean here?',
    keywords:
      "reasonably satisfied repayments fit situation without substantial hardship income regularity existing commitments declining what we check",
    answer: (
      <>
        Before we lend, we have to be reasonably satisfied the repayments fit
        your situation without causing substantial hardship. That means looking
        at your income regularity and existing commitments, and declining if the
        numbers don't support it.{" "}
        <a
          href="/how-it-works#check"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          See exactly what we check →
        </a>
      </>
    ),
  },
  {
    question: "If I'm declined, can I reapply?",
    keywords:
      "reapply after 90 days meaningful change bank-statement history unlikely change outcome hardship national debt helpline",
    answer: (
      <>
        You can reapply after{" "}
        <strong className="text-text-primary">90 days</strong>, which is also
        the window across which we'd see a meaningful change in your
        bank-statement history. Reapplying inside 90 days is unlikely to change
        the outcome. Applications are assessed based on your financial
        circumstances. If hardship is the underlying reason, please use the
        National Debt Helpline first.
      </>
    ),
  },
];

export const CREDIT_FAQS: FaqEntry[] = [
  {
    question: "How does the Line of Credit work?",
    keywords:
      "approved limit draw repay reuse no new application lump sum personal loan open-ended credit card interest drawn outstanding",
    answer: (
      <>
        You're approved for a limit, then{" "}
        <strong className="text-text-primary">draw, repay, and reuse</strong> as
        you need, no new application each time. It isn't a one-off lump sum like
        a personal loan, and it isn't an open-ended credit card. You only pay
        interest on what you've actually drawn, for the days it's outstanding.
      </>
    ),
  },
  {
    question: "What does it cost?",
    keywords:
      "47 percent interest daily outstanding balance only cost no establishment monthly redraw early-repayment fee 20% manual reassessment drawdown amount never first loan credit contract",
    answer: (
      <>
        While you're borrowing, the only cost is{" "}
        <strong className="text-text-primary">47% p.a. interest</strong>{" "}
        calculated daily on your outstanding balance. There's no establishment,
        monthly, redraw or early-repayment fee. A 20% fee applies only if a
        manual reassessment of your account is ever needed, never on your first
        loan. Every cost is set out in your credit contract before you commit.{" "}
        <Link
          to="/fees"
          className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
        >
          Full fee breakdown →
        </Link>
      </>
    ),
  },
  {
    question: "How is interest calculated, day-by-day?",
    keywords:
      "outstanding balance multiply 47 divided 365 0.1288 percent per day accrued interest once per repayment period stops balance zero extra reduces",
    answer: (
      <>
        Each day, we take your outstanding balance, multiply by{" "}
        <code className="font-mono text-[13px] bg-bg-primary px-1.5 py-0.5 rounded text-primary">
          47% ÷ 365
        </code>{" "}
        (≈ 0.1288% per day), and add that as accrued interest. We charge it
        against your balance once per repayment period. Interest stops the day
        your balance reaches $0, so paying anything extra immediately reduces
        the next day's interest charge.
      </>
    ),
  },
  {
    question: "Is there a fee when I first draw down?",
    keywords:
      "no drawdown fee establishment fee setup charge interest drawn amount starts accruing moment you draw first loan",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> Interest on the drawn
        amount starts accruing from the moment you draw; there's no drawdown
        fee, establishment fee, or setup charge on your first loan.
      </>
    ),
  },
  {
    question:
      "What happens if my circumstances change and you need to reassess my account?",
    keywords:
      "most cases nothing changes keep borrowing repaying specific circumstances credit contract manual reassessment 20% drawdown amount never first loan",
    answer: (
      <>
        In most cases, nothing changes and you simply keep borrowing and
        repaying as normal. In specific circumstances set out in your credit
        contract, we may need to carry out a manual reassessment of your
        account. If that happens, a fee of 20% of your drawdown amount applies.{" "}
        <strong className="text-text-primary">
          It never applies to your first loan
        </strong>
        .
      </>
    ),
  },
  {
    question: "Can I repay early or in full?",
    keywords:
      "yes anytime no early-repayment penalty closeout fee minimum interest period calculated daily outstanding repaying early reduces what you pay",
    answer: (
      <>
        Yes, anytime, with{" "}
        <strong className="text-text-primary">
          no early-repayment penalty
        </strong>
        , no balance closeout fee and no minimum interest period. Because
        interest is calculated daily on what's outstanding, repaying early
        reduces what you pay. You only pay interest for the days the balance was
        outstanding. Repaid funds free up your limit to draw again later.
      </>
    ),
  },
  {
    question: "How do repayments come out?",
    keywords:
      "direct-debit arrangement you authorise schedule contract amount date in advance fixed 55 weekly 110 fortnightly extra repayments clear sooner",
    answer: (
      <>
        Through a{" "}
        <strong className="text-text-primary">
          direct-debit arrangement you authorise
        </strong>
        , on the schedule set out in your contract. We use a fixed per-period
        amount ($55 weekly, $110 fortnightly, or the monthly equivalent) so your
        commitment stays predictable. You'll always know the amount and date in
        advance, and you can make extra repayments anytime to clear the balance
        sooner.
      </>
    ),
  },
  {
    question: "Why is my repayment the same regardless of how much I draw?",
    keywords:
      "fixed-amount repayment schedule per-period commitment predictable drawing more extends term not raise amount extra repayments clear sooner 55 110",
    answer: (
      <>
        We use a fixed-amount repayment schedule so your per-period commitment
        stays predictable. Drawing more <em>extends</em> the time you'll spend
        repaying. It doesn't raise the repayment amount. You can always make
        extra repayments to clear it sooner.
      </>
    ),
  },
  {
    question: "Can I have more than one drawdown at once?",
    keywords:
      "yes point of line of credit outstanding balance plus new draw within approved limit additional amounts no fee to draw daily interest",
    answer: (
      <>
        Yes, that's the point of a line of credit. As long as your outstanding
        balance plus the new draw stays within your approved limit, you can draw
        additional amounts whenever you need. There's no fee to draw, only daily
        interest on the outstanding balance.
      </>
    ),
  },
  {
    question: "Can I increase my limit?",
    keywords:
      "request limit increase from account fresh responsible-lending assessment confirm fits circumstances approving change",
    answer:
      "You can request a limit increase from your account. It's subject to a fresh responsible-lending assessment, so we'll confirm it still fits your circumstances before approving any change.",
  },
  {
    question: "What if my income drops after I'm approved?",
    keywords:
      "contact before next payment due pause reduce restructure payments hardship arrangement national debt helpline 1800 007 007 free independent",
    answer: (
      <>
        Contact us{" "}
        <strong className="text-text-primary">
          before your next payment is due
        </strong>
        . We can pause, reduce, or restructure payments under a hardship
        arrangement while we sort it out. You can also call the National Debt
        Helpline on <strong className="text-text-primary">1800 007 007</strong>{" "}
        for free, independent advice that has nothing to do with us.
      </>
    ),
  },
  {
    question: "What if I can't make a repayment?",
    keywords:
      "contact before payment due hardship plan arrange struggling national debt helpline 1800 007 007 free independent confidential advice",
    answer: (
      <>
        Contact us before your payment is due. We can arrange a hardship plan
        while we sort it out. You can also call the{" "}
        <strong className="text-text-primary">
          National Debt Helpline on 1800 007 007
        </strong>{" "}
        for free, independent, confidential advice that has nothing to do with
        us.
      </>
    ),
  },
  {
    question: "Can I close my line of credit and walk away?",
    keywords:
      "yes anytime repay outstanding balance full close account no closeout exit fee minimum interest period records retained 7 years credit data",
    answer: (
      <>
        Yes, anytime. Repay your outstanding balance in full, then ask us to
        close the account. No closeout fee, no exit fee, no minimum interest
        period. We retain your records for the period required by law (typically
        7 years for credit data) and that's it.
      </>
    ),
  },
  {
    question: "Where can I see all of this in writing before I commit?",
    keywords:
      "full terms credit contract exact amounts timings specific limit see contract before you accept never after",
    answer: (
      <>
        Your full terms are set out in your Credit Contract, with the exact
        amounts and timings for your specific limit. You'll see the contract
        before you accept, never after.
      </>
    ),
  },
];

export const SECURITY_FAQS: FaqEntry[] = [
  {
    question: "Can Faster move money from my bank account?",
    keywords:
      "no bank connection read-only view transaction history never withdraw transfer funds direct-debit arrangement authorise separately schedule contract",
    answer: (
      <>
        <strong className="text-text-primary">No.</strong> The bank connection
        used to assess your application is{" "}
        <strong className="text-text-primary">read-only</strong>. We can view
        transaction history, but we can never withdraw or transfer funds.
        Repayments happen only through the direct-debit arrangement you
        authorise separately, on the schedule set out in your contract.
      </>
    ),
  },
  {
    question: "How is my personal and financial information used?",
    keywords:
      "assess application operate account australian privacy principles identity income expense credit information never sell rent data marketers affiliates lenders privacy policy",
    answer: (
      <>
        Only to assess your application and operate your account, under the
        Australian Privacy Principles. We collect what we need (identity, income
        and expense history, credit information) and nothing we don't.{" "}
        <strong className="text-text-primary">
          We never sell or rent your data
        </strong>{" "}
        to marketers, affiliates or other lenders. Full detail is in our{" "}
        <a
          href="/privacy-policy"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          Privacy Policy
        </a>
        .
      </>
    ),
  },
  {
    question: "How is my data protected?",
    keywords:
      "encryption in transit at rest layered access controls continuous monitoring iso 27001 certification lloyds register security audited",
    answer: (
      <>
        With encryption in transit and at rest, layered access controls, and
        continuous monitoring, all audited under our{" "}
        <strong className="text-text-primary">ISO 27001</strong> certification
        by Lloyd's Register.{" "}
        <Link
          to="/about#security"
          className="text-primary font-semibold border-b border-border-default hover:border-primary transition-colors"
        >
          More on our security →
        </Link>
      </>
    ),
  },
  {
    question: "How will Faster contact me about security or account issues?",
    keywords:
      "email address account secure messages logged in never ask full banking password card pin one-time codes phone text forward security@faster.com.au",
    answer: (
      <>
        By email to the address on your account, and through secure messages
        once you're logged in.{" "}
        <strong className="text-text-primary">
          We'll never ask for your full banking password, card PIN, or one-time
          codes
        </strong>{" "}
        whether by email, phone or text. If a message asking for those claims to
        be from Faster, it isn't us; forward it to{" "}
        <a
          href="mailto:support@faster.com.au"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          support@faster.com.au
        </a>
        .
      </>
    ),
  },
  {
    question: "Is Faster regulated?",
    keywords:
      "registered australian credit provider acl 569825 national consumer credit protection act privacy principles iso 27001 rg 234 verify asic register",
    answer: (
      <>
        Yes. Faster is a registered Australian credit provider (
        <strong className="text-text-primary">ACL 569825</strong>), bound by the
        National Consumer Credit Protection Act and the Australian Privacy
        Principles. Our information security is independently certified to{" "}
        <strong className="text-text-primary">ISO 27001</strong> by Lloyd's
        Register, and we follow ASIC's RG 234 guidance on clear, fair
        advertising. You can verify our licence on{" "}
        <a
          href="https://connectonline.asic.gov.au/RegistrySearch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold border-b border-bg-secondary hover:border-primary transition-colors"
        >
          ASIC's register
        </a>
        .
      </>
    ),
  },
];

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "top",
    label: "Top questions",
    blurb: "The things customers ask us most often.",
    icon: (
      <path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-3.8L6 21l1.5-7L2 9.5 9 9z" />
    ),
    faqs: TOP_FAQS,
  },
  {
    id: "apply",
    label: "Applying & approval",
    blurb: 'What happens from "Apply Now" to money in your account.',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13l2 2 4-4" />
      </>
    ),
    faqs: APPLY_FAQS,
  },
  {
    id: "credit",
    label: "Your Faster credit",
    blurb:
      "How the Line of Credit works, what it costs, and managing repayments.",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
    faqs: CREDIT_FAQS,
  },
  {
    id: "security",
    label: "Security & privacy",
    blurb: "How we protect your data, and what we can and can't do with it.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    faqs: SECURITY_FAQS,
  },
];
