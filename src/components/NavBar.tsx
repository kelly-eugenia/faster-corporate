import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import LogoBlue from "../assets/logo-blue.svg";
import LogoWhite from "../assets/logo-white.svg";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // change as you like
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrapperClasses = [
    "fixed top-0 left-0 right-0 z-50 py-1 transition-colors duration-300",
    scrolled
      ? "bg-bg-secondary text-primary shadow-sm"
      : "bg-secondary text-white",
  ].join(" ");

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative text-lg font-semibold \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0",
      isActive ? "active" : "",
      scrolled
        ? "text-text-primary after:bg-secondary"
        : "text-bg-primary after:bg-bg-primary",
    ].join(" ");

  return (
    <header className={wrapperClasses}>
      <div className="flex h-16 lg:h-20 items-center justify-between px-6 sm:px-12 lg:px-40">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            className="h-7 sm:h-8 object-contain"
            src={scrolled ? LogoBlue : LogoWhite}
            alt="Faster Logo"
          />
        </NavLink>

        {/* Nav links */}
        <nav className="hidden gap-10 lg:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/fees" className={linkClass}>
            Fees
          </NavLink>
          <NavLink to="/security" className={linkClass}>
            Security
          </NavLink>
        </nav>

        {/* CTA buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            className={scrolled ? "btn-secondary" : "btn-secondary-light"}
          >
            <Link
              to="/login"
              className={[
                "font-medium",
                scrolled ? "text-primary" : "text-bg-primary",
              ].join(" ")}
            >
              Log In
            </Link>
          </button>
          <button className={scrolled ? "btn-primary" : "btn-primary"}>
            <Link to="/apply" className="font-medium text-bg-primary">
              Apply Now
            </Link>
          </button>
        </div>

        {/* Hamburger button */}
        <button className="inline-flex items-center justify-center rounded-md border border-current p-1.5 lg:hidden">
          X
        </button>
      </div>
    </header>
  );
}
