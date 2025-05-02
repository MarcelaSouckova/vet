"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-green-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          VetClinic
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className="text-green-100 hover:text-white transition-colors">
            Domů
          </Link>
          <Link href="/sluzby" className="text-green-100 hover:text-white transition-colors">
            Služby
          </Link>
          <Link href="/onas" className="text-green-100 hover:text-white transition-colors">
            O nás
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/Kontakt"
            className="px-5 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition"
          >
            Rezervovat
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-green-800 bg-opacity-95 flex flex-col items-center justify-center space-y-6 z-20 transform transition-transform duration-300">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5"
            aria-label="Close menu"
          >
            <X size={32} className="text-white" />
          </button>

          <Link
            href="/"
            className="text-2xl text-white hover:text-green-200 transition"
            onClick={() => setOpen(false)}
          >
            Domů
          </Link>
          <Link
            href="/sluzby"
            className="text-2xl text-white hover:text-green-200 transition"
            onClick={() => setOpen(false)}
          >
            Služby
          </Link>
          <Link
            href="/onas"
            className="text-2xl text-white hover:text-green-200 transition"
            onClick={() => setOpen(false)}
          >
            O nás
          </Link>

          <Link
            href="/Kontakt"
            className="mt-4 px-8 py-3 bg-green-600 text-white rounded-full font-medium uppercase tracking-wide hover:bg-green-500 transition"
            onClick={() => setOpen(false)}
          >
            Rezervovat
          </Link>
        </div>
      )}
    </nav>
  );
}
