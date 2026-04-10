import { Hero } from "@/components/hero";
import { ServicesBento } from "@/components/services-bento";
import { Pricing } from "@/components/pricing";
import { References } from "@/components/references";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <ThemeToggle />
      <Hero />
      <ServicesBento />
      <Pricing />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
