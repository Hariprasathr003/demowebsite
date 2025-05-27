import { createContext, useState } from "react";

export const Search = createContext();

const SearchContext = ({ children }) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <Search.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </Search.Provider>
  );
};

export default SearchContext;
