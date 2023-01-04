import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import myAxios from "../utils/myAxios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { data: addressData, isLoading: addressLoading } = useQuery(
    ["address"],
    () => myAxios.get("address")
  );
  const { data: footerData, isLoading: footerLoading } = useQuery(
    ["footer"],
    () => myAxios.get("footer")
  );

  if (addressLoading || footerLoading) {
    return <>Loading....</>;
  }

  return (
    <StateContext.Provider value={{ addressData, footerData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
