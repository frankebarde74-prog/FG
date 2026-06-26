import { Car, Bike, Truck, Tractor, Clock, MapPin, ShieldCheck } from "lucide-react";

export const SITE_INFO = {
  phone: "06421 33857",
  phoneHref: "tel:+496421338570",
  email: "info@fahrschule-geissler.de",
  address: "Herrmannstraße 126, 35037 Marburg",
  fax: "06421 3038609",
  locations: [
    { 
      city: "Marburg", 
      street: "Neue Kasseler Str. 11–13", 
      zip: "35039 Marburg", 
      times: "Mo & Mi · 19:15–20:45 Uhr",
      map: "https://www.google.com/maps/search/Fahrschule+Gei%C3%9Fler+Marburg+Neue+Kasseler+Str.+11-13"
    },
    { 
      city: "Moischt", 
      street: "Tonberg 7", 
      zip: "35043 Marburg", 
      times: "Do · 19:15–20:45 Uhr",
      map: "https://www.google.com/maps/search/Fahrschule+Gei%C3%9Fler+Moischt+Tonberg+7"
    },
    { 
      city: "Leidenhofen", 
      street: "Rosenstr. 11a", 
      zip: "35085 Ebsdorfergrund", 
      times: "Di · 18:15–19:45 Uhr",
      map: "https://www.google.com/maps/search/Fahrschule+Gei%C3%9Fler+Leidenhofen+Rosenstr.+11a"
    }
  ]
};

export const NAV_LINKS = [
  { id: "klassen", label: "Führerschein" },
  { id: "ablauf", label: "So läuft's" },
  { id: "theorie", label: "Theorie" },
  { id: "fuhrpark", label: "Fuhrpark" },
  { id: "team", label: "Über uns" },
  { id: "standorte", label: "Standorte" },
  { id: "kontakt", label: "Kontakt" },
];

export const LICENSE_CLASSES = [
  {
    code: "B", icon: Car, kind: "Auto", age: "ab 18 (BF17 ab 17)",
    short: "Der klassische Pkw-Führerschein — bei uns wahlweise als B197 (Schalter + Automatik in einem).",
    details: [
      "Kraftfahrzeuge bis 3,5 t zulässiger Gesamtmasse, Anhänger bis 750 kg.",
      "Als B197 ausgebildet: Du lernst auf Schalt- und Automatikfahrzeug und darfst später beides fahren.",
      "Eingeschlossen sind die Klassen AM und L.",
      "Begleitetes Fahren ab 17 (BF17) möglich.",
    ],
  },
  {
    code: "BF17", icon: Car, kind: "Begleitetes Fahren", age: "Anmeldung ab 16½",
    short: "Früher selbst fahren — mit Begleitperson, bis der 18. Geburtstag erreicht ist.",
    details: [
      "Frühestens mit 16½ Jahren in der Fahrschule anmelden und den Führerscheinantrag stellen.",
      "Danach die ganz normale Ausbildung für Klasse B durchlaufen.",
      "Nach bestandener Prüfung darfst du mit eingetragener Begleitperson fahren.",
    ],
  },
  {
    code: "A1", icon: Bike, kind: "Motorrad", age: "ab 16",
    short: "Leichtkrafträder bis 125 ccm — der Einstieg auf zwei Rädern.",
    details: [
      "Leichtkrafträder mit maximal 125 ccm Hubraum.",
      "Ausbildung in Theorie und Praxis.",
      "Wir schulen von Motorrad zu Motorrad — dein Fahrlehrer ist selbst begeisterter Motorradfahrer.",
    ],
  },
  {
    code: "A2", icon: Bike, kind: "Motorrad", age: "ab 18",
    short: "Krafträder bis 35 kW (48 PS). Eingeschlossen: A1 und AM.",
    details: [
      "Krafträder mit einer Leistung bis 35 kW (48 PS).",
      "Eingeschlossen sind die Klassen A1 und AM.",
      "Aufstiegsprüfung von A1 auf A2 nehmen wir ab.",
    ],
  },
  {
    code: "A", icon: Bike, kind: "Motorrad", age: "ab 24 (Direkteinstieg)",
    short: "Krafträder ohne Leistungs-, Gewichts- und Hubraumbeschränkung.",
    details: [
      "Krafträder ohne Beschränkung von Leistung, Gewicht oder Hubraum.",
      "Eingeschlossen sind die Klassen A1 and AM.",
      "Aufstieg von A2 auf A möglich — die Aufstiegsprüfung nehmen wir ab.",
    ],
  },
  {
    code: "AM", icon: Bike, kind: "Roller / Moped", age: "ab 15",
    short: "Kleinkrafträder bis 45 km/h und max. 50 ccm.",
    details: [
      "Kleinkrafträder mit höchstens 45 km/h und maximal 50 ccm.",
      "Mindestalter 15 Jahre.",
      "Ausbildung in Theorie und Praxis.",
    ],
  },
  {
    code: "B196", icon: Bike, kind: "Erweiterung", age: "ab 25",
    short: "Mit dem Pkw-Schein Roller bis 125 ccm fahren — ohne separate Prüfung.",
    details: [
      "Für Krafträder bis 125 cm³ und max. 11 kW (max. 0,1 kW/kg).",
      "Voraussetzung: Klasse B seit mindestens 5 Jahren, Mindestalter 25.",
      "Umfang: 4×90 Min. Theorie und 5×90 Min. Praxis — keine Prüfung, Teilnahmebescheinigung.",
      "Wichtig: Die Berechtigung gilt nur im deutschen Inland.",
    ],
  },
  {
    code: "BE", icon: Truck, kind: "Anhänger", age: "ab 18",
    short: "Pkw mit großem Anhänger — die typische Kombination für Pferde- oder Lastanhänger.",
    details: [
      "Zugfahrzeug der Klasse B mit Anhänger über 750 kg.",
      "Typische Kombination: ein Pkw mit Pferdeanhänger.",
      "Nur Praxisausbildung, Vorbesitz der Klasse B erforderlich.",
      "Anhänger-Erweiterungen (B96/BE) bilden wir aus.",
    ],
  },
  {
    code: "L", icon: Tractor, kind: "Land- & Forstwirtschaft", age: "ab 16",
    short: "Zugmaschinen für Land- und Forstwirtschaft bis 40 km/h.",
    details: [
      "Land- und forstwirtschaftliche Zugmaschinen bis 40 km/h (mit Anhänger 25 km/h).",
      "Selbstfahrende Arbeitsmaschinen bis 25 km/h.",
      "Nur Theorieausbildung.",
    ],
  },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Anmelden & Antrag", text: "Komm zu einem Theorietermin an einem unserer Standorte vorbei oder schreib uns. Wir helfen dir beim Führerscheinantrag." },
  { n: "02", title: "Theorie im Schnellverfahren", text: "4× pro Woche Unterricht, jedes Thema an einem anderen Tag. Einstieg am Abend jederzeit möglich." },
  { n: "03", title: "Praxis & Fahrstunden", text: "Auf moderne Fahrzeuge abgestimmt — Schalter oder Automatik (B197), Motorrad von Motorrad zu Motorrad." },
  { n: "04", title: "Prüfungen bestehen", text: "Theorie- und Praxisprüfung. Wir bereiten dich gezielt vor — mit eigenem Lehrleitfaden und Stufenbildung." },
];

