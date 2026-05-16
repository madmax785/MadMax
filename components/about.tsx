import { Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Odak",
    description: "Her projeye ozel cozumler. Sizin isletmeniz, sizin kurallariniz.",
  },
  {
    icon: Users,
    title: "Iletisim",
    description: "Surecin her asamasinda yaninizdayiz. Sorular aninda cevaplanir.",
  },
  {
    icon: Lightbulb,
    title: "Yenilik",
    description: "En guncel teknolojileri kullanarak rekabette one cikariniz.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Neden Yunus AI?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Kucuk isletmelerin dijital dunyada buyuk firmalara karsi rekabet etmesinin ne kadar zor 
              oldugunu biliyoruz. Bu yuzden yapay zeka destekli, uygun fiyatli ve kullanimi kolay 
              cozumler sunuyoruz.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Amacimiz sadece bir web sitesi veya bot yapmak degil - isletmenizin dijital varligi 
              icin stratejik bir ortak olmak.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Mutlu Musteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">%98</div>
                <div className="text-sm text-muted-foreground">Memnuniyet</div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
