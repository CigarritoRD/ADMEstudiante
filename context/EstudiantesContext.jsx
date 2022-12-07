import { createContext, useEffect, useState } from "react";

const EstudiantesContext = createContext();

export const EstudiantesProvider = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  return (
    <EstudiantesContext.Provider value={{ estudiantes }}>{children}</EstudiantesContext.Provider>
  );
};
export default EstudiantesContext;
