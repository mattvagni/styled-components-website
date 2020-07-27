import {
  AirBnBLogo,
  ArtsyLogo,
  AtlassianLogo,
  AutodeskLogo,
  Auth0Logo,
  BBCLogo,
  BraveLogo,
  BirchboxLogo,
  BlaBlaCarLogo,
  BlockchainLogo,
  BloombergLogo,
  BlueTomatoLogo,
  CasperLogo,
  ChangeOrgLogo,
  CoinbaseLogo,
  CoinMarketCapLogo,
  CultureTripLogo,
  DisneyPlusLogo,
  DoorDashLogo,
  EddieBauerLogo,
  EurostarLogo,
  EuroVisionLogo,
  GeniusLogo,
  GitHubLogo,
  GoogleLogo,
  HuffpostLogo,
  IdeoLogo,
  IMDbLogo,
  InVisionLogo,
  JaneLogo,
  KiwiComLogo,
  LegoLogo,
  MagicLeapLogo,
  MoleskineLogo,
  PatreonLogo,
  RedditLogo,
  SeatGeekLogo,
  SesameLogo,
  ShpockLogo,
  SmartLogo,
  SpotifyLogo,
  TargetLogo,
  TaskadeLogo,
  TicketmasterLogo,
  TinderLogo,
  TypeformLogo,
  TruliaLogo,
  UnderArmourLogo,
  VimeoLogo,
  VogueLogo,
  XingLogo,
  LyftLogo,
  VolkswagenLogo,
  FramerLogo,
  PricelineLogo,
  TheOnionLogo,
  StreamLogo,
  RevolutLogo,
  RiotGamesLogo,
  WazirXLogo,
  UnrealEngineLogo,
  SmallPdfLogo,
  OverWatchLeagueLogo,
  PageXlLogo,
  HomelyLogo,
  WishLogo,
} from './components/CompanyLogos';

