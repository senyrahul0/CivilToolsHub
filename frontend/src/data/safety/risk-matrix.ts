import { Likelihood, RiskRating, Severity } from "./types";

export function calculateRisk(
  severity: Severity,
  likelihood: Likelihood
): RiskRating {
  const scoreMap = {
    Low: 1,
    Medium: 2,
    High: 3,
    Critical: 4,

    Rare: 1,
    Possible: 2,
    Likely: 3,
    "Almost Certain": 4,
  };

  const score =
    scoreMap[severity] * scoreMap[likelihood];

  if (score <= 2) return "Low";

  if (score <= 6) return "Medium";

  if (score <= 12) return "High";

  return "Extreme";
}