import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormularioEstudiantes from "../components/FormularioEstudiantes";
import ListaEstudiantes from "../components/ListaEstudiantes";
import { useEstudiantes } from "../hooks/useEstudiantes";
import { eliminarEstudiante } from "../../services/eliminarEstudiante";
import { crearEstudiante } from "../../services/crearEstudiante";

const Home = () => {
  const [nuevoEstudiante, setNuevoEstudiante] = useState([]);
  const [agregarEstudianteBtn, setAgregarEstudianteBtn] = useState(true);

  const navigate = useNavigate();
  const { estudiantes, loading } = useEstudiantes(nuevoEstudiante);
  console.log(loading);

  const handleEliminarEstudiante = async (id) => {
    const res = await eliminarEstudiante(id, nuevoEstudiante);
    setNuevoEstudiante(res);
  };
  const handleCrearEstudiante = async (id) => {
    const res = await crearEstudiante(id, nuevoEstudiante);
    setNuevoEstudiante(res);
  };

  const editarEstudiante = (id) => {
    navigate(`/estudiantes/${id}`);
  };
  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className=''>
          <button
            onClick={() => setAgregarEstudianteBtn(!agregarEstudianteBtn)}
            className='border rounded px-4 py-2 my-4 bg-slate-900 text-slate-200'
          >
            {agregarEstudianteBtn ? "Ocultar Formulario" : "Mostrar Formulario"}
          </button>
          <main
            className={`grid md:grid-cols-2
  h-full gap-4  w-full  mx-auto px-2 `}
          >
            {agregarEstudianteBtn && <FormularioEstudiantes crearCuenta={handleCrearEstudiante} />}

            <ListaEstudiantes
              estudiantes={estudiantes}
              handleEliminarEstudiante={handleEliminarEstudiante}
              editarEstudiante={editarEstudiante}
            />
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
