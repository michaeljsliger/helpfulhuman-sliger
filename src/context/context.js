// context.js
import { createContext, useState } from 'react';

const GlobalContext = createContext(null);

function GlobalContextProvider({ children }) {
  const [page, setPage] = useState(0); // Page Number
  const [selectedColor, setSelectedColor] = useState(null); // Color Object


  const value = {
    page, setPage,
    selectedColor, setSelectedColor,
  }

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export { GlobalContextProvider };
export default GlobalContext;