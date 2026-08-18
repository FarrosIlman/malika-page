import { MotionProvider } from "@/providers/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/shared/floating-nav";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { NoiseOverlay } from "@/components/shared/noise-overlay";

export default function PortfolioLayout({
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
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <FloatingNav />
          <Footer />
        </MotionProvider>
      </SmoothScrollProvider>
    </>
  );
}
