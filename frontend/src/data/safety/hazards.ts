import { SafetyHazard } from "./types";

export const hazards: SafetyHazard[] = [
  {
    id: "HR-SCF-001",

    sector: "High-Rise Building",

    area: "Scaffolding",

    activity: "Working Platform",

    hazard: "Unprotected Edge",

    pageTitle:
      "Unprotected Edge Hazard | High-Rise Scaffolding Safety",

    metaDescription:
      "Learn the risks, inspection points, required controls, PPE and professional safety observation for unprotected scaffold edges.",

    summary:
      "An unprotected scaffold edge exposes workers to a fall-from-height hazard due to missing or incomplete edge protection.",

    observation:
      "Scaffold working platform was found with an unprotected edge due to missing edge protection, exposing workers to a fall-from-height hazard.",

    risk:
      "Workers may fall from height while accessing or working near the open edge.",

    commonCauses: [
      "Guardrail removed",
      "Incomplete scaffold erection",
      "Unauthorized scaffold modification",
      "Improper scaffold inspection",
    ],

    whatCanHappen: [
      "Worker may lose balance.",
      "Worker may fall from height.",
      "Tools may fall to lower levels.",
    ],

    possibleConsequences: [
      "Fatality",
      "Serious Injury",
      "Dropped Object Incident",
    ],

    inspectionPoints: [
      "Check all open edges.",
      "Verify guardrail continuity.",
      "Inspect access points.",
      "Verify scaffold tag status.",
    ],

    requiredControls: [
      "Install complete guardrail system.",
      "Restrict access until rectified.",
      "Inspect before use.",
    ],

    correctiveActions: [
      "Install edge protection immediately.",
      "Barricade affected area.",
      "Reinspect before work resumes.",
    ],

    preventiveActions: [
      "Daily scaffold inspection.",
      "Competent person verification.",
      "Prevent unauthorized dismantling.",
    ],

    requiredPPE: [
      "Safety Helmet",
      "Safety Shoes",
      "Full Body Harness",
    ],

    standards: {
      iso45001: [
        "Operational Planning and Control",
      ],
      osha: [
        "29 CFR 1926 Subpart L",
      ],
      bis: [],
      nbc: [],
    },

    severity: "Critical",

    likelihood: "Likely",

    riskRating: "Extreme",

    responsible: "Scaffold Supervisor",

    image:
      "/images/hazards/high-rise/scaffolding/unprotected-edge.jpg",

    imageAlt:
      "Scaffold platform with missing edge protection.",

    keywords: [
      "Unprotected Edge",
      "Scaffold",
      "Fall from Height",
      "Guardrail",
    ],

    relatedTopics: [
      "Missing Guardrail",
      "Missing Midrail",
      "Incomplete Working Platform",
    ],

    relatedHazards: [
      "Missing Guardrail",
      "Missing Midrail",
    ],

    observationExample:
      "Scaffold platform edge was found without complete edge protection, creating a fall-from-height hazard for personnel working at elevation.",

    recommendedAction:
      "Provide complete edge protection before permitting work on the scaffold platform.",
  },
];