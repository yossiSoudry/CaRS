import React, { createContext, useContext, useState, useEffect } from "react";
import { createTheme } from '@mui/material/styles';

const StateContext = createContext();

const initialModals = {
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // Holds and sets the current screen size.
  const [screenSize, setScreenSize] = useState(undefined);
  // Holds and sets the current color.
  const [currentColor, setCurrentColor] = useState(localStorage.colorMode || '#727cf5');
  // Holds and sets the current mode - dark ol light.
  const [currentMode, setCurrentMode] = useState(localStorage.themeMode);
  // Holds and sets the current language.
  const [currentLanguage, setCurrentLanguage] = useState("Hebrew");
  // Holds and sets the sidebar Status - open or close.
  const [openSidebar, setOpenSidebar] = useState(true);
  // Holds and sets the modals status, open or close.
  const [isModalOpen, setIsModalOpen] = useState(initialModals);

  const [user, setUser] = useState(null);
  // Handle the click on a close button of the modals
  const handleCloseModal = (clicked) => setIsModalOpen({ ...initialModals, [clicked]: true });

  
  // Gets the event of resizing the screen width and handle it.
  useEffect(() => {
    // פונקציית שאילתא המעדכנת את סקרינסייז בהתאם לרוחב המסך הנוכחי
    const updateSize = () => setScreenSize(window.innerWidth);
    // האזנה לאירוע שינוי רוחב המסך וקריאה לשאילתא
    window.addEventListener("resize", updateSize);
    // (did mount)קריאה לפונקציית השאילתא בעת אתחול
    updateSize();
    // מבטל האזנה לאירוע בעת סגירת הקומפוננטה
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
  
  // provides and sets the current mode for MUI
  const theme = createTheme();
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    theme.palette.mode = e.target.value;
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };


  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        openSidebar,
        screenSize,
        setScreenSize,
        handleCloseModal,
        isModalOpen,
        initialModals,
        setIsModalOpen,
        setOpenSidebar,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        currentLanguage,
        setCurrentLanguage,
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
