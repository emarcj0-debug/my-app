"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import SupportModal from "./SupportModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const isNavigating = useRef(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Don't hide navbar while navigating to a section
    if (isNavigating.current) {
      isNavigating.current = false;
      return;
    }
    
    const previous = scrollY.getPrevious() ?? 0;
    
    // Show/hide based on scroll direction (only hide when scrolling down past 150px)
    if (latest > previous && latest > 150 && (latest - previous) > 5) {
      setVisible(false);
    } else if (latest < previous) {
      setVisible(true);
    }
    
    // Shrink navbar after scrolling 50px
    setIsScrolled(latest > 50);
  });

  const handleNavClick = () => {
    isNavigating.current = true;
    setVisible(true);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Guide", href: "#how-it-works" },

  ];

  return (
    <motion.nav 
      className="fixed top-4 inset-x-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: visible ? 0 : -100, 
        opacity: visible ? 1 : 0 
      }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className={`flex items-center justify-between backdrop-blur-md border transition-colors ${
          isScrolled 
            ? "px-25 py-3 rounded-full dark:bg-black/80 dark:border-gray-700 light:bg-white/80 light:border-gray-300 shadow-lg dark:shadow-black/20 light:shadow-gray-400/20" 
            : "mx-10 sm:mx-10 lg:mx-8 px-4 sm:px-6 py-3 rounded-2xl dark:bg-black/90 dark:border-gray-800 light:bg-white/90 light:border-gray-200"
        }`}
        initial={false}
        animate={{
          width: isScrolled ? "auto" : "calc(100vw - 6rem)",
          maxWidth: isScrolled ? "1670px" : "1600px",
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mr-10" onClick={handleNavClick}>
            <motion.div 
              whileHover={{ rotate: 10 }} 
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image 
                src="/Images/Icon3.png" 
                alt="InternTrack Logo" 
                width={36} 
                height={36}
                className="rounded-lg light:invert"
              />
            </motion.div>
            <AnimatePresence mode="wait">
              {!isScrolled && (
                <motion.span 
                  className="dark:text-white light:text-gray-900 font-bold text-lg"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  InternTrack
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isScrolled ? "gap-14" : "gap-10"}`}>
  {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="dark:text-gray-300 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors text-sm font-medium relative group"
                  onClick={handleNavClick}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E07A7A] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`hidden md:flex items-center gap-10 ${isScrolled ? "ml-12" : "ml-8"}`}>
            <AnimatePresence mode="wait">
              {!isScrolled && (
                <motion.button 
                  className="dark:text-gray-300 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => setIsSupportOpen(true)}
                >
                  Support
                </motion.button>
              )}
            </AnimatePresence>
            <motion.button 
              className={`bg-[#E07A7A] hover:bg-[#d06a6a] text-white font-medium ${
                isScrolled ? "px-4 py-2 rounded-full text-sm" : "px-4 py-2 rounded-lg text-sm"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              Download 
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden dark:text-white light:text-gray-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute top-20 left-4 right-4 p-4 rounded-2xl backdrop-blur-md border dark:bg-black/95 dark:border-gray-800 light:bg-white/95 light:border-gray-200"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="dark:text-gray-300 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors text-sm font-medium block py-1"
                      onClick={() => {
                        setIsOpen(false);
                        handleNavClick();
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t dark:border-gray-800 light:border-gray-200">
                  <button 
                    className="dark:text-gray-300 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors text-sm font-medium text-left py-1"
                    onClick={() => {
                      setIsOpen(false);
                      setIsSupportOpen(true);
                    }}
                  >
                    Support
                  </button>
                  <button className="bg-[#E07A7A] hover:bg-[#d06a6a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-fit">
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Support Modal */}
        <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
