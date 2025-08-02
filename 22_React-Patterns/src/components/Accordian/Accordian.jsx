import { createContext, useContext, useState } from "react";
import AccordianItem from "./AccordianItem";
import AccordianTitle from "./AccordianTitle";
import AccordianContent from "./AccordianContent";

const AccordianContext = createContext();

export function useAccordianContext() {
  const ctx = useContext(AccordianContext);

  if (!ctx) {
    throw new Error(
      "Accordian related elements muse be wrapped by accordian Provider."
    );
  }
  return ctx;
}

export default function Accordian({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordianContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordianContext.Provider>
  );
}

Accordian.Item = AccordianItem;
Accordian.Title = AccordianTitle;
Accordian.Content = AccordianContent;
