export type District =
  | "Praha"
  | "Středočeský kraj"
  | "Brno"
  | "Ostrava"
  | "unknown"
  | "Pardubice"
  | "Nymburk"
  | "Jihlava"
  | "Hradec Králové"
  | "Benešov";

export type Organizer = {
  id: string;
  name: string;
  websiteUrl: string;
};

export type EventType = "play" | "workshop" | "unknown";

export type ImproEvent = {
  id: string;
  slug: string;
  name: string;
  eventType: EventType;
  websiteUrl: string;
  organizers: Array<Organizer> | undefined;
  playDate: string;
  district: District;
};

export type MonthEventsCalendar = {
  monthName: string;
  monthDate: string;
  events: Array<ImproEvent>;
};

export const organizers: Array<Organizer> = [
  {
    id: "unknown",
    name: "Neznámý",
    websiteUrl: "",
  },
  {
    id: "cnid",
    name: "ČNID - České Národní Improvizační Divadlo",
    websiteUrl: "www.cnid.cz",
  },
  {
    id: "padenapade",
    name: "Pade na pade",
    websiteUrl: "www.padenapade.com",
  },
  {
    id: "alibiprochyby",
    name: "Alibi pro Chyby",
    websiteUrl: "www.facebook.com/Alibi.pro.Chyby",
  },
  {
    id: "nedivse",
    name: "NeDivSe - Neobvyklá Divadelní Sešlost",
    websiteUrl: "www.facebook.com/nedivse",
  },
  {
    id: "justimpro",
    name: "Just! Impro",
    websiteUrl: "www.justimpro.cz",
  },
  {
    id: "polocasnapadu",
    name: "Poločas nápadu",
    websiteUrl: "www.polocas-napadu.cz",
  },
  {
    id: "fofrvzupanu",
    name: "Fofr v županu",
    websiteUrl: "www.facebook.com/fofr.impro",
  },
  {
    id: "improvariace",
    name: "Improvariace",
    websiteUrl: "www.improvariace.cz",
  },
  {
    id: "divadloimprovizaceodvaz",
    name: "Divadlo improvizace ODVAZ",
    websiteUrl: "www.odvaz.eu",
  },
  {
    id: "blancinybileboty",
    name: "Blančiny bílé boty",
    websiteUrl: "www.facebook.com/profile.php?id=100066485512990",
  },
  {
    id: "skolaimprovizace",
    name: "Škola improvizace",
    websiteUrl: "www.skolaimprovizace.cz",
  },
  {
    id: "instantnigaucink",
    name: "Instantní Gaučink",
    websiteUrl: "www.facebook.com/suroskard",
  },
  {
    id: "blr",
    name: "Blood, Love and Rhetoric Improv Comedy",
    websiteUrl: "www.facebook.com/BloodLoveRhetoricEvents",
  },
  {
    id: "vip",
    name: "V.I.P",
    websiteUrl: "www.impro.vip",
  },
  {
    id: "kecky",
    name: "Kecky",
    websiteUrl: "www.improkecky.cz",
  },
  {
    id: "standartnikabaret",
    name: "Vosto5 - Stand'artní kabaret",
    websiteUrl: "www.vosto5.cz/repertoar/standartni-kabaret",
  },
  {
    id: "paletaci",
    name: "Paleťáci",
    websiteUrl: "www.paletaci.cz",
  },
  {
    id: "bafni",
    name: "Bafni",
    websiteUrl: "www.bafni.cz",
  },
  {
    id: "divadloodvaz",
    name: "Divadlo Odvaz",
    websiteUrl: "www.odvaz.eu",
  },
  {
    id: "divadlo301",
    name: "Divadlo 301",
    websiteUrl: "www.facebook.com/Divadlo301",
  },
  {
    id: "bizoni",
    name: "B.I.Z.O.N.I.",
    websiteUrl: "www.improbizoni.cz",
  },
  {
    id: "myklucicospoluchodime",
    name: "My kluci, co spolu chodíme",
    websiteUrl: "www.facebook.com/mykluci",
  },
  {
    id: "divadlokellari",
    name: "Divadlo Kellari",
    websiteUrl: "www.divadlokellari.cz",
  },
  {
    id: "kabinetimprovizace",
    name: "Kabinet improvizace",
    websiteUrl: "www.kabinetimprovizace.cz",
  },
];

