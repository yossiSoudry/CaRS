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

  // Different classes for the link manu depending on its state.
  const active =
    "flex item-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 index";
  const unActive =
    "flex item-center gap-5 pr-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto sidebar">
      {
        <>
          {/*----- Logo -----*/}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick=""
              className="items-center gap-3 mx-auto mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 w-1/3"
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
                className="text-xl rounded-full md:p-3 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray md:mt-4 block md-hidden"
                style={{ transition: "0.3s" }}
              >
                <MdOutlineNavigateNext />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setOpenSidebar(!openSidebar)}
                className="text-xl rounded-full md:p-3 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray md:mt-4 block md-hidden md:ml-2"
                // style={{transition: "0.3s"}}
              >
                <MdOutlineNavigateBefore />
              </button>
            )}
          </div>
          {/*-------- End logo -------*/}

          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title} item={item}>
                  {openSidebar && (
                    <p className="text-gray-400 m-3 mt-4">{item.title}</p>
                  )}
                  {item.links.map((link) => {
                    return (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        link={link}
                        onClick={closeSideBar}
                        style={({ isActive }) => ({
                          zIndex: "999999",
                          backgroundColor: isActive ? currentColor : "",
                        })}
                        className={({ isActive }) =>
                          isActive ? active : unActive
                        }
                      >
                        {link.icon}
                        {openSidebar && (
                          <span className="" style={{}}>
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
        </>
      }
    </div>
  );
};

export default Sidebar;
