import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useStateContext } from "../../../contexts/contextProvider";
import { carsColumn } from "../../../data/myData";
import { RiPlayListAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DoButton from "../../buttons/doButton";
import { apiGet } from "../../sevices/servises";
import { URL_CARS } from "../../../data/constants"
import { useState } from "react";
import { useEffect } from "react";


export default function DataGridCars() {
  const currentMode = localStorage.getItem("themeMode");
  useEffect(() => {
    carData()
  }, [])

  const [carsData, setCarsData] = useState([]);


  const carData = async () => {
    const carsRow = await apiGet(URL_CARS)
    // console.log(carsRow);
    carsRow.map((item) => {
      item.id = item._id;
      item.manufacturer_hb = item.manufacturer_hb.substring(0,item.manufacturer_hb.indexOf(' '))
      item.last_treatment = item.last_treatment.substring(0,10)
      item.exp_ins = item.exp_ins.substring(0,10)
    })
    setCarsData(carsRow)
  }

  const theme = createTheme({
    palette: {
      mode: currentMode === "dark" ? "dark" : "light",
    },
  });

  const { currentColor, openSidebar, screenSize } = useStateContext();

  return (
    <div className="delay-50 duration-500">
      <div className="flex delay-50 duration-500">
        <Link to={"./addCarForm"}>
          <DoButton
            color={currentColor}
            tooltip="הוספת רכב"
            size="2xl"
            icon={<RiPlayListAddLine />}
            classN="mb-2"
          />
        </Link>
      </div>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "81vh", width: "100%", position: "" }}>
          <DataGrid
            rows={carsData}
            columns={carsColumn}
            // pageSize={12}
            rowHeight={60}
            checkboxSelection
            // !!!לא ברור מה זה עושה - אבל אין למחוק
            experimentalFeatures={{ newEditingApi: true }}
            // style
            sx={{ padding: "20px 8px 8px 8px", borderRadius: "20px" }}
            // toolbar
            components={{
              Toolbar: GridToolbar,
            }}
            className={
              openSidebar ? (screenSize < 768 ? "-z-10" : "z-10") : "z-10"
            }
            componentsProps={{
              toolbar: {
                // handle the style of toolbar buttons
                sx: {
                  "& .MuiButtonBase-root": {
                    color: currentColor,
                    fontSize: 0,
                    margin: 0,
                    padding: 0,
                  },
                },
                // display the quick filter
                showQuickFilter: true,
                // reaction time of searching in quick filter
                quickFilterProps: { debounceMs: 1 },
              },
              panel: {
                // handle the color of toolbar properties
                sx: {
                  "& .MuiInputBase-input, & .MuiFormLabel-root, & .MuiButtonBase-root, & .MuiButtonBase-root::after":
                    {
                      color: currentColor,
                      fontSize: 16,
                      border: currentColor,
                    },
                },
              },
            }}
          />
        </Box>
      </ThemeProvider>
    </div>
  );
}
