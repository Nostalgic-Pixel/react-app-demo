import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// Notify the interface that the like button has been clicked on.
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  // Variables for filled or not filled status for like button.
  const [status, setStatus] = useState(false);

  // Toggle function to avoid repetition for the onClick.
  const toggle = () => {
    // Whatever the setStatus is, return the inverted value.
    setStatus(!status);

    // Notify the consumer of this component.
    onClick();
  };

  // if the status is true...
  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;

  // Otherwise...
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
