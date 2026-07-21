"use client";

import { Container } from "@/components/shared/container";
import { HeroText } from "./hero-text";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          <HeroText />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
