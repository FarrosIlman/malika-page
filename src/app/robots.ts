import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/', // Do not let search engines crawl the Sanity Studio admin panel
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
