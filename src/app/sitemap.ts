import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { client } from '@/sanity/lib/client'
import { portfolioSlugsQuery } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // 1. Fetch dynamic portfolio slugs from Sanity CMS
  const portfolioSlugs = await client.fetch<string[]>(portfolioSlugsQuery)
  const dynamicRoutes = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticRoutes = [
    { url: '', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/academic', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
