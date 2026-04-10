"use client";

import { MessageCircle, Globe, MapPin, Clock, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "7/24 Akıllı WhatsApp Botu",
    description:
      "Müşterileriniz gece gündüz sipariş verebilir, randevu alabilir. Siz uyurken bile işletmeniz çalışmaya devam eder.",
    highlight: "Sipariş & Randevu Otomasyonu",
    gridClass: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Globe,
    title: "Profesyonel Web Tasarım",
    description:
      "Hızlı, modern ve mobil uyumlu web siteleri. İşletmenizin dijital vitrini artık profesyonel görünsün.",
    highlight: "Hızlı & Modern",
    gridClass: "md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    icon: MapPin,
    title: "Google Harita & İtibar Yönetimi",
    description:
      "Google&apos;da öne çıkın, müşteri yorumlarınızı yönetin. Yerel aramalarda rakiplerinizin önüne geçin.",
    highlight: "Yerel SEO & Öne Çıkma",
    gridClass: "md:col-span-1 md:row-span-1",
    featured: false,
  },
];

const features = [
  { icon: Clock, text: "7/24 Destek" },
  { icon: Zap, text: "Hızlı Kurulum" },
  { icon: Shield, text: "Güvenli Altyapı" },
];

export function ServicesBento() {
  return (
    <section id="hizmetler" className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            İşletmenizi dijitale taşıyacak çözümler, tek bir çatı altında.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-8 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:bg-card/80 shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-primary/5 ${service.gridClass}`}
            >
              {/* Glassmorphism inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    service.featured
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3
                  className={`font-bold text-foreground mb-3 ${
                    service.featured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-muted-foreground mb-4 leading-relaxed flex-grow ${
                    service.featured ? "text-base md:text-lg" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>

                {/* Highlight Tag */}
                <div className="mt-auto">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    {service.highlight}
                  </span>
                </div>

                {/* Featured service extra content */}
                {service.featured && (
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="flex flex-wrap gap-4">
                      {features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <feature.icon className="w-4 h-4 text-primary" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
