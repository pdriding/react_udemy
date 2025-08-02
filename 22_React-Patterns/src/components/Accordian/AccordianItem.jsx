import { createContext, useContext } from "react";

const AccordItemContext = createContext();

export function useAccordianItemContext() {
  const ctx = useContext(AccordItemContext);

  if (!ctx) {
    return new Error("Accord related items must be wrapped in Accordian.Item");
  }
  return ctx;
}

export default function AccordianItem({ id, className, children }) {
  return (
    <AccordItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordItemContext.Provider>
  );
}
