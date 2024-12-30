"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CursorProps {
  variant?: "default" | "button" | "text" | "link";
}

export const Cursor: React.FC<CursorProps> = ({ variant = "default" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    window.addEventListener("mousemove", updatePosition);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.style.cursor = "auto";
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "2px solid rgba(255, 255, 255, 0.5)",
    },
    button: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.8)",
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference backdrop-blur-sm rounded-full"
          animate={{
            x: position.x - 16,
            y: position.y - 16,
            ...(cursorVariants[variant as keyof typeof cursorVariants] || cursorVariants.default),
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          initial={{ opacity: 0, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0 }}
        />
      )}
    </AnimatePresence>
  );
};
