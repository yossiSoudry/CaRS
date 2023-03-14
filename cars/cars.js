import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useStateContext } from "../../contexts/contextProvider";
import { carsRow, carsColumn } from "../../data/myData";
import Button from "../../comps/buttons/button";
import { RiPlayListAddLine } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Link } from "react-router-dom";

export default function DataGridCars() {
  const currentMode = localStorage.getItem("themeMode");

  const theme = createTheme({
    palette: {
      mode: currentMode === "dark" ? "dark" : "light",
    },
  });

  const { currentColor, openSidebar, screenSize } = useStateContext();



  return (
    <div className="delay-50 duration-500">
      <div className="flex delay-50 duration-500">
        <TooltipComponent content="הוספת רכב" position="TopCenter">
          <Link to={"./addCar"}>
          <Button
            color="white"
            bgColor={currentColor}
            borderRadius="10px"
            margin="-2"
            size="2xl"
            icon={<RiPlayListAddLine />}
          />
          </Link>
        </TooltipComponent>
        <Button
          color="white"
          bgColor={currentColor}
          // text="הוספת רכב"
          borderRadius="10px"
          margin="-2"
          size="2xl"
          icon={<RiPlayListAddLine />}
        />
      </div>
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "81vh", width: "100%", position: "" }}>
          <DataGrid
            rows={carsRow}
            columns={carsColumn}
            pageSize={10}
            rowHeight={60}
            checkboxSelection
            // !!!לא ברור מה זה עושה - אבל אין למחוק
            experimentalFeatures={{ newEditingApi: true }}
            // style
            sx={{ padding: "20px 8px 8px 8px", borderRadius: "20px"}}
            // toolbar
            components={{
              Toolbar: GridToolbar,
            }}
            className={openSidebar ? screenSize < 768 ? '-z-10' : 'z-10' : 'z-10'}
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
