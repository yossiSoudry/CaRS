import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
  addCar:false,
};

export const ContextProvider = ({ children }) => {
  // Holds the current screen size.
  const [screenSize, setScreenSize] = useState(undefined);
  // Holds the current color.
  const [currentColor, setCurrentColor] = useState(localStorage.colorMode);
  // Holds the current mode - dark ol light.
  const [currentMode, setCurrentMode] = useState(localStorage.themeMode);

  const [currentLanguage, setCurrentLanguage] = useState("Hebrew");
  // Holds the sidebar Status - open or close.
  const [openSidebar, setOpenSidebar] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);

  const theme = createTheme();

  // Gets the event of resizing the screen width and handle it.
  useEffect(() => {
    // פונקציית שאילתא המעדכנת את סקרינסייז בהתאם לרוחב המסך הנוכחי
    const updateSize = () => setScreenSize(window.innerWidth);
    // האזנה לאירוע שינוי רוחב המסך וקריאה לשאילתא
    window.addEventListener("resize", updateSize);
    // (did mount)קריאה לפונקציית השאילתא בעת אתחול
    updateSize();
    // מבטל האזנה לאירוע
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Sets the menu state according to the screen width.
  useEffect(() => {
    if (screenSize <= 1080) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [screenSize]);
  

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    theme.palette.mode = e.target.value;
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        openSidebar,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setOpenSidebar,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        currentLanguage,
        setCurrentLanguage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
