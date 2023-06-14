import { useContext, useState } from "react";
import Table from "./Table";
import FormAddProcess from "./FormAddProcess";
import { toast } from "react-toastify";
import { ProcessContext } from "../context/ProcessContext";
import { Link } from "react-router-dom";
const Contain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { processes, setProcesses } = useContext(ProcessContext);
  const { quantumValue, setQuantumValue } = useContext(ProcessContext);
  const { exchangeTimeValue, setExchangeTimeValue } = useContext(ProcessContext);

  const deleteProcess = (id) => {
    toast.success("Se ha eliminado correctamente el proceso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const newProcesses = processes.filter((process) => process.id !== id);
    setProcesses(newProcesses);
  };

  const onQuantumValueChange = (event) => {
    setQuantumValue(Number(event.target.value));
  };

  const onExchangeTimeValueChange = (event) => {
    setExchangeTimeValue(Number(event.target.value));
  };

  return (
    <div className="mt-5 py-11 px-48">
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-emerald-400 text-white font-bold hover:bg-emerald-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Agregar proceso
        </button>
      </div>

      <div className="flex gap-10">
        <div className="mb-4">
          <label
            htmlFor="quantum-value"
            className="block text-gray-700 font-bold mb-2"
          >
            Tamaño Quantum (ms)
          </label>
          <input
            type="number"
            name="quantumValue"
            id="quantum-value"
            className="shadow appearance-none border border-emerald-500 rounded w-full py-2 px-3 text-emerald-500 leading-tight focus:outline-none focus:shadow-outline"
            value={quantumValue}
            onChange={onQuantumValueChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantum-value"
            className="block text-gray-700 font-bold mb-2"
          >
            Tamaño Tiempo de Intercambio (ms)
          </label>
          <input
            type="number"
            name="quantumValue"
            id="quantum-value"
            className="shadow appearance-none border border-emerald-500 rounded w-full py-2 px-3 text-emerald-500 leading-tight focus:outline-none focus:shadow-outline"
            value={exchangeTimeValue}
            onChange={onExchangeTimeValueChange}
            required
          />
        </div>
      </div>

      {(processes.length && <Table deleteProcess={deleteProcess} />) || null}
      <FormAddProcess
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      

      {(processes.length && (
        <div className="flex justify-center">
          <Link
            to="/results"
            className="bg-emerald-500 text-white font-bold hover:bg-emerald-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Ejecutar Round Robin
          </Link>
        </div>
      )) ||
        null}
    </div>
  );
};

export default Contain;
