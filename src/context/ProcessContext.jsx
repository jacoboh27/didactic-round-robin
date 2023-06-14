import { createContext, useState } from "react";

export const ProcessContext = createContext();

const ProcessContextProvider = ({ children }) => {
  const [processes, setProcesses] = useState([]);
  const [quantumValue, setQuantumValue] = useState(10);
  const [exchangeTimeValue, setExchangeTimeValue] = useState(1);

  const data = {
    processes,
    setProcesses,
    quantumValue,
    setQuantumValue,
    exchangeTimeValue,
    setExchangeTimeValue
  };
  return (
    <ProcessContext.Provider value={{ processes, 
                                      setProcesses,
                                      quantumValue,
                                      setQuantumValue,
                                      exchangeTimeValue,
                                      setExchangeTimeValue
                                      }}>
      {children}
    </ProcessContext.Provider>
  );
};

export default ProcessContextProvider;
