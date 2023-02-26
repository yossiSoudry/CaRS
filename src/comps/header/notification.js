import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

import Button from "../buttons/button";
import { chatData } from "../../data/myData";
import { useStateContext } from "../../contexts/contextProvider";

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute left-0 md:left-44 top-16 bg-white dark:bg-[#42464D] z-20 p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg -translate-x-20" style={{ color: currentColor }}>
            4 התראות שלא טופלו
          </p>
          {/* <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme ">חדשות</button> */}
        </div>
        <Button
          classN="-translate-x-7 -translate-y-7"
          icon={<TfiClose />}
          color={currentColor}
          bgHoverColor="slate-200"
          size="2xl"
          borderRadius="10%"
        />
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 justify-between border-color p-4 px-8 hover:scale-110 hover:bg-slate-200 cursor-pointer delay-75 duration-300 dark:hover:bg-[#69707d] rounded-xl"
          >
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
            <img
              className="rounded-full h-10 w-10 hover:scale-125 delay-50 duration-500"
              src={item.image}
              alt={item.message}
            />
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="הצג את כל ההתראות"
            borderRadius="10px"
            width="full"
            classN='transition ease-in-out delay-75 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300'
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
