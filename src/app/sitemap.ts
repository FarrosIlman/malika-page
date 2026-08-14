import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // If we had dynamic portfolio pages (e.g., /portfolio/foo), we would fetch them here.
  // Since the portfolio is displayed on the home page, we just map the static routes.

  const routes = [
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

  return [...routes]
}
