import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MovieContext = createContext();

export function MovieWrapper() {
  const [category, setCategory] = useState(0);
  return (
    <>
      <MovieContext.Provider value={{ category, setCategory }}>
        <Outlet />
      </MovieContext.Provider>
    </>
  );
}
