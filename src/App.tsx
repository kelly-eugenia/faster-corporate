import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToSection from "./utils/ScrollToSection";
import LiveChat from "./components/LiveChat";

import Home from "./pages/Home";
import About from "./pages/About";
import Fees from "./pages/Fees";
import Security from "./pages/Security";

import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDesc from "./pages/JobDesc";
import Calculator from "./pages/Calculator";

import TnC from "./pages/Legal/TnC";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import RefundPolicy from "./pages/Legal/RefundPolicy";
import CreditGuide from "./pages/Legal/CreditGuide";

import ComingSoon from "./pages/ComingSoon";

import "./App.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <ScrollToSection />
      <LiveChat />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="fees" element={<Fees />}></Route>
        <Route path="security" element={<Security />}></Route>
        <Route path="careers" element={<Careers />}></Route>
        <Route path="/careers/:jobId" element={<JobDesc />} />

        <Route path="faq" element={<FAQ />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/calculator" element={<Calculator />} />

        <Route path="/terms-and-conditions" element={<TnC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/credit-guide" element={<CreditGuide />} />

        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}
