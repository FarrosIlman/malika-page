import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { MotionProvider } from "@/providers/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/shared/floating-nav";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { SplashScreen } from "@/components/shared/splash-screen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { NoiseOverlay } from "@/components/shared/noise-overlay";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NoiseOverlay />
      <SmoothScrollProvider>
        <MotionProvider>
          <CustomCursor />
          <SplashScreen />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <FloatingNav />
          <Footer />
        </MotionProvider>
      </SmoothScrollProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
