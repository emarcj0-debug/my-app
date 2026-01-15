"use client";

import Image from "next/image";
import { Apple, PlayCircle, MapPin, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const DownloadSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="app">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black dark:via-[#E07A7A]/10 dark:to-black light:bg-gradient-to-br light:from-gray-50 light:via-[#E07A7A]/15 light:to-[#E07A7A]/10" />
      
      {/* Animated Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E07A7A]/20 rounded-full blur-3xl transform -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white light:text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to finish your internship{" "}
              <span className="text-[#E07A7A]">strong?</span>
            </motion.h2>
            <motion.p 
              className="dark:text-gray-400 light:text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join students using InternTrack for a stress-free OJT experience.
            </motion.p>
            
            {/* Download Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >

              <motion.button 
                className="flex items-center justify-center gap-2 bg-[#E07A7A] hover:bg-[#d06a6a] text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E07A7A]/20 to-transparent rounded-3xl blur-2xl" />
              
              {/* Main Phone */}
              <motion.div 
                className="relative w-72 h-[550px] bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 light:from-gray-200 light:to-gray-100 rounded-[3rem] border dark:border-gray-700 light:border-gray-300 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                
                <div className="w-full h-full rounded-[3rem] overflow-hidden p-3">
                  <div className="w-full h-full bg-gradient-to-br dark:from-[#E07A7A]/30 dark:to-black light:from-[#E07A7A]/35 light:to-white rounded-[2.5rem] flex flex-col p-6">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                          <Image 
                            src="/Images/Icon.png" 
                            alt="InternTrack Logo" 
                            width={32} 
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span className="dark:text-white light:text-gray-900 text-sm font-medium">InternTrack</span>
                      </div>
                    </div>

                    {/* Status Card */}
                    <div className="dark:bg-gray-800/60 light:bg-gray-200/80 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="dark:text-gray-400 light:text-gray-500 text-xs">Status</span>
                        <span className="text-[#E07A7A] text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> At Workplace
                        </span>
                      </div>
                      <h4 className="dark:text-white light:text-gray-900 font-medium">Clocked In</h4>
                      <p className="dark:text-gray-400 light:text-gray-500 text-xs mt-1">Since 8:00 AM</p>
                    </div>

                    {/* Progress Card */}
                    <div className="dark:bg-gray-800/60 light:bg-gray-200/80 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="dark:text-gray-400 light:text-gray-500 text-xs">Progress</span>
                        <span className="text-[#E07A7A] text-xs">65%</span>
                      </div>
                      <h4 className="dark:text-white light:text-gray-900 font-medium">325 / 500 Hours</h4>
                      <div className="w-full dark:bg-gray-700 light:bg-gray-300 rounded-full h-2 mt-3">
                        <motion.div 
                          className="bg-[#E07A7A] h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '65%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p className="dark:text-gray-400 light:text-gray-500 text-xs mt-2">175 hours remaining</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button className="bg-[#E07A7A] text-white py-2.5 rounded-xl text-sm font-medium">
                        Clock Out
                      </button>
                      <button className="dark:bg-gray-700 light:bg-gray-300 dark:text-white light:text-gray-900 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-1">
                        <FileCheck className="w-4 h-4" /> Report
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Phone (partially visible) */}
              <motion.div 
                className="absolute -right-12 top-20 w-56 h-[450px] bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 light:from-gray-200 light:to-gray-100 rounded-[2.5rem] border dark:border-gray-700 light:border-gray-300 shadow-2xl transform rotate-12 opacity-60"
                initial={{ opacity: 0, rotate: 20 }}
                whileInView={{ opacity: 0.6, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden p-2">
                  <div className="w-full h-full bg-gradient-to-br dark:from-[#E07A7A]/20 dark:to-black light:from-[#E07A7A]/25 light:to-white rounded-[2rem]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
