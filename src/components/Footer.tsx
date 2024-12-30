"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "facebook", url: "https://facebook.com", icon: Facebook },
  { name: "twitter", url: "https://twitter.com", icon: Twitter }, 
  { name: "linkedin", url: "https://linkedin.com", icon: Linkedin },
] as const;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const;

const Footer = () => {
  return (
    <footer className="py-10 bg-muted">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="relative w-6 h-6"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="text-center text-muted-foreground">
            <p>Contact Information: info@kcicai.com</p>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} KCIC AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