export const data: Array<MonthEventsCalendar> = [
  {
    monthName: "Srpen",
    monthDate: "2023-08",
    events: [
      {
        id: "1",
        slug: "2023-08-07-skolaimprovizace",
        name: "Impro v parku",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/improvparku",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-08-07",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-08-improvariace",
        name: "Letní IMPROshow na Terase Smíchov",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/245946518251331/245946521584664",
        organizers: [organizers.find((o) => o.id === "improvariace")!],
        playDate: "2023-08-08",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-14-skolaimprovizace",
        name: "Impro v parku",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/improvparku",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-08-14",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-15-fofrvzupanu",
        name: "Improshow: Best of Fofr v županu",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/9671342792940933",
        organizers: [organizers.find((o) => o.id === "fofrvzupanu")!],
        playDate: "2023-08-15",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-16-unknown",
        name: "Večerní degustace impra",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/308663351728541",
        organizers: undefined,
        playDate: "2023-08-16",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-20-skolaimprovizace",
        name: "Letní intenzivní kurz 2023",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/letniskola",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-08-20",
        district: "Středočeský kraj",
      },
      {
        id: "1",
        slug: "2023-08-21-skolaimprovizace",
        name: "Impro v parku",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/improvparku",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-08-21",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-21-divadloodvaz",
        name: "Vyletněná Improshow",
        eventType: "play",
        websiteUrl: "https://www.odvaz.eu/akce?&idA=1397",
        organizers: [organizers.find((o) => o.id === "divadloodvaz")!],
        playDate: "2023-08-21",
        district: "Ostrava",
      },
      {
        id: "1",
        slug: "2023-08-22-improvariace",
        name: "Letní IMPROshow na Terase Smíchov",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/245946518251331/245946528251330",
        organizers: [organizers.find((o) => o.id === "improvariace")!],
        playDate: "2023-08-22",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-28-skolaimprovizace",
        name: "Impro v parku",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/improvparku",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-08-28",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-08-28-standartnikabaret",
        name: "Letní Letná",
        eventType: "play",
        websiteUrl: "https://vosto5.cz/repertoar/standartni-kabaret",
        organizers: [organizers.find((o) => o.id === "standartnikabaret")!],
        playDate: "2023-08-28",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Září",
    monthDate: "2023-09",
    events: [
      {
        id: "1",
        slug: "2023-09-02-divadlo301",
        name: "Divadlo 301: Dřez v Nymburce",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1678866019286817",
        organizers: [organizers.find((o) => o.id === "divadlo301")!],
        playDate: "2023-09-02",
        district: "Nymburk",
      },
      {
        id: "1",
        slug: "2023-09-05-kecky",
        name: "Impro Kecky a Pája Sedláčková",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1026480205026852",
        organizers: [organizers.find((o) => o.id === "kecky")!],
        playDate: "2023-09-05",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-05-divadlo301",
        name: "Divadlo 301: Dřez",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/203724492427888",
        organizers: [organizers.find((o) => o.id === "divadlo301")!],
        playDate: "2023-09-05",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-06-standartnikabaret",
        name: "Vosto5: Stand'artní kabaret",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1485737302229061",
        organizers: [organizers.find((o) => o.id === "standartnikabaret")!],
        playDate: "2023-09-06",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-06-paletaci",
        name: "Otevřená hodina improvizace",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/1007349770286496",
        organizers: [organizers.find((o) => o.id === "paletaci")!],
        playDate: "2023-09-06",
        district: "Hradec Králové",
      },
      {
        id: "1",
        slug: "2023-09-06-divadloimprovizaceodvaz",
        name: "Improshow: třídní sraz",
        eventType: "play",
        websiteUrl: "https://goout.net/cs/improshow-tridni-sraz/sziuhiw/",
        organizers: [organizers.find((o) => o.id === "divadloimprovizaceodvaz")!],
        playDate: "2023-09-06",
        district: "Ostrava",
      },
      {
        id: "1",
        slug: "2023-09-07-skolaimprovizace",
        name: "Ukázková lekce",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/ukazkove-lekce",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-09-07",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-07-paletaci",
        name: "Otevřená hodina improvizace",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/1377078153227429",
        organizers: [organizers.find((o) => o.id === "paletaci")!],
        playDate: "2023-09-07",
        district: "Pardubice",
      },
      {
        id: "1",
        slug: "2023-09-12-alibiprochyby",
        name: "Ozvěny léta",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1391961111535867",
        organizers: [organizers.find((o) => o.id === "alibiprochyby")!],
        playDate: "2023-09-12",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-13-cnid",
        name: "Klasika vol. 2",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/962783754798105",
        organizers: [organizers.find((o) => o.id === "cnid")!],
        playDate: "2023-09-13",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-13-bafni",
        name: "Generál Torstenson Impro Cup",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/267767889369877",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-09-13",
        district: "Brno",
      },
      {
        id: "1",
        slug: "2023-09-13-divadloimprovizaceodvaz",
        name: "Maestro",
        eventType: "play",
        websiteUrl: "https://goout.net/cs/maestro/szguhiw/",
        organizers: [organizers.find((o) => o.id === "divadloimprovizaceodvaz")!],
        playDate: "2023-09-13",
        district: "Ostrava",
      },
      {
        id: "1",
        slug: "2023-09-15-improvariace",
        name: "Maestro! Festival ImVisible",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/212420504894469",
        organizers: [
          organizers.find((o) => o.id === "improvariace")!,
          organizers.find((o) => o.id === "blr")!,
        ],
        playDate: "2023-09-15",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-15-divadlokellari",
        name: "Improvizační show",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/264589383185599",
        organizers: [organizers.find((o) => o.id === "divadlokellari")!],
        playDate: "2023-09-15",
        district: "Benešov",
      },
      {
        id: "1",
        slug: "2023-09-15-standartnikabaret",
        name: "Vosto5: Stand'artní kabaret",
        eventType: "play",
        websiteUrl: "https://vzlet.cz/program/volna-jizda-vol-2-festival-ciste-improvizace",
        organizers: [organizers.find((o) => o.id === "standartnikabaret")!],
        playDate: "2023-09-15",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-15-bizoni",
        name: "Improshow - Vyber si svůj příběh",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/180900268341467",
        organizers: [organizers.find((o) => o.id === "bizoni")!],
        playDate: "2023-09-15",
        district: "Hradec Králové",
      },
      {
        id: "1",
        slug: "2023-09-16-padenapade",
        name: "Z nuly na pade, z pade na sto",
        eventType: "play",
        websiteUrl: "https://vzlet.cz/program/volna-jizda-vol-2-festival-ciste-improvizace",
        organizers: [organizers.find((o) => o.id === "padenapade")!],
        playDate: "2023-09-16",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-16-cnid",
        name: "Klasika",
        eventType: "play",
        websiteUrl: "https://vzlet.cz/program/volna-jizda-vol-2-festival-ciste-improvizace",
        organizers: [organizers.find((o) => o.id === "cnid")!],
        playDate: "2023-09-16",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-16-myklucicospoluchodime",
        name: "Svědomitě nepřipraveni",
        eventType: "play",
        websiteUrl: "https://vzlet.cz/program/volna-jizda-vol-2-festival-ciste-improvizace",
        organizers: [organizers.find((o) => o.id === "myklucicospoluchodime")!],
        playDate: "2023-09-16",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-17-bafni",
        name: "Zápas v divadelní improvizaci MUŽI vs. ŽENY",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/294409953182405",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-09-17",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-19-paletaci",
        name: "Improshow",
        eventType: "play",
        websiteUrl:
          "https://www.smsticket.cz/vstupenky/37709-paletaci-improshow-divadlo-exil-machonova-pasaz-pardubice",
        organizers: [organizers.find((o) => o.id === "paletaci")!],
        playDate: "2023-09-19",
        district: "Pardubice",
      },
      {
        id: "1",
        slug: "2023-09-19-skolaimprovizace",
        name: "Ukázková lekce",
        eventType: "workshop",
        websiteUrl: "https://www.skolaimprovizace.cz/ukazkove-lekce",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-09-19",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-19-polocasnapadu",
        name: "Motel Babí léto",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/149181438240378",
        organizers: [organizers.find((o) => o.id === "polocasnapadu")!],
        playDate: "2023-09-19",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-20-accioimpro",
        name: "Accio Impro (work in progress)",
        eventType: "play",
        websiteUrl: " https://www.facebook.com/events/347284567727787",
        organizers: [],
        playDate: "2023-09-20",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-20-divadloimprovizaceodvaz",
        name: "Improshow: detektivka",
        eventType: "play",
        websiteUrl: "https://goout.net/cs/improshow-detektivka/szkuhiw/",
        organizers: [organizers.find((o) => o.id === "divadloimprovizaceodvaz")!],
        playDate: "2023-09-20",
        district: "Ostrava",
      },
      {
        id: "1",
        slug: "2023-09-22-bafni",
        name: "Improvizační workshop pro začátečníky",
        eventType: "workshop",
        websiteUrl: "https://improvizacnikurzy.cz/kurzy/vikendy-pro-zacatecniky-praha/",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-09-22",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-22-vip",
        name: "Impro JAM",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/3564104473845369",
        organizers: [organizers.find((o) => o.id === "vip")!],
        playDate: "2023-09-22",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-25-justimpro",
        name: "321jedem!: David Matásek",
        eventType: "play",
        websiteUrl: "https://goout.net/cs/321jedem-david-matasek/szgdmvv",
        organizers: [organizers.find((o) => o.id === "justimpro")!],
        playDate: "2023-09-25",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-26-myklucicospoluchodime",
        name: "Kluci na lodi: Poslední věneček",
        eventType: "play",
        websiteUrl: "https://goout.net/cs/posledni-venecek/szkdymv",
        organizers: [organizers.find((o) => o.id === "myklucicospoluchodime")!],
        playDate: "2023-09-26",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-09-27-divadloimprovizaceodvaz",
        name: "Manželské etudy",
        eventType: "play",
        websiteUrl: "https://goout.net/cs/manzelske-etudy/szduhiw/",
        organizers: [organizers.find((o) => o.id === "divadloimprovizaceodvaz")!],
        playDate: "2023-09-27",
        district: "Ostrava",
      },
    ],
  },
  {
    monthName: "Říjen",
    monthDate: "2023-10",
    events: [
      {
        id: "1",
        slug: "2023-10-01-kabinetimprovizace",
        name: "Živelné impro",
        eventType: "workshop",
        websiteUrl: "https://www.kabinetimprovizace.cz/",
        organizers: [organizers.find((o) => o.id === "kabinetimprovizace")!],
        playDate: "2023-10-01",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-10-03-improvariace",
        name: "Gilty Pležr: Telenovela",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1737547963377081",
        organizers: [
          organizers.find((o) => o.id === "improvariace")!,
          organizers.find((o) => o.id === "cnid")!,
        ],
        playDate: "2023-10-03",
        district: "Praha",
      },
      //   DELETED
      //   {
      //     id: "1",
      //     slug: "2023-10-10-kecky",
      //     name: "Impro Kecky a Lukáš Rumlena",
      //     eventType: "play",
      //     websiteUrl: "https://www.facebook.com/events/336407808735178",
      //     organizers: [organizers.find((o) => o.id === "kecky")!],
      //     playDate: "2023-10-10",
      //     district: "Praha",
      //   },
      {
        id: "1",
        slug: "2023-10-12-standartnikabaret",
        name: "Jatka78",
        eventType: "play",
        websiteUrl: "https://vosto5.cz/repertoar/standartni-kabaret",
        organizers: [organizers.find((o) => o.id === "standartnikabaret")!],
        playDate: "2023-10-12",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-10-18-cnid",
        name: "Improvizovaný Shakepeare",
        eventType: "play",
        websiteUrl:
          "https://nod.roxy.cz/events/detail/857/improvizovany-shakespeare-ceske-narodni-improvizacni-divadlo/2023-10-18",
        organizers: [organizers.find((o) => o.id === "cnid")!],
        playDate: "2023-10-18",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-10-18-paletaci",
        name: "Jednorázový kurz improvizace pro páry",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/260559210145728",
        organizers: [organizers.find((o) => o.id === "paletaci")!],
        playDate: "2023-10-18",
        district: "Pardubice",
      },
      {
        id: "1",
        slug: "2023-10-18-bafni",
        name: "O nás dvou",
        eventType: "play",
        websiteUrl: "http://bafni.cz/repertoar/o-nas-dvou.html",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-10-18",
        district: "Brno",
      },
      {
        id: "1",
        slug: "2023-10-27-bafni",
        name: "Autentická improvizace",
        eventType: "workshop",
        websiteUrl: "https://improvizacnikurzy.cz/kurzy/vikend-brno-zacatecnici/",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-10-27",
        district: "Brno",
      },
      {
        id: "1",
        slug: "2023-10-30-justimpro",
        name: "Just! Impro Show",
        eventType: "play",
        websiteUrl: "https://www.svandovodivadlo.cz/inscenace/13/just-impro-just-impro-show/4802",
        organizers: [organizers.find((o) => o.id === "justimpro")!],
        playDate: "2023-10-30",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Listopad",
    monthDate: "2023-11",
    events: [
      {
        id: "1",
        slug: "2023-11-05-bafni",
        name: "Víkendový workshop pro pokročilé",
        eventType: "workshop",
        websiteUrl: "https://improvizacnikurzy.cz/kurzy/vikendovy-workshop-praha-pokrocili/",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-11-05",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-11-10-kecky",
        name: "Impro Kecky a dva úžasňáci - Adam Vošvrda a Lukáš Rumlena",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1006931377020100",
        organizers: [organizers.find((o) => o.id === "kecky")!],
        playDate: "2023-11-10",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-11-22-bafni",
        name: "Palmaskán",
        eventType: "play",
        websiteUrl: "http://bafni.cz/repertoar/palmaskan.html",
        organizers: [organizers.find((o) => o.id === "bafni")!],
        playDate: "2023-11-22",
        district: "Brno",
      },
      {
        id: "1",
        slug: "2023-11-22-justimpro",
        name: "Just! Impro Show",
        eventType: "play",
        websiteUrl: " https://www.svandovodivadlo.cz/inscenace/13/just-impro-just-impro-show/4873",
        organizers: [organizers.find((o) => o.id === "justimpro")!],
        playDate: "2023-11-22",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-11-23-cnid",
        name: "Nereality show",
        eventType: "play",
        websiteUrl:
          "https://nod.roxy.cz/events/detail/715/nereality-show-ceske-narodni-improvizacni-divadlo/2023-11-23",
        organizers: [organizers.find((o) => o.id === "cnid")!],
        playDate: "2023-11-23",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Prosinec",
    monthDate: "2023-12",
    events: [
      //   {
      //     id: "1",
      //     slug: "2023-12-20-bafni",
      //     name: "Vánoční improshow",
      //     eventType: "play",
      //     websiteUrl: "",
      //     organizer: organizers.find((o) => o.id === "bafni")!,
      //     playDate: "2023-12-20",
      //     district: "Brno",
      //   },

      {
        id: "1",
        slug: "2023-12-04-standartnikabaret",
        name: "Vosto5: Stand'artní kabaret",
        eventType: "play",
        websiteUrl: "https://www.dko.cz/index.php?menu=1416",
        organizers: [organizers.find((o) => o.id === "standartnikabaret")!],
        playDate: "2023-12-04",
        district: "Jihlava",
      },
    ],
  },
  {
    monthName: "Červenec 2023",
    monthDate: "2023-07",
    events: [
      {
        id: "1",
        slug: "2023-07-24-paletaci",
        name: "Camp improvizace s Martinem Vasquezem a Andreou Moličovou",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/256600993556480",
        organizers: [organizers.find((o) => o.id === "paletaci")!],
        playDate: "2023-07-24",
        district: "Středočeský kraj",
      },
      {
        id: "1",
        slug: "2023-07-29-polocasnapadu",
        name: "Živelné impro",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/272377468513550",
        organizers: [organizers.find((o) => o.id === "polocasnapadu")!],
        playDate: "2023-07-29",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Červen 2023",
    monthDate: "2023-06",
    events: [
      {
        id: "1",
        slug: "2023-06-07-kecky",
        name: "Kecky - improvizovaný večer. Host Láďa Karda",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/708266527438722",
        organizers: [organizers.find((o) => o.id === "kecky")!],
        playDate: "2023-06-07",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-07-improvariace",
        name: "Xena / celovečerní improvizovaná hra",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/708266527438722",
        organizers: [organizers.find((o) => o.id === "improvariace")!],
        playDate: "2023-08-08",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-09-vip",
        name: "Vyšetřování inspektora Parkera - improvizovaná divadelní detektivka",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/189896543998939",
        organizers: [organizers.find((o) => o.id === "vip")!],
        playDate: "2023-06-09",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-13-alibiprochyby",
        name: "Nášup!",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/954218659038417",
        organizers: [organizers.find((o) => o.id === "alibiprochyby")!],
        playDate: "2023-06-13",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-21-polocasnapadu",
        name: "Ale to jsem měl říct já!",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/267509755761424",
        organizers: [organizers.find((o) => o.id === "polocasnapadu")!],
        playDate: "2023-06-21",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-22-padenapade",
        name: "Jedničky a nuly | Pade na Pade s umělou inteligencí",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1397373071052582",
        organizers: [organizers.find((o) => o.id === "padenapade")!],
        playDate: "2023-06-22",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-22-blancinybileboty",
        name: "Improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/829195705484892",
        organizers: [organizers.find((o) => o.id === "blancinybileboty")!],
        playDate: "2023-06-22",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-26-fofrvzupanu",
        name: "Fofr na moři",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/2554930714671059",
        organizers: [organizers.find((o) => o.id === "fofrvzupanu")!],
        playDate: "2023-06-26",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-07-24-paletaci",
        name: "Camp improvizace s Martinem Vasquezem a Andreou Moličovou",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/256600993556480",
        organizers: [organizers.find((o) => o.id === "paletaci")!],
        playDate: "2023-07-24",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-27-unknown",
        name: "Adam & Pája /IMPRO/",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/2731074617034818",
        organizers: undefined,
        playDate: "2023-06-27",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-06-28-cnid",
        name: "Klasika",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/657371099056530",
        organizers: [organizers.find((o) => o.id === "cnid")!],
        playDate: "2023-06-28",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Květen 2023",
    monthDate: "2023-05",
    events: [
      {
        id: "1",
        slug: "2023-05-05-divadloimprovizaceodvaz",
        name: "IMPROTŘESK 2023 | Festival improvizace",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/531202315642360",
        organizers: [organizers.find((o) => o.id === "divadloimprovizaceodvaz")!],
        playDate: "2023-05-05",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-05-12-alibiprochyby",
        name: "Dítě 19",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/177505508470079",
        organizers: [organizers.find((o) => o.id === "alibiprochyby")!],
        playDate: "2023-05-12",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-05-25-blancinybileboty",
        name: "Improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1413760719454916",
        organizers: [organizers.find((o) => o.id === "blancinybileboty")!],
        playDate: "2023-05-25",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Duben 2023",
    monthDate: "2023-04",
    events: [
      {
        id: "1",
        slug: "2023-04-14-kecky",
        name: "Kecky - improvizovaný večer. Host Ondřej Nečas",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/716910450033344",
        organizers: [organizers.find((o) => o.id === "kecky")!],
        playDate: "2023-04-14",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-15-skolaimprovizace",
        name: "Impro Ambasadors - workshop s Gerit (AUT)",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/5553856491387154",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-04-15",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-15-skolaimprovizace2",
        name: "Impro Ambasadors - představení: NO EXIT",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1235463783774029",
        organizers: [organizers.find((o) => o.id === "skolaimprovizace")!],
        playDate: "2023-04-15",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-20-blr",
        name: "The BLR Improv Comedy Brew!",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/498524245699846",
        organizers: [organizers.find((o) => o.id === "blr")!],
        playDate: "2023-04-20",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-21-vip",
        name: "Amorovy katastrofy - improshow o lásce",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/734131978403488",
        organizers: [organizers.find((o) => o.id === "vip")!],
        playDate: "2023-04-21",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-21-blancinybileboty",
        name: "Improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/745594463834172",
        organizers: [organizers.find((o) => o.id === "blancinybileboty")!],
        playDate: "2023-04-21",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-26-nedivse",
        name: "improvizační show NeDivSe",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1261275181493337",
        organizers: [organizers.find((o) => o.id === "nedivse")!],
        playDate: "2023-04-26",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-04-29-cnid",
        name: "WORKSHOP s Českým Národním Improvizačním Divadlem",
        eventType: "workshop",
        websiteUrl: "https://www.facebook.com/events/228312459568330 ",
        organizers: [organizers.find((o) => o.id === "cnid")!],
        playDate: "2023-04-29",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Březen 2023",
    monthDate: "2023-03",
    events: [
      {
        id: "1",
        slug: "2023-03-10-kecky",
        name: "Kecky - improvizační večer TAK TROCHU JINÝ MDŽ",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1160111454869033",
        organizers: [organizers.find((o) => o.id === "kecky")!],
        playDate: "2023-03-10",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-03-17-vip",
        name: "Čtenářský kroužek - improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1242644813273604",
        organizers: [organizers.find((o) => o.id === "vip")!],
        playDate: "2023-03-17",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-03-23-blancinybileboty",
        name: "Improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/709375650921842",
        organizers: [organizers.find((o) => o.id === "blancinybileboty")!],
        playDate: "2023-03-23",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-03-26-instantnigaucink",
        name: "Instantní Gaučink - 26. 3. 2023",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/511867941109287",
        organizers: [organizers.find((o) => o.id === "instantnigaucink")!],
        playDate: "2023-03-26",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-03-30-padenapade",
        name: "Improkabaret: Souboj pohlaví",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/124974393641876",
        organizers: [organizers.find((o) => o.id === "padenapade")!],
        playDate: "2023-03-30",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Únor 2023",
    monthDate: "2023-02",
    events: [
      {
        id: "1",
        slug: "2023-02-04-nedivse",
        name: "NeDivSe: Vyplouváme!",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/705524674490028",
        organizers: [organizers.find((o) => o.id === "nedivse")!],
        playDate: "2023-02-04",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-02-14-improvariace",
        name: "Valentýnský IMPROspeciál",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1297172470851314",
        organizers: [organizers.find((o) => o.id === "improvariace")!],
        playDate: "2023-02-14",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-02-21-kecky",
        name: "Kecky - improvizační večer",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/861496178405714",
        organizers: [organizers.find((o) => o.id === "kecky")!],
        playDate: "2023-02-21",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-02-23-blancinybileboty",
        name: "Improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/536862931876454",
        organizers: [organizers.find((o) => o.id === "blancinybileboty")!],
        playDate: "2023-02-23",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-02-27-padenapade",
        name: "Večer sedmi hříchů",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/968205434155676",
        organizers: [organizers.find((o) => o.id === "padenapade")!],
        playDate: "2023-02-27",
        district: "Praha",
      },
    ],
  },
  {
    monthName: "Leden 2023",
    monthDate: "2023-01",
    events: [
      {
        id: "1",
        slug: "2023-01-18-improvariace",
        name: "Prezidentský IMPROspeciál",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/726550952421031",
        organizers: [organizers.find((o) => o.id === "improvariace")!],
        playDate: "2023-01-18",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-01-19-blancinybileboty",
        name: "Improshow",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/491611799747111",
        organizers: [organizers.find((o) => o.id === "blancinybileboty")!],
        playDate: "2023-01-19",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-01-27-vip",
        name: "Vyšetřování inspektora Parkera - improvizovaná detektivní hra",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/957439238557530",
        organizers: [organizers.find((o) => o.id === "vip")!],
        playDate: "2023-01-27",
        district: "Praha",
      },
      {
        id: "1",
        slug: "2023-01-31-padenapade",
        name: "Improsquatting",
        eventType: "play",
        websiteUrl: "https://www.facebook.com/events/1307133426796816",
        organizers: [organizers.find((o) => o.id === "padenapade")!],
        playDate: "2023-01-31",
        district: "Praha",
      },
    ],
  },
];
