"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    name: "Jay Marc Merilo",
    role: "Front-End Developer",
    github: "https://github.com/emarcj0-debug",
    linkedin: "www.linkedin.com/in/jay-marc-merilo-461aa6392",
  },
  {
    name: "Vince Carter Delostrico",
    role: "Full Stack Developer",
    github: "https://github.com/janesmith",
    linkedin: "www.linkedin.com/in/vince-carter-delostrico-78861b297",
  },
  {
    name: "Vincent Paul Lopez",
    role: "Backend Developer",
    github: "https://github.com/poruuuuu",
    linkedin: "https://linkedin.com/in/mikejohnson",
  },
  {
    name: "Laica Rose Gacura",
    role: "Project Manager",
    github: "https://github.com/sarahwilson",
    linkedin: "https://linkedin.com/in/sarahwilson",
  },
];

// Helper function to get initials from name
const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide on mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative py-24 overflow-hidden" id="team">
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
            Meet the <span className="text-[#E07A7A]">Team</span>
          </h2>
          <p className="dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl mx-auto">
            The passionate people behind InternTrack who make your OJT experience seamless.
          </p>
        </motion.div>

        {/* Team Grid - Desktop/Tablet */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br dark:from-gray-900/80 dark:to-gray-950/80 light:from-white light:to-gray-50 rounded-2xl border dark:border-gray-800 light:border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-[#E07A7A]/10 light:hover:shadow-[#E07A7A]/20 dark:hover:border-[#E07A7A]/50 light:hover:border-[#E07A7A]/50">
                {/* Initials Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-[#E07A7A] to-[#d06a6a] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <span className="text-white text-6xl font-bold">
                    {getInitials(member.name)}
                  </span>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - appear on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#E07A7A] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#E07A7A] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="dark:text-white light:text-gray-900 font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#E07A7A] text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Carousel - Mobile */}
        <div className="sm:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br dark:from-gray-900/80 dark:to-gray-950/80 light:from-white light:to-gray-50 rounded-2xl border dark:border-gray-800 light:border-gray-200 overflow-hidden">
                  {/* Initials Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-[#E07A7A] to-[#d06a6a] flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">
                      {getInitials(teamMembers[currentIndex].name)}
                    </span>
                    {/* Always visible overlay on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Social Links - always visible on mobile */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
                      <Link
                        href={teamMembers[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#E07A7A] transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </Link>
                      <Link
                        href={teamMembers[currentIndex].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#E07A7A] transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center">
                    <h3 className="dark:text-white light:text-gray-900 font-bold text-xl mb-1">
                      {teamMembers[currentIndex].name}
                    </h3>
                    <p className="text-[#E07A7A] text-sm font-medium">
                      {teamMembers[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
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

export default TeamSection;
