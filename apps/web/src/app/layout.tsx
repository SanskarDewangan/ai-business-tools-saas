import type { Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Crafted Ai",
  description: "AI tools to boost productivity for small businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable}`}>
        <body className="font-sans antialiased bg-white text-gray-900">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
