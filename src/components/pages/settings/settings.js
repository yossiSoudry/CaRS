import * as React from "react";
import Box from "@mui/material/Box";
import { useStateContext } from "../../../contexts/contextProvider";
import { themeColors } from "../../../data/myData";
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

export default function Settings() {
  const {
    currentColor,
    setCurrentColor,
    setCurrentMode,
    currentMode,
  } = useStateContext();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.themeMode = e.target.value;
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.colorMode = color;
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary dark:text-gray-200">
      <Box sx={{}} className="" style={{ zIndex: 0 }}>
                  <div className="p-4 border-t-1 border-stone-200 dark:border-stone-500 ml-4">
                    <p className="font-semibold text-xl text-center mb-8">
                      כהה / בהיר
                    </p>
                    <div className="flex gap-3 justify-center">
                      <FormControlLabel
                        control={
                            <MaterialUISwitch
                              checked={currentMode === "dark" ? true : false}
                              onChange={setMode}
                              value={currentMode === ("dark"|| undefined) ? "light" : "dark"}
                            />
                        }
                      />
                    </div>
                  </div>

                  <div className="p-4 border-t-1 border-stone-200 dark:border-stone-500 ml-4">
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
                            className={`h-10 w-10 hover:ring-2 hover:ring-slate-500 rounded cursor-pointer ${
                              item.color === currentColor ? "ring-2 ring-slate-500" : ""
                            }`}
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
      </Box>
    </div>
  );
}
