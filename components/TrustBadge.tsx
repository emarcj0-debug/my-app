"use client";

import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadge = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-[#E07A7A]/20 via-[#E07A7A]/10 to-[#E07A7A]/20 rounded-2xl border border-[#E07A7A]/30 p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Shield className="w-8 h-8 text-[#E07A7A]" />
            </motion.div>
            <h3 className="text-2xl font-bold dark:text-white light:text-gray-900">Data Privacy Secured</h3>
          </motion.div>
          <motion.p 
            className="dark:text-gray-400 light:text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
             Your location data is only accessed when you clock in or out to ensure privacy and security.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadge;
