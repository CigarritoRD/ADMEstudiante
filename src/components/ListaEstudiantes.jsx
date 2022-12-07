import { useState } from "react";

import TablaEstudiantes from "./TablaEstudiantes";

const ListaEstudiantes = ({ estudiantes, handleEliminarEstudiante, editarEstudiante }) => {
  const [verMaterias, setVerMaterias] = useState(false);

  return (
    <>
      {estudiantes.length > 0 ? (
        <div className='rounded overflow-hidden shadow-lg max-w-[600px] place-self-center w-full'>
          <TablaEstudiantes
            estudiantes={estudiantes}
            handleEliminarEstudiante={handleEliminarEstudiante}
            editarEstudiante={editarEstudiante}
            verMaterias={verMaterias}
          />
        </div>
      ) : (
        <div className='grid h-full place-items-center'>
          <h4 className='text-4xl font-bold'>No hay Estudiantes que mostrar</h4>
        </div>
      )}
    </>
  );
};

export default ListaEstudiantes;
