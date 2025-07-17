import { useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  // open/close on `open` prop changes
  useEffect(() => {
    if (!dialog.current) return;
    if (open) {
      dialog.current.showModal();
    } else {
      // only closes the native dialog, does NOT call onClose again
      dialog.current.close();
    }
  }, [open]);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // backdrop click only
  const handleClickOutside = useCallback(
    (e) => {
      if (e.target === dialog.current) {
        onClose();
      }
    },
    [onClose]
  );

  if (!open) return null;

  return createPortal(
    <dialog className="modal" ref={dialog} onClick={handleClickOutside}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
