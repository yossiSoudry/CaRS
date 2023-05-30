import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { apiGet } from "../../../services/services";
import { URL_DRIVERS } from "../../../data/constants";
import { useStateContext } from "../../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { BsPlusCircle } from "react-icons/bs";
import DoButton from "../../buttons/doButton";

export const DriversSimpleTable = ({ setOpen, item, row, index }) => {
  const nav = useNavigate();
  const { currentColor, currentMode } = useStateContext();
  const [driversData, setDriversData] = useState({});
  const [search, setSearch] = useState("");
  const getData = async () => {
    const data = await apiGet(URL_DRIVERS + "?limit=100000&s=" + search);
    setDriversData(data);
  };
  useEffect(() => {
    getData();
  }, [row]);

  const titles = ["שם", "מספר זיהוי", "טלפון", "מייל"];
  const rows = ["name", "identity", "phone_number", "email"];
  return (
    <div className={currentMode === "dark" ? "dark" : "light"}>
      <div className="flex items-center justify-between pr-4 py-2 bg-white dark:bg-slate-800">
        <DoButton
          title="הוסף נהג"
          color={currentColor}
          size="4xl"
          customFunc={() => {
            nav("/cars");
          }}
          icon={<BsPlusCircle />}
          classN=""
        />
        <div className="flex items-center ">
          <input
            className="peer w-60 p-4 rounded-lg dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-red-500 pl-16"
            type="search"
            placeholder="חיפוש נהגים..."
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            onKeyDown={()=>getData()}
          />
          <DoButton
            title="חפש"
            color={currentColor}
            size="4xl"
            customFunc={() => {
              getData();
            }}
            icon={<AiOutlineSearch />}
            classN="relative left-[55px]"
          />
        </div>
      </div>
      <div className="overflow-scroll">
        {driversData.length > 0 ? (
          <table className="w-full text-center text-sm  text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr className="h-10">
                {titles.map((title, i) => (
                  <th key={i}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {driversData.map((driver, i) => {
                return (
                  <tr
                    onClick={() => {
                      row[item][index] = driver;
                      setOpen(false);
                    }}
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    {rows.map((row, j) => (
                      <td key={j} className="px-6 py-4">
                        {driver[row]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className=" w-full bg-white dark:bg-secondary">
            <div className=" bg-inherit absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
              <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
