/******************************************************************************
 * Button File:
 * This file was created for Exercise 13 on how to create a "button component."
 *
 *****************************************************************************/
// import React from "react";

// Making the text of the button label dynamic.
interface Props {
  children: string;

  // Makes the button have one of these color values.
  color?:
    | "primary" // blue
    | "secondary" // gray
    | "success" // green
    | "danger" // red
    | "warning" // yellow
    | "info" // light blue
    | "light" // white
    | "dark" // black
    | "link"; // blue text with underline

  // Makes the button reusable.
  onClick: () => void;
}

// Create the button function and define some classes by also
// including the children parameter and destructure it.
const Button = ({ children, onClick, color }: Props) => {
  return (
    // onClick is a function that is passed from the outside so that the parent of the
    // component is going to pass that function
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
