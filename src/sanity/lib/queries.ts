import { groq } from 'next-sanity'

export const portfolioQuery = groq`*[_type == "portfolio"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  tags,
  "image": image.asset->url,
  link
}`

export const portfolioSlugsQuery = groq`*[_type == "portfolio" && defined(slug.current)][].slug.current`

export const portfolioBySlugQuery = groq`*[_type == "portfolio" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  tags,
  "image": image.asset->url,
  link
}`
