import { useEffect, useState } from "react";
import { API_URL } from "../../helper/api_url";

const useSingleEstudiante = (id, notas) => {
  const [estudiante, setEstudiante] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerEstudiante = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/estudiantes/${id}`);
        const data = await res.json();
        setEstudiante(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    obtenerEstudiante();
  }, [id, notas.lenguaje, notas.matematicas, notas.sociales, notas.naturales]);
  return { estudiante, loading, setEstudiante };
};

export { useSingleEstudiante };
