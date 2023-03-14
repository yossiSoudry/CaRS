import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import { useStateContext } from "../../contexts/contextProvider";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { Padding } from "@mui/icons-material";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const actions = [
  { icon: <FileCopyIcon />, name: "הזמנה" },
  { icon: <SaveIcon />, name: "מסמך" },
  { icon: <PrintIcon />, name: "הדפסה" },
  { icon: <ShareIcon />, name: "שיתוף" },
];

export default function OpenIconSpeedDial() {
  const { currentColor } = useStateContext();
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(20px)",
      }}
    > <TooltipComponent content="צור" position="RightBottom">
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
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
