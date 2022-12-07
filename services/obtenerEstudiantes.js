import { API_URL } from "../helper/api_url";

export const obtenerEstudiantes = async () => {
  try {
    const res = await fetch(`${API_URL}/api/estudiantes`);
    const data = await res.json();
    if (!data) console.log("no hay estudiantes que mostrar");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
