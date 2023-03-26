import React, { useEffect, useState } from 'react'
import AppRoutes from './appRoutes';
import Sidebar from './sidebar/sidebar';
import Navbar from './header/navbar';
import OpenIconSpeedDial from './buttons/plus';
import { useStateContext } from '../contexts/contextProvider';
import { API_KEY, URL_WORKER_INFO } from '../data/constants';
import Login from './pages/loginAndSignUp/login';
import { apiGet } from './sevices/servises';


export default function Routers() {
  const { openSidebar, currentMode ,setUser} = useStateContext();

  
  const [login, setLogin] = useState(false);

  useEffect(() => {
    checkIfUserConnect();
  }, [])


  const checkIfUserConnect = async () => {
    try {
      let token = localStorage[API_KEY];
      if (token) {
        let resp = await apiGet(URL_WORKER_INFO);
        setUser(resp);
        console.log(resp);
        setLogin(true);
      }
      else setLogin(false);
    } catch (error) {
      alert("יש להתחבר מחדש")
    }

  }


  return (
    <div className={currentMode === "dark" ? "dark" : "light"}>
      {!login ? <Login /> :
        <div className="flex">
          {openSidebar ? (
            <div
              className="w-64 fixed shadow-sm bg-white dark:bg-secondary z-50 delay-50 duration-500"
            >
              <Sidebar />
            </div>
          ) : (
            <div
              className="w-0 md:w-16 fixed shadow-sm bg-white dark:bg-secondary delay-50 duration-500"
            >
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-dark bg-slate-100 min-h-screen w-full delay-50 duration-500 ${openSidebar ? "md:mr-64" : "md:mr-16 flex-2"
              }`}
          >
            {/* <HideOnScroll {...props}> */}
            <div className="fixed md:static bg-slate-100 dark:bg-dark z-50 navbar h-20 w-full">
              <Navbar className=" " />
            </div>
            {/* </HideOnScroll> */}
            <div className="mt-20 md:mt-0 m-2 md:m-5 p-2 md:p-4 md:px-10 shadow-sm bg-white rounded-3xl dark:bg-secondary dark:text-gray-200">
              <AppRoutes />
            </div>
          </div>
          <div className="fixed z-20 left-6 bottom-0">
            <OpenIconSpeedDial />
          </div>
        </div>}
    </div>
  )
}