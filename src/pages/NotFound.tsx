import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Illus from "../assets/404-page-not-found.png";

// Catch-all for any unmatched/mistyped/removed URL. Kept deliberately
// separate from ComingSoon (the "notify me" lead-capture page, now at its
// own /coming-soon URL) so a broken link never gets treated as, or competes
// in search results with, real marketing content.
export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Faster.com.au"
        description="The page you're looking for doesn't exist or may have moved."
        noindex
      />

      <NavBar />

      <div className="w-full max-w-[1440px] px-6 mx-auto">
        <section className="min-h-[80vh] content-center text-center">
          <img
            src={Illus}
            alt="404 Page Not Found"
            className="mt-8 mx-auto size-80"
          />

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Page not found
          </h1>
          <p className="text-lg md:text-xl text-muted-primary mb-8">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}
