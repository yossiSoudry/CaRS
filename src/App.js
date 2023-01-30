// import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, currentLanguage } from "./comps";
import {
  ECommerce,
  Orders,
  Calendar,
  Cars,
  Customers,
  Kanban,
  Editor,
  Permissions,
  Settings,
} from "./pages";
import "./app.css";
import { useStateContext } from "./contexts/contextProvider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import OpenIconSpeedDial from "./comps/buttons/plus";

// import { useAutoAnimate } from '@formkit/auto-animate/react'
// import Dropdown from "./dropdown";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
  const { openSidebar, currentColor, currentMode } = useStateContext();
  // const [animationParent] = useAutoAnimate()

  return (
    <div className={currentMode === 'dark' ? 'dark' : ''}>
    <BrowserRouter>
      {/*------------------------ Body ---------------------------*/}
      <div className="flex dark:bg-main-dark-bg relative">
        {/*-------- Sidebar ---------*/}
        {openSidebar ? (
          <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white" style={{transition: "0.3s"}}>
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 md:w-16 fixed dark:bg-secondary-dark-bg bg-white" style={{transition: "0.3s"}}>
            <Sidebar />
          </div>
        )}
        {/*-------- End sidebar ------- */}

        {/*--------------------------------- Page ------------------------------------*/}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            openSidebar ? "md:mr-72" : "md:mr-16 flex-2"
          }`}
          style={{transition: "0.3s"}}
        >
          {/*------ Navbar ------*/}
          <HideOnScroll {...props}>
            <header className="fixed md:static bg-white dark:bg-main-dark-bg navbar h-16 w-full">
              <Navbar className=" " />
            </header>
          </HideOnScroll>
          {/*----- End navbar -----*/}

          {/*--------- Main ----------*/}
          <main className="mt-20">
            {/* <Dropdown /> */}
            <Routes>
              <Route path="/" element={<ECommerce />} />
              <Route path="/ecommerce" element={<ECommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/kanvan" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/permissions" element={<Permissions />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          {/*-------- End main --------*/}
        </div>
        {/*--------------------- End page -------------------------*/}

        {/*------ Settings ------*/}
        <div className="fixed left-6 bottom-0">
         <OpenIconSpeedDial />
          {/* <TooltipComponent content="הגדרות" position="Top">
            <button
              type="button"
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent> */}
        </div>
        {/*------- End settings ------*/}
      </div>
      {/*--------------------------------- End body ---------------------------------*/}
    </BrowserRouter>
    </div>
  );
};

export default App;
