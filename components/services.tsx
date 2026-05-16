import { MessageSquare, Globe, Star, Instagram, Zap, Headphones } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp Botu",
    description: "7/24 otomatik musteri hizmeti. Siparisler, sorular ve randevular icin akilli asistan.",
    features: ["Otomatik yanitlar", "Siparis takibi", "Randevu sistemi"],
  },
  {
    icon: Globe,
    title: "Web Sitesi",
    description: "Modern, hizli ve mobil uyumlu web siteleri. SEO optimizasyonu dahil.",
    features: ["Mobil uyumlu", "SEO optimizasyonu", "Hizli yukleme"],
  },
  {
    icon: Star,
    title: "Google Yorum Yonetimi",
    description: "Olumlu yorumlari artirin, olumsuzlara profesyonelce yanit verin.",
    features: ["Yorum takibi", "Otomatik yanit", "Itibar yonetimi"],
  },
  {
    icon: Instagram,
    title: "Sosyal Medya",
    description: "Instagram, Facebook ve TikTok icin icerik uretimi ve hesap yonetimi.",
    features: ["Icerik uretimi", "Hesap yonetimi", "Reklam yonetimi"],
  },
  {
    icon: Zap,
    title: "Otomasyon",
    description: "Is sureclerinizi otomatiklestirin. Zaman kazanin, verimlilik artirin.",
    features: ["Fatura otomasyonu", "Stok takibi", "Rapor olusturma"],
  },
  {
    icon: Headphones,
    title: "Teknik Destek",
    description: "Tum dijital sistemleriniz icin surekli teknik destek ve bakim.",
    features: ["7/24 destek", "Uzaktan erisim", "Duzeltme garantisi"],
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Hizmetlerimiz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Isletmenizin ihtiyacina gore ozellestirilebilir dijital cozumler
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
