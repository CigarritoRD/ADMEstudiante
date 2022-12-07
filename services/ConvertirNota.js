export const ConvertirNotas = (nota) => {
  if (nota >= 90 && nota <= 100) return "A";
  if (nota >= 80 && nota <= 89) return "B";
  if (nota >= 70 && nota <= 79) return "C";
  if (nota >= 60 && nota <= 69) return "D";
  if (nota > 0 && nota <= 59) return "F";
  if (nota == 0) return "0";
};
