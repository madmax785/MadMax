"use client";

import { Bot, Sparkles } from "lucide-react";
import { MagneticButton } from "./magnetic-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient orb background effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/70 backdrop-blur-sm mb-8 shadow-sm dark:shadow-none">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Yapay Zeka Destekli Cozumler</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
          Gelecegi Isletmenize{" "}
          <span className="text-primary">Entegre Edin</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Yerel esnaflardan buyuyen sirketlere kadar, yapay zeka teknolojileriyle 
          isletmenizi bir adim one tasiyin. Musterilerinize 7/24 hizmet verin, 
          dijitalde fark yaratin.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.25}>
            <a
              href="#iletisim"
              data-clickable
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              <Bot className="w-5 h-5" />
              Hemen Baslayin
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a
              href="#hizmetler"
              data-clickable
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border bg-card/70 backdrop-blur-sm text-foreground font-semibold text-lg transition-all duration-300 hover:bg-card hover:border-primary/50 shadow-sm dark:shadow-none active:scale-95"
            >
              Hizmetlerimizi Kesfedin
            </a>
          </MagneticButton>
        </div>

        {/* Logo */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-bold text-foreground">Yunus AI</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Kesfet</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
