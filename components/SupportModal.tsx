"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail } from "lucide-react";

// ============================================================
// DEPLOYMENT NOTE (CyberPanel / Hostinger):
// After running `npm run build`, upload the contents of the
// generated `out/` folder to your domain's `public_html/` directory.
// Ensure index.html is at the root of public_html.
// ============================================================

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Admin email for support inquiries
const ADMIN_EMAIL = "admin@interntrack.online";

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [waitingForEmail, setWaitingForEmail] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Listen for when user returns to the page after opening Gmail
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && waitingForEmail) {
        setWaitingForEmail(false);
        alert("Your message has been sent! Thank you for contacting InternTrack Support.");
        // Reset form and close modal
        setFormData({ name: "", email: "", subject: "", message: "" });
        onClose();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [waitingForEmail, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate Gmail compose URL with form data
  const generateGmailLink = () => {
    const subject = encodeURIComponent(`[InternTrack Support] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${ADMIN_EMAIL}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set flag to track that we're waiting for user to return
    setWaitingForEmail(true);
    // Open Gmail compose in a new tab
    window.open(generateGmailLink(), "_blank");
  };

  const handleClose = () => {
    onClose();
    // Reset form after closing
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 from-white to-gray-50 rounded-2xl border dark:border-gray-800 border-gray-200 shadow-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b dark:border-gray-800 border-gray-200">
                <div>
                  <h2 className="text-xl font-bold dark:text-white text-gray-900">
                    Contact <span className="text-[#E07A7A]">Support</span>
                  </h2>
                  <p className="text-sm dark:text-gray-400 text-gray-600 mt-1">
                    We&apos;ll get back to you as soon as possible
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 dark:text-gray-400 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl dark:bg-gray-800/50 bg-gray-100 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E07A7A]/50 focus:border-[#E07A7A] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl dark:bg-gray-800/50 bg-gray-100 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E07A7A]/50 focus:border-[#E07A7A] transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl dark:bg-gray-800/50 bg-gray-100 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E07A7A]/50 focus:border-[#E07A7A] transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Account Issue">Account Issue</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your issue or question..."
                    className="w-full px-4 py-3 rounded-xl dark:bg-gray-800/50 bg-gray-100 border dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E07A7A]/50 focus:border-[#E07A7A] transition-all resize-none"
                  />
                </div>

                {/* Info Note */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <p className="text-sm dark:text-blue-300 text-blue-600">
                    Clicking send will open Gmail in a new tab with your message pre-filled.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#E07A7A] hover:bg-[#d06a6a] text-white py-3 px-6 rounded-xl font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>

                {/* Footer Note */}
                <p className="text-center text-xs dark:text-gray-500 text-gray-500">
                  Your message will be sent to{" "}
                  <span className="text-[#E07A7A]">{ADMIN_EMAIL}</span>
                </p>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SupportModal;
