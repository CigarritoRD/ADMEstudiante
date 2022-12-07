import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Estudiantes from "./pages/Estudiantes";
import Estudiante from "./pages/Estudiante";
import Lista from "./pages/Lista";
import Layout from "./components/Layout";
import { EstudiantesProvider } from "../context/EstudiantesContext";

function App() {
  return (
    <EstudiantesProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='lista' element={<Lista />} />
          <Route path='estudiantes' element={<Estudiantes />} />
          <Route path='estudiantes/:id' element={<Estudiante />} />
        </Route>
      </Routes>
    </EstudiantesProvider>
  );
}

export default App;
