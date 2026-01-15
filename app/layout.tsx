// ============================================================
// DEPLOYMENT NOTE (CyberPanel / Hostinger):
// 1. Run `npm run build` to generate static files in the `out/` folder
// 2. Upload the contents of `out/` to your domain's `public_html/` directory
// 3. Ensure index.html is at the root of public_html (not inside a subfolder)
// 4. Your site will be live at your domain!
// ============================================================

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const filsonPro = localFont({
  src: [
    {
      path: "../public/fonts/FilsonProThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProBook.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProBookItalic.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProHeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/FilsonProBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/FilsonProBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-filson-pro",
});

export const metadata: Metadata = {
  title: "InternTrack - Master Your Internship Hours",
  description: "The smartest way to track your OJT attendance. Clock in with GPS accuracy, monitor your progress, and generate reports instantly.",
  icons: {
    icon: "/Images/Icon3.png",
    shortcut: "/Images/Icon3.png",
    apple: "/Images/Icon3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${filsonPro.variable} antialiased dark:bg-black light:bg-gray-50 transition-colors duration-300 font-sans`}
        style={{ fontFamily: 'var(--font-filson-pro)' }}
      >
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
