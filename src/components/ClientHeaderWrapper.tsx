'use client';

import { useState } from 'react';
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MainNav from "@/components/MainNav";

export default function ClientHeaderWrapper() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <TopBar />
      <Header />
      <MainNav mobileMenuOpen={mobileMenuOpen} />
    </div>
  );
}
