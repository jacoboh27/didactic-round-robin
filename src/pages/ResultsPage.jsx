import React, { useContext } from "react";
import Results from "../components/Results";
import { ProcessContext } from "../context/ProcessContext";

const ResultsPage = () => {
  const { processes } = useContext(ProcessContext);
  const { quantumValue} = useContext(ProcessContext);
  const { exchangeTimeValue } = useContext(ProcessContext);

  return (
    <main className="px-8 py-12 flex flex-col items-center bg-zinc-50 h-[100vh]">
      <h1 className="text-emerald-400 font-bold text-4xl center mb-3">Ejecución del programa</h1>
      <p>
        Este es el paso a paso de la ejecución del ejercicio de algoritmo de programación Round Robin
        con los procesos agregados anteriormente.
      </p>
      <Results 
        processes={processes}
        quantumValue={quantumValue}
        exchangeTimeValue={exchangeTimeValue}
      />
    </main>
  );
};

export default ResultsPage;
