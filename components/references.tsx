"use client";

import { Users, Star, Rocket } from "lucide-react";

export function References() {
  return (
    <section id="referanslar" className="px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Referanslar
          </h2>
        </div>

        {/* Card */}
        <div className="relative group">
          {/* Animated border gradient */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative p-8 md:p-12 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-sm dark:shadow-none">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/30 animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-primary/20 animate-pulse delay-150" />
              </div>
            </div>

            {/* Message */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                Henüz Yolun Başındayız
              </h3>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed text-pretty">
                Henuz yolun basindayiz, bu profesyonel sistemin{" "}
                <span className="text-primary font-semibold">
                  ilk referansi siz olun!
                </span>
              </p>
            </div>

            {/* Stats placeholder */}
            <div className="mt-10 pt-8 border-t border-border/30">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[
                  { icon: Users, value: "İlk", label: "Müşterilerimiz" },
                  { icon: Star, value: "5.0", label: "Hedef Puan" },
                  { icon: Rocket, value: "2025", label: "Kuruluş" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
