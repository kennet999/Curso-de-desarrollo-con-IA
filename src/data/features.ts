export type FeatureIcon = "script" | "board" | "tune";

export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "script",
    title: "Guion en segundos",
    description:
      "Escribe un tema y recibe preguntas, respuestas y puntajes con estructura de programa.",
  },
  {
    icon: "board",
    title: "Tablero listo para jugar",
    description:
      "Revela respuestas, suma puntos y lleva el ritmo del show sin preparar nada extra.",
  },
  {
    icon: "tune",
    title: "Personalidad propia",
    description:
      "Ajusta el humor, el nivel de picardía y el estilo para que cada guion suene a tu grupo.",
  },
];
