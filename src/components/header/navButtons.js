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
import { addDays, format } from "date-fns";
import {
  URL_WORKERS,
  URL_CARS,
  URL_INTERACTIONS,
} from "../../data/constants";
import { apiGet } from "../../services/services";
import { useEffect } from "react";

const NavButtons = () => {
  const { handleCloseModal, isModalOpen, screenSize, currentColor, user, refreshAlerts } = useStateContext();
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
  const [newUserAlerts, setNewUserAlerts] = useState([]);
  const [newExpirationOfCarIns, setNewExpirationOfCarIns] = useState([]);
  const [toDayOrders, setToDayOrders] = useState([]);
  const [alertNun, setAlertNun] = useState();

  const getNewUserAlerts = async () => {
    const userAlerts = await apiGet(URL_WORKERS + "?search=role&s=pending");
    setNewUserAlerts(userAlerts);
  };

  const getExpirationOfCarInsurances = async () => {
    let d = new Date();
    const amount = 2;
    const newD = addDays(d, amount);
    const newDayFormat = format(newD, "MM-dd-yyyy");
    const expirationOfCarInsurances = await apiGet(
      URL_CARS +
        "?searchDate=exp_ins&searchDateS=1900-01-01&searchDateE=" +
        newDayFormat
    );
    setNewExpirationOfCarIns(expirationOfCarInsurances);
  };

  const getToDayOrders = async () => {
    let d = new Date();
    const amount = 0;
    const newDS = addDays(d, amount);
    const newDE = addDays(d, amount + 1);
    const newDayFormatS = format(newDS, "MM-dd-yyyy");
    const newDayFormatE = format(newDE, "MM-dd-yyyy");
    const orders = await apiGet(
      URL_INTERACTIONS +
        "?searchDate=pick_up_date&searchDateS=" +
        newDayFormatS +
        "&searchDateE=" +
        newDayFormatE
    );
    setToDayOrders(orders);
  };

  useEffect(() => {
    getNewUserAlerts();
    getExpirationOfCarInsurances();
    getToDayOrders();
  }, [refreshAlerts]);
  useEffect(() => {
    setAlertNun(
      newUserAlerts.length + newExpirationOfCarIns.length + toDayOrders.length
    );
  }, [toDayOrders, newExpirationOfCarIns, newUserAlerts]);

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
          alertNum={alertNun}
          classN="bg-white text-white dark:bg-secondary"
          customFunc={() => handleCloseModal("notification")}
          icon={<MdOutlineNotificationsActive />}
        />

        <Tooltip placement="top" title="משתמש">
          <div
            className="text-lg flex select-none items-center gap-4 shadow-md cursor-pointer p-1 bg-white dark:hover:bg-slate-300 dark:bg-secondary hover:bg-slate-200 rounded-lg"
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
        {isModalOpen.notification &&
          <Notification
            newUserAlerts={newUserAlerts}
            newExpirationOfCarIns={newExpirationOfCarIns}
            toDayOrders={toDayOrders} />}
        {isModalOpen.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavButtons;
