import { Link } from "react-router-dom";
import Phone from "../assets/who-faster-is.png";
import "../App.css";

export default function CTA() {
  return (
    <section className="grid lg:grid-cols-2 bg-gradient-to-b from-secondary to-primary rounded-2xl px-8 sm:px-16 mb-12 gap-8 content-center lg:text-left sm:text-center">
      <div className="py-32 md:py-24">
        <h1 className="my-8 text-6xl text-bg-primary">
          Ready to get started with Faster?
        </h1>
        <p className="text-2xl text-bg-primary">
          Get access to a flexible line of credit you can draw, repay, and
          reuse. <br />
          Apply in minutes and only borrow what makes sense for you.
        </p>
        <div className="items-center gap-2 mt-8">
          <button className="btn-secondary-light mr-4">Contact Us</button>
          <button className="btn-primary-light">Apply Now</button>
        </div>
      </div>
      <div className="rounded-2xl flex items-bottom justify-center pt-8">
        <img
          src={Phone}
          alt="Faster dashboard"
          className="block w-full h-auto"
        />
      </div>
    </section>
  );
}
