import { useState } from "react";

const Results = ({processes, quantumValue, exchangeTimeValue}) => {
  console.log("processes:", processes);
  console.log("quantumValue:", quantumValue);
  console.log("exchangeTimeValue:", exchangeTimeValue);

  const [runProcesses, setRunProcesses] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);

  function continueExecution() {

    processes.forEach(process => {
      if (process.arrivalTime <= timeElapsed) {
        const ArrayProv = runProcesses;
        ArrayProv.push({name: process.name, ncpu: process.ncpu});
        setRunProcesses(ArrayProv);
      }
    });
    console.log("runProcesses:", runProcesses);
  }


  return (
    <div>
      <h3 className="font-bold pt-6">Cola de procesos en ejecución</h3>
      <div className="flex gap-4" >
        {runProcesses.map((process, index) => (
          <h2 key={index}>{process.name}-{process.ncpu}</h2>
        ))}
      </div>

      <h3 className="font-bold pt-6">Diagrama de Gantt</h3>

      <button
          type="button"
          className="bg-emerald-400 text-white font-bold hover:bg-emerald-600 py-2 px-4 rounded"
          onClick={() => continueExecution()}
        >
          Continuar Ejecucion
        </button>
    </div>
  );
};

export default Results;
