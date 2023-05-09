import { useState } from "react";
import UserProfile from "./userProfile";
import Notification from "./notification";
import { useStateContext } from "../../contexts/contextProvider";
import elazar from "../../data/images/try/elazar.png";
import { BsFullscreen } from "react-icons/bs";
import { RiFullscreenExitFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import DoButton from "../buttons/doButton";
import { Tooltip } from "antd";

const NavButtons = () => {
  const { handleCloseModal, isModalOpen, screenSize, currentColor, user } =
    useStateContext();
  const [fullScreen, setFullScreen] = useState(false);

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
  }

  return (
    <div>
      <div className="flex justify-between gap-4">
        {screenSize >= 768 && (
          <DoButton
            title={fullScreen ? "צא ממסך מלא" : "מסך מלא"}
            tooltip={fullScreen ? "צא ממסך מלא" : "מסך מלא"}
            color={currentColor}
            size="2xl"
            classN="bg-white dark:bg-secondary"
            customFunc={toggleFullscreen}
            icon={fullScreen ? <RiFullscreenExitFill /> : <BsFullscreen />}
          />
        )}

        <DoButton
          color={currentColor}
          title="התראות"
          size="2xl"
          dotColor="#fd0061"
          classN="bg-white dark:bg-secondary"
          customFunc={() => handleCloseModal("notification")}
          icon={<MdOutlineNotificationsActive />}
        />

<Tooltip placement='top' title='משתמש'>
          <div
            className="text-lg flex items-center gap-4 shadow-md cursor-pointer p-1 bg-white dark:hover:bg-slate-300 dark:bg-secondary hover:bg-slate-200 rounded-lg"
            onClick={() => handleCloseModal("userProfile")}
            style={{ color: currentColor }}
          >
            <MdKeyboardArrowDown className="" />
            <p>
              <span className=" ml-1">{user.name}</span>
            </p>
            <img
              className="rounded-full w-8 h-8"
              src={elazar}
              alt="user-profile"
            />
          </div>
        </Tooltip>

        {/* Actives the requested area according to the button pressed */}
        {isModalOpen.notification && <Notification />}
        {isModalOpen.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavButtons;
