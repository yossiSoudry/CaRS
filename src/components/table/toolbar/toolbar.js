import { SlPrinter } from "react-icons/sl";
import { TfiDownload } from "react-icons/tfi";
import { RxPinLeft, RxPinRight, RxRows } from "react-icons/rx";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { BsBorderAll } from "react-icons/bs";
import { CSVLink } from "react-csv";
import { Divider, Tooltip } from "antd";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { useStateContext } from "../../../contexts/contextProvider";
import { RiPlayListAddLine } from "react-icons/ri";
import { Modal } from "antd";
import { useState } from "react";
import AddForm from "../../forms/addForm";

function Toolbar({
  handlePrint,
  rows,
  title,
  handleLineSpacing,
  handleStickyRight,
  handleStickyLeft,
  form,
  titles,
  targetURL,
}) {
  const {
    currentColor,
    currentMode,
    displayLines,
    setDisplayLines,
    lineSpacing,
    stickyRight,
    stickyLeft,
    screenSize,
  } = useStateContext();
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="sm:px-6 select-none text-neutral-500 dark:text-neutral-400 flex justify-center items-center px-2">
      {displayLines ? (
        <Tooltip placement="top" title="תצוגת רשת">
          <BsBorderAll
            className="w-5 h-5 hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 duration-300 cursor-pointer"
            onClick={() => setDisplayLines(!displayLines)}
          />
        </Tooltip>
      ) : (
        <Tooltip placement="top" title="תצוגת שורה">
          <RxRows
            className="w-5 h-5 hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 duration-300 cursor-pointer"
            onClick={() => setDisplayLines(!displayLines)}
          />
        </Tooltip>
      )}
      {displayLines && (
        <>
          <Divider type="vertical" className="h-5" />
          <Tooltip placement="top" title="הדפסה">
            <SlPrinter
              className="w-5 h-5 hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 duration-300 cursor-pointer"
              onClick={handlePrint}
            />
          </Tooltip>
          <Divider type="vertical" className="h-5" />
          <Tooltip placement="top" title="הורדה כקובץ אקסל">
            <CSVLink data={rows} filename={`${title}.csv`} target="_blank">
              <TfiDownload className="w-5 h-5 hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 duration-300 cursor-pointer" />
            </CSVLink>
          </Tooltip>
          <Divider type="vertical" className="h-5" />
          <div className="flex gap-1 dark:text-neutral-300 items-center my-auto h-7 text-sm px-1 border border-gray-200 dark:border-gray-600 shadow p-2 rounded-md">
            <Tooltip
              placement="top"
              title="ציפוף שורות"
              className={`${
                lineSpacing > 0
                  ? "hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 dark:text-neutral-100"
                  : "dark:text-neutral-500 "
              }flex cursor-pointer `}
            >
              <HiMinus
                className="duration-300 text-xl"
                onClick={() =>
                  lineSpacing > 0 && handleLineSpacing(lineSpacing - 1)
                }
              />
            </Tooltip>
            <MdOutlineFormatLineSpacing className="dark:text-neutral-400 h-5 w-6" />
            <Tooltip
              placement="top"
              title="ריווח שורות"
              className={`${
                lineSpacing < 3
                  ? "hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 dark:text-neutral-100"
                  : "dark:text-neutral-500 "
              }flex cursor-pointer `}
            >
              <HiPlus
                className="duration-300 text-xl"
                onClick={() =>
                  lineSpacing < 3 && handleLineSpacing(lineSpacing + 1)
                }
              />
            </Tooltip>
          </div>
          <Divider type="vertical" className="h-5" />
          <div className="flex gap-2 items-center my-auto h-7 text-sm p-2 border border-gray-200 dark:border-gray-600 shadow rounded-md">
            <Tooltip
              placement="top"
              title="נעיצת עמודות מימין"
              onClick={handleStickyRight}
              className={`flex cursor-pointer hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 duration-300 ${
                stickyRight > 0 ? "dark:text-neutral-100 " : ""
              }`}
            >
              {stickyRight}
              <RxPinRight className="duration-300 text-xl" />
            </Tooltip>
            <Tooltip
              placement="top"
              title="נעיצת עמודות משמאל"
              onClick={handleStickyLeft}
              className={`flex cursor-pointer hover:text-sky-300  hover:scale-110 dark:hover:text-sky-200 duration-300 ${
                stickyLeft > 0 ? "dark:text-neutral-100 " : ""
              }`}
            >
              <RxPinLeft className="duration-300 text-xl" />
              {stickyLeft}
            </Tooltip>
          </div>
        </>
      )}
      {form && (
        <Tooltip
          placement="top"
          title={`הוספת ${titles[1]}`}
        >
          <RiPlayListAddLine
            className="w-7 h-7 text-[var(--current-color)] hover:scale-110  duration-300 cursor-pointer mr-3"
            onClick={() => {
              setOpenForm(true);
            }}
          />
          <Modal
            centered
            open={openForm}
            onOk={() => setOpenForm(false)}
            onCancel={() => setOpenForm(false)}
            width={1120}
            footer={null}
            className={currentMode === "dark" ? "dark" : "light"}
          >
            <AddForm
              formInputs={form[2]}
              cleanValues={form[3]}
              FormFunc={form[4]}
              setOpenForm={setOpenForm}
              url={targetURL}
              title={titles[1]}
            />
          </Modal>
        </Tooltip>
      )}
    </div>
  );
}

export default Toolbar;
