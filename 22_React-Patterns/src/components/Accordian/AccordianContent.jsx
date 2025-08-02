import { useAccordianContext } from "./Accordian";
import { useAccordianItemContext } from "./AccordianItem";

export default function AccordianContent({ className, children }) {
  const { openItemId } = useAccordianContext();
  const id = useAccordianItemContext();

  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
