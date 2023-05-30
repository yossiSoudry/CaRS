/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { apiGet } from "../../../services/services";
import { URL_CARS } from "../../../data/constants";
import { useStateContext } from "../../../contexts/contextProvider";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { BsPlusCircle } from "react-icons/bs";
import DoButton from "../../buttons/doButton";

export const CarsSimpleTable = ({ setOpen, item, row }) => {
  const nav = useNavigate();
  const { currentMode, currentColor } = useStateContext();
  const [carsData, setCarsData] = useState({});
  const [search, setSearch] = useState("");
  const getData = async () => {
    const data = await apiGet(
      `${URL_CARS}?limit=100000&s=${
        search !== "" ? search : row.category + "&search=class"
      }`
    );
    setCarsData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const titles = ["יצרן", "דגם", "מספר רישוי", "שנה", "צבע", "קטגוריה"];
  const rows = [
    "manufacturer_hb",
    "model_hb",
    "license_number",
    "year",
    "color",
    "class",
  ];
  return (
    <div className={currentMode === "dark" ? "dark" : "light"}>
      <div className="flex items-center justify-between pr-4 py-2 bg-white dark:bg-slate-800">
        <DoButton
          title="הוסף רכב"
          color={currentColor}
          size="4xl"
          customFunc={() => {
            nav("/cars");
          }}
          icon={<BsPlusCircle />}
          classN=""
        />
        {/* <div>
          <label>קטגוריה</label>
          <select>
            <option>A</option>
            <option>A</option>
            <option>A</option>
            <option>A</option>
          </select>
        </div> */}
        <div className="flex items-center ">
          <input
            className="peer w-60 p-4 rounded-lg dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-red-500"
            type="text"
            placeholder="חיפוש נהגים..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={() => getData()}
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
        {carsData.length > 0 && (
          <table className="w-full text-center text-sm  text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr className="h-10">
                {titles.map((title, i) => (
                  <th key={i}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {carsData.map((car, i) => {
                return (
                  <Fragment key={i}>
                    {car.status === "פנוי" &&
                      car.class.includes(row.category) && (
                        <tr
                          onClick={() => {
                            row[item] = car;
                            setOpen(false);
                          }}
                          key={i}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          {rows.map((row, j) => (
                            <td key={j} className="px-6 py-4">
                              {car[row]}
                            </td>
                          ))}
                        </tr>
                      )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
