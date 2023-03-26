// import { useState } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { useStateContext } from "../../contexts/contextProvider";

const DoButton = ({
  size,
  customFunc,
  icon,
  dotColor,
  bgColor,
  color,
  borderRadius,
  text,
  classN,
  position,
  width,
  tooltip
}) => {
  // const { currentColor } = useStateContext();
  return (
    <TooltipComponent content={tooltip} position={position || "BottomCenter"} >
      <button
        type="button"
        onClick={customFunc}
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={` text-${size} w-${width} relative text-center shadow-md gap-4 cursor-pointer p-2 rounded-lg ${classN}`}
      >
        <span
          style={{ background: dotColor }}
          className="absolute animate-ping rounded-full flex h-2 w-2 left-2 top-2"
        />
        {icon} {text}
      </button>
    </TooltipComponent>
  );
};

export default DoButton;
