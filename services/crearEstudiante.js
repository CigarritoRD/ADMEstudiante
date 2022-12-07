import { API_URL } from "../helper/api_url";

export const crearEstudiante = async (nuevoEstudiante) => {
  try {
    const OPTIONS = {
      method: "POST",
      mode: "cors",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(nuevoEstudiante),
    };
    const res = await fetch(`${API_URL}/api/estudiantes`, OPTIONS);
    const data = await res.json();
    console.log(res);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
