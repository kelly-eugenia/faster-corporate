import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToSection from "./utils/ScrollToSection";

import Home from "./pages/Home";
import About from "./pages/About";
import Fees from "./pages/Fees";
import Security from "./pages/Security";
import FAQ from "./pages/FAQ";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="fees" element={<Fees />}></Route>
        <Route path="security" element={<Security />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
