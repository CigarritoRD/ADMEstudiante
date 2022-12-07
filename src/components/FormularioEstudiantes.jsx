import { useState } from "react";

const FormularioEstudiantes = ({ crearCuenta }) => {
  const INITIAL_DATA_FORM = {
    nombre: "",
    apellido: "",
    materias: [
      { nombre: "matematicas", calificacion: 0 },
      { nombre: "lenguaje", calificacion: 0 },
      { nombre: "sociales", calificacion: 0 },
      { nombre: "naturales", calificacion: 0 },
    ],
  };

  const [dataForm, setDataform] = useState(INITIAL_DATA_FORM);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario(dataForm)) return;
    await crearCuenta(dataForm);
  };

  const validarFormulario = (dataForm) => {
    const { nombre, apellido } = dataForm;
    if ([nombre.trim(), apellido.trim()].includes(""))
      return console.log("Ambos campos son obligatorios");
    setDataform(INITIAL_DATA_FORM);
    return dataForm;
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setDataform((datosPrevios) => {
      return {
        ...datosPrevios,
        [name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className='max-w-[600px] w-full mx-auto  formulario-estudiantes shadow-lg h-fit rounded'>
        <div className='bg-slate-800 rounded-t p-4'>
          <h4 className='text-xl text-center  text-slate-200'>Nuevo estudiante</h4>
        </div>
        <form onSubmit={formSubmit} className='px-4 py-4' action=''>
          <label className='font-bold text-lg text-slate-800' htmlFor='nombre '>
            Nombre
          </label>
          <input
            placeholder='nombre del estudiante'
            onChange={handleChange}
            className='my-2 block border w-full rounded p-2'
            name='nombre'
            type='text'
            value={dataForm.nombre}
          />
          <label className='font-bold text-lg text-slate-800' htmlFor='apellido '>
            Apellido
          </label>
          <input
            placeholder='apellido del estudiante'
            onChange={handleChange}
            className='my-2 block border w-full rounded p-2'
            name='apellido'
            type='text'
            value={dataForm.apellido}
          />

          <input
            onChange={handleChange}
            className='border bg-slate-900 duration-300 text-slate-200 hover:bg-slate-600 rounded px-5 py-2 my-4 cursor-pointer'
            type='submit'
            value={"Agregar"}
          />
        </form>
      </div>
    </>
  );
};

export default FormularioEstudiantes;
