import { useState } from "react";
import { API_URL } from "../../helper/api_url";
import { useEstudiantes } from "../hooks/useEstudiantes";

const Lista = () => {
  const [listaAsistencia, setListaAsistencia] = useState([]);
  const [listaObtenida, setListaObtenida] = useState([]);
  const [fechaABuscar, setFechaABuscar] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState({});
  const [materia, setMateria] = useState({});

  const { estudiantes } = useEstudiantes();

  const guardarLista = async (materia) => {
    const url = `${API_URL}/api/lista`;
    try {
      const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          materia: materia,
          asistencia: listaAsistencia,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const obtenerLista = async (fecha) => {
    const url = `${API_URL}/api/lista/${fecha}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFecha = (e) => {
    setFechaABuscar((prev) => e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await guardarLista(materia);
  };

  const handleBuscarPorFecha = async (e) => {
    e.preventDefault();
    const result = await obtenerLista(fechaABuscar);
    setListaObtenida(result);
  };

  const handleAsistencia = (e, estu) => {
    const presencia = {
      id: e.target.id,
      estudiante: { nombre: estu.nombre, apellido: estu.apellido },
      presente: Boolean(e.target.value),
    };

    const buscarLista = listaAsistencia.find((lista) => lista.id === e.target.id);

    if (buscarLista) {
      const listaActualizada = listaAsistencia.map((lista) =>
        lista.id === e.target.id ? { ...lista, presente: Boolean(e.target.value) } : lista
      );

      return setListaAsistencia(listaActualizada);
    }

    setListaAsistencia((prev) => {
      return [...prev, presencia];
    });
  };

  const handleFiltrarLista = (e, lista) => {
    setListaFiltrada(lista);
  };
  return (
    <div className='grid md:grid-cols-2 px-4 gap-4 bg-slate-300 min-h-screen'>
      <div className='bg-slate-100 mt-4 rounded shadow-lg h-fit'>
        <div className='p-4 bg-slate-800 text-slate-100 rounded-t flex justify-between items-center flex-col md:flex-row'>
          <p className='text-xl '>
            lista de hoy: <span className='font-bold'>{new Date().toLocaleDateString()}</span>
          </p>
          <select
            onChange={(e) => setMateria(e.target.value)}
            className=' py-1 px-2 rounded text-slate-900'
            name='materia'
            defaultValue={""}
            id=''
          >
            <option value=''>elige una materia</option>
            <option value='lenguaje'>Lengua Espanola</option>
            <option value='matematicas'>Matematicas</option>
            <option value='naturales'>Ciencias Sociales</option>
            <option value='sociales'>Ciencias Naturales</option>
          </select>
        </div>
        <form className='p-4' onSubmit={handleSubmit} action=''>
          {estudiantes.map((estudiante) => {
            return (
              <div key={estudiante?._id} className='p-2'>
                <div className=' px-2 flex items-center justify-between flex-col md:flex-row  border-b pb-2'>
                  <p className='uppercase font-bold'>
                    {estudiante.nombre + " " + estudiante.apellido}
                  </p>
                  <select
                    onChange={(e) => handleAsistencia(e, estudiante)}
                    className={` cursor-pointer rounded p-1 bg-white`}
                    name={"asistencia"}
                    id={estudiante?._id}
                  >
                    <option defaultValue={"seleccionar"}>seleccione</option>
                    <option className='bg-green-300' value='true'>
                      Presente
                    </option>
                    <option className='bg-red-300' value=''>
                      Ausente
                    </option>
                  </select>
                </div>
              </div>
            );
          })}
          <input
            className='cursor-pointer hover:bg-slate-900 duration-200 rounded-lg px-6 py-2 bg-slate-700 text-white font-bold'
            type='submit'
            value='Guardar Lista'
          />
        </form>
      </div>
      <div className='bg-slate-100 mt-4 rounded shadow-lg h-fit'>
        <div className='bg-slate-800 text-slate-100 rounded-t'>
          <p className='text-xl p-4'>Obtener lista por fecha:</p>
        </div>
        <div className='p-4'>
          <form onSubmit={handleBuscarPorFecha} className='flex justify-between' action=''>
            <input
              onChange={handleFecha}
              className='border p-2 rounded-lg'
              type='date'
              name=''
              id=''
            />
            <input
              className='rounded-lg px-6 cursor-pointer hover:bg-slate-900 duration-200 bg-slate-700 text-white font-bold'
              type='submit'
              value='BUSCAR'
            />
          </form>
          <div className='p-4 text-lg'>
            <ul>
              {listaObtenida &&
                listaObtenida.map((lista, index) => {
                  console.log(lista);
                  return (
                    <li
                      className=' border-b py-2 cursor-pointer hover:text-slate-400 duration-200'
                      onClick={(e) => handleFiltrarLista(e, lista)}
                      key={index}
                    >
                      {lista.materia}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            {listaFiltrada.materia ? (
              <div className='border rounded mt-4 shadow-lg bg-slate-100'>
                <div className='flex justify-between border-b bg-slate-800 text-xl p-2 rounded-t text-slate-100'>
                  <p>{listaFiltrada.materia} </p>
                  <p>{new Date(listaFiltrada.fecha).toISOString().substring(0, 10)} </p>
                </div>
                <div>
                  {listaFiltrada.asistencia.map((alumno, index) => {
                    const { nombre, apellido } = alumno.estudiante;
                    return (
                      <li key={index} className='flex justify-between p-2 border-b'>
                        <p> {`${nombre} ${apellido}`}</p>{" "}
                        <span>{alumno.presente ? "PRESENTE" : "AUSENTE"}</span>
                      </li>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lista;
