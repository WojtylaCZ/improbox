import { District } from "./types";

export const enum LocationFilter {
  "Praha" = "Praha",
  "CechyBezPrahy" = "CechyBezPrahy",
  "MoravaASlezsko" = "MoravaASlezsko",
}

export const Districts = {
  Praha: LocationFilter.Praha,
  "Středočeský kraj": LocationFilter.CechyBezPrahy,
  Pardubice: LocationFilter.CechyBezPrahy,
  Nymburk: LocationFilter.CechyBezPrahy,
  Jihlava: LocationFilter.CechyBezPrahy,
  "Hradec Králové": LocationFilter.CechyBezPrahy,
  Benešov: LocationFilter.CechyBezPrahy,
  Brno: LocationFilter.MoravaASlezsko,
  Ostrava: LocationFilter.MoravaASlezsko,
  Boskovice: LocationFilter.MoravaASlezsko,
  "Havlíčkův Brod": LocationFilter.CechyBezPrahy,
  Olomouc: LocationFilter.MoravaASlezsko,
  "Frýdek-Místek": LocationFilter.MoravaASlezsko,
  "Mnichovo Hradiště": LocationFilter.MoravaASlezsko,
  Liberec: LocationFilter.CechyBezPrahy,
  "Karlovy Vary": LocationFilter.CechyBezPrahy,
  "Valašské Meziříčí": LocationFilter.MoravaASlezsko,
  Říčany: LocationFilter.CechyBezPrahy,
  "České Budějovice": LocationFilter.CechyBezPrahy,
  Šumperk: LocationFilter.MoravaASlezsko,
  Litomyšl: LocationFilter.CechyBezPrahy,
  Bratislava: LocationFilter.MoravaASlezsko,
  Plzeň: LocationFilter.CechyBezPrahy,
  Dobříš: LocationFilter.CechyBezPrahy,
  Opava: LocationFilter.MoravaASlezsko,
};

export const LocationDistrictMapping = new Map<string, District>([
  ["NoD", "Praha"],
  ["Rock Café Prague", "Praha"],
  ["Rock Café", "Praha"],
  ["Divadlo D21", "Praha"],
  ["Karlínské Spektrum", "Praha"],
  ["Vinohradský pivovar", "Praha"],
  ["Divadlo Františka Troníčka", "Praha"],
  ["CARPE DIEM Flora", "Praha"],
  ["Malostranská beseda Klub", "Praha"],
  ["Stará aréna Ostrava", "Ostrava"],
  ["Cafe Letka", "Praha"],
  ["Klub Letka", "Praha"],
  ["Arcidiecézní muzeum Olomouc", "Olomouc"],
  ["Babice u Říčan", "Říčany"],
  ["Jatka78", "Praha"],
  ["M-klub Valmez", "Valašské Meziříčí"],
  ["Kavárna Liberál", "Praha"],
  ["Vodárenská věž Letná", "Praha"],
  ["Kampus Hybernská", "Praha"],
  ["Skautský institut na Staromáku", "Praha"],
  ["Podskalská 14, 128 00 Praha, Česká Republika", "Praha"],
  ["Music Lab", "Brno"],
  ["Atelier živé pedagogiky a tvorby", "Praha"],
  ["Miletín", "Středočeský kraj"],
  ["Centrum Živá voda", "Středočeský kraj"],
  ["Klubovna", "Praha"],
  ["ReCompose Studio", "Praha"],
  ["EVERYTHING", "Brno"],
  ["Na Příkopě 1221, 738 01 Frýdek-Místek, Česko", "Frýdek-Místek"],
  ["ArtBar", "Brno"],
  ["Studio Paměť", "Praha"],
  ["Vážany 76, 68001 Boskovice ", "Boskovice"],
  ["Divadlo Bez Hranic, pražská scéna", "Praha"],
  ["PALÁC Liebieg", "Liberec"],
  ["DK Poklad", "Ostrava"],
  ["Praha", "Praha"],
  ["Klub Klamovka DDM hl.m. Prahy", "Praha"],
  ["Divadlo Na zábradlí", "Praha"],
  ["Velký mlýn", "Praha"],
  ["Premyšlenská 1102/15\n182 00 Praha 8, Czech Republic", "Praha"],
  ["Café Therapy", "Praha"],
  ["Vyšehradská 8, 128 00 Praha, Česko", "Praha"],
  ["Divadlo BARKA, otevřený kulturní prostor", "Brno"],
  ["Škola improvizace", "Praha"],
  ["Zázemí", "Brno"],
  ["Cool Little Place", "Praha"],
  ["Naivni Divadlo Liberec", "Liberec"],
  ["DivadloApropo", "Praha"],
  ["A studio Rubín", "Praha"],
  ["Ekocentrum PALETA", "Pardubice"],
  ["DDM spirala", "Praha"],
  ["Kaštan - Scéna Unijazzu", "Praha"],
  ["Myslíš?", "Praha"],
  ["Divadlo Kámen Praha", "Praha"],
  ["Divadlo Exil", "Pardubice"],
  ["Podskalská 14, 12000 Prague, Czech Republic", "Praha"],
  ["Divadlo Na Prádle", "Praha"],
  ["Industra", "Brno"],
  ["Otevřený prostor Trpoměchy u Slaného", "Středočeský kraj"],
  ["Žižkostel", "Praha"],
  ["sál kulturního zařízení v Náměšti na Hané", "Olomouc"],
  ["Dolní oblast Vítkovice", "Ostrava"],
  ["Pracovna", "Praha"],
  ["Studio Maiselovka", "Praha"],
  ["Boardgame Cafe - Meeples & Coffee", "Praha"],
  ["Prostor", "Boskovice"],
  ["Velký mlýn", "Praha"],
  ["Švandovo Divadlo", "Praha"],
  ["Kellyxír", "Praha"],
  ["Harmonizační studio Osm", "Praha"],
  ["BarBar Music Club", "Ostrava"],
  ["Radlická - kulturní sportovna", "Praha"],
  ["Přístav 18600", "Praha"],
  ["Vzlet", "Praha"],
  ["Impro centrum", "Praha"],
  ["Loď Tajemství", "Praha"],
  ["Knihkupectví a antikvariát Fryč", "Liberec"],
  ["Vlastivědné muzeum v Olomouci", "Olomouc"],
  ["Telegraph", "Olomouc"],
  ["Divadlo pod Palmovkou", "Praha"],
  ["Divadlo Kolowrat", "Praha"],
  ["Divadlo v Řeznické", "Praha"],
  ["Divadlo Open Gate", "Středočeský kraj"],
  ["Tvůrčí dům Elišky Peškové", "Praha"],
  ["Café V lese", "Praha"],
  ["DNA - Divadlo Nadšených Amatérů", "Frýdek-Místek"],
  ["Divadlo Karla Hackera", "Praha"],
  ["Divadlo Inspirace", "Praha"],
  ["ARCHA+", "Praha"],
  ["Občerstvení Na Baště", "Praha"],
  ["Terasa", "Praha"],
  ["Truhlárna", "Praha"],
  ["Crowd Cafe", "Praha"],
]);
