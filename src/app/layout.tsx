import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
