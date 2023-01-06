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
  const { data: deliveryData, isLoading: deliveryDataLoading } = useQuery(
    ["seller-create"],
    () => myAxios.get("seller-create")
  );

  if (addressLoading || footerLoading || deliveryDataLoading) {
    return <></>;
  }

  return (
    <StateContext.Provider value={{ addressData, footerData, deliveryData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
