"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  isUpvoting: boolean;
  setIsUpvoting: (value: boolean) => void;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

const AppContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isUpvoting, setIsUpvoting] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isUpvoting,
        setIsUpvoting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
