import "./app.css";
import AppRoutes from "./comps/appRoutes";
import Sidebar from "./comps/sidebar/sidebar";
import Navbar from "./comps/header/navbar";
import OpenIconSpeedDial from "./comps/buttons/plus";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "./contexts/contextProvider";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// Hide the navbar while scrolling.
// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

const App = (props) => {
  const { openSidebar, currentMode } = useStateContext();

  return (
    <div className={currentMode === "dark" ? "dark" : "light"}>
      <BrowserRouter>
        <div className="flex dark:bg-main-dark-bg  relative">
          {openSidebar ? (
            <div
              className="w-64 fixed shadow-sm bg-white dark:bg-secondary-dark-bg delay-50 duration-500"
              // style={{ transition: "0.25s" }}
            >
              <Sidebar />
            </div>
          ) : (
            <div
              className="w-0 md:w-16 fixed shadow-sm bg-white dark:bg-secondary-dark-bg delay-50 duration-500"
              // style={{ transition: "0.25s" }}
            >
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-slate-100 min-h-screen w-full delay-50 duration-500 ${
              openSidebar ? "md:mr-64" : "md:mr-16 flex-2"
            }`}
            // style={{ transition: "0.25s" }}
          >
            {/* <HideOnScroll {...props}> */}
              <div className="fixed md:static bg-slate-100 dark:bg-main-dark-bg navbar h-20 w-full">
                <Navbar className=" " />
              </div>
            {/* </HideOnScroll> */}
            <div className="mt-20 md:mt-0 m-2 md:m-5 p-2 md:p-10 shadow-sm bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-200">
              <AppRoutes />
            </div>
          </div>
          <div className="fixed z-20 left-6 bottom-0">
            <OpenIconSpeedDial />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
