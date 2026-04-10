"use client";

import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-4 py-12 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Yunus AI</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#hizmetler"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Hizmetler
            </a>
            <a
              href="#fiyatlandirma"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fiyatlandırma
            </a>
            <a
              href="#iletisim"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              İletişim
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Yunus AI. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
