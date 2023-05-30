import React from "react";
import { TfiClose } from "react-icons/tfi";
import Button from "../buttons/button";
import { useStateContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
import { Collapse } from 'antd';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const { Panel } = Collapse;

const Notification = ({ newUserAlerts, newExpirationOfCarIns, toDayOrders }) => {
  const nav = useNavigate()
  const { currentMode, currentColor, setIsModalOpen, initialModals, user } = useStateContext();


  return (
    <div className={`max-h-[550px]  overflow-scroll  nav-item absolute left-0 md:left-44 top-16 bg-white dark:bg-[#42464D] z-20 p-8 rounded-lg w-96 ${currentMode === 'dark' ? 'dark' : 'light'}`}>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg -translate-x-20" style={{ color: currentColor }}>
            {'התראות שלא טופלו: ' + (newUserAlerts.length + newExpirationOfCarIns.length + toDayOrders.length)}
          </p>
        </div>
        <Button
          classN="-translate-x-7 -translate-y-7  "
          icon={<TfiClose />}
          color={currentColor}
          bgHoverColor="slate-200"
          size="2xl"
          borderRadius="10%"
        />
      </div>
      <div className="mt-5 ">
        <Collapse
          // bordered={false}
          // defaultActiveKey={['1']}
          // expandIcon={({ isActive }) => <AiOutlineArrowUp rotate={isActive ? 90 : 0} />}
          defaultActiveKey={['1']} ghost
        >
          {user.role === 'admin' && <Panel header={<div className="text-gray-500 text-xl dark:text-gray-400">משתמשים חדשים</div>} key="1" >
            {/* <div className='text-gray-900 dark:text-white text-xl'> </div> */}
            {newUserAlerts.length > 0 && newUserAlerts.map((item, i) => (
              <div
                onClick={() => {
                  nav('/users')
                  setIsModalOpen(initialModals)
                }}
                key={i}
                className="flex gap-5 border-b-1 justify-between border-color p-4 px-8 hover:scale-110 hover:bg-slate-200 cursor-pointer delay-75 duration-300 dark:hover:bg-[#69707d] rounded-xl"
              >
                <div>

                  <p className="font-semibold dark:text-gray-200">{item.name}</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    תאריך כניסה למערכת : {item.date_join.substring(0, 10)}{" "}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    מייל : <a className="text-blue-400" href={'mailto:' + item.email}>{item.email}</a>{" "}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    טלפון : <a className="text-blue-400" href={'tel:' + item.phone_number}>{item.phone_number}</a>{" "}
                  </p>
                </div>
              </div>
            ))}
          </Panel>}
          <Panel header={<div className="text-gray-500 text-xl dark:text-gray-400"> הביטוח פוקע בקרוב</div>} key="2" >
            {/* <div className='text-gray-900 dark:text-white text-xl'> הביטוח פוקע בקרוב</div> */}
            {newExpirationOfCarIns.length > 0 && newExpirationOfCarIns.map((item, i) => (
              <div
                onClick={() => {
                  nav('/cars')
                  setIsModalOpen(initialModals)
                }}
                key={i}
                className="flex gap-5 border-b-1 justify-between border-color p-4 px-8 hover:scale-110 hover:bg-slate-200 cursor-pointer delay-75 duration-300 dark:hover:bg-[#69707d] rounded-xl"
              >
                <div>
                  <p className="font-semibold dark:text-gray-200">{item.manufacturer_hb + ' ' + item.model_hb}</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    {item.license_number}{" "}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    סטטוס : {item.status}{" "}
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {" "}
                    פקיעת ביטוח : {item.exp_ins.substring(0, 10)}{" "}
                  </p>
                </div>
              </div>
            ))}
          </Panel>
          <Panel header={<div className="text-gray-500 text-xl dark:text-gray-400"> הזמנות להיום</div>} key="3" >
            {/* <div className='text-gray-900 dark:text-white text-xl'>הזמנות להיום</div> */}
            {toDayOrders.length > 0 && toDayOrders.map((item, i) => (
              <div
                onClick={() => {
                  nav('/orders')
                  setIsModalOpen(initialModals)
                }}
                key={i}
                className="flex gap-5 border-b-1 justify-between border-color p-4 px-8 hover:scale-110 hover:bg-slate-200 cursor-pointer delay-75 duration-300 dark:hover:bg-[#69707d] rounded-xl"
              >
                <div>
                  <p className="flex gap-2 font-semibold dark:text-gray-200">שם : <span>{item.tenant_name.name}</span></p>
                  <p className="flex gap-2 font-semibold dark:text-gray-200">תז : <span>{item.tenant_name.identity}</span></p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    מייל : <a className="text-blue-400" href={"mailto:" + item.tenant_name.email}>{item.tenant_name.email}</a>
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    טלפון : <a className="text-blue-400" href={"tel:" + item.tenant_name.phone_number}>{item.tenant_name.phone_number}</a>
                  </p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    קטגוריה : {item.category}
                  </p>

                  {/* <p className="text-gray-500 text-sm dark:text-gray-400">
              
             רכב : {item.car_obj.manufacturer_hb + '  ' + item.car_obj.model_hb}
            </p> */}

                </div>
              </div>
            ))}
          </Panel>
        </Collapse>
      </div >
    </div >
  );
};

export default Notification;