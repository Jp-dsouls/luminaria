"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import SearchModal from "../sections/search-modal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Luminara Logo" className="h-10" />
              <span className="hidden sm:inline font-bold text-xl text-foreground">
                Tenus led perú
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
                Categorías
              </Link>
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                title="Buscar productos"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2 border-t border-border mt-2 pt-2">
              <Link
                href="/categories"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 hover:bg-muted rounded"
                onClick={() => setIsOpen(false)}
              >
                Categorías
              </Link>
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 hover:bg-muted rounded"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </nav>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
