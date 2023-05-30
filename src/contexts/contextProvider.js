import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const initialModals = {
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // Responsive
  const [displayLines, setDisplayLines] = useState(true);
  // Design
  const [lineSpacing, setLineSpacing] = useState(
    Number(localStorage.lineSpacing) || 2
  );
  const [refreshMission, setRefreshMission] = useState(false);
  const [missionData, setMissionData] = useState([]);
  const [stickyRight, setStickyRight] = useState(
    Number(localStorage.stickyRight) || 1
  );
  const [stickyLeft, setStickyLeft] = useState(
    Number(localStorage.stickyLeft) || 1
  );
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Holds and sets the current color.
  const [currentColor, setCurrentColor] = useState(
    localStorage.colorMode || "#727cf5"
  );
  // Holds and sets the current mode - dark ol light.
  const [currentMode, setCurrentMode] = useState(
    localStorage.themeMode || "dark"
  );
  // Holds and sets the current language.
  const [currentLanguage, setCurrentLanguage] = useState("Hebrew");
  // Holds and sets the sidebar Status - open or close.
  const [openSidebar, setOpenSidebar] = useState(true);
  // Holds and sets the modals status, open or close.
  const [isModalOpen, setIsModalOpen] = useState(initialModals);
  // Handle the user details.
  const [user, setUser] = useState(null);
  // Handle the click on a close button of the modals
  const handleCloseModal = (clicked) =>
    setIsModalOpen({ ...initialModals, [clicked]: true });
  // Holds and sets the current screen size.
  const [screenSize, setScreenSize] = useState(undefined);
  // פונקציית שאילתא המעדכנת את סקרינסייז בהתאם לרוחב המסך הנוכחי
  const updateSize = () => setScreenSize(window.innerWidth);

  const [refreshAlerts, setRefreshAlerts] = useState(false);

  useEffect(() => {
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

  return (
    <StateContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        openSidebar,
        setOpenSidebar,
        screenSize,
        setScreenSize,
        handleCloseModal,
        isModalOpen,
        setIsModalOpen,
        initialModals,
        setOpenSidebar,
        currentLanguage,
        setCurrentLanguage,
        user,
        setUser,
        isLoading,
        setIsLoading,
        refresh,
        setRefresh,
        lineSpacing,
        setLineSpacing,
        stickyRight,
        setStickyRight,
        stickyLeft,
        setStickyLeft,
        displayLines,
        setDisplayLines,
        refreshAlerts,
        setRefreshAlerts,
        missionData,
        setMissionData,
        refreshMission,
        setRefreshMission,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
