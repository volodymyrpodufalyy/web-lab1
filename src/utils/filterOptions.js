export const riskLevelFilterOptions = [
  { value: "LOW", label: "LOW" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HIGH", label: "HIGH" },
  { value: "EXTRAHIGH", label: "EXTRAHIGH" },
];
export const tradingLevelFilterOptions = [
  { value: "GROWING", label: "GROWING" },
  { value: "DESCENDING", label: "DESCENDING" },
];
export const sharesCategoryFilterOptions = [
  { value: "Usual", label: "Usual" },
  { value: "Primary", label: "Primary" },
];

export const allOptions = [
  { value: riskLevelFilterOptions, label: "Risk level", name: 'riskLevel' },
  { value: tradingLevelFilterOptions, label: "Trading level", name: 'tradingLevel' },
  { value: sharesCategoryFilterOptions, label: "Category", name: 'sharesCategory' },
];
