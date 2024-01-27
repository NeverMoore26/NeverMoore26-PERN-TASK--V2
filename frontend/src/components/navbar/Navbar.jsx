import { Link, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui";
import { useAuth } from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  const location = useLocation();
  const { isAuth, signout, user } = useAuth();

  return (
    <nav className="bg-zinc-900 text-gray-100">
      <Container className="flex justify-between items-center py-4">
        {/* Espacio para el logo y el título */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-4">
            {/* Reemplaza 'path/to/your/logo.png' con la ruta de tu logo */}
            <img src="\src\img\Never Moore Store Blanco.png" alt="Logo" className="h-20 w-20 mr-2" />
          </Link>
          <Link to="/">
            <h1 className="font-bold text-3xl text-sky-400">PERN Tasks</h1>
          </Link>
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex items-center gap-x-4">
          {isAuth ? (
            <>
              {privateRoutes.map(({ path, name, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`px-3 py-2 flex items-center gap-x-2 hover:bg-sky-500 rounded-md ${
                      location.pathname === path ? "bg-sky-600" : ""
                    }`}
                  >
                    {icon}
                    <span className="hidden sm:block">{name}</span>
                  </Link>
                </li>
              ))}
              <li
                className="hover:bg-red-600 rounded-md px-3 py-2 flex items-center cursor-pointer"
                onClick={signout}
              >
                <BiLogOut className="w-5 h-5" />
                <span className="hidden sm:block ml-2">Logout</span>
              </li>
              <li className="flex items-center gap-x-2">
                <img
                  src={user.gravatar}
                  alt={`${user.name}'s avatar`}
                  className="h-10 w-10 rounded-full border-2 border-sky-400"
                />
                <span className="hidden sm:block font-medium">{user.name}</span>
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`px-3 py-2 hover:bg-sky-500 rounded-md ${
                    location.pathname === path ? "bg-sky-600" : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
