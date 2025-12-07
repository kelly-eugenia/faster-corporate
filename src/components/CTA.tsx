import { Link } from "react-router-dom";
import "../App.css";
export default function CTA() {
  return (
    <section className="bg-primary rounded-2xl px-8 py-24 sm:px-16 md:py-16 mb-12 content-center text-center">
      <h1 className="my-8 text-6xl text-bg-primary">
        Ready to get started with Faster?
      </h1>
      <p className="text-2xl text-bg-primary">
        Get access to a flexible line of credit you can draw, repay, and reuse.{" "}
        <br />
        Apply in minutes and only borrow what makes sense for you.
      </p>
      <div className="items-center gap-2 mt-8">
        <button className="btn-secondary-light mr-4">Contact Us</button>
        <button className="btn-primary-light">Apply Now</button>
      </div>
    </section>
  );
}
