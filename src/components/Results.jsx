import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Results = ({processes, quantumValue, exchangeTimeValue}) => {
  //console.log("processes:", processes);
  // console.log("quantumValue:", quantumValue);
  // console.log("exchangeTimeValue:", exchangeTimeValue);

  const [runProcesses, setRunProcesses] = useState([]);
  const [diagramaGantt, setDiagramaGantt] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeArray, setTimeArray] = useState([]);

  let ArrayPrev = [];
  let timeForArray = 0;
  let time = 0;

  async function continueExecution() {
    runProcesses?.forEach((process, index) => {
      if (!process.child && process.ncpu > 1) {
        time = time + quantumValue + exchangeTimeValue;
        //console.log("time:", time);
        const ArrayProv = runProcesses;
        ArrayProv[index].child = true;
        ArrayProv.push({name: process.name, ncpu: process.ncpu-1, startTime: time, child: false});
        setRunProcesses(ArrayProv);
        //console.log("time:", time);
        setTimeElapsed(timeElapsed + quantumValue + exchangeTimeValue);
      }
    }); 
    processes.forEach((process, index) => {
      if ( !process.added && process.arrivalTime <= timeElapsed ) {
        time = time + quantumValue + exchangeTimeValue;
        //console.log("time:", time);
        processes[index].added = true;
        const ArrayProv = [...runProcesses];
        ArrayProv.push({name: process.name, ncpu: process.ncpu, startTime: time, child: false});
        setRunProcesses(ArrayProv);
        //console.log("time:", time);
        setTimeElapsed(timeElapsed + quantumValue + exchangeTimeValue);
      }
    });
    //console.log("runProcesses:", runProcesses);

    //calcTime();
    ArrayPrev = await calcTime();
    setTimeArray(ArrayPrev);
    //console.log("ArrayPrev", ArrayPrev);
  }

  function calcTime () {
    const ArrayPrev = [];
    for (let i = 0; i < runProcesses.length; i++) {
      timeForArray = timeForArray +  quantumValue + exchangeTimeValue;
      ArrayPrev.push(timeForArray);
    }
    return ArrayPrev;
  }

  return (
    <div>
      <h3 className="font-bold pt-6">Cola de procesos en ejecución</h3>
      <div className="flex gap-4" >
        {runProcesses.map((process, index) => (
          <h2 key={index}>{process.name}<sup>{process.ncpu}</sup></h2>
        ))}
      </div>
      
      <h3 className="font-bold pt-6">Diagrama de Gantt</h3>
      <div className="flex">
        <span><sup>0 </sup></span>
        <div className="flex gap-1">       
          {runProcesses.map((process, index) => (
            //<h2 key={index}>{process.name}<sup>{process.startTime}</sup> | / |<sup>{process.startTime + exchangeTimeValue}</sup></h2>
            <h2 key={index}>{process.name}<sup>{timeArray[index] - exchangeTimeValue}</sup> | / |<sup>{timeArray[index]}</sup></h2>
          ))}
        </div>
      </div>

      <button
          type="button"
          className="mt-6 bg-emerald-400 text-white font-bold hover:bg-emerald-600 py-2 px-4 rounded"
          onClick={() => continueExecution()}
        >
          Continuar Ejecucion
        </button>
    </div>
  );
};

export default Results;
