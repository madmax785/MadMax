"use client";

import { useState, useEffect } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { text: string; isBot: boolean; time: string }[]
  >([
    {
      text: "Merhaba! Ben Yunus AI asistaniyim. Size nasil yardimci olabilirim?",
      isBot: true,
      time: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  // Bot entegrasyonu icin placeholder
  // <!-- BOT_INTEGRATION_SCRIPT_PLACEHOLDER -->
  // Kendi bot script kodunuzu buraya ekleyebilirsiniz
  useEffect(() => {
    // Bot SDK initialization would go here
    // Example: window.YunusBot?.init({ apiKey: 'YOUR_API_KEY' });
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;

    const time = new Date().toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add user message
    setMessages((prev) => [...prev, { text: message, isBot: false, time }]);
    setMessage("");

    // Simulate bot response (replace with actual bot integration)
    setTimeout(() => {
      const botTime = new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prev) => [
        ...prev,
        {
          text: "Tesekkurler! Mesajinizi aldim. En kisa surede size yardimci olacagim. Daha hizli donus icin WhatsApp uzerinden de ulasabilirsiniz.",
          isBot: true,
          time: botTime,
        },
      ]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100%-2rem)] md:w-[380px] max-w-sm">
      <div className="rounded-3xl border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground">
                Yunus AI Asistan
              </h4>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-primary-foreground/80">
                  Cevrimici
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[300px] md:h-[350px] overflow-y-auto p-4 space-y-4 bg-background/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.isBot
                    ? "bg-muted text-foreground rounded-tl-none"
                    : "bg-primary text-primary-foreground rounded-tr-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <span
                  className={`text-xs mt-1 block ${
                    msg.isBot ? "text-muted-foreground" : "text-primary-foreground/70"
                  }`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border/30 bg-card">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Mesajinizi yazin..."
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
            />
            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Floating chat button component
export function ChatButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-95"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
