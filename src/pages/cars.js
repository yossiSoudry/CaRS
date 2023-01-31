import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useStateContext } from "../contexts/contextProvider";
import Avatar from "@mui/material/Avatar";
import { cars } from "../data/myData";

const columns = [
  { field: "licenseNumber", headerName: "מס' רישוי", width: 120 },
  {
    // field: "photoURL",
    // headerName: "מותג",
    width: 32,
    editable: false,
    renderCell: (params) => 
      <Avatar src={require(`../data/images/cars/${params.row.manufacturer.toLowerCase()}.png`)} sx={{ width: 32, height: 28 }}/>,
  },
  {
    field: "fullName",
    headerName: "דגם יצרן",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.manufacturer || ""} ${params.row.model || ""}`,
  },
  {
    field: "year",
    headerName: "שנתון",
    width: 150,
    editable: false,
  },
];


export default function DataGridDemo() {
  const currentMode = localStorage.getItem("themeMode");

  const theme = createTheme({
    palette: {
      mode: currentMode === "dark" ? "dark" : "light",
    },
  });
  const { currentColor } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-200">
      <ThemeProvider theme={theme}>
        <Box sx={{ height: "72.5vh", width: "100%" }}>
          <DataGrid
            rows={cars}
            columns={columns}
            pageSize={10}
            // rowsPerPageOptions={[2]}
            checkboxSelection
            // disableSelectionOnClick
            // disableColumnFilter
            // disableColumnSelector
            // disableDensitySelector
            // experimentalFeatures={{ newEditingApi: true }}
            // loading={loading}
            components={{
              Toolbar: GridToolbar,
            }}
            componentsProps={{
              checkboxSelection: {
                sx: { backgroundColor: "white" },
              },
              toolbar: {
                sx: {
                  "& .MuiButtonBase-root": {
                    color: currentColor,
                    fontSize: 0,
                    margin: 0,
                    padding: 0,
                  },
                },
                // csvOptions: { disableToolbarButton: true },
                // printOptions: { disableToolbarButton: true },
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 250 },
              },
              panel: {
                sx: {
                  // '& .MuiButtonBase-root': {
                  //   color: currentColor,
                  //   fontSize: 16,
                  // },
                  "& .MuiInputBase-input, & .MuiFormLabel-root, & .MuiButtonBase-root, & .MuiButtonBase-root::after":
                    {
                      color: currentColor,
                      fontSize: 16,
                      border: currentColor,
                    },
                  // '& .MuiFormLabel-root': {
                  //   color: currentColor,
                  //   fontSize: 16,

                  // },
                  "& .MuiTypography-root": {
                    color: "grey",
                    fontSize: 20,
                  },
                },
              },
            }}
            experimentalFeatures={{ newEditingApi: true }}
            sx={{ padding: "20px 8px 8px 8px", borderRadius: "20px" }}
            // className='dark:bg-secondary-dark-bg dark:text-gray-200 dark:selection:text-white'
          />
        </Box>
      </ThemeProvider>
    </div>
  );
}
