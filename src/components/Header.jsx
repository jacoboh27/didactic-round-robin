import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-emerald-400 p-4 px-12 shadow-md">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          to="/"
          className="font-semibold text-xl tracking-tight text-white"
        >
          Didactic Round Robin
        </NavLink>
      </div>
      <div className="w-full lg:flex lg:items-center lg:w-auto gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex gap-1 font-semibold text-md tracking-tight text-white border-b-2 border-white transition duration-500 ease-in-out hover:border-white"
              : "flex gap-1 font-ligth text-md tracking-tight text-white transition duration-500 ease-in-out hover:border-white"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>

          Inicio
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) =>
            isActive
              ? "flex gap-1 font-semibold text-md tracking-tight text-white border-b-2 border-white transition duration-500 ease-in-out hover:border-white"
              : "flex gap-1 font-ligth text-md tracking-tight text-white transition duration-500 ease-in-out hover:border-white"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          Aprender
        </NavLink>
        <NavLink
          to="/roundrobin"
          end
          className={({ isActive }) =>
            isActive
              ? "flex gap-1 font-semibold text-md tracking-tight text-white border-b-2 border-white transition duration-500 ease-in-out hover:border-white"
              : "flex gap-1 font-ligth text-md tracking-tight text-white transition duration-500 ease-in-out hover:border-white"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
          Comenzar
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
