export type HazardVisual = {
  src: string;
  alt: string;
  caption: string;
};

export type HazardImageSet = {
  hero?: HazardVisual;
  unsafe?: HazardVisual;
  safe?: HazardVisual;
};

export const hazardImages: Record<string, HazardImageSet> = {
  "bridge-flyover/girder-lifting/crane-overloading": {
    hero: {
      src: "/images/safety/bridge-flyover/girder-lifting/crane-overloading/hero.webp",
      alt: "Crane lifting operation during bridge girder work",
      caption:
        "Girder lifting requires verification of load weight, lifting radius, crane configuration, ground condition, and rated crane capacity.",
    },

    unsafe: {
      src: "/images/safety/bridge-flyover/girder-lifting/crane-overloading/unsafe.webp",
      alt: "Unsafe crane lifting condition with crane overloading risk",
      caption:
        "An unverified load, excessive lifting radius, or incorrect crane configuration can expose the lifting operation to overloading and loss of stability.",
    },

    safe: {
      src: "/images/safety/bridge-flyover/girder-lifting/crane-overloading/safe.webp",
      alt: "Controlled crane lifting operation with planned lifting controls",
      caption:
        "A controlled lifting operation should follow the approved lifting plan, verified load data, applicable load chart, proper crane setup, and an established exclusion zone.",
    },
  },
};

export function getHazardImages(
  sectorSlug: string,
  areaSlug: string,
  hazardSlug: string,
): HazardImageSet | undefined {
  const hazardKey = `${sectorSlug}/${areaSlug}/${hazardSlug}`;

  return hazardImages[hazardKey];
}