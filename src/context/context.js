// context.js
import { createContext, useState } from 'react';

const GlobalContext = createContext(null);

function GlobalContextProvider({ children }) {
  const [page, setPage] = useState(1); // Page Number, init at first page
  const [selectedColor, setSelectedColor] = useState(null); // Color Object
  const [search, setSearch] = useState(''); // Empty String
  const [colorsIncluded, setColorsIncluded] = useState(100);


  const value = {
    page, setPage,
    selectedColor, setSelectedColor,
    search, setSearch,
    colorsIncluded, setColorsIncluded
  }

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export { GlobalContextProvider };
export default GlobalContext;