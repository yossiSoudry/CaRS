import { BsChatLeft } from "react-icons/bs";

import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import elazar from "../../data/images/try/elazar.png";
import UserProfile from "./userProfile";
import Notification from "./notification";
import Chat from "./chat";
import { BsFullscreen } from "react-icons/bs";
import { useStateContext } from "../../contexts/contextProvider";
import Notification2 from "./notification2";

// Component creator the buttons fof the navbar
const NavButton = ({ title, customFunc, icon, dotColor }) => {
  const { currentColor } = useStateContext();
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color: currentColor }}
        className="relative text-2xl flex items-center shadow-sm gap-4 cursor-pointer p-2 bg-white dark:bg-secondary-dark-bg hover:bg-slate-200 dark:hover:bg-slate-300 rounded-lg"
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

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  return (
    <div>
      <div className="flex justify-between gap-4">
        {screenSize >= 768 && (
          <NavButton
            title="מסך מלא"
            customFunc={toggleFullscreen}
            icon={<BsFullscreen />}
          />
        )}

        {/* <NavButton
          title="צ'אט"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
        /> */}

        <NavButton
          title="התראות"
          dotColor="#fd0061"
          customFunc={() => handleClick("notification")}
          icon={<Notification2 />}
        />

        <TooltipComponent content="משתמש" position="BottomCenter">
          <div
            className="flex items-center gap-4 shadow-sm cursor-pointer p-1 bg-white dark:hover:bg-slate-300 dark:bg-secondary-dark-bg hover:bg-slate-200 rounded-lg"
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
        {/* {isClicked.chat && <Chat />} */}
        {/* {isClicked.notification && <Notification2 />} */}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavButtons;
