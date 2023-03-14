import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdCar } from "react-icons/io";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { FcAutomotive } from "react-icons/fc";
import { links } from "../../data/myData";
import { useStateContext } from "../../contexts/contextProvider.js";

const Sidebar = () => {
  const { openSidebar, currentColor, setOpenSidebar, screenSize } =
    useStateContext();

  // Close the sidebar once the user clicked on a link menu.
  const closeSideBar = () => {
    if (screenSize <= 768) {
      setOpenSidebar(false);
    }
  };

  // Different classes for the link menu depending on its state.
  const active =
    "flex item-center gap-5 rounded-xl text-white text-md m-2 p-3 px-3 py-3.5 hover:scale-110 delay-50 duration-500";
  const unActive =
    "flex item-center gap-5 p-3 px-3 py-3.5 rounded-xl text-md text-gray-700 hover:scale-110 delay-50 duration-500 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray dark:hover:bg-slate-400 m-2";

  return (
    <div
      className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto sidebar"
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick=""
          className="items-center gap-3 mx-auto mt-4 flex text-xl hover:scale-125 delay-75 duration-500 font-extrabold tracking-tight dark:text-white text-slate-900 w-1/3"
        >
          {openSidebar && <FcAutomotive />}
          {openSidebar && (
            <span style={{ color: "#f44336" }}>
              C<span style={{ color: "#546e7a" }}>a</span>RS
            </span>
          )}
        </Link>

        {/*--- Arrow before || next ---*/}
        {openSidebar ? (
          <button
            type="button"
            onClick={() => setOpenSidebar(!openSidebar)}
            className="text-xl rounded-full md:p-3 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray dark:hover:bg-slate-400 md:mt-4 block md-hidden delay-50 duration-300 "
          >
            <MdOutlineNavigateNext />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setOpenSidebar(!openSidebar)}
            className="text-xl rounded-full md:p-3 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray dark:hover:bg-slate-400 md:mt-4 block md-hidden md:ml-2 delay-50 duration-300"
          >
            <MdOutlineNavigateBefore />
          </button>
        )}
      </div>

      <div className="mt-10">
        {links.map((item) => {
          return (
            <div key={item.title} item={item}>
              {openSidebar && (
                <p
                  className="text-gray-400 m-3 mt-4 duration-300"
                >
                  {item.title}
                </p>
              )}
              {item.links.map((link) => {
                return (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={closeSideBar}
                    style={({ isActive }) => ({
                      zIndex: "999999",
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) => (isActive ? active : unActive)}
                  >
                    <span
                      className={
                        openSidebar
                          ? "pt-1 delay-150 duration-500"
                          : "pr-1 delay-150 duration-500"
                      }
                    >
                      {link.icon}
                    </span>

                    {openSidebar && (
                      <span
                        className="duration-200"
                      >
                        {link.hebrew}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
