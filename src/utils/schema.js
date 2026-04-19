/**
 * Schema.org JSON-LD generators voor StageStart Curaçao.
 *
 * Gebruik: importeer de juiste generator, geef hem aan de SEO-component:
 *   <SEO schema={websiteSchema()} />
 *   <SEO schema={[articleSchema({...}), breadcrumbSchema(...)]} />
 *
 * Outputs zijn JSON-objecten die de SEO-component als <script type="application/ld+json"> rendert.
 */

import { SITE } from './seoConfig'

const ORG = {
  '@type': 'Organization',
  name: 'StageStart Curaçao',
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/og-image.png`,
}

/**
 * WebSite schema voor de homepage. Activeert eventueel een sitelinks search box.
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.siteName,
    url: SITE.baseUrl,
    publisher: ORG,
    inLanguage: 'nl-NL',
  }
}

/**
 * Organization schema. Algemeen bruikbaar.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    ...ORG,
  }
}

/**
 * BreadcrumbList schema. Items is een array van {label, path}.
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `${SITE.baseUrl}${item.path}`,
    })),
  }
}

/**
 * Article schema voor redactionele content-pagina's.
 * dateModified moet matchen met de LastChecked-datum van de pagina.
 */
export function articleSchema({ headline, description, path, dateModified, datePublished }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE.baseUrl}${path}`,
    inLanguage: 'nl-NL',
    author: ORG,
    publisher: ORG,
    datePublished: datePublished || '2026-04-15',
    dateModified: dateModified,
    image: `${SITE.baseUrl}/og-image.png`,
  }
}

/**
 * HowTo schema voor stappenplan-pagina's (BeginHier, VoorVertrek, EersteWeek).
 * steps is een array van {name, text}.
 */
export function howToSchema({ name, description, totalTime, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime, // ISO 8601 duration, bijv. "PT8W" voor 8 weken
    inLanguage: 'nl-NL',
    step: steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

/**
 * FAQPage schema voor pagina's met vraag-antwoord-blokken.
 * questions is een array van {question, answer}.
 */
export function faqSchema(questions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}
