"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black light:bg-gradient-to-b light:from-gray-50 light:via-white light:to-gray-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white light:text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Simplify Your <span className="text-[#E07A7A]">OJT Experience</span>
        </motion.h2>
        <motion.p 
          className="dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          InternTrack eliminates the hassle of paper timesheets. Designed specifically for 
          interns and coordinators, our system ensures every minute of your hard work is 
          recorded accurately and verified securely. Focus on learning, not logging.
        </motion.p>
        
        {/* Quick Benefits */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {["GPS Verified", "Real-Time Tracking", "Instant Reports"].map((benefit, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-center gap-2 dark:text-gray-300 light:text-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-5 h-5 text-[#E07A7A]" />
              <span>{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
