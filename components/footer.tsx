export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Y</span>
            </div>
            <span className="font-semibold text-foreground">Yunus AI</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#hizmetler" className="hover:text-foreground transition-colors">
              Hizmetler
            </a>
            <a href="#fiyatlar" className="hover:text-foreground transition-colors">
              Fiyatlar
            </a>
            <a href="#hakkimizda" className="hover:text-foreground transition-colors">
              Hakkimizda
            </a>
            <a href="#iletisim" className="hover:text-foreground transition-colors">
              Iletisim
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            2024 Yunus AI. Tum haklar saklidir.
          </div>
        </div>
      </div>
    </footer>
  );
}
