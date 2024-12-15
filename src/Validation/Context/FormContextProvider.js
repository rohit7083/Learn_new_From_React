import React, { createContext, useState } from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [form1Data, setForm1Data] = useState(null);
  const [form2Data, setForm2Data] = useState(null);

  return (
    <FormContext.Provider value={{ form1Data, setForm1Data, form2Data, setForm2Data }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
