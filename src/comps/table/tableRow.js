import React from "react";
import { Fragment } from "react";
import { useStateContext } from "../../contexts/contextProvider";

function TableRow({
  setEdit,
  row,
  space,
  // roleColor,
  // setRoleColor,
  // roles,
  edit,
  MdEdit,
  AiOutlineSave,
  columns,
}) {
  const { currentColor } = useStateContext();
  return (
    <tr
      key={row.id}
      className="hover:bg-zinc-100 dark:hover:bg-gray-700 duration-100"
    >
      {columns.map((column) => {
        return (
          <Fragment key={column.id}>
            {column.col === "main" && (
              <td className={`px-6 py-${space}`}>
                <div className="flex items-center whitespace-nowrap gap-3">
                  <div className="flex-shrink-0 h-10 w-10 hover:scale-110 duration-500">
                    <img
                      className="h-10 w-10 rounded-full hover:scale-110 duration-500"
                      src={
                        row[column.value[0]] ||
                        require("../../data/images/cars/mazda.png") ||
                        ""
                      }
                      // src={require(`../../data/images/${column.value[0]}/${row[column.value[1]].toLowerCase()}.png`)}
                      alt={`${row[column.value[1]]} image`}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {row[column.value[1]]}
                    </div>
                    {column.lines === 2 && (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {row[column.value[2]]}
                      </div>
                    )}
                  </div>
                </div>
              </td>
            )}
            {column.col === "titles" && (
              <td className={`px-6 py-${space}`}>
                <div
                  className="text-gray-900 whitespace-nowrap dark:text-white"
                  contentEditable={edit}
                  suppressContentEditableWarning={true}
                >
                  {row[column.value[0]]}
                </div>
                {column.lines === 2 && (
                  <div
                    className="text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                    contentEditable={edit}
                    suppressContentEditableWarning={true}
                  >
                    {row[column.value[1]]}
                  </div>
                )}
              </td>
            )}
            {column.col === "single" && (
              <td className={`px-6 py-${space}`}>
              <div
                className="text-sm text-gray-900 whitespace-nowrap dark:text-white"
                contentEditable={edit}
                suppressContentEditableWarning={true}
              >
                {row[column.value[0]]}
              </div>
            </td>
            )}
            {column.col === "links" && (
              <td className={`px-6 py-${space}`}>
                <div className="ml-4 flex flex-col">
                  <a
                    href={`mailto: ${row[column.value[0]]}`}
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {row[column.value[0]]}
                  </a>
                  {column.lines === 2 && (
                    <a
                      href={`tel:${row[column.value[1]]}`}
                      className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                    >
                      {row[column.value[1]]}
                    </a>
                  )}
                </div>
              </td>
            )}
            {column.col === "badge" && (
              <td className={`px-6 py-${space}`}>
                {edit ? (
                  <select
                    defaultValue={row[column.value]}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                      column.colors[column.option.indexOf(row[column.value])]
                    }-300 text-green-900`}
                    // contentEditable={edit}
                    // suppressContentEditableWarning={true}
                    // onChange={(e) =>
                    //   setRoleColor(
                    //     roles.filter(
                    //       (role) =>
                    //         role.theRole.trim() === e.target.value.trim()
                    //     )[0].theColor
                    //   )
                    // }
                  >
                    <option className="d-none"></option>
                    {column.option.map((val, i) => {
                      return (
                        <option
                          key={i}
                          className={`hover:border-collapse bg-${column.colors[i]}-300 `}
                          value={val}
                        >
                          {val}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <div
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                      column.colors[column.option.indexOf(row[column.value])]
                    }-300 text-green-900`}
                  >
                    {row[column.value]}
                  </div>
                )}
              </td>
            )}
            {column.col === "icon" && (
              <td className={`px-6 py-${space} text-right text-sm font-medium`}>
                <div className="flex">
                  {edit ? (
                    <AiOutlineSave
                      className=" hover:scale-125 text-xl duration-300 cursor-pointer"
                      style={{ color: currentColor }}
                      onClick={() => setEdit(!edit)}
                    />
                  ) : (
                    <MdEdit
                      className=" hover:scale-125 text-xl duration-300 cursor-pointer"
                      style={{ color: currentColor }}
                      onClick={() => setEdit(!edit)}
                    />
                  )}
                </div>
              </td>
            )}
          </Fragment>
        );
      })}
    </tr>
  );
}

export default TableRow;
