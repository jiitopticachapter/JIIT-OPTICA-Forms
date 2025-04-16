import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formStatus, setFormStatus] = useState(true);
  const [loader, setLoader] = useState(false);

  return (
    <FormContext.Provider
      value={{
        formStatus,
        setFormStatus,
        loader,
        setLoader,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
