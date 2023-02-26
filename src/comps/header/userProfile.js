import React from 'react';
import { TfiClose } from 'react-icons/tfi';


import Button from '../buttons/button';
import { userProfileData } from '../../data/myData';
import { useStateContext } from "../../contexts/contextProvider";
import elazar from "../../data/images/try/elazar.png";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute left-0 sm:left-8  top-16 bg-white dark:bg-[#42464D] p-8 z-20 rounded-lg w-full sm:w-96 shadow-xl" style={{}}>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg -translate-x-36"  style={{color: currentColor}}>פרופיל</p>
        <Button
          classN='-translate-x-7 -translate-y-7'
          icon={<TfiClose />}
          color={currentColor}
          bgHoverColor='slate-200'
          size="2xl"
          borderRadius="10%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color justify-between border-b-1 px-7 pb-4">
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> אלעזר בן חיים </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  מנכ''ל  </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> elazar@admin.com </p>
        </div>
        <img
          className="rounded-full h-24 w-24 hover:scale-110 delay-50 duration-500"
          src={elazar}
          alt="user-profile"
        />
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-slate-200 hover:scale-110 cursor-pointer delay-75 duration-300 dark:hover:bg-[#69707d] rounded-xl">
            <button
              type="button"
              style={{ color: currentColor }}
              className=" text-xl rounded-lg p-3 hover:scale-125 hover:translate-x-1 delay-75 duration-300"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          classN='transition ease-in-out delay-75 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300'
        />
      </div>
    </div>

  );
};

export default UserProfile;