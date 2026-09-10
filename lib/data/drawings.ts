import { basePath } from "@/lib/basePath";

export type Drawing = {
  slug: string;
  title: string;
  // Left off where the year is not known yet; the caption just drops that line.
  date?: string;
  kind: string;
  description: string;
  alt: string;
  // Intrinsic size of the full image, so the modal reserves its space before load.
  width: number;
  height: number;
};

const dir = `${basePath}/images/playground/drawings`;

export const drawingSrc = (d: Drawing) => `${dir}/${d.slug}.webp`;
export const drawingTileSrc = (d: Drawing) => `${dir}/${d.slug}-tile.webp`;

export const drawings: Drawing[] = [
  {
    slug: "kenma-fanart",
    title: "Kenma Fanart",
    kind: "Fan art",
    description:
      "Kenma from Haikyuu!! with cat ears, surrounded by flowers on a red triangle pattern.",
    alt: "Digital drawing of Kenma from Haikyuu!! with teal cat ears and a striped tail, standing among blue, pink and orange flowers on a red background patterned with triangles, a Nintendo Switch in the corner",
    width: 1200,
    height: 1600,
  },
  {
    slug: "halloween-oc",
    title: "Halloween OC",
    date: "2020",
    kind: "Original character",
    description:
      "A Halloween piece for IB Visual Arts, starring one of my original characters. A skull under a glass dome, a potion, and a book called Bring Back the Dead.",
    alt: "Digital painting of a blond character in a brown coat crying over a human skull kept under a glass dome, with a blue potion flask and a book titled Bring Back the Dead, on a purple background with drifting smoke",
    width: 1333,
    height: 1600,
  },
  {
    slug: "tsukkiyama",
    title: "Tsukkiyama",
    kind: "Fan art",
    description:
      "Tsukishima and Yamaguchi from Haikyuu!!, redrawn in the style of Toilet-bound Hanako-kun.",
    alt: "Digital drawing of Tsukishima in a blue hoodie and Yamaguchi in a red hoodie from Haikyuu!!, drawn in the Toilet-bound Hanako-kun style, lying on green grass and throwing a peace sign",
    width: 1231,
    height: 1600,
  },
  {
    slug: "kagehina-fanart",
    title: "Kagehina Fanart",
    kind: "Fan art",
    description:
      "Kageyama and Hinata from Haikyuu!!, winged and hand in hand across a dusk sky, drawn to thank the series for eight years.",
    alt: "Digital drawing of Kageyama and Hinata from Haikyuu!! in their black and orange uniforms, with feathered wings, holding hands in a starry dusk sky, a crown floating by Kageyama, captioned Thank you for the 8 years of happiness",
    width: 1600,
    height: 1067,
  },
  {
    slug: "prince-kuroo",
    title: "Prince Kuroo",
    kind: "Fan art",
    description:
      "Kuroo from Haikyuu!! as a prince in red and white robes, sword in hand, with a tiger watching over him.",
    alt: "Digital painting of Kuroo from Haikyuu!! in a small crown and red and white robes with a phoenix emblem, holding a sword, beneath the face of a tiger on a black background",
    width: 1067,
    height: 1600,
  },
  {
    slug: "ranboo-fanart",
    title: "Ranboo Fanart",
    kind: "Fan art",
    description: "Ranboo with half of his face melting into black, one red eye and one green.",
    alt: "Digital drawing of Ranboo with brown hair and a single black horn, the right half of his face melting into black with a glowing green eye and the left eye red, black smoke curling behind",
    width: 1080,
    height: 1200,
  },
  {
    slug: "gift",
    title: "Gift",
    kind: "Illustration",
    description: "A gift I drew for my grandparents, celebrating their 60th anniversary.",
    alt: "Digital painting of two people sitting on a bench on a grassy hill at dusk, beneath a towering pink and blue cloud",
    width: 1600,
    height: 894,
  },
  {
    slug: "brian-robot",
    title: "Brian, Assistant Robot",
    kind: "Concept sketch",
    description:
      "A concept sheet for Brian, an assistant robot built from boxes, toilet rolls and popsicle sticks. It checks heart rate, stores medication, and gets around on 360° wheels.",
    alt: "Hand-lettered concept sheet on grid paper for Brian, your assistant robot, labelling its screen face, solar panel, medication storage, battery compartment, sensors and wheels, with a list of craft materials",
    width: 1600,
    height: 1118,
  },
];

export const logoDrawings: Drawing[] = [
  {
    slug: "vac-2023",
    title: "Visual Arts Council",
    date: "2023 to 2024",
    kind: "Logo",
    description:
      "Logo for the Visual Arts Council, an inked portrait with a hand over the face, washed in pale blue.",
    alt: "Inked portrait of a face partly covered by a hand, washed in pale blue, framed by the years 2023 and 2024 and the words Visual Arts Council",
    width: 1600,
    height: 1172,
  },
  {
    slug: "vac-2022",
    title: "Visual Arts Council",
    date: "2022 to 2023",
    kind: "Logo",
    description:
      "Line-art logo for the Visual Arts Council, with the letters V, A and C woven through leaves and sparkles.",
    alt: "Green line-art logo with the letters V, A and C woven through leaves, vines and sparkles, dated 2022 to 2023",
    width: 1077,
    height: 1600,
  },
  {
    slug: "vp-dance",
    title: "VP Dance",
    kind: "Logo",
    description: "A graffiti-style wordmark for VP Dance, in black and sky blue.",
    alt: "Graffiti-style lettering spelling VP Dance in black outlines filled with sky blue",
    width: 1063,
    height: 652,
  },
];

// Pieces made for Warframe at Digital Extremes.
export const officialWork: Drawing[] = [
  {
    slug: "mesa-heirloom",
    title: "Mesa Heirloom",
    kind: "Border design",
    description:
      "Promotional art for Mesa Heirloom in Warframe. My part was the ornate border framing the edge of the image.",
    alt: "Warframe promotional art of Mesa Heirloom, a horned figure in black armour glowing orange, holding two blades against a dark red backdrop, framed by a thin ornate border with notched corners",
    width: 1600,
    height: 900,
  },
  {
    slug: "wf-ability-icons",
    title: "Warframe Ability Icons",
    kind: "Icon set",
    description: "Four ability icons for Warframe, numbered I to IV, each set in a hexagon frame.",
    alt: "Four white ability icons on black, the Roman numerals I, II, III and IV each set inside a hexagon frame",
    width: 1600,
    height: 1600,
  },
];
