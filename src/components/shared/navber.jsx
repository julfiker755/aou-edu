"use client";
import { Globe, HelpCircle, UserRound, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navber() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Registration", href: "#" },
    { label: "Schedule", href: "#" },
    { label: "Grades", href: "#" },
    { label: "Financial", href: "#" },
    { label: "Other services", href: "#" },
  ];

  return (
    <header className="bg-primary text-white py-4 px-6 flex items-center justify-between relative z-20">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="relative h-[70px] w-[200px] mr-5">
          <Image
            src="/logo.png"
            alt="AOU Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium hover:text-[#8975fa] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden ml-auto text-white focus:outline-none cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* User Info & Language (Desktop Only) */}
      <div className="hidden md:flex items-center space-x-4 text-sm">
        <div className="flex items-center shadow-lg p-1 rounded-md">
          <UserRound size={30} />
          <ul className="ml-2">
            <li className="font-medium">#20520538</li>
            <li className="text-xs">Lamar Saeed Omar Alhaddad</li>
          </ul>
        </div>
        <div className="flex items-center space-x-1">
          <Globe size={20} />
          <span>En</span>
        </div>
        <HelpCircle size={20} />
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`absolute top-full left-0 w-full bg-[#002060] md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 py-4 px-6" : "max-h-0 opacity-0 py-0 px-6"
        } space-y-4`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block text-base font-medium hover:text-[#8975fa] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile User Info */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/20">
          <UserRound size={32} />
          <div>
            <p className="text-sm font-medium">#20520538</p>
            <p className="text-xs">Lamar Saeed Omar Alhaddad</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Globe size={32} />
          <span>En</span>
          <HelpCircle size={18} />
        </div>
      </div>
    </header>
  );
}
