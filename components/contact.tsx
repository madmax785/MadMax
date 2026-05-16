"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    isim: "",
    telefon: "",
    mesaj: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numbersOnly = value.replace(/[^0-9]/g, "");
    
    if (value !== numbersOnly && value.length > 0) {
      setPhoneError(true);
      setTimeout(() => setPhoneError(false), 500);
    }
    
    setFormData({ ...formData, telefon: numbersOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkopldyy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ isim: "", telefon: "", mesaj: "" });
      }
    } catch (error) {
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Iletisime Gecin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Projenizi konusmak icin bize ulasin. Ucretsiz danismanlik hizmeti sunuyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Bize Ulasin
            </h3>

            <div className="space-y-4">
              {/* WhatsApp - Primary */}
              <a
                href="https://wa.me/905366725534?text=Merhaba,%20hizmetleriniz%20hakkinda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    WhatsApp ile Yazin
                  </div>
                  <div className="text-sm text-muted-foreground">En hizli iletisim yolu</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+905366725534"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">+90 536 672 55 34</div>
                  <div className="text-sm text-muted-foreground">Pazartesi - Cumartesi, 09:00 - 18:00</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:boombazled@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">boombazled@gmail.com</div>
                  <div className="text-sm text-muted-foreground">24 saat icinde yanit</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Turkiye</div>
                  <div className="text-sm text-muted-foreground">Uzaktan calisiyoruz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-6 bg-card rounded-2xl border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Tesekkurler!</h3>
                <p className="mt-2 text-muted-foreground">
                  Mesajiniz alindi. En kisa surede size donecegiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Adiniz
                  </label>
                  <input
                    type="text"
                    name="isim"
                    required
                    value={formData.isim}
                    onChange={(e) => setFormData({ ...formData, isim: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Adinizi girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handlePhoneChange}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={11}
                    className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${
                      phoneError ? "border-red-500 ring-2 ring-red-500/50" : "border-border"
                    }`}
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mesajiniz
                  </label>
                  <textarea
                    name="mesaj"
                    required
                    value={formData.mesaj}
                    onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Projeniz hakkinda kisa bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Gonderiliyor..."
                  ) : (
                    <>
                      Mesaj Gonder
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
