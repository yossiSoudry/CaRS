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
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const App = (props) => {
  const { openSidebar, currentMode } = useStateContext();

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex dark:bg-main-dark-bg relative">
          {openSidebar ? (
            <div
              className="w-72 fixed dark:bg-secondary-dark-bg bg-white"
              style={{ transition: "0.3s" }}
            >
              <Sidebar />
            </div>
          ) : (
            <div
              className="w-0 md:w-16 fixed dark:bg-secondary-dark-bg bg-white"
              style={{ transition: "0.3s" }}
            >
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              openSidebar ? "md:mr-72" : "md:mr-16 flex-2"
            }`}
            style={{ transition: "0.3s" }}
          >
            <HideOnScroll {...props}>
              <header className="fixed md:static bg-white dark:bg-main-dark-bg navbar h-16 w-full">
                <Navbar className=" " />
              </header>
            </HideOnScroll>
            <main className="mt-20">
              <AppRoutes />
            </main>
          </div>
          <div className="fixed left-6 bottom-0">
            <OpenIconSpeedDial />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
