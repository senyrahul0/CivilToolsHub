export type Severity =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export type Likelihood =
  | "Rare"
  | "Possible"
  | "Likely"
  | "Almost Certain";

export type RiskRating =
  | "Low"
  | "Medium"
  | "High"
  | "Extreme";

export type ObservationType =
  | "Unsafe Condition"
  | "Unsafe Act"
  | "Near Miss";

export interface SafetyHazard {
  id: string;

  sector: string;

  area: string;

  activity: string;

  hazard: string;

  pageTitle: string;

  metaDescription: string;

  summary: string;

  observation: string;

  risk: string;

  commonCauses: string[];

  whatCanHappen: string[];

  possibleConsequences: string[];

  inspectionPoints: string[];

  requiredControls: string[];

  correctiveActions: string[];

  preventiveActions: string[];

  requiredPPE: string[];

  standards: {
    iso45001?: string[];
    osha?: string[];
    bis?: string[];
    nbc?: string[];
  };

  severity: Severity;

  likelihood: Likelihood;

  riskRating: RiskRating;

  responsible: string;

  image: string;

  imageAlt: string;

  keywords: string[];

  relatedTopics: string[];

  relatedHazards: string[];

  observationExample: string;

  recommendedAction: string;
}