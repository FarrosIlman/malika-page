import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { portfolioBySlugQuery, portfolioSlugsQuery } from "@/sanity/lib/queries";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(portfolioSlugsQuery);
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const portfolio = await client.fetch(portfolioBySlugQuery, { slug: resolvedParams.slug });
  if (!portfolio) {
    return {};
  }
  return {
    title: portfolio.title,
    description: portfolio.description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      url: `${siteConfig.url}/portfolio/${resolvedParams.slug}`,
      images: [
        {
          url: portfolio.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: portfolio.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${resolvedParams.slug}`,
    }
  };
}

export default async function PortfolioPage({ params }: Props) {
  const resolvedParams = await params;
  const portfolio = await client.fetch(portfolioBySlugQuery, { slug: resolvedParams.slug });

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="py-24 min-h-screen">
      <Container>
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
              {portfolio.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk">{portfolio.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{portfolio.description}</p>
            
            <div className="pt-6">
              <h3 className="font-semibold mb-3">Teknologi yang digunakan:</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.tags?.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-md text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {portfolio.link && (
              <div className="pt-6">
                <a 
                  href={portfolio.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Kunjungi Website
                </a>
              </div>
            )}
          </div>
          
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-xl border bg-muted">
            {portfolio.image && (
              <img 
                src={portfolio.image} 
                alt={portfolio.title}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
