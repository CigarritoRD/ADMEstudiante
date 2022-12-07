import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className='bg-slate-900 text-slate-200'>
        <h1 className='text-center py-4 text-4xl'>Administrador de Estudiantes</h1>
        <hr />
        <nav className='flex justify-between items-center h-10 px-2 text-slate-200'>
          <Link to={"/"}>
            <h4>Inicio</h4>
          </Link>
          <ul className='flex items-center '>
            <Link to={"/"}>
              <li className='hover:bg-white hover:text-slate-900 duration-300 border-l border-slate-600/40  border-r p-2'>
                Agregar Estudiante
              </li>
            </Link>
            <Link to={"/lista"}>
              <li className='hover:bg-white hover:text-slate-900 duration-300 border-r border-slate-600/40  p-2'>
                Pasar Lista
              </li>
            </Link>
            <Link to={"/estudiantes"}>
              <li className='hover:bg-white hover:text-slate-900 duration-300 border-r  border-slate-600/40 p-2'>
                Estudiantes
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <div></div>

      <Outlet />
    </>
  );
};

export default Layout;
