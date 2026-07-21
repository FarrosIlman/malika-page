import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { MotionProvider } from "@/providers/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingNav } from "@/components/shared/floating-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software House Indonesia",
    "Jasa Pembuatan Website",
    "Web Developer Jakarta",
    "Bimbingan Skripsi IT",
    "Joki Tugas Informatika",
    "UI/UX Design Agency",
    "IT Consultant",
    "SaaS Development Indonesia",
  ],
  authors: [
    {
      name: "Malika Digital",
      url: siteConfig.url,
    },
  ],
  creator: "Malika Digital",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <MotionProvider>
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <FloatingNav />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
