import { useState } from "react";
import { useParams } from "react-router-dom";
import { ConvertirNotas } from "../../services/ConvertirNota";
import { guardarNotas } from "../../services/guardarNotas";
import EditarFormulario from "../components/EditarFormulario";
import { useSingleEstudiante } from "../hooks/useSingleEstudiante";

const Estudiante = () => {
  const [notas, setNotas] = useState({});
  const [notasGuardadas, setNotasGuardadas] = useState(notas);

  const { id } = useParams();

  const { estudiante, loading, setEstudiante } = useSingleEstudiante(id, notasGuardadas);

  const handleChangeNotas = (e) => {
    const { name } = e.target;
    setNotas((prev) => {
      return { ...prev, [name]: Number(e.target.value) };
    });
    console.log(notas);
  };

  const handleGuararNotas = async (e) => {
    e.preventDefault();
    await guardarNotas(notas, id);
    setNotasGuardadas((prev) => notas);
  };
  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <header>
            <h4 className='p-4 text-3xl'>
              Estudiante:
              <span className='ml-2 capitalize font-bold'>
                {estudiante?.nombre + " " + estudiante?.apellido}
              </span>
            </h4>
          </header>
          <main className='grid lg:grid-cols-2 gap-3'>
            <div className='mx-auto resumen rounded overflow-hidden  my-4'>
              <div>
                <p className='text-center text-xl uppercase font-bold py-4 text-slate-200 bg-slate-800'>
                  notas
                </p>

                <div className='border-2 shadow-lg'>
                  <ul className='text-xl  capitalize  flex items-center gap-2 text-center'>
                    <li className='flex flex-col h-full justify-center p-2'>
                      <p>matematicas:</p>
                      <span className='font-bold text-3xl'>
                        {ConvertirNotas(estudiante?.calificaciones?.matematicas)}
                      </span>
                    </li>
                    <li className='flex flex-col h-full justify-center p-2'>
                      <p>Ciencias Sociales:</p>{" "}
                      <span className='font-bold text-3xl'>
                        {ConvertirNotas(estudiante?.calificaciones?.sociales)}
                      </span>
                    </li>
                    <li className='flex flex-col h-full justify-center p-2'>
                      <p>Ciencias Naturales:</p>
                      <span className='font-bold text-3xl'>
                        {ConvertirNotas(estudiante?.calificaciones?.naturales)}
                      </span>
                    </li>
                    <li className='flex flex-col h-full justify-center p-2'>
                      <p>Lengua Española:</p>
                      <span className='font-bold text-3xl'>
                        {ConvertirNotas(estudiante?.calificaciones?.lenguaje)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mx-4 rounded '>
              <div className=' rounded-t bg-slate-800'>
                <p className='text-center uppercase font-bold py-4 text-slate-100'>editar</p>
              </div>
              <div className='p-4 shadow-lg border-2'>
                <p className='text-slate-300'>Calificaciones:</p>
                <form
                  onSubmit={handleGuararNotas}
                  action=''
                  className='flex justify-evenly items-center py-2 flex-col'
                >
                  <div className='flex items-center justify-between w-full px-4 border-b py-1'>
                    <label htmlFor='lenguaje'>Lengua Espanola</label>
                    <input
                      onChange={handleChangeNotas}
                      placeholder='Calificacion'
                      className='border p-2 mx-2'
                      type='number'
                      min={0}
                      max={100}
                      name='lenguaje'
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full px-4 border-b py-1'>
                    <label htmlFor='matematicas'>Matematicas</label>
                    <input
                      onChange={handleChangeNotas}
                      placeholder='Calificacion'
                      className='border p-2 mx-2'
                      type='number'
                      min={0}
                      max={100}
                      name='matematicas'
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full px-4 border-b py-1'>
                    <label htmlFor='naturales'>Ciencias Naturales</label>
                    <input
                      onChange={handleChangeNotas}
                      placeholder='Calificacion'
                      className='border p-2 mx-2'
                      type='number'
                      min={0}
                      max={100}
                      name='naturales'
                      id=''
                    />
                  </div>
                  <div className='flex items-center justify-between w-full px-4 border-b py-1'>
                    <label htmlFor='sociales'>Ciencias Sociales</label>
                    <input
                      onChange={handleChangeNotas}
                      placeholder='Calificacion'
                      className='border p-2 mx-2'
                      type='number'
                      min={0}
                      max={100}
                      name='sociales'
                      id=''
                    />
                  </div>

                  <input
                    className=' place-self-start mt-4 cursor-pointer hover:bg-slate-900 duration-200 px-4 rounded bg-slate-800 text-slate-200 py-2'
                    type='submit'
                    value='guardar notas'
                  />
                </form>
              </div>
              <EditarFormulario estudiante={estudiante} handleStudiante={setEstudiante} />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Estudiante;
