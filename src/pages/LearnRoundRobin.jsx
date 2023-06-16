import React from "react";

const RoundRobinExplanation = () => {
  return (
    <div className="  p-6 rounded-lg">
      <h2 className="text-2xl text-emerald-400 font-bold mb-4">
        Algoritmo Round Robin
      </h2>
      <div className="space-y-4">
        <p>
          El algoritmo Round Robin es un enfoque de planificación de procesos
          utilizado en sistemas operativos. Su objetivo principal es distribuir
          de manera equitativa el tiempo de CPU entre varios procesos en
          ejecución. Es uno de los algoritmos más simples y ampliamente
          utilizados en la planificación de procesos.
        </p>
        <p>
          Imagina que tienes una fila de procesos esperando para ser ejecutados.
          Con el algoritmo Round Robin, cada proceso recibe un pequeño intervalo
          de tiempo llamado "quantum" antes de pasar al siguiente proceso en la
          fila. Una vez que todos los procesos han recibido un quantum, el
          algoritmo regresa al primer proceso y repite el ciclo. Este enfoque
          circular asegura que todos los procesos tengan la oportunidad de
          ejecutarse en un orden predecible y justo.
        </p>
        <p className="text-emerald-400 font-bold">
          Algunos ejemplos de aplicación del algoritmo Round Robin en la vida
          real incluyen:
        </p>
        <ul className="list-disc list-inside">
          <li>Planificación de tareas en un sistema operativo</li>
          <li>
            Compartir recursos en una red, como ancho de banda de red o tiempo
            de CPU en servidores compartidos
          </li>
          <li>Manejo de turnos en una cola de atención al cliente</li>
        </ul>
        <p className="text-emerald-400 font-bold">
          Ventajas del algoritmo Round Robin:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Garantiza un reparto equitativo del tiempo de CPU entre los procesos
          </li>
          <li>Evita que un proceso monopolice el tiempo de CPU</li>
          <li>Proporciona una respuesta rápida en sistemas interactivos</li>
          <li>Es fácil de implementar y entender</li>
        </ul>
        <p className="text-emerald-400 font-bold">
          Desventajas del algoritmo Round Robin:
        </p>
        <ul className="list-disc list-inside">
          <li>
            El tiempo de respuesta puede ser mayor si hay muchos procesos en la
            cola
          </li>
          <li>
            Los cambios de contexto entre procesos pueden afectar el rendimiento
          </li>
          <li>
            Si el quantum es demasiado pequeño, puede haber una sobrecarga en
            los cambios de contexto
          </li>
        </ul>
        <p className="text-emerald-400 font-bold">
          Algunos trucos y consideraciones adicionales sobre el algoritmo Round
          Robin incluyen:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Ajustar el tamaño del quantum puede afectar el rendimiento y el
            tiempo de respuesta
          </li>
          <li>
            La elección de un quantum adecuado depende de factores como la
            naturaleza de los procesos y la carga del sistema
          </li>
          <li>
            En casos donde algunos procesos requieren más tiempo de CPU que
            otros, se pueden asignar diferentes tamaños de quantum para
            equilibrar la carga
          </li>
        </ul>
      </div>
      <button className="bg-emerald-400 mt-5 text-white px-6 py-3 rounded-full hover:bg-emerald-500 transition duration-300 ease-in-out">
        <a
          href="https://drive.google.com/file/d/1CeN8QH_SPwFRp59d_ekoYW7dwZAtrZM7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center">
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Ver video de Round Robin
          </span>
        </a>
      </button>
    </div>
  );
};

export default RoundRobinExplanation;
