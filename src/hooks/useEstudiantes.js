import { useEffect, useState } from "react";
import { API_URL } from "../../helper/api_url";

export const useEstudiantes = (nuevoEstudiante) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerEstudiantes = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/estudiantes`);
        const data = await res.json();
        if (!data) return console.log("no hay estudiantes que mostrar");
        setEstudiantes(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    obtenerEstudiantes();
  }, [nuevoEstudiante]);

  return { estudiantes, loading };
};
