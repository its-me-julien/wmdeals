"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define the navigation structure
const navigation = [
  { name: "Plans", href: "#plans" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

// Rotating banner text items
const rotatingTexts: string[] = [
  "No Contracts. No Catch.",
  "Built-in SIM Security.",
  "Unstoppable Coverage. Anywhere.",
  "Break Free from Big Wireless.",
  "Unlimited Calls. Unlimited Data.",
  "Privacy First. Always.",
  "Not Just Another Carrier. A Revolution.",
];


export default function Header() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="flex items-center space-x-3">
              <Image src="/deals-logo.png" alt="World Mobile Deals" width={40} height={40} priority />
              <span className="text-lg font-semibold tracking-wide">World Mobile Deals</span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 hover:text-primary">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-24 sm:pt-32 lg:pb-40">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Headline */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                World Mobile Deals:<br />The Best Phone and Broadband Offers
              </h1>

              {/* Subtext */}
              <p className="mt-6 text-lg leading-8 text-lightGrey">
                Traditional telecom companies trap you with overpriced contracts, hidden fees, and data exploitation.
                World Mobile is breaking the cycle with two US nationwide phone plans and a Global Access plan—no contracts, no tracking.
                <br />
                <br />
                For those <span className="text-primary font-semibold">who refuse to be controlled.</span>
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#plans"
                  className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-primary hover:text-black transition"
                >
                  View Plans
                </a>
              </div>

              {/* Rotating Text Banner (TypeScript Safe) */}
              <div className="mt-6 h-10 flex justify-center items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl font-semibold text-primary"
                  >
                    {rotatingTexts[index]}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
