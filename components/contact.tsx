"use client";

import { useState } from "react";
import { MessageCircle, Bot, FileText } from "lucide-react";
import { QuoteModal } from "./quote-modal";
import { ChatWidget, ChatButton } from "./chat-widget";

export function Contact() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp ile Hemen Yaz",
      description: "Aninda iletisime gecin",
      action: () => window.open("https://wa.me/905366725534", "_blank"),
      color:
        "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30 hover:bg-green-500/20 shadow-sm dark:shadow-none",
      iconBg: "bg-green-500/20",
    },
    {
      icon: Bot,
      title: "Yapay Zeka Asistani ile Konus",
      description: "7/24 anlik yanitlar",
      action: () => setIsChatOpen(true),
      color:
        "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 shadow-sm dark:shadow-none",
      iconBg: "bg-primary/20",
    },
    {
      icon: FileText,
      title: "Teklif Formu Doldur",
      description: "Detayli bilgi alin",
      action: () => setIsQuoteModalOpen(true),
      color:
        "bg-card text-foreground border-border/50 hover:bg-secondary shadow-sm dark:shadow-none",
      iconBg: "bg-muted",
    },
  ];

  return (
    <>
      <section id="iletisim" className="px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Hemen Iletisime Gecin
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
              Size en uygun yontemi secin, hemen baslayalim.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contactOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className={`group relative p-6 md:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer text-left ${option.color}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${option.iconBg}`}
                >
                  <option.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-sm opacity-80">{option.description}</p>

                {/* Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Chat Widget */}
      {isChatOpen ? (
        <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      ) : (
        <ChatButton onClick={() => setIsChatOpen(true)} />
      )}
    </>
  );
}
