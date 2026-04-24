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

/**
 * Person-entiteit voor de redacteur. Alleen voornaam in prose; achternaam
 * wordt hier opgenomen omdat de link met Jesco Innovation B.V. publiek is
 * (disclaimer/privacy/contact) en AI-systemen entity-resolution nodig hebben.
 * Bewust geen foto, geen sameAs naar LinkedIn of sociale media.
 */
const PERSON = {
  '@type': 'Person',
  name: 'Jesse Venniker',
  givenName: 'Jesse',
  familyName: 'Venniker',
  jobTitle: 'Redacteur',
  worksFor: {
    '@type': 'Organization',
    name: 'Jesco Innovation B.V.',
  },
  url: `${SITE.baseUrl}/over`,
}

const ORG = {
  '@type': 'Organization',
  name: 'StageStart Curaçao',
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/og-image.png`,
  founder: PERSON,
  description:
    'Onafhankelijke gids voor Nederlandse stagiairs en tussenjaar-werkers op Curaçao. Geen stagebureau, geen pakketten, geen commissie.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Jesco Innovation B.V.',
  },
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
 * Person schema (Jesse). Gebruik op /over en als author-referentie.
 */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    ...PERSON,
  }
}

/**
 * ProfilePage schema voor /over. Helpt Google/LLMs om Jesse te herkennen
 * als de persoon achter de publicatie. Geen aparte profiel-URL nodig.
 */
export function profilePageSchema({ path = '/over', dateModified } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE.baseUrl}${path}`,
    inLanguage: 'nl-NL',
    dateModified,
    mainEntity: PERSON,
    about: ORG,
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
 *
 * author defaultet naar Jesse (PERSON); publisher blijft altijd de Organization.
 * Geef author: ORG mee als een pagina expliciet niet aan één persoon toe te
 * schrijven is (bv. directory-pagina's).
 */
export function articleSchema({ headline, description, path, dateModified, datePublished, author }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE.baseUrl}${path}`,
    inLanguage: 'nl-NL',
    author: author || PERSON,
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

/**
 * Speakable schema. Markeert specifieke delen van een pagina als geschikt
 * voor voice-assistants om voor te lezen. Gebruik voor het "kort antwoord"-
 * blok met id="kort-antwoord" op kernpagina's.
 */
export function speakableSchema({ path, cssSelector = ['#kort-antwoord'] } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${SITE.baseUrl}${path}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector,
    },
  }
}

/**
 * DefinedTermSet schema voor een begrippenpagina. Helpt LLMs om glossary-
 * vragen ("wat is een VRW?") naar deze pagina te routeren.
 * terms is een array van {term, description, url?}.
 */
export function definedTermSetSchema({ name, description, path, terms }) {
  const setId = `${SITE.baseUrl}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': setId,
    name,
    description,
    url: setId,
    inLanguage: 'nl-NL',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.description,
      inDefinedTermSet: setId,
      ...(t.url ? { url: `${SITE.baseUrl}${t.url}` } : {}),
    })),
  }
}
