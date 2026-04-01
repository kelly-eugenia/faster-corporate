import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import LogoWhite from "../assets/logo-white.svg";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className="max-w-[2160px] mx-auto flex h-16 sm:h-20 items-center justify-between px-8 lg:px-40">
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
          <Link
            to="/login"
            className="btn btn-secondary-light text-base md:text-lg font-medium"
          >
            Log In
          </Link>
          <Link
            to="/apply"
            className="btn btn-primary text-base md:text-lg font-medium"
          >
            Apply Now
          </Link>
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

        <div className="px-6 sm:px-12 flex flex-col">
          <Link
            to="/login"
            className="w-full btn btn-secondary-light text-base md:text-lg font-medium"
            onClick={handleMobileLinkClick}
          >
            Log In
          </Link>
          <Link
            to="/apply"
            className="w-full mb-12 -mt-2 rounded-[8px] text-center py-3 btn-primary text-base md:text-lg font-medium"
            onClick={handleMobileLinkClick}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
