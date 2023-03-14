import * as React from "react";
// import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStateContext } from "../contexts/contextProvider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { themeColors } from "../data/myData";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#000",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function Settings() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const [alignment, setAlignment] = React.useState("left");

  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };
  const {
    setColor,
    setMode,
    //  currentMode,
    currentColor,
    currentMode,
    //  setCurrentLanguage
  } = useStateContext();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary dark:text-gray-200">
      <Box sx={{}} className="" style={{ zIndex: 0 }}>
        {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
          {/* <Tabs
            value={value}
            onChange={handleChange}
            // aria-label="basic tabs example"
            // textColor={currentColor}
            indicatorColor="secondary"
            // style={{ color: currentColor}}
          >
            <Tab label="תצוגה" {...a11yProps(0)} />
            <Tab label="מערכת" {...a11yProps(1)} />
            <Tab label="העדפות" {...a11yProps(2)} /> */}
          {/* </Tabs>
        </Box>
        <TabPanel className="flex mt-4" value={value} index={0}>
          <div className="p-0">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>ערכות נושא</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> */}
                  <div className="p-4 border-t-1 border-color ml-4">
                    <p className="font-semibold text-xl text-center mb-8">
                      כהה / בהיר
                    </p>
                    <div className="flex gap-3 justify-center">
                      <FormControlLabel
                        control={
                          // currentMode === "light" ? (
                            <MaterialUISwitch
                              // sx={{ m: 1 }}

                              defaultChecked={currentMode === "dark" ? true : false}
                              onChange={setMode}
                              value={currentMode === "light" ? "dark" : "light"}
                            />
                          // ) : (
                          //   <MaterialUISwitch
                          //     // sx={{ m: 1 }}

                          //     defaultChecked
                          //     onChange={setMode}
                          //     value={currentMode === "light" ? "dark" : "light"}
                          //   />
                          // )
                        }

                        // label="בהיר / כהה"
                      />
                    </div>
                  </div>

                  <div className="p-4 border-t-1 border-color ml-4">
                    <p className="font-semibold text-xl text-center mb-8">
                      ערכת צבעים
                    </p>
                    <div className="sm:flex gap-2 justify-center">
                      {themeColors.map((item, index) => (
                        <div
                          className="mt-2 cursor-pointer flex gap-5 items-center"
                          key={item.name}
                        >
                          <button
                            type="button"
                            className="h-10 w-10 rounded cursor-pointer"
                            style={{ backgroundColor: item.color }}
                            onClick={() => setColor(item.color)}
                          >
                            <BsCheck
                              className={`mr-2 text-2xl text-white ${
                                item.color === currentColor ? "block" : "hidden"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                {/* </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>שפות</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Disabled Accordion</Typography>
              </AccordionSummary>
            </Accordion>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
      </Box>
    </div>
  );
}
