import React from "react";

import { useStateContext } from "../../contexts/contextProvider";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  margin,
  classN,
  onClick
}) => {
  const { setIsModalOpen, initialModals } = useStateContext();
  

  return (
    <button
      type="button"
      onClick={() => {
        setIsModalOpen(initialModals)}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} m${margin} ${classN}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
