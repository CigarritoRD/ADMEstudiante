import { API_URL } from "../helper/api_url";

export const eliminarEstudiante = async (id, nuevoEstudiante) => {
  console.log(id);
  try {
    const OPTIONS = {
      method: "DELETE",
      mode: "cors",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(nuevoEstudiante),
    };
    const res = await fetch(`${API_URL}/api/estudiantes/${id}`, OPTIONS);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
