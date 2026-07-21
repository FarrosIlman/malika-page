import { groq } from 'next-sanity'

export const portfolioQuery = groq`*[_type == "portfolio"] | order(_createdAt desc) {
  _id,
  title,
  category,
  description,
  tags,
  "image": image.asset->url,
  link
}`
