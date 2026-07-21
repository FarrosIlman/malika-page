import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'
import fs from 'fs'
import path from 'path'

export const alt = 'Malika Digital Solutions'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // Use the transparent PNG version (background removed) so the logo
  // blends seamlessly with the dark canvas at any size.
  let logoSrc = ''
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo-transparent.png')
    const logoData = fs.readFileSync(logoPath)
    logoSrc = `data:image/png;base64,${logoData.toString('base64')}`
  } catch (err) {
    // If this throws in build/runtime logs, the file path/name is wrong.
    console.error('[opengraph-image] Failed to read logo-transparent.png:', err)
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundColor: '#050507',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Large logo watermark, bottom-right — sits naturally since bg matches */}
        {logoSrc && (
          <img
            src={logoSrc}
            width="480"
            height="480"
            style={{
              position: 'absolute',
              right: -100,
              bottom: -120,
              objectFit: 'contain',
              opacity: 0.16,
            }}
          />
        )}

        {/* Soft accent glow behind headline */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 180,
            width: 500,
            height: 300,
            background: 'radial-gradient(circle, rgba(139,128,248,0.14) 0%, rgba(139,128,248,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Thin vertical accent line */}
        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 72,
            bottom: 72,
            width: 3,
            background: 'linear-gradient(180deg, #8b80f8 0%, rgba(139,128,248,0) 100%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '68px 80px 60px 112px',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {logoSrc ? (
                <img
                  src={logoSrc}
                  width="52"
                  height="52"
                  style={{
                    marginRight: '16px',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                // Visible fallback so a missing file is obvious, not silently blank
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    border: '2px solid #ef4444',
                    marginRight: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    color: '#ef4444',
                    fontWeight: 700,
                  }}
                >
                  ?
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#e4e4e7',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    display: 'flex',
                  }}
                >
                  Malika Digital
                </span>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#54546a',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: 2,
                    display: 'flex',
                  }}
                >
                  Software House
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '9px 18px',
                borderRadius: '100px',
                border: '1px solid #24243a',
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: '#8b80f8',
                  marginRight: 10,
                  display: 'flex',
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#9a9aae',
                  letterSpacing: '0.04em',
                  display: 'flex',
                }}
              >
                Available for projects
              </span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: '#8b80f8',
                letterSpacing: '0.03em',
                marginBottom: 20,
                display: 'flex',
              }}
            >
              WEB · PRODUCT · ACADEMIC
            </span>
            <span
              style={{
                fontSize: 76,
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.06,
                display: 'flex',
              }}
            >
              Membangun skala,
            </span>
            <span
              style={{
                fontSize: 76,
                fontWeight: 800,
                color: '#5c5c6e',
                letterSpacing: '-0.03em',
                lineHeight: 1.06,
                marginBottom: 26,
                display: 'flex',
              }}
            >
              menciptakan solusi.
            </span>
            <span
              style={{
                fontSize: 25,
                color: '#7a7a8c',
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: '560px',
                display: 'flex',
              }}
            >
              Mitra strategis untuk pengembangan web, perancangan antarmuka, dan solusi teknologi terintegrasi.
            </span>
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: '26px',
              borderTop: '1px solid #16161f',
            }}
          >
            <div style={{ fontSize: 20, color: '#ffffff', fontWeight: 600, display: 'flex' }}>
              malikadigital.com
            </div>
            <div
              style={{
                fontSize: 15,
                color: '#54546a',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              Digital Solutions Studio
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}