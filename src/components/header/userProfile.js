import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { MdLogout } from "react-icons/md";
import DoButton from '../buttons/doButton';
import Button from '../buttons/button';
import { userProfileData } from '../../data/myData';
import { useStateContext } from "../../contexts/contextProvider";
import elazar from "../../data/images/try/elazar.png";
import Modal from 'antd/es/modal/Modal';

const UserProfile = () => {
  const { currentColor, user, currentMode } = useStateContext();
  const [profileModal, setProfileModal] = useState(false)
  const [modalInfo, setModalInfo] = useState([])

  return (
    <div className="nav-item absolute left-0 sm:left-8 mx-4 top-16 bg-white dark:bg-[#42464D] p-8 z-20 rounded-lg sm:w-96 shadow-xl" style={{}}>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg -translate-x-36" style={{ color: currentColor }}>פרופיל</p>
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
          <p className="font-semibold text-xl dark:text-gray-200">{user.name}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> {user.company_role} </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {user.phone_number} </p>
        </div>
        <img
          className="rounded-full h-24 w-24 hover:scale-110 delay-50 duration-500"
          src={elazar}
          alt="user-profile"
        />
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div onClick={() => { setProfileModal(true); setModalInfo([userProfileData[index].onClick, index]) }} key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-slate-200 hover:scale-110 cursor-pointer delay-75 duration-300 dark:hover:bg-[#69707d] rounded-xl">
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
      <div className="mt-5 flex justify-center">
        <DoButton
          color="white"
          bgColor={currentColor}
          title="התנתקות"
          borderRadius="10px"
          // width="full"
          size="xl"
          icon={<MdLogout />}
          classN='transition ease-in-out delay-75 bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300'
          customFunc={() => {
            localStorage.token = ''
            window.location.reload()
          }
          }
        />
      </div>
      <Modal
        centered
        open={profileModal}
        onOk={() => setProfileModal(false)}
        onCancel={() => setProfileModal(false)}
        width={400}
        footer={null}
        className={currentMode === 'dark' ? 'dark ' : 'light '}
      // style={{border:'20px'}}
      >
        <div className='p-10 bg-white dark:bg-neutral-700 text-gray-900 dark:text-white rounded-md '>
          {modalInfo[0] === 'user' && <div className={`text-center font-bold text-xl text-[var(--current-color)]`}>פרטי משתמש</div>}
          {modalInfo[0] === 'user' && userProfileData[0].dataToRender.map((item, i) => (
            <div key={i} className='flex mb-2 border-b-1 border-color p-4 hover:bg-slate-200 dark:hover:bg-[#69707d] hover:scale-110 duration-300 rounded-xl text-md'>
              <span className='float-right ml-4 font-semibold scale-110'>{userProfileData[modalInfo[1]].textToRender[i] + ': '}</span>
              <span className='float-left'>{item === 'date_join'?user[item].substring(0,10):user[item]}</span>
            </div>))}
        </div>
      </Modal>
    </div>

  );
};

export default UserProfile;