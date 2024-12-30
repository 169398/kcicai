"use client"
import React from "react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="cta-section py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Ready to Revolutionize Your Business?
        </h2>
        <p className="mt-4 text-lg">
          Let’s build AI-powered solutions that align with your goals.
        </p>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          }}
          className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-lg"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default CallToActionSection;
