import React, { useEffect } from "react";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineUpdate,
} from "react-icons/md";
import { BsFilter, BsSearch } from "react-icons/bs";
import { apiGet } from "../../../services/services";
import { Tooltip } from "antd";
import { useStateTableContext } from "../../../contexts/tableContext";

export default function SearchComp({ keys, keysDate, setData, url,columns, fixData }) {
  const {
    pageNum,
    limitForReq,
    reverse,
    setItems,
    highPageNum,
    setHighPageNum,
    sortBy,
    
  } = useStateTableContext();
  // Search
  const [generalSearch, setGeneralSearch] = useState("");
  const [searchBy, setSearchBy] = useState("");
  // Search by dates
  const [byDate, setByDate] = useState("");
  const [gt, setGt] = useState("");
  const [lt, setLt] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [openSearchByDate, setOpenSearchByDate] = useState(false);

  const search = async (e) => {
    let newData = await apiGet(
      `${url}?${generalSearch !== "" ? "s=" + generalSearch : ""}${
        byDate !== "" ? "&searchDate=" + byDate : ""
      }${byDate !== "" ? "&searchDateS=" + gt : ""}${
        byDate !== "" ? "&searchDateE=" + lt : ""
      }${limitForReq !== 0 ? "&limit=" + limitForReq : ""}${
        pageNum !== 0 ? "&page=" + pageNum : ""
      }${sortBy !== "" ? "&sort=" + sortBy : ""}${reverse ? "&reverse=yes" : ""}
      ${searchBy !== "" ? "&search=" + searchBy : ""}
      `
    );
    // Corrects the data
    newData = fixData(newData);
    // for pagination
    if (newData.length < limitForReq && pageNum < highPageNum) {
      setItems(newData.length);
      setHighPageNum(Math.ceil(newData.length / limitForReq));
    }
    setData(newData);
    // e.target.value = "";
  };

  // Build select options for sorting
  function processInput(name) {
    for (let i = 0; i < keys.length; i++) {
      if (columns[i].value[0] === name) {
        return columns[i].option;
      }
    }
  }

  useEffect(() => {
    search();
  }, [pageNum, limitForReq, reverse, generalSearch]);

  return (
    <>
      <div className="flex flex-wrap justify-center md:-ml-5 pt-1 gap-2 mr-9 transition duration-700 ease-in-out">
        <Tooltip placement="top" title="פילטר">
          <div
            className={`dark:bg-neutral-500 bg-neutral-100 cursor-pointer rounded-lg p-1 flex gap-2 items-center justify-center min-h-full transition duration-700 ease-in-out ${
              !openFilter ? "max-w-[60px]" : ""
            }`}
          >
            <div
              className="flex gap-2 items-center justify-center"
              onClick={() => {
                setOpenFilter(!openFilter);
                setOpenSearchByDate(false);
              }}
            >
              {openFilter ? (
                <MdOutlineKeyboardArrowLeft className="w-5 h-4" />
              ) : (
                <MdOutlineKeyboardArrowRight className="w-5 h-4" />
              )}
              <BsFilter className="w-6 h-6" />
            </div>
            <div
              className={`dark:bg-zinc-800 bg-slate-200 rounded-lg px-2 gap-2 ${
                openFilter ? "flex" : "hidden"
              }`}
            >
              <select
                className="dark:bg-zinc-800 bg-slate-200 cursor-pointer border-none rounded-lg p-1 transition duration-700 ease-in-out gap-2 items-center justify-center min-h-full"
                type="text"
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <option value="">עמודה</option>
                {columns.map(
                  (option, i) =>
                    option.type === "select" && (
                      <option
                        className="dark:bg-zinc-800 bg-slate-200 cursor-pointer border-0 rounded-lg p-1 flex gap-2 items-center justify-center min-h-full"
                        key={i}
                        value={option.value[0]}
                      >
                        {option.title}
                      </option>
                    )
                )}
              </select>
              <select
                className="dark:bg-zinc-800 bg-slate-200 cursor-pointer rounded-lg p-1 transition duration-700 ease-in-out gap-2 items-center justify-center min-h-full"
                type="text"
                onChange={(e) => {
                  setGeneralSearch(e.target.value);
                }}
              >
                <option value="">ערך</option>
                {searchBy !== "" &&
                  processInput(searchBy).map((option, i) => {
                    return (
                      <option
                        className="dark:bg-zinc-800 bg-slate-200 border border-neutral-500 rounded-lg py-1 px-4"
                        key={i}
                        value={option}
                      >
                        {option}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        </Tooltip>
        <Tooltip placement="top" title="חיפוש בין תאריכים">
          <div
            className={`dark:bg-neutral-500 bg-neutral-100 cursor-pointer rounded-lg px-1 flex gap-2 items-center justify-center min-h-full transition duration-700 ease-in-out ${
              !openSearchByDate && "max-w-[60px]"
            }`}
          >
            <div
              className="flex gap-2 items-center justify-center p-0.5"
              onClick={() => {
                setOpenSearchByDate(!openSearchByDate);
                setOpenFilter(false);
              }}
            >
              {openSearchByDate ? (
                <MdOutlineKeyboardArrowLeft className="w-5 h-4" />
              ) : (
                <MdOutlineKeyboardArrowRight className="w-5 h-4" />
              )}
              <MdOutlineUpdate className="w-6 h-6" />
            </div>
            <div
              className={`rounded-lg p-0.5 gap-2 ${
                openSearchByDate ? "flex" : "hidden"
              }`}
            >
              <div className="flex flex-wrap row-auto gap-2 items-center justify-center">
                <select
                  className="dark:bg-zinc-800 bg-slate-200  border border-neutral-500 rounded-lg py-1"
                  type="text"
                  placeholder="id"
                  defaultValue={"id"}
                  onChange={(e) => setByDate(e.target.value)}
                >
                  <option className="">סוג תאריך</option>
                  {keysDate.map((option, i) => {
                    return (
                      <option
                        className="dark:bg-zinc-800 bg-slate-200  border border-neutral-500 rounded-lg p-1"
                        key={i}
                        value={option[0]}
                      >
                        {option[1]}
                      </option>
                    );
                  })}
                </select>
                <div className="flex items-center gap-1">
                  <label className="">מ:</label>
                  <input
                    className="dark:bg-zinc-800 bg-slate-200  border border-neutral-500 rounded-lg px-1"
                    type="date"
                    placeholder=""
                    pattern="\d{4}-\d{2}-\d{2}"
                    onChange={(e) => setGt(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label className="">עד:</label>
                  <input
                    className="dark:bg-zinc-800 bg-slate-200  border border-neutral-500 rounded-lg px-1"
                    type="date"
                    placeholder=""
                    onChange={(e) => setLt(e.target.value)}
                    defaultValue={gt}
                    pattern="\d{4}-\d{2}-\d{2}"
                  />
                </div>
              </div>
            </div>
          </div>
        </Tooltip>
        <div className="flex">
        <input
          type="search"
          placeholder="חיפוש..."
          className="dark:bg-neutral-500 bg-neutral-100 rounded-lg py-2 px-4 pl-10 "
          onChange={(e) => setGeneralSearch(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && search(e);
          }}
        />
        <Tooltip placement="top" title="חפש">
          <button
            className="relative left-[33px] h-[38px] top-[1px] dark:bg-zinc-800 bg-slate-200 dark:hover:bg-neutral-700 hover:bg-neutral-400 p-2 rounded-l-lg"
            onClick={() => search()}
          >
            <BsSearch />
          </button>
        </Tooltip>
        </div>
      </div>
    </>
  );
}
