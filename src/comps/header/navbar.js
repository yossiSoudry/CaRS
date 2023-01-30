import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import elazar from "../../data/elazar.png";
import { Chat, Notification, UserProfile } from "..";
import { useStateContext } from "../../contexts/contextProvider";
import { BsFullscreen } from "react-icons/bs";

// Component creator the buttons fof the navbar
const NavButton = ({ title, customFunc, icon, dotColor }) => {
  const { currentColor } = useStateContext();
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color: currentColor }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 left-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  // useStateContexts.
  const {
    openSidebar,
    setOpenSidebar,
    handleClick,
    isClicked,
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

  // const [screen, setScreen] = useState(second)
  // Open the full screen state
  function toggleFullscreen() {
    if (document.fullscreenElement) { 
      document.exitFullscreen() 
    } else { 
      document.documentElement.requestFullscreen() 
    } 
  }

  // Toggle the navbar state (for the burger button).
  const handleOpenSidebar = () => setOpenSidebar(!openSidebar);

  return (
    // The navbar UI
    <div className="flex md:justify-end sm:justify-between p-2 md:ml-6 md:mr-6">
      {/* The burger icon */}
      {screenSize <= 768 && (
        <button
          style={{ color: currentColor }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
          onClick={handleOpenSidebar}
        >
          <AiOutlineMenu />
        </button>
      )}

      {/* The buttons area */}
      <div className="flex justify-between">
        {/* The fuul screen button */}
        {screenSize >= 768 && (
          <NavButton
            title="מסך מלא"
            customFunc={toggleFullscreen}
            icon={<BsFullscreen />}
          />
        )}

        {/* The chat button */}
        <NavButton
          title="צ'אט"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
        />

        {/* The notifications button */}
        <NavButton
          title="התראות"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
        />

        {/* The user profile area */}
        <TooltipComponent content="משתמש" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
            <p>
              <span className="text-gray-400 font-bold ml-1 text-14">
                אלעזר
              </span>
            </p>
            <img
              className="rounded-full w-8 h-8"
              src={elazar}
              alt="user-profile"
            />
          </div>
        </TooltipComponent>

        {/* Acrives the requested area according to the button pressed */}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
      {/* End of buttons area */}

      {/* Placeholder */}
      <div className="xl:w-1/4 md:w-1/3"></div>
    </div>
    // End navbar UI
  );
};

export default Navbar;
