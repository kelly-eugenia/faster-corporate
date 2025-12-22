import { Link } from "react-router-dom";
import Phone from "../assets/animated-dashboard-mobile.gif";
import Pill from "../components/Pill";
import "../App.css";

export default function CTA() {
  return (
    <section className="px-8 sm:px-12 lg:px-16 xl:px-40">
      <div className="grid xl:grid-cols-2 bg-gradient-to-b from-secondary to-primary rounded-2xl mb-12 gap-8 content-center lg:text-left sm:text-center">
        <div className="px-6 md:px-10 lg:px-16 py-12 md:py-24 content-center text-center lg:text-left">
          <Pill text="Join us and get faster" color="bg-primary" />
          <h1 className="mt-10 md:mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bg-primary">
            Ready to get started with Faster?
          </h1>
          <div className="items-center flex flex-wrap gap-x-2 gap-y-1 mt-10 sm:mt-12 justify-center lg:justify-start text-sm md:text-lg">
            <button className="btn-secondary-light my-1">
              <Link to="/contact" className="font-medium text-bg-primary">
                Contact Us
              </Link>
            </button>
            <button className="btn-primary-light my-1">
              <Link to="/apply" className="font-medium text-bg-primary">
                Apply Now
              </Link>
            </button>
          </div>
        </div>
        <div className="pl-6 lg:pl-0 -mt-20 lg:-mt-0 rounded-2xl flex items-end justify-center lg:justify-end overflow-hidden">
          <img
            src={Phone}
            alt="Faster dashboard"
            className="block w-full h-auto lg:w-auto lg:h-full object-contain scale-100 lg:scale-[1.2] origin-bottom"
          />
        </div>
      </div>
    </section>
  );
}
