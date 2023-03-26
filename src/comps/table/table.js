import React, { useEffect, useState } from "react";
import { SlPrinter } from "react-icons/sl";
import { TfiDownload } from "react-icons/tfi";
import { RxRows } from "react-icons/rx";
import { HiEllipsisVertical } from "react-icons/hi2";
import { BsBorderAll, BsArrowsExpand, BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useStateContext } from "../../contexts/contextProvider";
import TrComp from "./trComp";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const Table = ({ rows, columns }) => {
  const { screenSize } = useStateContext();
  const [space, setSpace] = useState(2);
  const [displayLines, setDisplayLines] = useState(true);
  useEffect(() => {
    if (screenSize <= 1000) setDisplayLines(false);
    else setDisplayLines(true);
  }, [screenSize]);

  return (
    <>
      <div className="sm:px-6 text-neutral-500 dark:text-neutral-400 flex gap-3 md:gap-4 px-2 mb-3">
        {displayLines ? (
          <TooltipComponent content="תצוגת רשת" position="BottomRight">
            <BsBorderAll
              className="w-5 h-5 hover:text-slate-400"
              onClick={() => setDisplayLines(!displayLines)}
            />
          </TooltipComponent>
        ) : (
          <TooltipComponent content="תצוגת שורה" position="BottomRight">
            <RxRows
              className="w-5 h-5 hover:text-slate-400"
              onClick={() => setDisplayLines(!displayLines)}
            />
          </TooltipComponent>
        )}
        <TooltipComponent content="הדפסה" position="BottomRight">
            <SlPrinter
              className="w-5 h-5 hover:text-slate-400"
            />
          </TooltipComponent>
        <TooltipComponent content="הורדה לאקסל" position="BottomRight">
            <TfiDownload
              className="w-5 h-5 hover:text-slate-400"
            />
          </TooltipComponent>
        <div className="flex items-center my-auto h-6 py-2 border dark:border-neutral-600 rounded-md">
          <TooltipComponent content="ציפוף" position="BottomRight">
            <p
              className="hover:text-slate-400 px-2 text-lg cursor-pointer"
              onClick={() => space > 1 && setSpace(space - 1)}
            >
              -
            </p>
          </TooltipComponent>
          <BsArrowsExpand className="dark:text-neutral-400 h-5" />
          <TooltipComponent content="ריווח" position="BottomRight">
            <p
              className="hover:text-slate-400 px-2 text-sm cursor-pointer"
              onClick={() => space < 4 && setSpace(space + 1)}
            >
              +
            </p>
          </TooltipComponent>
        </div>
      </div>
      {displayLines ? (
        <div className="shadow dark:shadow-xl border border-neutral-200 dark:border-neutral-800 min-h-[780px] max-h-[780px] overflow-auto rounded-lg m-2">
          <table className="min-w-full max-w-[100%] table-auto divide-y divide-gray-200 dark:divide-gray-500">
            <thead className="bg-gray-100 dark:bg-zinc-600  sticky top-0 pr-20">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    className="group px-6 py-3 whitespace-nowrap cursor-default text-right text-lg font-medium text-gray-500 dark:text-gray-300"
                  >
                    <div className="flex items-center gap-2">
                    {column.title} 
                    <BsArrowDown className="hidden group-hover:block dark:hover:bg-neutral-500 hover:bg-white rounded-full" />
                    <HiEllipsisVertical className="hidden group-hover:block dark:hover:bg-neutral-500 hover:bg-white rounded-full" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white max-h-screen overflow-y-scroll dark:bg-secondary divide-y divide-gray-100 dark:divide-gray-600">
              {rows.map((row) => (
                <TrComp
                  space={space}
                  columns={columns}
                  row={row}
                  key={row.id}
                  displayLines={displayLines}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 m-2">
          {rows.map((row) => (
            <TrComp
              columns={columns}
              row={row}
              key={row.id}
              displayLines={displayLines}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Table;
