import { API_URL } from "../helper/api_url";

export const guardarNotas = async (nuevasNotas, id) => {
  const { lenguaje, matematicas, naturales, sociales } = nuevasNotas;
  try {
    const OPTIONS = {
      method: "POST",
      mode: "cors",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        calificaciones: { lenguaje, matematicas, naturales, sociales },
      }),
    };
    const res = await fetch(`${API_URL}/api/estudiantes/${id}`, OPTIONS);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
