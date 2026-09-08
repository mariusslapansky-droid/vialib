import type { Audience } from "@/hooks/useAudience";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  specs: string[];
  /** Preț cu TVA, în lei. Lipsă = „Cere ofertă”. */
  price?: number;
  priceFrom?: boolean;
  techAssist?: boolean;
  audience: Audience[];
  category: string;
  /** Atribute tehnice folosite pentru filtrare (etichetă -> valoare). */
  attributes: Record<string, string>;
};

export type CategoryMeta = {
  slug: string;
  title: string;
  description: string;
};

export const categories: CategoryMeta[] = [
  {
    slug: "mobilitate",
    title: "Mobilitate (scaune rulante)",
    description:
      "Scaune rulante manuale, active și electrice pentru deplasare zilnică, sport și utilizare în interior. Alege în funcție de lățimea șezutului, greutatea cadrului și tipul de acționare, iar echipa ViaLib te ajută cu potrivirea corectă și cu documentația de decontare CAS sau voucher TECH ASSIST.",
  },
  {
    slug: "verticalizatoare-robotica",
    title: "Verticalizatoare & Robotică",
    description:
      "Echipamente de verticalizare, exoschelete și sisteme robotizate de mers asistat, pentru menținerea posturii, circulație și recuperare. Fiecare produs este selectat împreună cu producătorii și poate fi testat înainte de achiziție.",
  },
  {
    slug: "acces-transfer",
    title: "Acces în locuință & transfer",
    description:
      "Rampe, elevatoare, lifturi de scară, mânere de sprijin și sisteme de transfer care fac locuința accesibilă. Oferim consultanță pentru măsurători și asistență la montaj.",
  },
  {
    slug: "baie-igiena",
    title: "Baie & Igienă",
    description:
      "Scaune de duș, scaune de baie, înălțătoare de toaletă și accesorii antialunecare care aduc siguranță și intimitate în rutina zilnică de igienă.",
  },
  {
    slug: "paturi-odihna",
    title: "Paturi & Odihnă",
    description:
      "Paturi medicale reglabile, saltele antiescară și accesorii de poziționare pentru un somn odihnitor și pentru îngrijire mai ușoară acasă.",
  },
  {
    slug: "orteze-proteze",
    title: "Orteze, proteze & suporturi",
    description:
      "Orteze pentru membre, suporturi posturale și componente protetice, adaptate individual pentru sprijin, stabilitate și confort de lungă durată.",
  },
  {
    slug: "viata-zilnica",
    title: "Viață zilnică & servirea mesei",
    description:
      "Tacâmuri, veselă adaptată și ajutoare pentru îmbrăcare, gătit sau apucare — obiecte simple care redau autonomia în activitățile de zi cu zi.",
  },
  {
    slug: "auz-comunicare",
    title: "Auz & comunicare",
    description:
      "Dispozitive de amplificare auditivă și soluții de comunicare augmentativă și alternativă (CAA), cu voce în limba română.",
  },
  {
    slug: "it-asistiv",
    title: "IT Asistiv & Vedere Redusă",
    description:
      "Lupe electronice, display-uri Braille, software de citire a ecranului și periferice adaptate pentru persoane nevăzătoare sau slab-văzătoare.",
  },
  {
    slug: "imbracaminte-adaptata",
    title: "Îmbrăcăminte Adaptată",
    description:
      "Haine și încălțăminte cu închideri magnetice, fermoare extinse și croieli gândite pentru îmbrăcare ușoară, fără a renunța la stil.",
  },
  {
    slug: "biciclete-triciclete",
    title: "Biciclete și triciclete adaptate",
    description:
      "Triciclete și biciclete adaptate, cu suport postural și fixare pentru picioare, pentru mișcare în siguranță în aer liber.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export const products: Product[] = [
  {
    slug: "scaun-rulant-carbon",
    name: "Scaun rulant ultraușor din carbon",
    brand: "Küschall",
    specs: ["Greutate: 8 kg", "Lățime șezut: 40 cm", "Cadru din fibră de carbon"],
    price: 18400,
    priceFrom: true,
    techAssist: true,
    audience: ["adulti"],
    category: "mobilitate",
    attributes: {
      "Tip acționare": "Manual",
      "Lățime șezut": "40 cm",
      "Greutate suportată": "120 kg",
    },
  },
  {
    slug: "scaun-rulant-electric-urban",
    name: "Scaun rulant electric urban",
    brand: "Permobil",
    specs: ["Autonomie: 35 km", "Viteză: 10 km/h", "Suspensie independentă"],
    price: 42900,
    techAssist: true,
    audience: ["adulti"],
    category: "mobilitate",
    attributes: {
      "Tip acționare": "Electric",
      "Lățime șezut": "45 cm",
      "Greutate suportată": "140 kg",
    },
  },
  {
    slug: "scaun-rulant-pliabil-transport",
    name: "Scaun rulant pliabil pentru transport",
    brand: "Invacare",
    specs: ["Pliere rapidă", "Greutate: 11 kg", "Roți detașabile"],
    price: 3450,
    audience: ["adulti"],
    category: "mobilitate",
    attributes: {
      "Tip acționare": "Manual",
      "Lățime șezut": "43 cm",
      "Greutate suportată": "120 kg",
    },
  },
  {
    slug: "scaun-rulant-copii",
    name: "Scaun rulant activ pentru copii",
    brand: "Panthera",
    specs: ["Greutate: 4,9 kg", "Lățime șezut: 26–36 cm", "Cadru care crește cu copilul"],
    price: 14200,
    priceFrom: true,
    techAssist: true,
    audience: ["copii"],
    category: "mobilitate",
    attributes: {
      "Tip acționare": "Manual",
      "Lățime șezut": "30 cm",
      "Greutate suportată": "70 kg",
    },
  },
  {
    slug: "scaun-rulant-electric-pediatric",
    name: "Scaun rulant electric pediatric",
    brand: "Sunrise Medical",
    specs: ["Joystick reglabil", "Autonomie: 25 km", "Șezut care crește cu copilul"],
    audience: ["copii"],
    category: "mobilitate",
    attributes: {
      "Tip acționare": "Electric",
      "Lățime șezut": "32 cm",
      "Greutate suportată": "80 kg",
    },
  },
  {
    slug: "exoschelet-mers-asistat",
    name: "Exoschelet de mers asistat",
    brand: "ReWalk",
    specs: ["Mers asistat electric", "Baterie: 4 ore", "Reglabil pe utilizator"],
    audience: ["adulti"],
    category: "verticalizatoare-robotica",
    attributes: { "Tip acționare": "Electric", "Greutate suportată": "100 kg" },
  },
  {
    slug: "verticalizator-electric",
    name: "Verticalizator electric",
    brand: "Vela",
    specs: ["Ridicare electrică", "Sarcină maximă: 135 kg", "Roți cu frână"],
    price: 12750,
    priceFrom: true,
    techAssist: true,
    audience: ["adulti"],
    category: "verticalizatoare-robotica",
    attributes: { "Tip acționare": "Electric", "Greutate suportată": "135 kg" },
  },
  {
    slug: "verticalizator-pediatric",
    name: "Verticalizator pediatric",
    brand: "Leckey",
    specs: ["Poziții: stând / înclinat", "Înălțime: 80–130 cm", "Suporturi laterale"],
    price: 9900,
    audience: ["copii"],
    category: "verticalizatoare-robotica",
    attributes: { "Tip acționare": "Manual", "Greutate suportată": "60 kg" },
  },
  {
    slug: "rampa-pliabila-aluminiu",
    name: "Rampă pliabilă din aluminiu",
    brand: "Invacare",
    specs: ["Lungime: 180 cm", "Suprafață antiderapantă", "Greutate: 12 kg"],
    price: 1890,
    audience: ["adulti", "copii"],
    category: "acces-transfer",
    attributes: { "Greutate suportată": "270 kg", Montaj: "Fără montaj" },
  },
  {
    slug: "elevator-transfer-electric",
    name: "Elevator electric de transfer",
    brand: "Etac",
    specs: ["Ridicare electrică", "Ham inclus", "Bază reglabilă"],
    price: 11400,
    techAssist: true,
    audience: ["adulti"],
    category: "acces-transfer",
    attributes: { "Greutate suportată": "175 kg", Montaj: "Cu asistență la montaj" },
  },
  {
    slug: "scaun-dus-reglabil",
    name: "Scaun de duș reglabil",
    brand: "Etac",
    specs: ["Înălțime reglabilă", "Picioare antialunecare", "Spătar detașabil"],
    price: 890,
    audience: ["adulti"],
    category: "baie-igiena",
    attributes: { "Greutate suportată": "150 kg", Material: "Aluminiu" },
  },
  {
    slug: "scaun-baie-pediatric",
    name: "Scaun de baie pediatric",
    brand: "Firefly",
    specs: ["Suport cap și trunchi", "Material antialunecare", "Pliabil"],
    price: 2150,
    audience: ["copii"],
    category: "baie-igiena",
    attributes: { "Greutate suportată": "60 kg", Material: "Plastic" },
  },
  {
    slug: "pat-medical-electric",
    name: "Pat medical electric cu 3 motoare",
    brand: "Invacare",
    specs: ["3 motoare", "Bare laterale incluse", "Telecomandă"],
    price: 8600,
    techAssist: true,
    audience: ["adulti"],
    category: "paturi-odihna",
    attributes: { "Tip acționare": "Electric", "Greutate suportată": "170 kg" },
  },
  {
    slug: "saltea-antiescara",
    name: "Saltea antiescară cu compresor",
    brand: "Vitea Care",
    specs: ["Presiune alternantă", "Compresor silențios", "Husă lavabilă"],
    price: 1290,
    audience: ["adulti"],
    category: "paturi-odihna",
    attributes: { "Greutate suportată": "135 kg" },
  },
  {
    slug: "orteza-glezna-picior",
    name: "Orteză gleznă-picior din carbon",
    brand: "Ottobock",
    specs: ["Fibră de carbon", "Greutate redusă", "Mărimi multiple"],
    price: 3400,
    priceFrom: true,
    audience: ["adulti", "copii"],
    category: "orteze-proteze",
    attributes: { Material: "Carbon" },
  },
  {
    slug: "tacamuri-adaptate",
    name: "Set tacâmuri adaptate cu prindere",
    brand: "Etac",
    specs: ["Mâner ergonomic", "Lavabile în mașină", "Set 4 piese"],
    price: 245,
    audience: ["adulti", "copii"],
    category: "viata-zilnica",
    attributes: { Material: "Plastic" },
  },
  {
    slug: "tableta-comunicare",
    name: "Tabletă de comunicare augmentativă",
    brand: "Tobii Dynavox",
    specs: ["Control ocular", "Ecran: 12 inch", "Voce în limba română"],
    techAssist: true,
    audience: ["copii", "adulti"],
    category: "auz-comunicare",
    attributes: { Conectivitate: "Bluetooth", "Mărime ecran": "12 inch" },
  },
  {
    slug: "amplificator-auditiv-portabil",
    name: "Amplificator auditiv portabil",
    brand: "Bellman & Symfon",
    specs: ["Reducere zgomot", "Autonomie: 18 ore", "Căști incluse"],
    price: 1150,
    audience: ["adulti"],
    category: "auz-comunicare",
    attributes: { Conectivitate: "Cu fir" },
  },
  {
    slug: "lupa-electronica-hd",
    name: "Lupă electronică portabilă HD",
    brand: "Eschenbach",
    specs: ["Zoom: 2x–15x", "Ecran: 5 inch", "Greutate: 220 g"],
    price: 4290,
    techAssist: true,
    audience: ["adulti", "copii"],
    category: "it-asistiv",
    attributes: { Conectivitate: "Autonom", "Mărime ecran": "5 inch" },
  },
  {
    slug: "display-braille-40",
    name: "Display Braille 40 celule",
    brand: "HumanWare",
    specs: ["40 celule Braille", "Conectare Bluetooth", "Autonomie: 20 ore"],
    price: 16900,
    techAssist: true,
    audience: ["adulti"],
    category: "it-asistiv",
    attributes: { Conectivitate: "Bluetooth" },
  },
  {
    slug: "camasa-magnetica",
    name: "Cămașă cu prindere magnetică",
    brand: "MagniReady",
    specs: ["Închidere magnetică", "Bumbac 100%", "Mărimi: S–XXL"],
    price: 329,
    audience: ["adulti"],
    category: "imbracaminte-adaptata",
    attributes: { Închidere: "Magnetică", Material: "Bumbac" },
  },
  {
    slug: "incaltaminte-adaptata",
    name: "Încălțăminte adaptată cu fermoar",
    brand: "Billy Footwear",
    specs: ["Fermoar 180°", "Mărimi: 24–35", "Talpă flexibilă"],
    price: 289,
    audience: ["copii"],
    category: "imbracaminte-adaptata",
    attributes: { Închidere: "Fermoar", Material: "Textil" },
  },
  {
    slug: "tricicleta-adaptata",
    name: "Tricicletă adaptată reglabilă",
    brand: "Rifton",
    specs: ["Vârstă: 4–12 ani", "Suport trunchi reglabil", "Pedale cu fixare"],
    price: 6480,
    audience: ["copii"],
    category: "biciclete-triciclete",
    attributes: { "Tip acționare": "Manual", "Greutate suportată": "60 kg" },
  },
  {
    slug: "tricicleta-electrica-adulti",
    name: "Tricicletă electrică pentru adulți",
    brand: "Van Raam",
    specs: ["Asistență electrică", "Autonomie: 60 km", "Cadru jos"],
    price: 24500,
    priceFrom: true,
    techAssist: true,
    audience: ["adulti"],
    category: "biciclete-triciclete",
    attributes: { "Tip acționare": "Electric", "Greutate suportată": "130 kg" },
  },
];

export function productsFor(audience: Audience, category: string) {
  return products.filter((p) => p.category === category && p.audience.includes(audience));
}

export function formatLei(value: number) {
  return `${value.toLocaleString("ro-RO")} lei`;
}
