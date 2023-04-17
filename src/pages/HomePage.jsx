import React from "react";
import { Link } from "react-router-dom";
// import learngif from '../assets/images/aprender.gif';
import learning from '../assets/images/learning.png';
import play from '../assets/images/comienzo.png';

const HomePage = () => {
  return (
    <section className="container">
      <div className="my-12">
        <h1 className="text-center text-4xl font-bold text-emerald-400">
            Didactic Round Robin
        </h1>
        <p className="text-center text-sm font-light text-gray-500">
          Con Didactic Round Robin puedes crear y ejecutar ejercicios utilizando el método Round Robin 
          y también aprender todo lo necesario de este método.

        </p>
      </div>

      <div className="grid grid-cols-2 h-screen">

        <div className="grid justify-evenly bg-emerald-950 p-12">
          <h1 className="text-center text-4xl mt-10 font-bold text-white">
            Crea y ejecuta
          </h1>
          <img className="m-auto" src={play} alt="" />
          <p className="text-center text-sm font-light text-white">
            Con Didactic Round Robin puedes ejecutar paso a paso programas de planificación de procesos 
            mediante el método Round Robin con la cantidad de procesos, entradas y salidas que necesites.
          </p>
          <p className="text-center text-sm font-light text-white">
            Da click en "Empezar" para crear un programa con los procesos que necesites.
          </p>

          <div className="flex justify-center mt-5 h-max">
            <Link
              to="/roundrobin"
              className="inline-block px-8 py-3 rounded-lg bg-emerald-400 text-white font-bold 
              hover:bg-emerald-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline 
              transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Comenzar
            </Link>
          </div>
        </div>

        <div className="grid justify-evenly bg-emerald-400 p-12 bg-gradient-to-r from-sky-500 via-teal-500 
        to-emerald-500">
            <h1 className="text-center text-4xl mt-10 font-bold text-white">
              Aprende que es Round Robin y cómo utilizarlo
            </h1>
            <img className="m-auto" src={learning} alt="" />
            <p className="text-center text-sm font-light text-white">
              Aprende acerca de Round Robin y todo lo que necesitas de este método de forma fácil y eficaz.          </p>
          <div className="flex justify-center mt-5 h-max">
            <Link
              to="/about"
              className="inline-block px-8 py-3 rounded-lg bg-emerald-400 text-white font-bold 
              hover:bg-emerald-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline 
              transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Aprender
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage;
