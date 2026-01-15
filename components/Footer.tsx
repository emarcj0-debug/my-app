"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative dark:bg-black light:bg-gray-100 border-t dark:border-gray-800 light:border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image 
                src="/Images/Icon3.png" 
                alt="InternTrack Logo" 
                width={40} 
                height={40}
                className="object-cover light:invert"
              />
            </motion.div>
            <span className="dark:text-white light:text-gray-900 font-bold text-xl">InternTrack</span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href={href} className="dark:text-gray-400 light:text-gray-500 hover:text-[#E07A7A] transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t dark:border-gray-800 light:border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="dark:text-gray-400 light:text-gray-500 text-sm">
            © 2025 InternTrack. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/privacy-policy" className="dark:text-gray-400 light:text-gray-500 dark:hover:text-white light:hover:text-gray-900 text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="dark:text-gray-600 light:text-gray-300">|</span>
            <Link href="/privacy-policy" className="dark:text-gray-400 light:text-gray-500 dark:hover:text-white light:hover:text-gray-900 text-sm transition-colors">
              Terms of Service
            </Link>
            <span className="dark:text-gray-600 light:text-gray-300">|</span>
            <Link href="#" className="dark:text-gray-400 light:text-gray-500 dark:hover:text-white light:hover:text-gray-900 text-sm transition-colors">
              Support Center
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
