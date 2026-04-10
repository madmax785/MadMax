"use client";

import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  return (
    <section id="fiyatlandirma" className="px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Şeffaf ve Esnek
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            İhtiyacınıza göre özelleştirilebilir fiyatlandırma seçenekleri.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-primary/30 to-transparent">
          <div className="relative rounded-[1.8rem] bg-card/70 backdrop-blur-xl border border-border/30 overflow-hidden shadow-lg dark:shadow-none">
            {/* Glassmorphism glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Monthly Subscription */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Aylık Abonelik</span>
                  </div>
                  
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-foreground">250</span>
                      <span className="text-xl text-muted-foreground">TL</span>
                      <span className="text-muted-foreground">/ ay</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{"'"}den başlayan fiyatlarla</p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "WhatsApp bot desteği",
                      "Temel web sitesi bakımı",
                      "Aylık raporlama",
                      "E-posta desteği",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Project */}
                <div className="space-y-6 md:border-l md:border-border/30 md:pl-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50">
                    <span className="text-sm font-medium text-foreground">Projeye Özel</span>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl md:text-6xl font-bold text-foreground">Özel</span>
                    </div>
                    <p className="text-muted-foreground mt-2">İhtiyaçlarınıza göre fiyatlandırma</p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Tam kapsamlı web sitesi",
                      "Özel WhatsApp entegrasyonu",
                      "Google Harita optimizasyonu",
                      "Öncelikli destek",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-border/30 text-center">
                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Ücretsiz Teklif Alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
