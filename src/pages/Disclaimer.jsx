import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import LastChecked from '../components/LastChecked'

const SECTIES = [
  {
    n: '1',
    title: 'Informatief karakter',
    body: 'De informatie op StageStart Curaçao is uitsluitend bedoeld voor algemene en informatieve doeleinden. De website is geen stagebureau, geen juridisch advieskantoor, geen immigratie-adviesdienst en geen verzekeringsadviseur.',
  },
  {
    n: '2',
    title: 'Officiële bronnen blijven leidend',
    body: 'StageStart Curaçao streeft naar zorgvuldige en actuele informatie. Toch kunnen regels, procedures, bedragen, vereisten en praktische omstandigheden wijzigen. Voor formele en actuele informatie over onder meer verblijf, vergunningen, verzekering, overheidsprocedures en andere officiële verplichtingen blijven de relevante officiële instanties en bronnen altijd leidend.',
  },
  {
    n: '3',
    title: 'Geen rechten ontlenen',
    body: 'Aan de inhoud van deze website kunnen geen rechten worden ontleend. Hoewel StageStart Curaçao de inhoud met zorg samenstelt, wordt geen garantie gegeven dat alle informatie volledig, juist of actueel is.',
  },
  {
    n: '4',
    title: 'Eigen verantwoordelijkheid',
    body: 'Het gebruik van de informatie op deze website is volledig op eigen risico. De gebruiker blijft zelf verantwoordelijk voor het controleren van voor hem of haar relevante informatie, in het bijzonder wanneer die informatie gevolgen kan hebben voor geld, documenten, verzekering, gezondheid, verblijf of juridische status.',
  },
  {
    n: '5',
    title: 'Aansprakelijkheid',
    body: 'StageStart Curaçao is, voor zover wettelijk toegestaan, niet aansprakelijk voor directe of indirecte schade die voortvloeit uit het gebruik van deze website, het vertrouwen op informatie op deze website, of het tijdelijk niet beschikbaar zijn van de website.',
  },
  {
    n: '6',
    title: 'Externe links',
    body: 'Deze website kan links bevatten naar externe websites van derden. Deze links worden uitsluitend aangeboden voor gebruiksgemak en aanvullende informatie. StageStart Curaçao is niet verantwoordelijk voor de inhoud, beschikbaarheid, juistheid of werking van externe websites.',
  },
  {
    n: '7',
    title: 'Intellectueel eigendom',
    body: 'Tenzij anders vermeld, berusten de rechten op de teksten, structuur en eigen redactionele inhoud van StageStart Curaçao bij StageStart Curaçao. Het is niet toegestaan om inhoud zonder voorafgaande toestemming geheel of gedeeltelijk te kopiëren, herpubliceren of commercieel te gebruiken, behalve voor zover de wet dat toestaat.',
  },
  {
    n: '8',
    title: 'Wijzigingen',
    body: 'StageStart Curaçao mag deze disclaimer en gebruiksvoorwaarden op ieder moment aanpassen. De meest recente versie staat altijd op deze website.',
  },
  {
    n: '9',
    title: 'Contact',
    body: 'Voor vragen over deze disclaimer of over de website kun je contact opnemen via: [E-MAILADRES]',
  },
]

export default function Disclaimer() {
  return (
    <>
      <SEO />
      <PageHero
        eyebrow="Juridisch"
        title="Disclaimer en gebruiksvoorwaarden"
        subtitle="Laatst bijgewerkt: 16 april 2026"
        accentColor="#1A7EC5"
      />

      <div className="max-w-3xl mx-auto px-5 pb-16">

        {/* Korte intro */}
        <div className="card border-l-4 mb-10" style={{ borderLeftColor: '#1A7EC5' }}>
          <p className="text-sm text-gray-600 leading-relaxed">
            StageStart Curaçao is een onafhankelijke informatieve gids. De site is bedoeld om stagiairs praktisch te helpen bij voorbereiding en verblijf op Curaçao. Voor officiële en actuele vereisten blijven officiële instanties altijd leidend.
          </p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          Welkom op StageStart Curaçao. StageStart Curaçao is een onafhankelijke informatieve website voor stagiairs die zich voorbereiden op een stage op Curaçao of daar net zijn aangekomen. Door deze website te bezoeken of te gebruiken, ga je akkoord met onderstaande voorwaarden.
        </p>

        <div className="flex flex-col gap-6">
          {SECTIES.map((s) => (
            <section key={s.n}>
              <h2 className="font-serif text-lg font-normal text-dark mb-2">
                {s.n}. {s.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <LastChecked
          date="2026-04-16"
          bron="Eigen redactie"
          gevoeligheid="laag"
        />
      </div>
    </>
  )
}
