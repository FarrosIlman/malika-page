"use client";

import { LaptopDashboard } from "./hero-illustration/laptop-dashboard";
import { PhoneMockup } from "./hero-illustration/phone-mockup";
import { FloatingElements } from "./hero-illustration/floating-elements";

export function HeroIllustration() {
  return (
    <div className="flex-1 relative h-[500px] w-full flex items-center justify-center lg:justify-end">
      {/* 
        Container for the 2.5D Isometric Composition
        We use relative positioning here so that the inner elements can absolute-position themselves.
      */}
      <div className="relative w-full max-w-[500px] h-full">
        <LaptopDashboard />
        <PhoneMockup />
        <FloatingElements />
      </div>
    </div>
  );
}
