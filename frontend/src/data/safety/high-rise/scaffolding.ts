import { SafetyHazard } from "../types";

export const scaffoldingHazards: SafetyHazard[] = [
  {
    id: "HR-SCF-001",

    sector: "High-Rise Building",

    area: "Scaffolding",

    activity: "Working Platform",

    hazard: "Incomplete Working Platform",

    pageTitle:
      "Incomplete Working Platform | Scaffolding Safety",

    metaDescription:
      "Learn the causes, risks, inspection points, required controls and professional safety observation for incomplete scaffold working platforms.",

    summary:
      "An incomplete scaffold working platform contains missing boards, unsafe openings, excessive gaps or an inadequate working surface that can expose workers to falls and dropped object hazards.",

    observation:
      "The scaffold working platform was found incomplete with missing platform boards and unsafe gaps, exposing workers to fall-from-height and dropped-object hazards.",

    risk:
      "Personnel may fall through open gaps or lose balance while performing work. Materials and tools may also fall onto workers below.",

    commonCauses: [
      "Missing scaffold boards",
      "Platform partially dismantled",
      "Improper scaffold erection",
      "Unauthorized modification",
      "Damaged platform components"
    ],

    whatCanHappen: [
      "Worker may fall from height.",
      "Worker may lose balance.",
      "Tools may fall to lower levels.",
      "Unsafe access during work."
    ],

    possibleConsequences: [
      "Fatality",
      "Major Injury",
      "Fracture",
      "Dropped Object Incident",
      "Property Damage"
    ],

    inspectionPoints: [
      "Check that the entire platform is fully decked.",
      "Verify there are no unsafe openings.",
      "Inspect scaffold boards for damage.",
      "Check board supports.",
      "Verify safe access."
    ],

    requiredControls: [
      "Provide fully decked working platform.",
      "Replace damaged boards.",
      "Prevent unauthorized board removal.",
      "Barricade incomplete areas.",
      "Inspect before use."
    ],

    correctiveActions: [
      "Install missing scaffold boards immediately.",
      "Restrict access until corrected.",
      "Conduct scaffold inspection."
    ],

    preventiveActions: [
      "Daily scaffold inspection.",
      "Scaffold tagging system.",
      "Competent person verification.",
      "Worker awareness training."
    ],

    requiredPPE: [
      "Safety Helmet",
      "Safety Shoes",
      "High Visibility Vest",
      "Full Body Harness"
    ],

    standards: {
      iso45001: [
        "Clause 8 - Operational Planning and Control"
      ],
      osha: [
        "29 CFR 1926.451"
      ],
      bis: [],
      nbc: []
    },

    severity: "Critical",

    likelihood: "Likely",

    riskRating: "Extreme",

    responsible: "Scaffold Supervisor",

    image:
      "/images/hazards/high-rise/scaffolding/incomplete-working-platform.webp",

    imageAlt:
      "Incomplete scaffold working platform with missing boards.",

    keywords: [
      "Scaffold",
      "Working Platform",
      "Fall from Height",
      "Incomplete Platform"
    ],

    relatedTopics: [
      "Missing Guardrail",
      "Missing Midrail",
      "Missing Toe Board",
      "Unprotected Edge"
    ],

    relatedHazards: [
      "Missing Guardrail",
      "Unprotected Edge"
    ],

    observationExample:
      "The scaffold working platform was incomplete due to missing platform boards, creating unsafe gaps and exposing workers to fall-from-height hazards.",

    recommendedAction:
      "Provide a complete working platform using approved scaffold boards before permitting any work."
  }
];