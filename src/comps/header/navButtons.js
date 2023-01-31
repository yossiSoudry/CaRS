import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import elazar from "../../data/images/try/elazar.png";
import UserProfile from "./userProfile";
import Notification from "./notification";
import Chat from "./chat";
import { BsFullscreen } from "react-icons/bs";
import { useStateContext } from "../../contexts/contextProvider";

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

const NavButtons = () => {
  const { handleClick, isClicked, screenSize } = useStateContext();

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  return (
    <div>
      <div className="flex justify-between">
        {screenSize >= 768 && (
          <NavButton
            title="מסך מלא"
            customFunc={toggleFullscreen}
            icon={<BsFullscreen />}
          />
        )}

        <NavButton
          title="צ'אט"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
        />

        <NavButton
          title="התראות"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
        />

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

        {/* Actives the requested area according to the button pressed */}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavButtons;
