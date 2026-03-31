import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToSection from "./utils/ScrollToSection";
import LiveChat from "./components/LiveChat";

import Invest from "./pages/Invest";

import "./App.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <ScrollToSection />
      <LiveChat />
      <Invest />
    </BrowserRouter>
  );
}
