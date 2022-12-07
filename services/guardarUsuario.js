import { API_URL } from "../helper/api_url";

export const guardarUsuario = async (values, id) => {
  console.log(values, id);
  try {
    const OPTIONS = {
      method: "PATCH",
      mode: "cors",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const res = await fetch(`${API_URL}/api/estudiantes/${id}`, OPTIONS);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
