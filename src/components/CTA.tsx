import { Link } from "react-router-dom";
import Phone from "../assets/dashboard-mobile.png";
import Background from "../assets/animated-background.webp";
import Pill from "../components/Pill";
import "../App.css";

export default function CTA() {
  return (
    <section className="px-8 sm:px-12 lg:px-16 xl:px-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-secondary to-primary rounded-2xl mb-12 gap-8 content-center lg:text-left sm:text-center">
        <div className="px-6 md:px-10 lg:px-16 py-12 md:py-24 content-center text-center lg:text-left">
          <Pill text="Join us and get faster" color="bg-primary" />
          <h1 className="mt-10 md:mt-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bg-primary">
            Ready to get started with Faster?
          </h1>
          <div className="items-center flex flex-wrap gap-x-2 gap-y-1 mt-6 sm:mt-10 justify-center lg:justify-start text-sm md:text-lg">
            <Link to="/contact" className="btn btn-secondary-light font-medium">
              Contact Us
            </Link>
            <Link
              to="/apply"
              className="btn bg-primary lg:bg-secondary hover:bg-secondary lg:hover:bg-accent text-bg-primary font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="pl-6 lg:pl-0 -mt-20 lg:-mt-0 rounded-2xl flex items-end justify-center lg:justify-end overflow-hidden">
          <div className="relative w-full lg:w-auto lg:max-h-[560px] 2xl:max-h-[640px] flex items-end lg:items-center">
            {/* Phone */}
            <img
              src={Phone}
              alt="Register for Faster"
              className="
                relative z-10
                w-full h-full
                object-contain 
                lg:scale-[1.05] origin-bottom
                2xl:scale-[0.92] 2xl:origin-center
              "
            />

            {/* Background */}
            <img
              src={Background}
              alt="Animated background"
              className="
                absolute inset-0
                w-full h-full
                object-contain lg:object-cover
                lg:scale-[1.05]
                origin-bottom
                pointer-events-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
