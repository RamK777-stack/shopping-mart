import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SalesHeader from "@/components/common/SalesHeader";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shopping mart",
  description: "Portal for fashion shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SalesHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
