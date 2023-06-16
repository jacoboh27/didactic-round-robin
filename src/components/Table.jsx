import React, { useContext, useEffect, useState } from "react";
import { ProcessContext } from "../context/ProcessContext";
import { TrashIcon } from '@heroicons/react/24/solid';

const Table = ({ deleteProcess }) => {
  const [NcpuEsLength, setNcpuEsLength] = useState(0);
  const { processes } = useContext(ProcessContext);
  const [ProcessesFiltered, setProcessesFiltered] = useState(processes);

  useEffect(() => {
    try {
      const processWithLongestNcpuEs = processes.reduce((previous, current) => {
        return current.es.length > previous.es.length
          ? current
          : previous;
      });

      const arrayFromNcpuEsLength = Array.from(
        { length: processWithLongestNcpuEs.es.length },
        (_, index) => index + 1
      );
      setNcpuEsLength(arrayFromNcpuEsLength);
      setProcessesFiltered(processes);
    } catch (error) {
      console.error(error);
    }
  }, [processes]);

  function handleChange(e) {
    const { value } = e.target;
    const filtered = processes.filter((process) => {
      return process.name.toLowerCase().includes(value.toLowerCase());
    });
    setProcessesFiltered(filtered);
  }

  return (
    <>
      <div className="relative text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Buscar"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col my-4 max-w-full">
        <div className="-my-2 overflow-x-auto max-h-96 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
                    >
                      Proceso
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
                    >
                      NCPU en Quantum
                    </th>
                    {NcpuEsLength.length > 0 &&
                      NcpuEsLength?.map((objeto, index) => (
                        <>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
                          >
                            Gasta en E/S {index + 1}
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
                          >    
                            NCPU en Quantum {index + 1}
                          </th>
                        </>
                      ))}
                    <th scope="col" className="relative">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ProcessesFiltered &&
                    ProcessesFiltered.map((process, index) => (
                      <tr key={index + "arrivaltime"}>
                        <td className="px-1 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">
                                {process.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                Tiempo de llegada: {" "}
                                <span className="font-bold">
                                  {process.arrivalTime} ms
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-1 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">
                                {process.ncpu} Q
                              </div>
                            </div>
                          </div>
                        </td>

                        {NcpuEsLength.length > 0 &&
                          NcpuEsLength?.map((objeto, index) => (
                            <>
                              {process.es[index]?.ncpu ? (
                                <>
                                  <td
                                    key={index + "es"}
                                    className="px-6 py-4 whitespace-nowrap"
                                  >
                                    <div className="text-sm text-gray-900">
                                      {process.es[index].cost_es} Q
                                    </div>
                                  </td>
                                  <td
                                    key={index + "ncpu"}
                                    className="px-6 py-4 whitespace-nowrap"
                                  >
                                    <div className="text-sm text-gray-900">
                                      {process.es[index].ncpu} Q
                                    </div>
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    -
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    -
                                  </td>
                                </>
                              )}
                            </>
                          ))}
                        <td className="px-6 py-4">
                          <button
                            onClick={() => deleteProcess(process.id)}
                            className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-white bg-emerald-500 p-3 rounded hover:focus:outline-none hover:bg-emerald-600 transition-colors duration-300"
                          >
                            <TrashIcon className='h-6 w-6 cursor-pointer' />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
