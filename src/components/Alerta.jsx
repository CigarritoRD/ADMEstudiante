import React from "react";

const Alerta = ({ alert }) => {
  return (
    <div className='border-red-400 border text-center font-bold text-red-400 rounded px-4 py-2'>
      <p>{alert.mensaje}</p>
    </div>
  );
};

export default Alerta;
