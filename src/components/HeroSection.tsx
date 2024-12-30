"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 z-0" />

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform Your Business with{" "}
            <span className="text-primary">AI-Driven Solutions</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Introducing KCIC AI Solutions: Your Partner in Sustainability and
            Innovation
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              variant="default"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
