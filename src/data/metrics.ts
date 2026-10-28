export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: "3,200+", label: "guiones generados" },
  { value: "48k", label: "respuestas en el tablero" },
  { value: "12s", label: "promedio por guion" },
];
