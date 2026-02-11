import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IAAM",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
          <TopBar />
          <Header />
          <MainNav mobileMenuOpen={false} />
        </div>
        
        {/* Content with padding for fixed header */}
        <main className="pt-[140px] lg:pt-[170px]">
          {children}
        </main>
      </body>
    </html>
  );
}
