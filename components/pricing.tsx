import { Check } from "lucide-react";

const plans = [
  {
    name: "Baslangic",
    price: "1.500",
    period: "tek seferlik",
    description: "Kucuk isletmeler icin ideal baslangic paketi",
    features: [
      "Tek sayfa web sitesi",
      "Mobil uyumlu tasarim",
      "Temel SEO ayarlari",
      "1 ay ucretsiz destek",
      "SSL sertifikasi",
    ],
    cta: "Hemen Baslayalim",
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "3.500",
    period: "tek seferlik",
    description: "Buyuyen isletmeler icin kapsamli paket",
    features: [
      "Cok sayfalik web sitesi",
      "WhatsApp botu entegrasyonu",
      "Google Maps optimizasyonu",
      "3 ay ucretsiz destek",
      "Sosyal medya entegrasyonu",
      "Yorum yonetim paneli",
    ],
    cta: "En Populer Secim",
    popular: true,
  },
  {
    name: "Kurumsal",
    price: "7.500",
    period: "tek seferlik",
    description: "Tam kapsamli dijital donusum",
    features: [
      "Ozel tasarim web sitesi",
      "Gelismis WhatsApp botu",
      "Sosyal medya yonetimi (1 ay)",
      "Google Ads kurulumu",
      "6 ay ucretsiz destek",
      "Aylik performans raporu",
      "Oncelikli destek hatti",
    ],
    cta: "Iletisime Gecin",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="fiyatlar" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Seffaf Fiyatlandirma
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Gizli maliyet yok. Ne goruyorsaniz, odediginiz o.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-2xl border ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    En Populer
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> TL</span>
                  <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/905366725534?text=Merhaba,%20${encodeURIComponent(plan.name)}%20paketi%20hakkinda%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 text-center font-medium rounded-xl transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Ozel ihtiyaclariniz mi var?{" "}
          <a href="#iletisim" className="text-primary hover:underline">
            Size ozel teklif alalim
          </a>
        </p>
      </div>
    </section>
  );
}
