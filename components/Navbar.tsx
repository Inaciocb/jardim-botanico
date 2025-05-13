"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, []);

    const navLinks = [
        { href: "/", label: "Página inicial" },
        { href: "/regras", label: "Regras do Jardim" },
        { href: "/comochegar", label: "Como Chegar" },
        { href: "/Contato", label: "Contato" },
    ];

    return (
        <nav className={`fixed w-full bg-[#0F2415] shadow-md transition-transform duration-300 z-50 
                         ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-16">
                    

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-white hover:text-gray-600 px-3 py-2 rounded-md text-md font-semibold transition-colors 
                                            ${pathname === link.href ? "text-blue-200 underline" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white 
                                       hover:text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2
                                       focus:ring-inset focus:ring-blue-500"
                        >
                            {!isMobileMenuOpen ? (
                                <BiMenu className="text-3xl" />
                            ) : (
                                <BiX className="text-3xl" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden transition-all duration-300 ease-in-out px-4
                            ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
            >
                <div className="pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium 
                                        ${pathname === link.href
                                            ? "text-blue-200 bg-blue-900"
                                            : "text-white hover:text-gray-600 hover:bg-gray-700"
                                        }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
