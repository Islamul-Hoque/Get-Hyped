import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smoothScroll/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // title: "Get Hyped - Social-first content agency",
  title: "Local",
  description: "Get Hyped brengt als short form content agency jouw merk in beweging met krachtige video's en foto's. Niks zonder strategie: alleen resultaatgerichte content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroll >
          {children}
        </SmoothScroll>
        <Footer />
        </body>
    </html>
  );
}
