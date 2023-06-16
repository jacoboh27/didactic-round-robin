import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Results = ({processes, quantumValue, exchangeTimeValue}) => {

  const [runProcesses, setRunProcesses] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeArray, setTimeArray] = useState([]);
  const [pok, setPok] = useState([]);

  let ArrayPrev = [];
  let timeForArray = 0;
  let time = 0;

  async function continueExecution() {
    // console.log("processes:", processes);
    // console.log("timeElapsed", timeElapsed);
    processes.forEach((process, index) => {
      if ( !process.added && process.arrivalTime <= timeElapsed ) {
        processes[index].added = true;
        const ArrayProv = runProcesses;
        ArrayProv.push({name: process.name, ncpu: process.ncpu, startTime: time, child: false});
        setRunProcesses(ArrayProv);
        if (process.ncpu == 1) {
          findTimeOk(process.name);
        }
        time = time + quantumValue + exchangeTimeValue;
        setTimeElapsed(timeElapsed + quantumValue + exchangeTimeValue);
        //console.log("ArrayProv:", ArrayProv);
      }
    });
    runProcesses?.forEach((process, index) => {
      if (!process.child && process.ncpu > 1) {
        const ArrayProv = runProcesses;
        ArrayProv[index].child = true;
        ArrayProv.push({name: process.name, ncpu: process.ncpu-1, startTime: time, child: false});
        setRunProcesses(ArrayProv);
        if (process.ncpu == 2) {
          findTimeOk(process.name);
        }
        time = time + quantumValue + exchangeTimeValue;
        setTimeElapsed(timeElapsed + quantumValue + exchangeTimeValue);
      }
    }); 
    ArrayPrev = await calcTime();
    setTimeArray(ArrayPrev);
  }

  function calcTime () {
    const ArrayPrev = [];
    for (let i = 0; i < runProcesses.length; i++) {
      timeForArray = timeForArray +  quantumValue + exchangeTimeValue;
      ArrayPrev.push(timeForArray);
    }
    return ArrayPrev;
  }

  function findTimeOk(process) {
    const timeOk = timeArray[timeArray.length-1] + quantumValue + exchangeTimeValue;
    setPok([...pok, {nameProcess: process, timeOK: timeOk}]);
    console.log("processes.length", processes.length);
    console.log("pok.length", pok.length);
  }

  return (
    <div className="flex flex-col items-center">

      {(runProcesses.length <= 0) && (
        <h2 className="text-emerald-400 font-bold text-4xl center py-6 pb-2 text-center">Da click en el botón Siguiente para iniciar la ejecución.</h2>
      )}

      <div className="w-full items-center mt-8 border bg-white border-black rounded-lg px-4 pb-6 shadow-md">
        <h3 className="text-emerald-400 font-bold text-4xl center p-4 text-center">Cola de procesos en ejecución</h3>
        <div className="flex" >
          {runProcesses.map((process, index) => (
            <h2 className="border border-black py-4 px-3" key={index}>{process.name}<sup>{process.ncpu}</sup></h2>
          ))}
        </div>
      </div>

      <div className="w-full items-center mt-8 border bg-white border-black rounded-lg px-4 pb-6 shadow-md">
        <h3 className="text-emerald-400 font-bold text-4xl center p-4 pb-8 text-center">Diagrama de Gantt</h3>
        <div className="flex">
          <span className="relative text-xs">ms<sup className="absolute">0</sup></span>
          <div className="flex">       
            {runProcesses.map((process, index) => (
              //<h2 key={index}>{process.name}<sup>{process.startTime}</sup> | / |<sup>{process.startTime + exchangeTimeValue}</sup></h2>
              <div className="flex">
                <h2 className="border border-slate-800 py-5 px-4" key={index}>
                  {process.name}
                </h2>
                <p className="relative border border-slate-800 py-5 px-3.5 bg-slate-800">
                  <sup className="absolute right-[-6px] ">{timeArray[index]}</sup>
                  <sup className="absolute left-[-8px]">{timeArray[index] - exchangeTimeValue}</sup>
                </p>
              </div>

            ))}
          </div>
        </div>
      </div>

      <div className="w-full items-center mt-8 border bg-white border-black rounded-lg px-4 pb-6 shadow-md">
        <h3 className="text-emerald-400 font-bold text-3xl center pt-4 text-center">P.OK</h3>
        <h4 className="text-black text-sm center pb-4 text-center">(Tiempo de salida sin intercambio)</h4>
        <div className="flex items-center" >
          {pok.length <= 0 && (
            <h4 className="text-black text-xl center pb-4 text-center">No ha terminado ningun proceso.</h4>
          )}
          {pok.map((process, index) => (
            <h2 className="border border-black py-4 px-3" key={index}>{process.nameProcess}: {process.timeOK}</h2>
          ))}
        </div>
      </div>

      <button
          type="button"
          className="mt-8 bg-emerald-400 text-white font-bold hover:bg-emerald-600 py-3 px-6 rounded"
          onClick={() => continueExecution()}
        >
          {pok.length == processes.length && (
            <p>Finalizado</p>
          )}
          {pok.length != processes.length && (
            <p>Siguiente</p>
          )}
      </button>
    </div>
  );
};

export default Results;
