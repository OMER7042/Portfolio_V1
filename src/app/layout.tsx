import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Mohammed Omer Ahmed — Full-Stack Engineer",
  description:
    "Full-stack software engineer specializing in AI-powered, cloud-deployed applications. Built with React, Node.js, AWS, and Gemini 2.0.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <CursorSpotlight />
        <ScrollToTop />
        {children}
        <footer className="border-t border-white/[0.07] px-[5vw] py-6 flex justify-between items-center flex-wrap gap-3">
          <span style={{ color: "#484F58", fontSize: "13px" }}>
            © 2025 Mohammed Omer Ahmed
          </span>
          <span style={{ color: "#484F58", fontSize: "13px" }}>
            Built with Next.js · Deployed on Vercel
          </span>
        </footer>
      </body>
    </html>
  );
}
