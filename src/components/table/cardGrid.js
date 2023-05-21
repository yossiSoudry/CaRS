import { Fragment } from "react";
import { Modal, Tooltip } from "antd";
import { ModalTable } from "./modalTable";
import { useStateContext } from "../../contexts/contextProvider";
import Files from "../files/files";
import GetSingle from "./getSingle";

function CardGrid({
  i,
  setEdit,
  row,
  space,
  edit,
  EditOutlined,
  FolderOutlined,
  SaveOutlined,
  columns,
  dateTimer,
  currentColor,
  filesModal,
  setFilesModal,
  updateOne,
  stickyRight,
  stickyLeft,
  TfiLocationPin,
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const getImagePath = (column, row) => {
    if (column.value[0] === "cars")
      return `/images/${column.value[0]}/${row[
        column.value[1][0]
      ].toLowerCase()}.png`;
    if (column.value[0] === "categories") {
      return `/images/${column.value[0]}/${row[column.value[1][0]]}.png`;
    } else return `/images/${column.value[0]}/default.png`;
  };
  const { currentMode } = useStateContext();

  return (
    <div
      className="bg-gray-100 dark:bg-zinc-600 p-4 rounded-2xl shadow hover:bg-gray-200 hover:scale-105 dark:hover:bg-gray-700 duration-300"
      key={i}
    >
      <div className="flex justify-center">
        <div className="block w-full rounded-2xl bg-white hover:bg-slate-100 text-center shadow-lg dark:bg-neutral-700 dark:hover:bg-neutral-800">
          {columns.map((column, i) => {
            return (
              <Fragment key={i}>
                {column.col === "main" && (
                  <div className="border-b-2 flex gap-3 items-center justify-center border-neutral-100 text-md py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
                    <div className="flex-shrink-0 h-10 w-10 hover:scale-110 duration-500">
                      <img
                        className="h-10 w-10 rounded-full hover:scale-110 duration-500"
                        src={getImagePath(column, row)}
                        alt={`${row[column.value[1][0]]}`}
                      />
                    </div>
                    <div>
                      <div
                        contentEditable={column.editable && edit}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => {
                          row[column.value[1]] = e.currentTarget.textContent;
                        }}
                        className=""
                      >
                        {row[column.inObj]
                          ? row[column.inObj][column.value[1][0]]
                          : row[column.value[1][0]]}
                        {"  "}
                        {row[column.value[1][1]]}
                      </div>
                      {column.lines === 2 && (
                        <div className="text-sm text-start text-gray-500 dark:text-gray-400">
                          {row[column.value[2][0]]}
                          {"  "}
                          {row[column.value[2][1]]}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <>
                  {column.col === "titles" && (
                    <>
                      <div
                        className={`text-xl py-1 py-${space} font-semibold text-gray-900 whitespace-nowrap dark:text-white`}
                        contentEditable={column.editable && edit}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => {
                          row[column.value[0]] = e.currentTarget.textContent;
                        }}
                      >
                        {row[column.value[0]]}
                      </div>
                      {column.lines === 2 && (
                        <div className="text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {column.title}: {"   "}
                          <span
                            contentEditable={column.editable && edit}
                            suppressContentEditableWarning={true}
                            className="font-semibold"
                            onBlur={(e) => {
                              row[column.value[1]] =
                                e.currentTarget.textContent;
                            }}
                          >
                            {row[column.value[1]]}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  {column.col === "simple" && (
                    <div
                      className={`text-md py-0.5 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}
                    >
                      {column.title}: {"   "}
                      <span
                        contentEditable={column.editable === true && edit}
                        suppressContentEditableWarning={true}
                        className="font-semibold dark:text-gray-400"
                        onBlur={(e) => {
                          row[column.value[0]] = e.currentTarget.textContent;
                        }}
                      >
                        {row[column.inObj]
                          ? row[column.inObj][column.value[0]]
                          : row[column.inArr]
                          ? `${row[column.inArr].length}`
                          : row[column.value[0]]}
                      </span>
                      {column.lines === 2 && (
                        <span
                          contentEditable={column.editable === true && edit}
                          suppressContentEditableWarning={true}
                          className="font-semibold"
                          onBlur={(e) => {
                            row[column.value[1]] = e.currentTarget.textContent;
                          }}
                        >
                          {row[column.value[1]]}
                        </span>
                      )}
                    </div>
                  )}
                  {column.col === "getSingle" && (
                    <div className={`text-md py-0.5 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}>
                      <div className="flex">
                      {column.title}: {"   "}
                        <div>
                          <div className="font-semibold dark:text-gray-400 pr-1">
                            <GetSingle
                              column={column}
                              item={row[column.value[0]]}
                              index={0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {column.col === "getSingleArray" && (
                    <div className={`text-md py-0.5 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}>
                      <div className="flex">
                      {column.title}: {"   "}
                        <div>
                          <div className="flex text-sm text-gray-900 whitespace-nowrap dark:text-white">
                            <GetSingle
                              column={column}
                              item={row[column.value[0]][0]}
                              index={0}
                            />
                          </div>
                          {column.lines === 2 && (
                            <div className="flex text-sm text-gray-900 whitespace-nowrap dark:text-white">
                              <GetSingle
                                column={column}
                                item={row[column.value[0]][1]}
                                index={0}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {column.col === "simpleObj" && (
                    <div className={`text-md flex py-0.5 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}>
                      {column.title}: {"   "}
                      <div className="font-semibold dark:text-gray-400 pr-1">
                        {row[column.inObj][column.value[0]]}{" "}
                        {row[column.inObj][column.value[1]]}
                      </div>
                      {/* {column.lines === 2 && (
                        <div className="text-sm text-gray-900 whitespace-nowrap dark:text-white">
                          {row[column.inObj] &&
                            row[column.inObj][column.value[1]]}
                        </div>
                      )} */}
                      {edit && column.editable && (
                        <>
                          <ModalTable
                            tableSearch={column.table}
                            item={column.inObj}
                            row={row}
                          />
                        </>
                      )}
                    </div>
                  )}
                  {column.col === "arrayObj" && (
                    <div className={`text-md flex py-0.5 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}>
                       {column.title}: {"   "}
                      <div className="font-semibold dark:text-gray-400 pr-1">
                        {row[column.inObj].map((item, i) => {
                          return (
                            <Fragment key={i}>
                              <span className="block">
                                {item !== null && item[column.value[0]]}
                              </span>
                              {edit && column.editable && (
                                <>
                                  <ModalTable
                                    tableSearch={column.table}
                                    item={column.inObj}
                                    row={row}
                                    index={i}
                                  />
                                </>
                              )}
                            </Fragment>
                          );
                        })}
                      </div>
                      {(row[column.inObj].length < 2 ||
                        row[column.inObj] === null) &&
                        edit &&
                        column.editable && (
                          <>
                            <ModalTable
                              tableSearch={column.table}
                              item={column.inObj}
                              row={row}
                              index={row[column.inObj].length}
                              empty={true}
                            />
                          </>
                        )}
                    </div>
                  )}
                  {column.col === "links" && (
                    <div className={`text-md py-0.5 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}>
                      {column.title}: {"   "}
                      <a
                        href={`${column.title.includes('mail')&& 'mailto'}: ${row[column.value[0]]}`}
                        className={`text-sm font-medium  text-blue-600 hover:underline dark:text-blue-500`}
                        contentEditable={column.editable && edit}
                        suppressContentEditableWarning={true}
                      >
                        {row[column.value[0]]}
                      </a>
                      {'     '}
                      <a
                        href={`tel:${row[column.value[1]]}`}
                        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                        contentEditable={column.editable && edit}
                        suppressContentEditableWarning={true}
                      >
                        {row[column.value[1]]}
                      </a>
                    </div>
                  )}
                  {column.col === "badge" && (
                    <>
                      {edit ? (
                        <select
                          onBlur={(e) => {
                            row[column.value] = e.currentTarget.value;
                          }}
                          defaultValue={row[column.value]}
                          className={`px-2 py-1 py-${space} inline-flex text-xs leading-5 font-semibold rounded-lg bg-${
                            column.colors[
                              column.option.indexOf(row[column.value])
                            ]
                          }-300 text-green-900`}
                          onChange={(e) => {
                            const selectedIndex = column.option.indexOf(
                              e.target.value
                            );
                            const selectedColor = column.colors[selectedIndex];
                            e.target.classList.remove(
                              ...column.colors.map((color) => `bg-${color}-300`)
                            );
                            e.target.classList.add(`bg-${selectedColor}-300`);
                          }}
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
                {column.col === "actions" && (
                  <div
                    className={`border-t-2 flex justify-center items-center gap-5 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50`}
                  >
                    <div className="flex gap-3">
                      {edit ? (
                        <Tooltip placement="top" title="שמירה">
                          <SaveOutlined
                            className=" hover:scale-125 text-xl duration-300 cursor-pointer mt-1"
                            style={{ color: currentColor }}
                            onClick={() => {
                              updateOne() && setEdit(!edit);
                            }}
                          />
                        </Tooltip>
                      ) : (
                        <>
                          <Tooltip placement="top" title="עריכה">
                            <EditOutlined
                              className=" hover:scale-125 text-xl duration-300 cursor-pointer"
                              style={{ color: currentColor }}
                              onClick={() => setEdit(!edit)}
                            />
                          </Tooltip>
                          {column.files && (
                            <Tooltip placement="top" title="מסמכים">
                              <FolderOutlined
                                className=" hover:scale-125 text-xl duration-300 cursor-pointer"
                                style={{ color: currentColor }}
                                onClick={() => setFilesModal(true)}
                              />
                              <Modal
                                centered
                                open={filesModal}
                                onOk={() => setFilesModal(false)}
                                onCancel={() => setFilesModal(false)}
                                width={1000}
                                footer={null}
                                className={
                                  currentMode === "dark" ? "dark" : "light"
                                }
                              >
                                <Files />
                              </Modal>
                            </Tooltip>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
                {column.col === "calc-date" && (
                  <div
                    className={`text-md py-1 text-start pr-4 text-gray-500 whitespace-nowrap dark:text-gray-200`}
                  >
                    <div className="flex items-center gap-1.5">
                      {`${column.title}: `}
                      <div
                        className="font-semibold dark:text-gray-400"
                        contentEditable={column.editable && edit}
                        suppressContentEditableWarning={true}
                        onBlur={(e) => {
                          row[column.value[0]] = e.currentTarget.textContent;
                        }}
                      >
                        {row[column.value]}
                      </div>
                      {dateTimer(row[column.value]) < 30 ? (
                        <div className="text-pink-500 text-sm mb-0.5">
                          {`${
                            dateTimer(row[column.value]) < 0 ? "לפני" : "בעוד"
                          } ${Math.abs(dateTimer(row[column.value]))} ימים`}
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm mb-0.5">
                          {`בעוד ${dateTimer(row[column.value])} ימים`}
                        </div>
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
