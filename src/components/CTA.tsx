import { Link } from "react-router-dom";
import Phone from "../assets/animated-dashboard.gif";
import Pill from "../components/Pill";
import "../App.css";

export default function CTA() {
  return (
    <section className="grid xl:grid-cols-2 bg-gradient-to-b from-secondary to-primary rounded-2xl mb-12 gap-8 content-center lg:text-left sm:text-center">
      <div className="px-8 sm:px-16 py-32 md:py-24 content-center">
        <Pill text="Join us and get faster" color="bg-primary" />
        <h1 className="mt-24 my-8 lg:text-8xl text-6xl text-bg-primary">
          Ready to get started with Faster?
        </h1>
        <div className="items-center gap-2 mt-8">
          <button className="btn-secondary-light mr-4">Contact Us</button>
          <button className="btn-primary-light">Apply Now</button>
        </div>
      </div>
      <div className="rounded-2xl flex items-end justify-right">
        <img
          src={Phone}
          alt="Faster dashboard"
          className="block w-auto h-120 rounded-2xl object-contain"
        />
      </div>
    </section>
  );
}
