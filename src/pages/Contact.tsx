import { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pill from "../components/Pill";

import "../App.css";

export default function Contact() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-primary px-12 py-6 mx-auto">
        <NavBar />
      </header>
      <div className="w-full lg:px-40 sm:px-12 mx-auto">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary to-primary rounded-2xl px-8 py-12 sm:px-16 md:py-24 mb-12 gap-8 content-center text-center">
          <Pill text="Contact us" color="bg-primary" />
          <h1 className="mt-12 my-8 text-6xl text-bg-primary">Get in touch</h1>
          <p className="text-2xl font-medium my-8 text-bg-primary">
            Whether you're looking for more information about our fees or need
            support with your account, we're just a message away.
          </p>
        </section>

        <section className="bg-bg-secondary lg:-mx-40 sm:-mx-12 pt-12 lg:px-40 sm:px-12 mb-12 gap-8 content-center">
          {/* Support */}
          <section className="py-12 mb-12 content-center text-center">
            <div className="mx-auto bg-bg-primary rounded-2xl grid place-items-center h-32 w-32 text-text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-16"
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>
            </div>

            <h1 className="mt-12 text-6xl">Still have unanswered questions?</h1>
            <p className="text-3xl font-medium mt-8">
              Email us anytime at{" "}
              <a
                href="mailto:support@faster.com.au"
                className="text-primary font-bold underline hover:text-secondary"
              >
                support@faster.com.au.
              </a>
            </p>

            <button className="mt-12 btn-primary">
              <Link to="/contact" className="font-medium text-bg-primary">
                Contact Us
              </Link>
            </button>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
