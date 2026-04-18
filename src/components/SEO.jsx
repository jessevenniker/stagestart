import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { SEO_CONFIG, SITE } from '../utils/seoConfig'

/**
 * Per-page SEO component. Reads configuration from seoConfig based on the
 * current route, or accepts direct props as override. Emits title, meta
 * description, canonical link, Open Graph tags and Twitter card tags.
 *
 * Pass noindex=true to add a robots meta tag that prevents indexing.
 * Useful for the 404 page since SPA routes always return HTTP 200.
 */
export default function SEO({ title, description, image, type, noindex }) {
  const { pathname } = useLocation()
  const config = SEO_CONFIG[pathname] || {}

  const finalTitle = title || config.title || SITE.siteName
  const finalDescription = description || config.description || ''
  const finalType = type || config.type || 'article'
  const finalImage = image || config.image || SITE.defaultImage
  const canonical = `${SITE.baseUrl}${pathname === '/' ? '' : pathname}`
  const imageUrl = finalImage.startsWith('http') ? finalImage : `${SITE.baseUrl}${finalImage}`

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph */}
      <meta property="og:type" content={finalType} />
      <meta property="og:site_name" content={SITE.siteName} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="nl_NL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
