"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <button
        className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-2.5 rounded-full border border-border/60 bg-card/90 backdrop-blur-xl shadow-lg cursor-pointer"
        aria-label="Tema Degistir"
      >
        <div className="w-5 h-5 rounded-full bg-muted animate-pulse" />
        <span className="text-sm font-medium text-muted-foreground">Yukleniyor...</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-5 right-5 z-50
        flex items-center gap-3
        px-4 py-2.5
        rounded-full
        border-2 border-border/60
        bg-card/95 dark:bg-card/80
        backdrop-blur-xl
        shadow-lg dark:shadow-primary/10
        cursor-pointer
        transition-all duration-300 ease-out
        hover:border-primary/70
        hover:shadow-xl hover:shadow-primary/20
        hover:scale-[1.02]
        active:scale-[0.98]
        group
      "
      aria-label={isDark ? "Aydinlik temaya gec" : "Karanlik temaya gec"}
    >
      {/* Icon Container with glow effect */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
        
        {/* Sun Icon - show in dark mode */}
        <Sun
          className={`absolute w-5 h-5 text-primary transition-all duration-500 ease-out ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-0"
          }`}
          strokeWidth={2.5}
        />
        
        {/* Moon Icon - show in light mode */}
        <Moon
          className={`absolute w-5 h-5 text-primary transition-all duration-500 ease-out ${
            !isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-180 scale-0"
          }`}
          strokeWidth={2.5}
        />
      </div>

      {/* Text Label */}
      <span className="text-sm font-semibold text-foreground pr-1 transition-colors duration-300">
        {isDark ? "Aydinlik Mod" : "Koyu Mod"}
      </span>

      {/* Animated indicator dot */}
      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
        isDark 
          ? "bg-amber-400 shadow-amber-400/50 shadow-sm" 
          : "bg-indigo-500 shadow-indigo-500/50 shadow-sm"
      }`} />
    </button>
  );
}
