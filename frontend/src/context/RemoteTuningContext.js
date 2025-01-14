import { createContext, useState, useEffect } from "react";

const RemoteTuningContext = createContext();

export default RemoteTuningContext;

export function RemoteTuningContextProvider({ children }) {
  const [remoteTuningOption, setRemoteTuningOption] = useState("honda");
  const context = {
    remoteTuningOption,
    setRemoteTuningOption,
  };

  useEffect(() => {}, [remoteTuningOption]);

  return (
    <RemoteTuningContext.Provider value={context}>
      {children}
    </RemoteTuningContext.Provider>
  );
}
