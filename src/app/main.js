import React, { useEffect, useState } from "react";
import AppRoutes from "./appRoutes";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/header/navbar";
import OpenIconSpeedDial from "../components/buttons/plus";
import { useStateContext } from "../contexts/contextProvider";
import {
  API_KEY,
  URL_MISSIONS_FOR_ME,
  URL_WORKER_INFO,
} from "../data/constants";
import Login from "../components/pages/loginAndSignUp/login";
import { apiGet, loadingMsg } from "../services/services";

export default function Routers() {
  const { openSidebar, currentMode, setUser, setMissionData, refreshMission, user } =
    useStateContext();

  const [login, setLogin] = useState(0);

  useEffect(() => {
    checkIfUserConnect();
  }, []);

  useEffect(() => {
    login === 2 &&  getMissionData(user._id)
  }, [login,refreshMission]);

  const checkIfUserConnect = async () => {
    try {
      loadingMsg("מתחבר... ", "blue", "info");
      let token = localStorage[API_KEY];
      if (token) {
        let resp = await apiGet(URL_WORKER_INFO);
        setUser(resp);
        // // console.log(resp);(resp);
        setLogin(2);
      } else setLogin(1);
    } catch (error) {
      // alert('יש להתחבר מחדש');
      setLogin(1);
    }
  };
  const getMissionData = async (id) => {
    const data = await apiGet(URL_MISSIONS_FOR_ME + id);
    setMissionData(data);
  };

  return (
    <div className={currentMode === "dark" ? "dark" : "light"}>
      {login === 0 && (
        <div className="w-full h-[100vh] bg-white dark:bg-secondary">
          <div className=" bg-inherit absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
            <div
              className={`border-t-transparent border-solid animate-spin border-[var(--current-color)] rounded-full border-8 h-64 w-64`}
            ></div>
          </div>
        </div>
      )}
      {login === 1 && <Login />}
      {login === 2 && (
        <div className="flex">
          {openSidebar ? (
            <div className="w-64 fixed shadow-sm bg-white dark:bg-secondary z-50 delay-50 duration-500">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 md:w-16 fixed shadow-sm bg-white dark:bg-secondary delay-50 duration-500">
              <Sidebar />
            </div>
          )}
          <div
            className={`bg-slate-100 dark:bg-dark bg-slate- min-h-screen w-full delay-50 duration-500 ${
              openSidebar ? "md:pr-64" : "md:pr-16 flex-2"
            }`}
          >
            {/* <HideOnScroll {...props}> */}
            <div className="fixed md:static bg-slate-100 dark:bg-dark z-50 navbar h-20 w-full">
              <Navbar className=" " />
            </div>
            {/* </HideOnScroll> */}
            <div className="mt-20 md:mt-0 m-2 md:m-5 p-2 md:p-4 md:px-10 shadow-sm bg-white rounded-2xl dark:bg-secondary dark:text-gray-200">
              <AppRoutes />
            </div>
          </div>
          <div className="fixed z-20 left-6 bottom-0">
            <OpenIconSpeedDial />
          </div>
        </div>
      )}
    </div>
  );
}
