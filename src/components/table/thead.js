import { HiEllipsisVertical } from "react-icons/hi2";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { apiGet } from "../../services/services";
import { useStateTableContext } from "../../contexts/tableContext";
import { useState } from "react";

function Thead({ columns, headerSticky, setData, url, fixData }) {
  const {
    pageNum,
    limitForReq,
    setItems,
    highPageNum,
    setHighPageNum,
  } = useStateTableContext();

  const [reverse, setReverse] = useState(false)
  const sort = async (title) => {
    let newData = await apiGet(
      `${url}?&sort=${title}${reverse ? "&reverse=yes" : ""}${
        limitForReq !== 0 && "&limit=" + limitForReq
      }
      `
    );
    console.log(`${url}?&sort=${title}${reverse ? "&reverse=yes" : ""}${
      limitForReq !== 0 && "&limit=" + limitForReq
    }
    `);
    // Corrects the data
    newData = fixData(newData);
    // for pagination
    if (newData.length < limitForReq && pageNum < highPageNum) {
      setItems(newData.length);
      setHighPageNum(Math.ceil(newData.length / limitForReq));
    }

    setData(newData);
  };
  return (
    <thead className="bg-gray-100 dark:bg-zinc-600 z-10  sticky top-0 pr-20">
      <tr>
        {columns.map((column, i) => (
          <th
            key={i}
            scope="col"
            className={`group px-6 py-3 text-center whitespace-nowrap hover:bg-gray-200 dark:hover:bg-zinc-500 cursor-default text-lg font-medium text-gray-500 dark:text-gray-300 
          ${headerSticky(column)}
          ${column.col === "main" ? "pr-20" : ""} `}
          >
            <div className="flex items-center gap-2">
              {column.title}
              {reverse ? (
                <BsArrowDown
                  className="hidden group-hover:block dark:hover:bg-neutral-600 hover:bg-white rounded-full"
                  onClick={() => {
                    sort(column.value[0]);
                    setReverse(!reverse);
                  }}
                />
              ) : (
                <BsArrowUp
                  className="hidden group-hover:block dark:hover:bg-neutral-600 hover:bg-white rounded-full"
                  onClick={() => {
                    sort(column.value[0]);
                    setReverse(!reverse);
                  }}
                />
              )}
              <HiEllipsisVertical className="hidden group-hover:block dark:hover:bg-neutral-600 hover:bg-white rounded-full" />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Thead;
