import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Logo from "../assets/lettermark.svg";

import "../App.css";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="w-full mx-auto">
        {/* Hero */}
        <section className="min-h-[100vh] content-center px-8 sm:px-12 lg:px-16 xl:px-40 bg-gradient-to-tr from-secondary to-primary">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.05,
            }}
            className="content-center text-center"
          >
            <div className="mb-16 rounded-2xl flex items-end justify-center h-full">
              <img
                className="block size-24 md:size-32"
                src={Logo}
                alt="Faster logo"
              />
            </div>

            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <h1 className="my-8 md:my-12 text-5xl md:text-7xl lg:text-8xl text-bg-primary">
                Coming Soon
              </h1>
            </motion.div>

            <p className="mb-4 md:mb-8 lg:mb-12 px-6 sm:px-12 md:px-24 text-bg-secondary text-lg sm:text-xl md:text-2xl font-medium">
              Hold tight, we are creating something amazing. We will launch our
              Faster platform soon!
            </p>

            <div className="space-x-4">
              <Link
                to="/home"
                className="btn btn-primary-light text-lg md:text-xl font-medium"
              >
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary-light text-lg md:text-xl font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
}
