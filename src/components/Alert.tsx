// rafce SHORTCUT to create a stub for a file.
// (React Arrowfunction Component Export)

// To help pass HTML content
import { ReactNode } from "react";

// Interface to define the shape of props.
interface Props {
  children: ReactNode;

  // For the x buton to close the alert.
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
