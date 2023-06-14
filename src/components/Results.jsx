import React from "react";

const Results = ({processes, quantumValue, exchangeTimeValue}) => {
  console.log("processes:", processes);
  console.log("quantumValue:", quantumValue);
  console.log("exchangeTimeValue:", exchangeTimeValue);


  return (
    <div>
      <h3 className="font-bold pt-6">Cola de procesos en ejecución</h3>
      

      <h3 className="font-bold pt-6">Diagrama de Gantt</h3>

      <button
          type="button"
          className="bg-emerald-400 text-white font-bold hover:bg-emerald-600 py-2 px-4 rounded"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Continuar Ejecucion
        </button>
    </div>
  );
};

export default Results;
