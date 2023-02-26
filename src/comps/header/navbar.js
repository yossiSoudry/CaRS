import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../../contexts/contextProvider";
import NavButtons from "./navButtons";

const Navbar = () => {
  const {
    openSidebar,
    setOpenSidebar,
    setScreenSize,
    screenSize,
    currentColor,
  } = useStateContext();

  // Gets the event of resizing the screen screen width and handle it.
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sets the menu state according to the screen width.
  useEffect(() => {
    if (screenSize <= 1080) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [screenSize]);

  // Toggle the navbar state (for the burger button).
  const handleOpenSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div className="flex md:justify-end mt-3 sm:justify-between p-2 md:ml-6 md:mr-6">
      {/* The burger icon */}
      {screenSize <= 768 && (
        <button
          style={{ color: currentColor }}
          className="relative text-2xl flex items-center shadow-sm gap-4 cursor-pointer p-2 bg-white dark:bg-secondary-dark-bg hover:bg-slate-200 dark:hover:bg-slate-300 rounded-lg ml-4"
          onClick={handleOpenSidebar}
        >
          <AiOutlineMenu />
        </button>
      )}

      {/* The buttons area */}
      <NavButtons />
      {/* End of buttons area */}

      {/* Placeholder */}
      {/* <div className="xl:w-1/4 md:w-1/3"></div> */}
    </div>
  );
};

export default Navbar;
