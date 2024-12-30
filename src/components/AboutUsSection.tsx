"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useInView } from "framer-motion";

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
    <Card className="p-6 shadow-sm transition-colors hover:shadow-md">
      <div className="relative h-12 w-12 mx-auto">
        <Image
          src={`/icons/${icon}.svg`}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <p className="mt-4 text-center font-medium">{title}</p>
    </Card>
  </motion.div>
);

const AboutUsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: "innovation", title: "Innovation" },
    { icon: "sustainability", title: "Sustainability" },
    { icon: "efficiency", title: "Efficiency" },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose KCIC AI Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI for sustainability, tailored to enhance operations and empower
            decision-making. Blend of cutting-edge technology with a commitment
            to environmental and business excellence.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.icon}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
