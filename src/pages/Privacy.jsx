import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const SECTIES = [
  {
    n: '1',
    title: 'Wie is verantwoordelijk?',
    body: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">Verantwoordelijke voor de verwerking van persoonsgegevens via deze website is:</p>
        <div className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-gray-200">
          <p>StageStart Curaçao</p>
          <p>Jesco Innovation</p>
          <p>info@jescoinnovation.nl</p>
        </div>
      </>
    ),
  },
  {
    n: '2',
    title: 'Welke gegevens verwerken wij?',
    body: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">Afhankelijk van hoe je de website gebruikt, kunnen wij de volgende gegevens verwerken:</p>
        <ul className="flex flex-col gap-1.5 text-sm text-gray-600 pl-5 list-disc">
          <li>naam</li>
          <li>e-mailadres</li>
          <li>informatie die je zelf invult in een formulier</li>
          <li>technische gegevens zoals IP-adres, browsertype, apparaatgegevens en gebruiksgegevens</li>
          <li>gegevens over jouw gebruik van de website, bijvoorbeeld bezochte pagina's of interactie met functies</li>
        </ul>
      </>
    ),
  },
  {
    n: '3',
    title: 'Waarom verwerken wij deze gegevens?',
    body: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">Wij verwerken persoonsgegevens uitsluitend voor zover dat nodig is voor bijvoorbeeld:</p>
        <ul className="flex flex-col gap-1.5 text-sm text-gray-600 pl-5 list-disc">
          <li>het aanbieden en verbeteren van de website</li>
          <li>het beantwoorden van vragen of berichten</li>
          <li>het versturen van een aangevraagde checklist, gids of andere download</li>
          <li>het analyseren van gebruik van de website</li>
          <li>het beveiligen van de website en het voorkomen van misbruik</li>
        </ul>
      </>
    ),
  },
  {
    n: '4',
    title: 'Op basis waarvan verwerken wij gegevens?',
    body: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">Wij verwerken persoonsgegevens alleen wanneer daar een geldige grondslag voor bestaat, bijvoorbeeld:</p>
        <ul className="flex flex-col gap-1.5 text-sm text-gray-600 pl-5 list-disc">
          <li>jouw toestemming</li>
          <li>de uitvoering van een verzoek dat jij zelf doet</li>
          <li>een gerechtvaardigd belang, zoals websitebeveiliging of verbetering van de site</li>
          <li>een wettelijke verplichting, voor zover van toepassing</li>
        </ul>
      </>
    ),
  },
  {
    n: '5',
    title: 'Delen wij gegevens met derden?',
    body: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">Wij verkopen jouw persoonsgegevens niet. Wij delen gegevens alleen met derden als dat nodig is voor de werking van de website of dienstverlening, bijvoorbeeld:</p>
        <ul className="flex flex-col gap-1.5 text-sm text-gray-600 pl-5 list-disc">
          <li>hostingproviders</li>
          <li>e-mail- of formuliertools</li>
          <li>analysetools</li>
          <li>andere technische dienstverleners</li>
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">Met dergelijke partijen sluiten wij waar nodig passende afspraken.</p>
      </>
    ),
  },
  {
    n: '6',
    title: 'Hoe lang bewaren wij gegevens?',
    body: <p className="text-sm text-gray-600 leading-relaxed">Wij bewaren persoonsgegevens niet langer dan nodig is voor het doel waarvoor ze zijn verzameld, tenzij wij wettelijk verplicht zijn gegevens langer te bewaren.</p>,
  },
  {
    n: '7',
    title: 'Jouw rechten',
    body: (
      <>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">Je hebt het recht om:</p>
        <ul className="flex flex-col gap-1.5 text-sm text-gray-600 pl-5 list-disc mb-2">
          <li>te weten welke persoonsgegevens wij van je verwerken</li>
          <li>inzage te vragen in je gegevens</li>
          <li>onjuiste gegevens te laten corrigeren</li>
          <li>gegevens te laten verwijderen, voor zover dat mogelijk is</li>
          <li>bezwaar te maken tegen bepaalde verwerkingen</li>
          <li>een eerder gegeven toestemming weer in te trekken</li>
        </ul>
        <p className="text-sm text-gray-600 leading-relaxed">De Autoriteit Persoonsgegevens benadrukt dat mensen recht hebben op informatie over wat organisaties met hun persoonsgegevens doen en waarom.</p>
      </>
    ),
  },
  {
    n: '8',
    title: 'Cookies en vergelijkbare technieken',
    body: <p className="text-sm text-gray-600 leading-relaxed">StageStart Curaçao gebruikt mogelijk cookies of vergelijkbare technieken. Meer informatie hierover vind je in de cookieverklaring.</p>,
  },
  {
    n: '9',
    title: 'Beveiliging',
    body: <p className="text-sm text-gray-600 leading-relaxed">Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik of onbevoegde toegang.</p>,
  },
  {
    n: '10',
    title: 'Contact',
    body: <p className="text-sm text-gray-600 leading-relaxed">Vragen over deze privacyverklaring of een verzoek over jouw persoonsgegevens kun je sturen naar: <a href="mailto:info@jescoinnovation.nl" className="text-sky underline">info@jescoinnovation.nl</a></p>,
  },
]

export default function Privacy() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Juridisch"
        title="Privacyverklaring"
        subtitle="Laatst bijgewerkt: 16 april 2026"
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          StageStart Curaçao hecht waarde aan jouw privacy. In deze privacyverklaring leggen we uit welke persoonsgegevens we verwerken, waarom we dat doen en welke rechten je hebt.
        </p>

        <div className="flex flex-col gap-6">
          {SECTIES.map((s) => (
            <section key={s.n}>
              <h2 className="font-serif text-lg font-normal text-dark mb-2">
                {s.n}. {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Eigen redactie + Autoriteit Persoonsgegevens"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
