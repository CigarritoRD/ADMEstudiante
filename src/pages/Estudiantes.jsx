import { useState } from "react";

import { ConvertirNotas } from "../../services/ConvertirNota";
import { guardarNotas } from "../../services/guardarNotas";
import CalificacionesFormulario from "../components/CalificacionesFormulario";

import { useEstudiantes } from "../hooks/useEstudiantes";
import { useSingleEstudiante } from "../hooks/useSingleEstudiante";

const Estudiantes = () => {
  const [materia, setMateria] = useState("");
  const [notas, setNotas] = useState([]);
  const [notasGuardadas, setNotasGuardadas] = useState([]);
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");

  const { estudiantes } = useEstudiantes(notasGuardadas);

  const { estudiante, loading } = useSingleEstudiante(id, notasGuardadas);

  const handleId = (estudianteID) => {
    setId(estudianteID);
  };

  const handleChangeNotas = (e) => {
    const { name } = e.target;
    setNotas((prev) => {
      return { ...prev, [name]: Number(e.target.value) };
    });
  };

  const filtrarEstudiantes = (data) => {
    return data.filter(
      (estudiante) =>
        estudiante?.nombre.toLowerCase().includes(query) ||
        estudiante?.apellido.toLowerCase().includes(query)
    );
  };
  const handleGuararNotas = async (e) => {
    e.preventDefault();

    if (!id && !notas.length) return console.log("debes seleccionar un estudiante");
    await guardarNotas(notas, id);
    setNotasGuardadas(notas);
  };

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className='bg-slate-100 p-4 min-h-screen'>
          <h2 className='text-lg text-slate-400 mb-4 border-b border-slate-400'>Estudiantes:</h2>
          <div className='rounded p-2 gap-2  flex justify-between md:flex-row flex-col'>
            <div className='bg-white p-4 rounded shadow-lg'>
              <form action=''>
                <label className='block font-bold text-lg' htmlFor='filtrar'>
                  Buscar
                </label>
                <div className='flex gap-2 items-center md:flex-row flex-col'>
                  <input
                    onChange={(e) => setQuery(e.target.value)}
                    name='filtrar'
                    className='border p-2 rounded my-2 md:min-w-[300px] w-full shadow'
                    type='text'
                    placeholder='Escribe algo para filtrar'
                  />
                  <input
                    className='w-full md:w-auto border rounded px-4 py-2 bg-slate-800 text-white hover:bg-slate-900 duration-200 cursor-pointer'
                    type='submit'
                    value='buscar'
                  />
                </div>
              </form>
            </div>

            <form className='bg-white p-4 rounded shadow-lg' action=''>
              <h4 className='text-xl'>Seleccione una materia para ver sus calificaciones</h4>
              <select
                defaultValue={""}
                className='border rounded p-1 text-lg bg-white my-2 shadow'
                onChange={(e) => setMateria(e.target.value)}
                name=''
                id=''
              >
                <option value=''>seleccionar</option>
                <option value='lenguaje'>lenguaje</option>
                <option value='matematicas'>matematicas</option>
                <option value='naturales'>naturales</option>
                <option value='sociales'>sociales</option>
              </select>
            </form>
          </div>
          <div className='grid md:grid-cols-2 gap-2'>
            <div className='bg-slate-100 mt-2 rounded p-2'>
              <h2 className='text-slate-400 pb-2'>Lista de estudiantes:</h2>
              <div className='rounded overflow-hidden  bg-white shadow-lg'>
                <div>
                  <table className='w-full text-center'>
                    <thead className='bg-slate-800 rounded-lg'>
                      <tr className=' text-slate-200 text-xl'>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Materia</th>
                        <th className='p-2'>Calificacion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {estudiantes &&
                        filtrarEstudiantes(estudiantes).map((estudiante, index) => {
                          return (
                            <tr key={index} className='border-b text-left h-8 text-lg'>
                              <td
                                onClick={() => handleId(estudiante?._id)}
                                className={`${
                                  id === estudiante?._id ? "border-b-2 border-red-400" : ""
                                } pl-2 cursor-pointer hover:text-slate-400 duration-200 p-2`}
                              >{`${estudiante?.nombre} ${estudiante?.apellido}`}</td>
                              <td className='capitalize'>{materia}</td>
                              <td>
                                <p className='text-center font-bold'>
                                  {ConvertirNotas(Number(estudiante?.calificaciones[materia]))}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <CalificacionesFormulario
              handleChangeNotas={handleChangeNotas}
              handleGuararNotas={handleGuararNotas}
              estudiante={estudiante}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Estudiantes;
