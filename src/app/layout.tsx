import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Peel - Software Engineer",
  description: "An engineer/developer portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="overflow-hidden text-xs min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
