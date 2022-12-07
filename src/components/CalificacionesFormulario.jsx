import React from "react";

const CalificacionesFormulario = ({ handleGuararNotas, handleChangeNotas }) => {
  return (
    <div className='bg-slate-100 mt-2 rounded p-2'>
      <p className='text-slate-400 pb-2'>Calificaciones:</p>
      <p className='text-center text-xl rounded-t capitalize font-bold py-2 text-slate-200 bg-slate-800'>
        editar
      </p>
      <form
        onSubmit={handleGuararNotas}
        action=''
        className='shadow-lg border-2 bg-white flex justify-evenly items-center border-b py-2 flex-col'
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
          className='place-self-start m-2 border px-4 rounded bg-slate-800 text-slate-200 py-2'
          type='submit'
          value='guardar notas'
        />
      </form>
    </div>
  );
};

export default CalificacionesFormulario;
