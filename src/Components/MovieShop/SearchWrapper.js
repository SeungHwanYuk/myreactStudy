import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const SearchContext = createContext();

export function SearchWrapper() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ inputValue, setInputValue }}>
        <Outlet />
      </SearchContext.Provider>
    </>
  );
}
