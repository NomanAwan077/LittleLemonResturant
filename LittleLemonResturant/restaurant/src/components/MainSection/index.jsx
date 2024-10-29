import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const Main = ({ children }) => {
  const [data, setData] = useState({
    time: "",
    date: "",
    numOfGuests: "",
    Occasion: "",
  });

  return (
    <FormDataContext.Provider value={{ data, setData }}>
      {children}
    </FormDataContext.Provider>
  );
};
