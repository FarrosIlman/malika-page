import { ImageResponse } from 'next/og'
import { alt, size, contentType } from './opengraph-image'
import OGImage from './opengraph-image'

// Removed edge runtime so fs works

export { alt, size, contentType }

export default async function Image() {
  return OGImage()
}