export const FLEET_DATA = {
  pkw: [
    { name: "VW Tiguan", note: "Schalter" },
    { name: "VW T-Roc", note: "Schalter" },
    { name: "VW Golf", note: "Schalter" },
    { name: "Mercedes B 200", note: "Automatik" },
    { name: "Mercedes EQA", note: "Automatik · elektrisch" },
  ],
  bike: [
    { name: "Honda Cityfly", note: "Klasse A1" },
    { name: "Yamaha MT-125", note: "Klasse A1" },
    { name: "Yamaha MT-07 „Biene Maja“", note: "Klasse A2" },
    { name: "BMW F650GS „Resi“", note: "Klasse A" },
    { name: "Yamaha XSR 700", note: "Klasse A" },
    { name: "Aprilia Roller", note: "Klasse AM" },
  ],
};

export const FAQ_DATA = [
  { q: "Wann kann ich mit dem Theorieunterricht starten?", a: "Jederzeit. Wir unterrichten 4× pro Woche (Mo./Di./Mi./Do.) — jedes Thema an einem anderen Tag. Der Einstieg am Abend ist jederzeit möglich, du musst nicht auf einen Kursbeginn warten." },
  { q: "Bietet ihr Automatik-Ausbildung an?", a: "Ja. Wir bilden auf Wunsch nach B197 aus: Du lernst auf Schalt- und Automatikfahrzeug und darfst nach der Prüfung beides fahren — ohne die frühere Automatik-Einschränkung." },
  { q: "Ab welchem Alter kann ich anfangen?", a: "Das hängt von der Klasse ab: AM ab 15, A1 ab 16, B regulär ab 18. Für Begleitetes Fahren (BF17) kannst du dich frühestens mit 16½ anmelden und den Antrag stellen." },
  { q: "Schult ihr auch Motorrad?", a: "Sehr gern — von Roller (AM) über A1 und A2 bis zur offenen Klasse A. Wir schulen von Motorrad zu Motorrad, und dein Fahrlehrer ist selbst begeisterter Motorradfahrer." },
  { q: "Macht ihr Ferienkurse?", a: "Ja. In unseren Ferienkursen lernst du alle 14 Theoriethemen der Klasse B in einer Woche. Die aktuellen Termine findest du im Abschnitt „Aktuelles“." },
  { q: "Was kostet die Ausbildung?", a: "Die Kosten hängen von Klasse und individuellem Lernfortschritt ab. Am ehrlichsten klären wir das im persönlichen Gespräch — ruf uns an oder schreib uns über das Kontaktformular." },
];

export const TEAM_DATA = ["Kai", "Thomas", "Florian", "Kiymet", "Doris"];