const companies = [
  {
    key: 'https://www.autodesk.com',
    similarWebGlobalRank: 1425,
    name: 'Autodesk',
    logo: AutodeskLogo,
    style: {
      bottom: '-0.1rem',
      height: '2rem',
    },
    projects: {},
  },
  {
    key: 'https://www.airbnb.com',
    similarWebGlobalRank: 20,
    name: 'AirBnB',
    logo: AirBnBLogo,
    style: {
      bottom: '0.3rem',
      height: '2.5rem',
    },
    projects: {
      airbnb: {
        title: 'Airbnb Cereal',
        link: 'https://airbnb.design/cereal/',
        src: '/screenshots/thumbnails/airbnb.design-cereal.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'airbnb',
      },
    },
  },
  {
    key: 'https://www.artsy.net',
    similarWebGlobalRank: 17576,
    name: 'Artsy',
    logo: ArtsyLogo,
    style: {
      bottom: '0.16rem',
      height: '2.25rem',
    },
    projects: {
      artsy: {
        title: 'Artsy',
        link: 'https://www.artsy.net/',
        src: '/screenshots/thumbnails/artsy.net.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'artsy',
      },
    },
  },
  {
    key: 'https://www.atlassian.com/',
    similarWebGlobalRank: 2505,
    name: 'Atlassian',
    logo: AtlassianLogo,
    style: {
      height: '1.75rem',
    },
    projects: {
      atlaskit: {
        title: 'AtlasKit',
        link: 'https://atlaskit.atlassian.com',
        repo: 'https://bitbucket.org/atlassian/atlaskit-mk-2/src/master/',
        src: '/screenshots/thumbnails/atlaskit.atlassian.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'atlaskit',
      },
    },
  },
  {
    key: 'https://auth0.com',
    similarWebGlobalRank: 5628,
    name: 'Auth0',
    logo: Auth0Logo,
    style: {},
    projects: {
      auth0: {
        title: 'Auth0',
        link: 'https://auth0.com/',
        src: '/screenshots/thumbnails/auth0.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'auth0',
      },
    },
  },
  {
    key: 'https://www.bbc.com/',
    similarWebGlobalRank: 114,
    name: 'BBC',
    logo: BBCLogo,
    style: {},
    projects: {},
  },
  {
    key: 'https://www.blablacar.fr',
    similarWebGlobalRank: 3803,
    name: 'BlaBlaCar',
    logo: BlaBlaCarLogo,
    style: {},
    projects: {
      blablacar: {
        title: 'BlaBlaCar',
        link: 'https://www.blablacar.fr/',
        src: '/screenshots/thumbnails/www.blablacar.fr.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'blablacar',
      },
    },
  },
  {
    key: 'https://brave.com/',
    similarWebGlobalRank: 13395,
    name: 'Brave',
    logo: BraveLogo,
    style: {},
    projects: {
      brave: {
        title: 'Brave',
        link: 'https://brave.com/',
        src: '/screenshots/thumbnails/brave.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'brave',
      },
    },
  },
  {
    key: 'https://www.bloomberg.com',
    similarWebGlobalRank: 507,
    name: 'Bloomberg',
    logo: BloombergLogo,
    style: {
      bottom: '-0.2rem',
      height: '1.75rem',
    },
    projects: {},
  },
  {
    key: 'https://www.blue-tomato.com',
    similarWebGlobalRank: 21322,
    name: 'BlueTomato',
    logo: BlueTomatoLogo,
    style: {
      bottom: '0.75rem',
      height: '3.3rem',
    },
    projects: {},
  },
  {
    key: 'http://casper.com/',
    similarWebGlobalRank: 33785,
    name: 'Casper',
    logo: CasperLogo,
    style: {
      bottom: '-0.2rem',
    },
    projects: {
      casper: {
        title: 'Casper',
        link: 'https://casper.com/',
        src: '/screenshots/thumbnails/casper.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'casper',
      },
    },
  },
  {
    key: 'https://theculturetrip.com',
    similarWebGlobalRank: 4945,
    name: 'CultureTrip',
    logo: CultureTripLogo,
    style: {
      height: '2rem',
    },
    projects: {},
  },
  {
    key: 'https://www.coinbase.com',
    similarWebGlobalRank: 2001,
    name: 'Coinbase',
    logo: CoinbaseLogo,
    style: {
      bottom: '0.3rem',
      height: '2rem',
    },
    projects: {
      coinbase: {
        title: 'Coinbase',
        link: 'https://coinbase.com',
        src: '/screenshots/thumbnails/coinbase.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'coinbase',
      },
    },
  },
  {
    key: 'https://coinmarketcap.com/',
    similarWebGlobalRank: 2155,
    name: 'CoinMarketCap',
    logo: CoinMarketCapLogo,
    style: {
      bottom: '0.3rem',
      height: '2.5rem',
    },
    projects: {
      coinmarketcap: {
        title: 'CoinMarketCap',
        link: 'https://coinmarketcap.com/',
        src: '/screenshots/thumbnails/coinmarketcap.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'coinmarketcap',
      },
    },
  },
  {
    key: 'https://www.disneyplus.com/',
    similarWebGlobalRank: 7707,
    name: 'DisneyPlus',
    logo: DisneyPlusLogo,
    style: {
      bottom: '0.4rem',
      height: '3rem',
    },
    projects: {
      disneyplus: {
        title: 'Disney+',
        link: 'https://www.disneyplus.com/',
        src: '/screenshots/thumbnails/www.disneyplus.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'disneyplus',
      },
    },
  },
  {
    key: 'https://www.doordash.com/',
    similarWebGlobalRank: 2831,
    name: 'DoorDash',
    logo: DoorDashLogo,
    style: {
      bottom: '-0.2rem',
    },
    projects: {},
  },
  {
    key: 'https://eurovision.tv/',
    similarWebGlobalRank: 38132,
    name: 'EuroVision',
    logo: EuroVisionLogo,
    style: {
      bottom: '0.1rem',
      height: '2.5rem',
    },
    projects: {},
  },
  {
    key: 'https://eddiebauer.com',
    similarWebGlobalRank: 11625,
    name: 'EddieBauer',
    logo: EddieBauerLogo,
    style: {
      bottom: '0.1rem',
      height: '2rem',
    },
    projects: {},
  },
  {
    key: 'https://github.com/',
    similarWebGlobalRank: 76,
    name: 'GitHub',
    logo: GitHubLogo,
    style: {},
    projects: {},
  },
  {
    key: 'https://www.huffpost.com',
    similarWebGlobalRank: 950,
    name: 'Huffpost',
    logo: HuffpostLogo,
    style: {},
    projects: {},
  },
  {
    key: 'https://www.ideo.com',
    similarWebGlobalRank: 117384,
    name: 'Ideo',
    logo: IdeoLogo,
    style: {
      bottom: '-0.15rem',
      height: '1.5rem',
    },
    projects: {},
  },
  {
    key: 'https://www.imdb.com',
    similarWebGlobalRank: 54,
    name: 'IMDb',
    logo: IMDbLogo,
    style: {},
    projects: {
      imdb: {
        title: 'IMDb Website',
        link: 'https://imdb.com/',
        src: '/screenshots/thumbnails/imdb.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'imdb',
      },
    },
  },
  {
    key: 'https://www.invisionapp.com',
    similarWebGlobalRank: 2368,
    name: 'InVision',
    logo: InVisionLogo,
    style: {
      bottom: '0.1rem',
      height: '2.25rem',
    },
    projects: {
      invision: {
        title: 'Invision',
        link: 'https://invisionapp.com',
        src: '/screenshots/thumbnails/invisionapp.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'invision',
      },
    },
  },
  {
    key: 'https://www.kiwi.com',
    similarWebGlobalRank: 4612,
    name: 'KiwiCom',
    logo: KiwiComLogo,
    style: {
      bottom: '0.3rem',
      height: '2.75rem',
    },
    projects: {},
  },
  {
    key: 'https://www.lego.com',
    similarWebGlobalRank: 2008,
    name: 'Lego',
    logo: LegoLogo,
    style: {},
    projects: {
      'lego-store': {
        title: 'Lego Store',
        link: 'https://lego.com',
        src: '/screenshots/thumbnails/lego.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'lego-store',
      },
    },
  },
  {
    key: 'https://www.magicleap.com/',
    similarWebGlobalRank: 119765,
    name: 'MagicLeap',
    logo: MagicLeapLogo,
    style: {
      bottom: '1rem',
      height: '4rem',
    },
    projects: {},
  },
  {
    key: 'https://www.moleskine.com',
    similarWebGlobalRank: 70404,
    name: 'Moleskine',
    logo: MoleskineLogo,
    style: {
      bottom: '-0.15rem',
      height: '1.3rem',
    },
    projects: {
      moleskinestudio: {
        title: 'Moleskine Digital Studio',
        link: 'https://moleskinestudio.com/',
        src: '/screenshots/thumbnails/moleskinestudio.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'moleskine',
      },
    },
  },
  {
    key: 'https://www.patreon.com/',
    similarWebGlobalRank: 533,
    name: 'Patreon',
    logo: PatreonLogo,
    style: {},
    projects: {
      patreon: {
        title: 'Patreon',
        link: 'https://patreon.com',
        src: '/screenshots/thumbnails/patreon.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'patreon',
      },
    },
  },
  {
    key: 'https://www.reddit.com/',
    similarWebGlobalRank: 20,
    name: 'Reddit',
    logo: RedditLogo,
    style: {
      bottom: '0.15rem',
    },
    projects: {},
  },
  {
    key: 'https://seatgeek.com',
    similarWebGlobalRank: 7292,
    name: 'SeatGeek',
    logo: SeatGeekLogo,
    style: {},
    projects: {},
  },
  {
    key: 'https://www.sesamegifts.com/',
    similarWebGlobalRank: 500301,
    name: 'Sesame',
    logo: SesameLogo,
    style: {},
    projects: {},
  },
  {
    key: 'https://www.shpock.com',
    similarWebGlobalRank: 11112,
    name: 'Shpock',
    logo: ShpockLogo,
    style: {
      bottom: '0.4rem',
      height: '3rem',
    },
    projects: {},
  },
  {
    key: 'https://smart.com',
    similarWebGlobalRank: 70739,
    name: 'Smart',
    logo: SmartLogo,
    style: {
      bottom: '0.1rem',
      height: '2rem',
    },
    projects: {},
  },
  {
    key: 'https://spotify.com',
    similarWebGlobalRank: 111,
    name: 'Spotify',
    logo: SpotifyLogo,
    style: {
      bottom: '0.3rem',
      height: '2.5rem',
    },
    projects: {
      spotify: {
        title: 'Spotify Website',
        link: 'https://spotify.com/',
        src: '/screenshots/thumbnails/spotify.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'spotify',
      },
    },
  },
  {
    key: 'https://www.target.com',
    similarWebGlobalRank: 300,
    name: 'Target',
    logo: TargetLogo,
    style: {},
    projects: {
      target: {
        title: 'Target',
        link: 'https://www.target.com',
        src: '/screenshots/thumbnails/www.target.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'target',
      },
    },
  },
  {
    key: 'https://www.ticketmaster.com/',
    similarWebGlobalRank: 1079,
    name: 'Ticketmaster',
    logo: TicketmasterLogo,
    style: {
      height: '1.7rem',
    },
    projects: {
      ticketmaster: {
        title: 'Ticketmaster',
        link: 'https://www.ticketmaster.co.uk',
        src: '/screenshots/thumbnails/www.ticketmaster.co.uk.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'ticketmaster',
      },
    },
  },
  {
    key: 'https://tinder.com/',
    similarWebGlobalRank: 561,
    name: 'Tinder',
    logo: TinderLogo,
    style: {
      bottom: '0.2rem',
    },
    projects: {
      swipelife: {
        title: 'Swipelife',
        link: 'https://swipelife.tinder.com/',
        src: '/screenshots/thumbnails/swipelife.tinder.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'swipelife',
      },
    },
  },
  {
    key: 'https://www.typeform.com',
    similarWebGlobalRank: 3279,
    name: 'Typeform',
    logo: TypeformLogo,
    style: {
      bottom: '0.15rem',
      height: '2.35rem',
    },
    projects: {},
  },
  {
    key: 'https://www.underarmour.com',
    similarWebGlobalRank: 6221,
    name: 'UnderArmour',
    logo: UnderArmourLogo,
    style: {
      height: '2.3rem',
    },
    projects: {},
  },
  {
    key: 'https://www.vimeo.com',
    similarWebGlobalRank: 239,
    name: 'Vimeo',
    logo: VimeoLogo,
    style: {
      bottom: '0.3rem',
      height: '2.1rem',
    },
    projects: {},
  },
  {
    key: 'https://www.vogue.com',
    similarWebGlobalRank: 3075,
    name: 'Vogue',
    logo: VogueLogo,
    style: {
      height: '1.8rem',
    },
    projects: {
      vogue: {
        title: 'Vogue',
        link: 'https://vogue.de',
        src: '/screenshots/thumbnails/vogue.de.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'vogue',
      },
    },
  },
  {
    key: 'https://www.xing.com',
    similarWebGlobalRank: 2203,
    name: 'Xing',
    logo: XingLogo,
    style: {
      bottom: '0.7rem',
      height: '2.5rem',
    },
    projects: {},
  },
  {
    key: 'https://jane.com',
    similarWebGlobalRank: 21426,
    name: 'Jane',
    logo: JaneLogo,
    style: {
      height: '2.0rem',
    },
    projects: {},
  },
  {
    key: 'https://google.com',
    similarWebGlobalRank: 1,
    name: 'Google',
    logo: GoogleLogo,
    style: {
      height: '2.3rem',
    },
    projects: {},
  },
  {
    key: 'https://genius.com',
    similarWebGlobalRank: 366,
    name: 'Genius',
    logo: GeniusLogo,
    style: {
      height: '1.5rem',
    },
    projects: {},
  },
  {
    key: 'https://www.eurostar.com',
    similarWebGlobalRank: 11380,
    name: 'Eurostar',
    logo: EurostarLogo,
    style: {
      height: '2.3rem',
    },
    projects: {},
  },
  {
    key: 'http://change.org/',
    similarWebGlobalRank: 551,
    name: 'ChangeOrg',
    logo: ChangeOrgLogo,
    style: {
      bottom: '-0.2rem',
    },
    projects: {},
  },
  {
    key: 'https://www.trulia.com/',
    similarWebGlobalRank: 257,
    name: 'Trulia',
    logo: TruliaLogo,
    style: {
      bottom: '0.1rem',
    },
    projects: {},
  },
  {
    key: 'https://birchbox.com/',
    similarWebGlobalRank: 38199,
    name: 'Birchbox',
    logo: BirchboxLogo,
    style: {
      height: '1.3rem',
      bottom: '-0.2rem',
    },
    projects: {},
  },
  {
    key: 'https://blockchain.com/',
    similarWebGlobalRank: 4797,
    name: 'Blockchain',
    logo: BlockchainLogo,
    style: {
      height: '1.3rem',
    },
    projects: {},
  },
  {
    key: 'https://www.volkswagen.de/de.html',
    similarWebGlobalRank: 75049,
    name: 'Volkswagen',
    logo: VolkswagenLogo,
    style: {
      height: '2rem',
    },
    projects: {},
  },
  {
    key: 'https://spectrum.chat',
    similarWebGlobalRank: 95528,
    name: 'Spectrum',
    logo: null,
    style: {},
    projects: {
      spectrum: {
        title: 'Spectrum',
        link: 'https://spectrum.chat',
        repo: 'https://github.com/withspectrum/spectrum',
        src: '/screenshots/thumbnails/spectrum.chat.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'spectrum',
      },
    },
  },
  {
    key: 'https://tsm.gg',
    similarWebGlobalRank: 273875,
    name: 'TSM',
    logo: null,
    style: {},
    projects: {
      tsm: {
        title: 'TSM',
        link: 'https://tsm.gg',
        src: '/screenshots/thumbnails/tsm.gg.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'tsm',
      },
    },
  },
  {
    key: 'https://fortnitemaster.com',
    similarWebGlobalRank: 332652,
    name: 'Solomid Corp',
    logo: null,
    style: {},
    projects: {
      fortnitemaster: {
        title: 'Fortnite Master',
        link: 'https://fortnitemaster.com/',
        src: '/screenshots/thumbnails/fortnitemaster.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'fortnitemaster',
      },
    },
  },
  {
    key: 'https://prisma.io',
    similarWebGlobalRank: 183831,
    name: 'Prisma',
    logo: null,
    style: {},
    projects: {
      prisma: {
        title: 'Prisma',
        link: 'https://prisma.io/',
        repo: 'https://github.com/prisma/prisma',
        src: '/screenshots/thumbnails/prisma.io.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'prisma',
      },
    },
  },
  {
    key: 'https://www.lyft.com/',
    similarWebGlobalRank: 3783,
    name: 'Lyft',
    logo: LyftLogo,
    style: {
      height: '2.3rem',
    },
    projects: {
      lyft: {
        title: 'Lyft',
        link: 'https://www.lyft.com',
        src: '/screenshots/thumbnails/lyft.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'lyft',
      },
    },
  },
  {
    key: 'https://framer.com/',
    similarWebGlobalRank: 185723,
    name: 'Framer',
    logo: FramerLogo,
    style: {},
    projects: {
      framer: {
        title: 'Framer',
        link: 'https://framer.com',
        src: '/screenshots/thumbnails/framer.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'framer',
      },
    },
  },
  {
    key: 'https://www.priceline.com/',
    similarWebGlobalRank: 1509,
    name: 'Priceline',
    logo: PricelineLogo,
    style: {},
    projects: {
      priceline: {
        title: 'Priceline',
        link: 'https://www.priceline.com/',
        src: '/screenshots/thumbnails/priceline.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'priceline',
      },
    },
  },
  {
    key: 'https://www.theonion.com/',
    similarWebGlobalRank: 8690,
    name: 'TheOnion',
    logo: TheOnionLogo,
    style: {},
    projects: {},
  },
  {
    key: 'https://getstream.io/',
    similarWebGlobalRank: 388663,
    name: 'Stream',
    logo: StreamLogo,
    style: {},
    projects: {
      stream: {
        title: 'Stream',
        link: 'https://getstream.io/',
        src: '/screenshots/thumbnails/www.getstream.io.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'stream',
      },
    },
  },
  {
    key: 'http://taskade.com/',
    similarWebGlobalRank: 136144,
    name: 'Taskade',
    logo: TaskadeLogo,
    style: {},
    projects: {
      taskade: {
        title: 'Taskade',
        link: 'http://taskade.com/',
        src: '/screenshots/thumbnails/taskade.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'taskade',
      },
    },
  },
  {
    key: 'https://www.revolut.com',
    similarWebGlobalRank: 12225,
    name: 'Revolut',
    logo: RevolutLogo,
    style: {},
    projects: {
      revolut: {
        title: 'Revolut',
        link: 'https://www.revolut.com/',
        src: '/screenshots/thumbnails/revolut.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'revolut',
      },
    },
  },
  {
    key: 'https://www.riotgames.com/',
    similarWebGlobalRank: 1819,
    name: 'Riot Games',
    logo: RiotGamesLogo,
    style: {},
    projects: {
      leagueoflegends: {
        title: 'League of Legends',
        link: 'https://leagueoflegends.com/',
        src: '/screenshots/thumbnails/leagueoflegends.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'leagueoflegends',
      },
    },
  },
  {
    key: 'https://wazirx.com/',
    similarWebGlobalRank: 48011,
    name: 'WazirX',
    logo: WazirXLogo,
    style: {},
    projects: {
      wazirx: {
        title: 'WazirX Exchange Platform',
        link: 'https://wazirx.com/',
        src: '/screenshots/thumbnails/wazirx.com.png',
        width: 1280,
        height: 720,
        internalUrl: 'wazirx',
      },
    },
  },
  {
    key: 'https://www.unrealengine.com/',
    similarWebGlobalRank: 5206,
    name: 'Unreal Engine',
    logo: UnrealEngineLogo,
    style: {},
    projects: {
      unrealengine: {
        title: 'Unreal Engine',
        link: 'https://www.unrealengine.com/',
        src: '/screenshots/thumbnails/www.unrealengine.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'unrealengine',
      },
    },
  },
  {
    key: 'https://smallpdf.com',
    similarWebGlobalRank: 783,
    name: 'Smallpdf',
    logo: SmallPdfLogo,
    style: {},
    projects: {
      smallpdf: {
        title: 'Smallpdf',
        link: 'https://smallpdf.com',
        src: '/screenshots/thumbnails/smallpdf.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'smallpdf',
      },
    },
  },
  {
    key: 'https://overwatchleague.com',
    similarWebGlobalRank: 22316,
    name: 'Blizzard',
    logo: OverWatchLeagueLogo,
    style: {},
    projects: {
      overwatchleague: {
        title: 'Overwatch League',
        link: 'https://overwatchleague.com',
        src: '/screenshots/thumbnails/overwatchleague.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'overwatchleague',
      },
    },
  },
  {
    key: 'https://www.lauyan.com',
    similarWebGlobalRank: Number.MAX_SAFE_INTEGER,
    name: 'Lauyan Software Sarl',
    logo: PageXlLogo,
    style: {},
    projects: {
      pagexl: {
        title: 'PageXL',
        link: 'https://pagexl.com',
        src: '/screenshots/thumbnails/pagexl.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'pagexl',
      },
    },
  },
  {
    key: 'https://www.homely.com.au/',
    similarWebGlobalRank: 48470,
    name: 'Homely',
    logo: HomelyLogo,
    style: {},
    projects: {
      homely: {
        title: 'Homely',
        link: 'https://www.homely.com.au/',
        src: '/screenshots/thumbnails/homely.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'homely',
      },
    },
  },
  {
    key: 'https://www.wish.com/',
    similarWebGlobalRank: 194,
    name: 'Wish',
    logo: WishLogo,
    style: {},
    projects: {
      wish: {
        title: 'Wish',
        link: 'https://www.wish.com/',
        src: '/screenshots/thumbnails/wish.com.jpg',
        width: 1280,
        height: 720,
        internalUrl: 'wish',
      },
    },
  },
];

export default companies;

// sorting logic: the more popular a website, the higher it gets listed
export const sortedCompanies = companies.sort((a, b) => a.similarWebGlobalRank - b.similarWebGlobalRank);
export const sortedProjects = sortedCompanies.reduce(
  (projects, company) => ({
    ...projects,
    ...Object.entries(company.projects || {}).reduce(
      (projects, [name, project]) => ({
        ...projects,
        [name]: {
          ...project,
          owner: company.name,
        },
      }),
      {}
    ),
  }),
  {}
);
