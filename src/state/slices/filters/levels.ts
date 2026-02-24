export type LanguageLevel = {
  label: "A0" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  value: "a0" | "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  fullLabel:
    | "beginner"
    | "elementary"
    | "pre-intermediate"
    | "intermediate"
    | "upper-intermediate"
    | "advanced"
    | "proficiency";
};

export const levels: LanguageLevel[] = [
  { label: "A0", value: "a0", fullLabel: "beginner" },
  { label: "A1", value: "a1", fullLabel: "elementary" },
  { label: "A2", value: "a2", fullLabel: "pre-intermediate" },
  { label: "B1", value: "b1", fullLabel: "intermediate" },
  { label: "B2", value: "b2", fullLabel: "upper-intermediate" },
  { label: "C1", value: "c1", fullLabel: "advanced" },
  { label: "C2", value: "c2", fullLabel: "proficiency" },
];
