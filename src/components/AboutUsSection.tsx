"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
    className="relative group"
  >
    <Card className="p-6 shadow-sm transition-colors hover:shadow-md bg-gray-900 border-gray-800">
      <div className="relative h-12 w-12 mx-auto">
        <Image
          src={`/icons/${icon}.svg`}
          alt={title}
          width={48}
          height={48}
          className="object-contain invert" // Inverted to make icons visible on dark background
        />
      </div>
      <p className="mt-4 text-center font-medium text-gray-300">{title}</p>
    </Card>
  </motion.div>
);

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const features = [
    { icon: "innovation", title: "Innovation" },
    { icon: "sustainability", title: "Sustainability" },
    { icon: "efficiency", title: "Efficiency" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <BackgroundAnimation />
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Why Choose KCIC AI Solutions?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            AI for sustainability, tailored to enhance operations and empower
            decision-making. Blend of cutting-edge technology with a commitment
            to environmental and business excellence.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.icon}
              initial="hidden"
              animate={animationControls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BackgroundAnimation = () => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    // Only access window on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (dimensions.width === 0) return null; // Don't render until we have dimensions

  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            transition: {
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
      ))}
    </div>
  );
};

export default AboutUsSection;
