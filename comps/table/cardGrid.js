import React from "react";
import { Fragment } from "react";
import { useStateContext } from "../../contexts/contextProvider";

function CardGrid({
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
    <div
      className="bg-gray-100 dark:bg-zinc-600 p-4 rounded-2xl shadow hover:bg-gray-200 hover:scale-105 dark:hover:bg-gray-700 duration-300"
      key={row.id}
    >
      <div className="flex justify-center">
        <div className="block w-full rounded-2xl bg-white hover:bg-slate-100 text-center shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-800">
          {columns.map((column) => {
            return (
              <Fragment key={column.id}>
                {column.col === "main" && (
                  <div className="border-b-2 flex gap-3 items-center justify-center border-neutral-100 text-xl py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
                    <div className="">{row[column.value[1]]}</div>
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
                  </div>
                )}
                <>
                  {column.col === "titles" && (
                    <>
                      <div
                        className={`text-xl py-1 py-${space} font-semibold text-gray-900 whitespace-nowrap dark:text-white`}
                        contentEditable={edit}
                        suppressContentEditableWarning={true}
                      >
                        {row[column.value[0]]}
                      </div>
                      {column.lines === 2 && (
                        <div className="text-lg text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {column.title}: {"   "}
                          <span
                            contentEditable={edit}
                            suppressContentEditableWarning={true}
                            className="font-semibold"
                          >
                            {row[column.value[1]]}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  {column.col === "single" && (
                    <div className={`text-lg py-1 py-${space} text-gray-500 whitespace-nowrap dark:text-gray-400`}>
                      {column.title}: {"   "}
                      <span
                        contentEditable={edit}
                        suppressContentEditableWarning={true}
                        className="font-semibold"
                      >
                        {row[column.value[0]]}
                      </span>
                    </div>
                  )}
                  {column.col === "links" && (
                    <div className={`ml-4 py-1 py-${space} flex flex-col`}>
                      <a
                        href={`mailto: ${row[column.value[0]]}`}
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        {row[column.value[0]]}
                      </a>
                      <a
                        href={`tel:${row[column.value[1]]}`}
                        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                      >
                        {row[column.value[1]]}
                      </a>
                    </div>
                  )}
                  {column.col === "badge" && (
                    <>
                      {edit ? (
                        <select
                          defaultValue={row[column.value]}
                          className={`px-2 py-1 py-${space} inline-flex text-xs leading-5 font-semibold rounded-lg bg-${
                            column.colors[
                              column.option.indexOf(row[column.value])
                            ]
                          }-300 text-green-900`}
                          // onChange={(e) =>
                          //   setRoleColor(
                          //     roles.filter(
                          //       (role) =>
                          //         role.theRole.trim() === e.target.value.trim()
                          //     )[0].theColor
                          //   )
                          // }
                        >
                          <option className="d-none">
                            {/* {row[column.value]} */}
                          </option>
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
                          className={`px-2 my-2 my-${space} inline-flex text-xs leading-5 font-semibold rounded-lg bg-${
                            column.colors[
                              column.option.indexOf(row[column.value])
                            ]
                          }-300 text-green-900`}
                        >
                          {row[column.value]}
                        </div>
                      )}
                    </>
                  )}
                </>
                {column.col === "icon" && (
                  <div className="border-t-2 flex justify-center items-center gap-5 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
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
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
