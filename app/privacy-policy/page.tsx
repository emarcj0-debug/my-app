"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen dark:bg-black light:bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-[#E07A7A]/10 light:bg-gradient-to-br light:from-gray-50 light:via-white light:to-[#E07A7A]/10" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 dark:text-gray-400 light:text-gray-600 hover:text-[#E07A7A] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Privacy Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-4">
            Privacy <span className="text-[#E07A7A]">Policy</span>
          </h1>
          <p className="dark:text-gray-400 light:text-gray-600 mb-8">Last Updated: January 10, 2026</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="dark:text-gray-300 light:text-gray-700 mb-6">
              InternTrack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website.
            </p>

            <Section title="1. Information We Collect">
              <p className="dark:text-gray-300 light:text-gray-700 mb-4">
                We collect information to provide accurate timekeeping and OJT monitoring services.
              </p>
              <ul className="list-disc pl-6 space-y-3 dark:text-gray-300 light:text-gray-700">
                <li><strong>Personal Information:</strong> When you register, we collect your Name, Student ID number, Email Address, Course/Year, and the Company/Institution where you are interning.</li>
                <li><strong>Location Data (Geofencing):</strong> We collect precise location data only when you attempt to Clock In or Clock Out. This is used to verify that you are physically present at your designated workplace. We do not track your location continuously in the background.</li>
                <li><strong>Device Information:</strong> We may collect information about your mobile device, including the hardware model, operating system, and unique device identifiers to ensure app compatibility and security.</li>
                <li><strong>Usage Logs:</strong> We record the dates and times of your attendance logs.</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <ul className="list-disc pl-6 space-y-3 dark:text-gray-300 light:text-gray-700">
                <li><strong>Attendance Verification:</strong> To validate that you are at the correct location during your internship hours.</li>
                <li><strong>Report Generation:</strong> To create PDF attendance reports (DTR) for your school coordinators and company supervisors.</li>
                <li><strong>Communication:</strong> To send you notifications about your logs, announcements from coordinators, or app updates.</li>
              </ul>
            </Section>

            <Section title="3. Data Sharing and Disclosure">
              <p className="dark:text-gray-300 light:text-gray-700 mb-4">
                We respect your data. We do not sell your personal information to third parties. However, your data is shared with:
              </p>
              <ul className="list-disc pl-6 space-y-3 dark:text-gray-300 light:text-gray-700">
                <li><strong>School Coordinators:</strong> To monitor your progress and verify your hours.</li>
                <li><strong>Company Supervisors:</strong> To approve your daily/weekly time logs.</li>
                <li><strong>Service Providers:</strong> Third-party cloud hosting services (e.g., Firebase, AWS) that help us run the app securely.</li>
              </ul>
            </Section>

            <Section title="4. Data Security" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                We implement industry-standard security measures, including encryption and secure server connections, to protect your data from unauthorized access. However, no method of transmission over the internet is 100% secure.
              </p>
            </Section>

            <Section title="5. Your Rights" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                You have the right to access the personal data we hold about you. You may request corrections to your data if it is inaccurate. If you wish to delete your account, please contact your School Coordinator or our support team, as your attendance records may need to be retained for academic purposes.
              </p>
            </Section>

            <Section title="6. Contact Us" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:<br />
                <strong>Email:</strong> <a href="mailto:interntrack@gmail.com" className="text-[#E07A7A] hover:underline">interntrack@gmail.com</a>
              </p>
            </Section>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E07A7A]/50 to-transparent my-16" />

        {/* Terms of Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-4">
            Terms of <span className="text-[#E07A7A]">Service</span>
          </h1>
          <p className="dark:text-gray-400 light:text-gray-600 mb-8">Last Updated: January 10, 2026</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="dark:text-gray-300 light:text-gray-700 mb-6">
              By downloading or using the InternTrack app, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the app.
            </p>

            <Section title="1. Account Registration" animate>
              <ul className="list-disc pl-6 space-y-3 dark:text-gray-300 light:text-gray-700">
                <li>You must provide accurate, current, and complete information (specifically your Student ID and Assigned Company) during the registration process.</li>
                <li>You are responsible for safeguarding your password. You agree not to disclose your password to any third party.</li>
              </ul>
            </Section>

            <Section title='2. Acceptable Use (The "Anti-Cheating" Policy)' animate>
              <p className="dark:text-gray-300 light:text-gray-700 mb-4">
                InternTrack is a tool for academic integrity. By using the app, you agree NOT to:
              </p>
              <ul className="list-disc pl-6 space-y-3 dark:text-gray-300 light:text-gray-700">
                <li>Use GPS spoofing tools, emulators, or any software to fake your location.</li>
                <li>Clock in/out for another student.</li>
                <li>Attempt to hack, reverse engineer, or disrupt the integrity of the InternTrack system.</li>
              </ul>
              <div className="mt-4 p-4 bg-[#E07A7A]/10 border border-[#E07A7A]/30 rounded-xl">
                <p className="dark:text-gray-300 light:text-gray-700">
                  <strong className="text-[#E07A7A]">Violation:</strong> Any attempt to falsify attendance records may result in the immediate termination of your account and reporting of the incident to your School Coordinator for disciplinary action.
                </p>
              </div>
            </Section>

            <Section title="3. Location Services" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                You acknowledge that InternTrack requires access to your device&apos;s GPS/Location services to function. You agree to grant these permissions. While we strive for accuracy, InternTrack is not liable for errors in location data caused by poor signal, device hardware issues, or environmental factors.
              </p>
            </Section>

            <Section title="4. Role of InternTrack" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                InternTrack is a software provider. We do not manage your internship program, assign grades, or control the workplace environment. Any disputes regarding OJT hours, grades, or workplace issues must be resolved directly with your School Coordinator or Company Supervisor.
              </p>
            </Section>

            <Section title="5. Intellectual Property" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                The InternTrack app, including its logo, code, and design, is the property of InternTrack and is protected by copyright laws.
              </p>
            </Section>

            <Section title="6. Termination" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                We verify logs strictly. We reserve the right to suspend or terminate your access to the app if you violate these Terms, specifically regarding location tampering.
              </p>
            </Section>

            <Section title="7. Limitation of Liability" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                The app is provided &quot;as is.&quot; InternTrack shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the service, including the loss of attendance data due to server failure or user error.
              </p>
            </Section>

            <Section title="8. Changes to Terms" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                We reserve the right to modify these Terms at any time. Continued use of the app after any such changes constitutes your acceptance of the new Terms.
              </p>
            </Section>

            <Section title="9. Contact" animate>
              <p className="dark:text-gray-300 light:text-gray-700">
                For support or legal concerns, please contact:<br />
                <strong>Email:</strong> <a href="mailto:interntrack@gmail.com" className="text-[#E07A7A] hover:underline">interntrack@gmail.com</a>
              </p>
            </Section>
          </div>
        </motion.div>

        {/* Back to top */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#E07A7A] hover:bg-[#d06a6a] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, children, animate = false }: { title: string; children: React.ReactNode; animate?: boolean }) => {
  if (animate) {
    return (
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold dark:text-white light:text-gray-900 mb-4">{title}</h2>
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold dark:text-white light:text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default PrivacyPolicyPage;
