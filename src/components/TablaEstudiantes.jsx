import { Link } from "react-router-dom";

const TablaEstudiantes = ({
  estudiantes,
  verMaterias,
  editarEstudiante,
  handleEliminarEstudiante,
}) => {
  return (
    <table className='table-auto w-full'>
      <thead className='bg-slate-800 text-slate-100 rounded'>
        <tr className=''>
          <th className='py-4  text-xl capitalize'>Nombre</th>
          <th className=''>
            <button className='capitalize text-xl'>
              {verMaterias ? "Ocultar materias" : "mostrar materias"}
            </button>
          </th>
          <th className='py-4 text-xl capitalize'>administrar</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {estudiantes?.map((estudiante) => {
          return (
            <tr
              key={estudiante?._id}
              className='border-b cursor-pointer hover:bg-gray-100 duration-200'
            >
              <td className=''>
                <Link to={`/estudiantes/${estudiante?._id}`}>
                  <p className='capitalize text-lg font-bold'>{`${estudiante?.nombre} ${estudiante?.apellido}`}</p>
                </Link>
              </td>
              <td className=''>
                {
                  <ul>
                    {verMaterias &&
                      objMaterias.map((obj) => {
                        return (
                          <li key={estudiante?._id} className='flex gap-4'>
                            <p className='font-bold capitalize'>{`${obj.materia}:`} </p>
                            <span> {`${obj.calificacion}`}</span>
                          </li>
                        );
                      })}
                  </ul>
                }
              </td>
              <td className='p-3 gap-1 flex'>
                <button
                  onClick={() => editarEstudiante(estudiante?._id)}
                  className='block w-full my-1 px-2 py-1 text-slate-100 duration-200 hover:shadow-md font-medium hover:text-slate-900 hover:bg-blue-400 bg-slate-900 rounded'
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminarEstudiante(estudiante?._id)}
                  className='block text-slate-100 hover:bg-red-400 hover:text-slate-900 duration-200 hover:shadow-md w-full my-1 px-2 py-1 font-medium bg-red-600 rounded'
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaEstudiantes;
