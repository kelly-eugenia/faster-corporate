import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import LogoBlue from "../assets/logo-blue.svg";
import LogoWhite from "../assets/logo-white.svg";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrapperClasses = [
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-secondary text-white",
  ].join(" ");

  const mobileMenuClasses = [
    "lg:hidden overflow-hidden transition-all duration-300 bg-secondary text-bg-primary",
    mobileOpen
      ? "max-h-128 opacity-100 shadow-xl"
      : "max-h-0 opacity-0 pointer-events-none",
  ].join(" ");

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative text-lg font-medium text-bg-primary after:bg-bg-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0",
      isActive ? "active" : "",
    ].join(" ");

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative text-lg font-medium py-4 px-6 sm:px-12 text-bg-primary after:bg-bg-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 \
    hover:bg-primary/50",
      isActive ? "active" : "",
    ].join(" ");

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={wrapperClasses}>
      <div className="mx-auto flex h-16 sm:h-20 items-center justify-between px-6 sm:px-12 lg:px-12 xl:px-40">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center"
          onClick={handleMobileLinkClick}
        >
          <img
            className="h-6 sm:h-8 object-contain"
            src={LogoWhite}
            alt="Faster Logo"
          />
        </NavLink>

        {/* Nav links (desktop) */}
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

        {/* CTA buttons (desktop) */}
        <div className="hidden items-center gap-2 lg:flex">
          <button className="btn-secondary-light">
            <Link
              to="/login"
              className={["font-medium text-bg-primary"].join(" ")}
            >
              Log In
            </Link>
          </button>
          <button className="btn-primary">
            <Link to="/apply" className="font-medium text-bg-primary">
              Apply Now
            </Link>
          </button>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          className={[
            "inline-flex items-center justify-center rounded-md px-0 mx-0 lg:hidden text-bg-primary",
          ].join(" ")}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={mobileMenuClasses}>
        <div className="flex flex-col py-2">
          <NavLink
            to="/"
            className={mobileLinkClass}
            onClick={handleMobileLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={mobileLinkClass}
            onClick={handleMobileLinkClick}
          >
            About Us
          </NavLink>
          <NavLink
            to="/fees"
            className={mobileLinkClass}
            onClick={handleMobileLinkClick}
          >
            Fees
          </NavLink>
          <NavLink
            to="/security"
            className={mobileLinkClass}
            onClick={handleMobileLinkClick}
          >
            Security
          </NavLink>
        </div>

        <div className="my-4 px-6 sm:px-12 flex flex-col gap-2">
          <button className="btn-secondary-light my-2 w-full">
            <Link
              to="/login"
              className={[
                "block w-full text-center font-medium text-bg-primary",
              ].join(" ")}
              onClick={handleMobileLinkClick}
            >
              Log In
            </Link>
          </button>
          <button className="btn-primary mt-0 my-8 w-full">
            <Link
              to="/apply"
              className="block w-full text-center font-medium text-bg-primary"
              onClick={handleMobileLinkClick}
            >
              Apply Now
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
