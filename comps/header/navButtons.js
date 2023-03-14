import { useState } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import UserProfile from "./userProfile";
import Notification from "./notification";
import Notification2 from "./notification2";
import { useStateContext } from "../../contexts/contextProvider";
import elazar from "../../data/images/try/elazar.png";
import { BsFullscreen } from "react-icons/bs";
import { RiFullscreenExitFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";

// Component creator the buttons fof the navbar
const NavButton = ({ title, customFunc, icon, dotColor }) => {
  const { currentColor } = useStateContext();
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color: currentColor }}
        className="relative text-2xl flex items-center shadow-sm gap-4 cursor-pointer p-2 bg-white dark:bg-secondary hover:bg-slate-200 dark:hover:bg-slate-300 rounded-lg"
      >
        <span
          style={{ background: dotColor }}
          className="absolute animate-ping inline-flex rounded-full h-2 w-2 left-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const NavButtons = () => {
  const { handleClick, isClicked, screenSize, currentColor } = useStateContext();
  const [fullScreen ,setFullScreen] = useState(false)


  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false)
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen(true)
    }
  }


  return (
    <div>
      <div className="flex justify-between gap-4">
        {screenSize >= 768 && (
          <NavButton
            title={fullScreen?"צא ממסך מלא":"מסך מלא"}
            customFunc={toggleFullscreen}
            icon={fullScreen?<RiFullscreenExitFill />:<BsFullscreen />}
          />
        )}

        <NavButton
          title="התראות"
          dotColor="#fd0061"
          customFunc={() => handleClick("notification")}
          icon={<MdOutlineNotificationsActive />}
        />

        <TooltipComponent content="משתמש" position="BottomCenter">
          <div
            className="flex items-center gap-4 shadow-sm cursor-pointer p-1 bg-white dark:hover:bg-slate-300 dark:bg-secondary hover:bg-slate-200 rounded-lg"
            onClick={() => handleClick("userProfile")}
            style={{color: currentColor}}
          >
            <MdKeyboardArrowDown className=" text-14" />
            <p>
              <span className=" font-bold ml-1 text-14">
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

        {/* Actives the requested area according to the button pressed */}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavButtons;
