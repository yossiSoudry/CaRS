import React, { createContext, useContext, useState } from "react";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // Holds the current screen size.
  const [screenSize, setScreenSize] = useState(undefined);
  // Holds the current color.
  const [currentColor, setCurrentColor] = useState(localStorage.colorMode);
  // Holds the current mode - dark ol light.
  const [currentMode, setCurrentMode] = useState(localStorage.themeMode);

  const [currentLanguage, setCurrentLanguage] = useState("Heblew");
  // Holds the sidebar Status - open or close.
  const [openSidebar, setOpenSidebar] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);

  const theme = createTheme();

  const setMode = (e) => {
    // console.log(e.target.value);
    setCurrentMode(e.target.value);
    theme.palette.mode = e.target.value;
    localStorage.setItem("themeMode", e.target.value);
    // localStorage.setItem("theme.palette.mode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

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
