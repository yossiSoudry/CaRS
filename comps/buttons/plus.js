import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
// import { Padding } from "@mui/icons-material";
import { RiFullscreenExitFill } from "react-icons/ri";
import { useStateContext } from "../../contexts/contextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";


export default function OpenIconSpeedDial() {
  const actions = [
    { icon: <FileCopyIcon />, name: "הזמנה" },
    { icon: <SaveIcon />, name: "מסמך" },
    { icon: <PrintIcon />, name: "הדפסה" },
    { icon: <RiFullscreenExitFill />, name: "מסך מלא", onClick: toggleFullscreen },
  ];
  const { currentColor } = useStateContext();
  const [fullScreen, setFullScreen] = useState(false);
  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
  }
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(20px)",
      }}
    > <TooltipComponent content="צור" position="RightBottom">
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{  }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        FabProps={{
          sx: {
            bgcolor: currentColor,
            '&:hover': {
              bgcolor: currentColor,
            }
          }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
      </TooltipComponent>
      {/* <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        
        icon={<AddCircleSharpIcon sx={{ backgroundColor: 'none' }} style={{ borderRadius: '50%', fontSize: 68, color: currentColor}} openIcon={<EditIcon />} />}
        
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial> */}
    </Box>
  );
}
