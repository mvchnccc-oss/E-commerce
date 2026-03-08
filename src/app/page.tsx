"use client";

import Image from "next/image";
import heroimage from "@/../public/f7fb4d5395be91fabd9500896062f914.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="bg-linear-to-r p-0 md:p-5 from-emerald-50 to-white min-h-[60vh] flex items-center mb-0 md:mb-4">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span 
              className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full w-fit text-sm font-medium"
              variants={itemVariants}
            >
              Big Summer Sale 🔥 Up to 50% Off
            </motion.span>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold leading-tight text-gray-800"
              variants={itemVariants}
            >
              Discover Everything <br />
              You Need at <span className="text-emerald-600">ShopMart</span>
            </motion.h1>

            <motion.p 
              className="text-gray-600 text-lg max-w-lg"
              variants={itemVariants}
            >
              Shop the latest products with the best prices. Fast delivery,
              secure payment, and easy returns.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mt-4" variants={itemVariants}>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition duration-300"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/categories">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full transition duration-300"
                >
                  Browse Categories
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          >
            <Image
              src={heroimage}
              alt="Shopping"
              className="w-70 drop-shadow-2xl rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}