"use client";

import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-[#E07A7A]/20 light:bg-gradient-to-br light:from-gray-50 light:via-[#E07A7A]/10 light:to-[#E07A7A]/25" />
      
      {/* Animated Glow Effects */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#E07A7A]/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#E07A7A]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-26">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 dark:text-white light:text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master Your{" "}
              <span className="text-[#E07A7A]">Internship Hours.</span>
            </motion.h1>
            <motion.p 
              className="dark:text-gray-400 light:text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The smartest way to track your OJT attendance. Clock in with GPS accuracy, 
              monitor your progress, and generate reports instantly.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button 
                className="flex items-center justify-center gap-2 bg-[#E07A7A] hover:bg-[#d06a6a] text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App
              </motion.button>
            </motion.div>
            <motion.p 
              className="dark:text-gray-500 light:text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Available for Android.
            </motion.p>
          </motion.div>

          {/* Right Content - 3D Phone Mockup */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ perspective: "1500px" }}
          >
            <motion.div 
              className="relative"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, -3, 0, 3, 0],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Phone Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/30 dark:bg-black/50 rounded-full blur-2xl" />
              
              {/* 3D Phone Frame */}
              <motion.div 
                className="relative w-[280px] h-[580px] rounded-[3rem] p-[3px] bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900 shadow-2xl"
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: `
                    0 50px 100px -20px rgba(0, 0, 0, 0.5),
                    0 30px 60px -30px rgba(224, 122, 122, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
                whileHover={{ 
                  rotateY: -10,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Phone Bezel */}
                <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-br from-gray-900 via-black to-gray-900 p-2 overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
                  
                  {/* Phone Screen */}
                  <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />
                    
                    {/* App Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-6 pt-12">
                      {/* App Header */}
                      <motion.div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 overflow-hidden shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        style={{
                          boxShadow: "0 10px 40px rgba(224, 122, 122, 0.3)"
                        }}
                      >
                        <Image 
                          src="/Images/Icon.png" 
                          alt="InternTrack Logo" 
                          width={80} 
                          height={80}
                          className="object-cover"
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-white font-bold text-xl mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        InternTrack
                      </motion.h3>
                      <motion.p 
                        className="text-gray-400 text-sm mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                      >
                        OJT Attendance Tracker
                      </motion.p>
                      
                      {/* Mock UI Cards */}
                      <div className="w-full space-y-3">
                        <motion.div 
                          className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Today&apos;s Status</div>
                              <div className="text-[#E07A7A] text-sm font-semibold flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" /> Clocked In
                              </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#E07A7A]/20 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#E07A7A] animate-pulse" />
                            </div>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.3 }}
                        >
                          <div className="text-xs text-gray-400 mb-1">Progress</div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">127 / 500 hrs</div>
                            <div className="text-[#E07A7A] text-sm font-medium">25%</div>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                            <motion.div 
                              className="bg-gradient-to-r from-[#E07A7A] to-[#ff9a9a] h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "25%" }}
                              transition={{ delay: 1.5, duration: 1 }}
                            />
                          </div>
                        </motion.div>
                        
                        <motion.button 
                          className="w-full bg-gradient-to-r from-[#E07A7A] to-[#d06a6a] text-white py-3.5 rounded-2xl text-sm font-semibold shadow-lg"
                          style={{ boxShadow: "0 10px 30px rgba(224, 122, 122, 0.3)" }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Clock Out
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone Side Buttons */}
                <div className="absolute -right-[2px] top-28 w-[3px] h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute -right-[2px] top-44 w-[3px] h-12 bg-gray-700 rounded-l-sm" />
                <div className="absolute -left-[2px] top-36 w-[3px] h-16 bg-gray-700 rounded-r-sm" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -right-16 top-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E07A7A] to-[#d06a6a] shadow-xl flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 20px 40px rgba(224, 122, 122, 0.4)" }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -left-12 bottom-32 w-14 h-14 rounded-xl bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 light:from-white light:to-gray-100 shadow-xl flex items-center justify-center border dark:border-gray-700 light:border-gray-200"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Clock className="w-7 h-7 text-[#E07A7A]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
