"use client";

import { useState, useEffect } from "react";
import { 
  MapPin, 
  Clock, 
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "Smart GPS Timekeeping",
    description: "Clock in and out only when you are at your designated workplace. Our geofencing technology ensures accurate, tamper-proof attendance logs.",
  },
  {
    icon: Clock,
    title: "Real-Time Hour Monitoring",
    description: "Stay on top of your requirements. View your total accumulated hours and see exactly how much time is left to complete your internship.",
  },
  {
    icon: FileText,
    title: "One-Click Reports",
    description: "Need to submit your DTR? Generate professional PDF attendance reports instantly and send them directly to your coordinator for approval.",
  },
];

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide on mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative py-24 overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black light:bg-gradient-to-b light:from-gray-50 light:via-white light:to-gray-50" />
      
      {/* Decorative Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E07A7A]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white light:text-gray-900">
            Key <span className="text-[#E07A7A]">Features</span>
          </h2>
          <p className="dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to track your internship hours efficiently and accurately.
          </p>
        </motion.div>

        {/* Features Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-gradient-to-br dark:from-gray-900/80 dark:to-gray-950/80 light:from-white light:to-[#E07A7A]/5 rounded-2xl border dark:border-gray-800 light:border-gray-200 dark:hover:border-[#E07A7A]/50 light:hover:border-[#E07A7A]/70 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[#E07A7A]/10 light:hover:shadow-[#E07A7A]/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-14 h-14 bg-[#E07A7A]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E07A7A]/30 transition-colors"
                whileHover={{ rotate: 10 }}
              >
                <feature.icon className="w-7 h-7 text-[#E07A7A]" />
              </motion.div>
              <h3 className="dark:text-white light:text-gray-900 font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="dark:text-gray-400 light:text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group p-8 bg-gradient-to-br dark:from-gray-900/80 dark:to-gray-950/80 light:from-white light:to-[#E07A7A]/5 rounded-2xl border dark:border-gray-800 light:border-gray-200"
              >
                <div className="w-14 h-14 bg-[#E07A7A]/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {(() => {
                    const IconComponent = features[currentIndex].icon;
                    return <IconComponent className="w-7 h-7 text-[#E07A7A]" />;
                  })()}
                </div>
                <h3 className="dark:text-white light:text-gray-900 font-semibold text-xl mb-3 text-center">
                  {features[currentIndex].title}
                </h3>
                <p className="dark:text-gray-400 light:text-gray-600 leading-relaxed text-center">
                  {features[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#E07A7A] w-8' 
                    : 'dark:bg-gray-600 light:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
