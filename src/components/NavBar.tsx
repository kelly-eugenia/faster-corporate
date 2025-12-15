import { Link, NavLink } from "react-router-dom";
import "../App.css";
import Logo from "../assets/logo-blue.svg";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "relative text-lg font-semibold text-text-primary \
    after:content-[''] after:absolute after:right-0 after:-bottom-0.5 \
    after:h-[2px] after:w-0 after:bg-secondary \
    after:transition-all after:duration-300 \
    hover:after:w-full hover:after:left-0",
    isActive ? "active" : "",
  ].join(" ");

export default function NavBar() {
  return (
    <div className="bg-bg-secondary rounded-2xl w-full mx-auto flex items-center justify-between px-16 h-16 lg:h-20">
      {/* Logo */}
      <NavLink to="/">
        <img className="w-48 object-center" src={Logo} alt="Faster Logo" />
      </NavLink>

      {/* Nav links */}
      <nav className="hidden gap-10 font-medium lg:flex">
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
        <button className="btn-secondary">
          <Link to="/login" className="font-medium text-primary">
            Log In
          </Link>
        </button>
        <button className="btn-primary">
          <Link to="/apply" className="font-medium text-bg-primary">
            Apply Now
          </Link>
        </button>
      </div>

      {/* Hamburger button */}
      <button className="inline-flex items-center justify-center rounded-md border border-white/40 p-1.5 lg:hidden">
        X
      </button>
    </div>
  );
}
