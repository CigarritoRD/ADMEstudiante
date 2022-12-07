import React, { useState } from "react";
import { useEffect } from "react";
import { guardarUsuario } from "../../services/guardarUsuario";

const EditarFormulario = ({ estudiante, handleStudiante }) => {
  const { nombre, apellido } = estudiante;

  const [values, setValues] = useState({ nombre: "", apellido: "" });

  useEffect(() => {
    if (estudiante?.nombre) {
      setValues({ nombre, apellido });
    }
  }, [estudiante]);

  const handleEditar = async (e) => {
    e.preventDefault();
    const ress = await guardarUsuario(values, estudiante._id);
    handleStudiante(ress);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className='my-10 w-full mx-auto border-2 rounded formulario-estudiantes shadow-lg'>
      <div className='bg-slate-900 rounded-t '>
        <h4 className='text-3xl text-center py-4 text-slate-200'>Editar estudiante</h4>
      </div>
      <form onSubmit={handleEditar} className='px-4 py-4' action=''>
        <label className='font-bold' htmlFor='nombre'>
          Nombre
        </label>
        <input
          onChange={handleChange}
          className='my-2 block border w-full rounded p-2'
          name='nombre'
          type='text'
          value={values.nombre}
        />
        <label className='font-bold' htmlFor='nombre'>
          Apellido
        </label>
        <input
          onChange={handleChange}
          className='my-2 block border w-full rounded p-2'
          name='apellido'
          type='text'
          value={values.apellido}
        />

        <input
          onChange={handleChange}
          className='border bg-slate-900 duration-300 text-slate-200 hover:bg-slate-600 rounded px-5 py-2 my-4 cursor-pointer'
          type='submit'
          value={"Guardar cambios"}
        />
      </form>
    </div>
  );
};

export default EditarFormulario;
