import { useAccordianContext } from "./Accordian";
import { useAccordianItemContext } from "./AccordianItem";

export default function AccordianTitle({ className, children }) {
  const { toggleItem } = useAccordianContext();
  const id = useAccordianItemContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
