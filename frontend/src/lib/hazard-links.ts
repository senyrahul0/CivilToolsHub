export const hazardLinks: Record<string, string> = {
  // Bridge
  "Girder Lifting|Crane Overloading":
    "/safety/bridge-flyover/girder-lifting/crane-overloading",

  // Road
  "Traffic Management|Vehicle and Worker Interface":
    "/safety/road-highway/traffic-management/vehicle-worker-interface",

  // Metro
  "Track Work|Moving Rail Equipment":
    "/safety/metro-railway/track-work/moving-rail-equipment",

  // Tunnel
  "Confined Space|Oxygen Deficiency":
    "/safety/tunnel-underground/confined-space/oxygen-deficiency",

  // Industrial
  "Machine Safety|Unguarded Moving Parts":
    "/safety/industrial-manufacturing/machine-safety/unguarded-moving-parts",

  // Power
  "Electrical Safety|Exposed Energized Parts":
    "/safety/power-energy/electrical-safety/exposed-energized-parts",

  // Oil & Gas
  "Gas Testing|Flammable Gas Atmosphere":
    "/safety/oil-gas-petrochemical/gas-testing/flammable-gas-atmosphere",

  // Marine
  "Working Over Water|Fall Into Water":
    "/safety/marine-port-offshore/working-over-water/fall-into-water",

  // Mining
  "Heavy Equipment|Equipment Blind Spot":
    "/safety/mining-heavy-infrastructure/heavy-equipment/equipment-blind-spot",
};

export function getHazardLink(area: string, hazard: string) {
  return hazardLinks[`${area}|${hazard}`];
}