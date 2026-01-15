"use client";

import { useState, useEffect } from "react";
import { UserPlus, ScanLine, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Create Your Profile",
    description: "Register using your student ID and link your account to your assigned company.",
  },
  {
    icon: ScanLine,
    step: "Step 2",
    title: "Scan or Tap to Clock In",
    description: "Use the app to check in when you arrive at the office.",
  },
  {
    icon: Send,
    step: "Step 3",
    title: "Track & Submit",
    description: "Watch your hours grow and submit your logs for verification at the end of the week.",
  },
];

const HowItWorksSection = () => {
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
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative py-24 overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black dark:via-[#E07A7A]/5 dark:to-black light:bg-gradient-to-b light:from-[#E07A7A]/10 light:via-[#E07A7A]/15 light:to-[#E07A7A]/10" />

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
            How It <span className="text-[#E07A7A]">Works</span>
          </h2>
          <p className="dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl mx-auto">
            Get started in three simple steps. It&apos;s that easy!
          </p>
        </motion.div>

        {/* Steps - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Connector Line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#E07A7A]/50 to-[#E07A7A]/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                {/* Step Number Circle */}
                <motion.div 
                  className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#E07A7A] to-[#d06a6a] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#E07A7A]/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Step Label */}
                <span className="text-[#E07A7A] font-semibold text-sm mb-2">{item.step}</span>
                
                {/* Title */}
                <h3 className="dark:text-white light:text-gray-900 font-bold text-xl mb-3">{item.title}</h3>
                
                {/* Description */}
                <p className="dark:text-gray-400 light:text-gray-600 leading-relaxed max-w-xs">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#E07A7A] to-[#d06a6a] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#E07A7A]/30">
                  {(() => {
                    const IconComponent = steps[currentIndex].icon;
                    return <IconComponent className="w-10 h-10 text-white" />;
                  })()}
                </div>
                
                {/* Step Label */}
                <span className="text-[#E07A7A] font-semibold text-sm mb-2">{steps[currentIndex].step}</span>
                
                {/* Title */}
                <h3 className="dark:text-white light:text-gray-900 font-bold text-xl mb-3">{steps[currentIndex].title}</h3>
                
                {/* Description */}
                <p className="dark:text-gray-400 light:text-gray-600 leading-relaxed max-w-xs">{steps[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
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

export default HowItWorksSection;
