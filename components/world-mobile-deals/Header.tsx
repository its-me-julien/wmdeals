"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


// Rotating banner text items
const rotatingTexts: string[] = [
  "No Contracts. No Catch.",
  "Built-in SIM Security.",
  "Unstoppable Coverage. Anywhere.",
  "Break Free from Big Wireless.",
  "Unlimited Calls. Unlimited Data.",
  "Privacy First. Always.",
  "A user-owned mobile network",
  "Not Just Another Carrier. A Revolution.",
];


export default function Header() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000); // Change text every 2 seconds instead of 3
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background text-foreground">

      {/* Hero Section */}
      <div className="relative isolate pt-12 sm:pt-16 lg:pb-4">
  <div className="py-12 sm:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
              {/* Headline */}
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
                World Mobile Phone Plan Deals
              </h1>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                Enjoy More Privacy, Best Coverage, and Staking Benefits
              </h2>

              {/* Subtext */}
              <p className="mt-6 text-lg leading-8 text-foreground">
                Traditional telecom companies trap you with contracts, hidden fees, and data tracking. At WM Deals, we showcase web3 mobile plans that deliver reliable connectivity anywhere in the USA, without compromising your privacy or security.
              </p>


                   {/* Rotating Text Banner (TypeScript Safe) */}
                   <div className="mt-6 h-10 flex justify-center items-center overflow-hidden text-foreground">
              <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-semibold text-lightGrey"
              >
                {rotatingTexts[index]}
              </motion.span>
            </AnimatePresence>

              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#plans"
                  className="rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary hover:text-black transition"
                >
                  View Plans
                </a>
              </div>

         

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
