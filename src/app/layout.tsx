import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navheader from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Free Travel Consult ",
  description: "Get the best travel consultation services for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="mx-auto max-w-7xl font-sans min-h-screen px-4 sm:px-10 py-8 sm:py-12 space-y-20">
          <Navheader />

          <main className="sm:mt-12 mt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
