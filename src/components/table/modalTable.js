import React, { useState } from "react";
import { CarsSimpleTable } from "../pages/cars/carsSimpleTable";
import { Modal } from "antd";
import { useStateContext } from "../../contexts/contextProvider";
import { AiOutlineEdit } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { DriversSimpleTable } from "../pages/drivers/driversSimpleTable";

export const ModalTable = ({ tableSearch, item, row, index, empty }) => {
  const { currentMode, currentColor,  } = useStateContext();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span className="flex">
        {row.status === "עתידי" && (
          <span onClick={() => setOpen(true)}>
            {
              <AiOutlineEdit
                className="text-xl"
                style={{ color: currentColor }}
              />
            }
          </span>
        )}
        {item === "car_obj" &&
          (row.status === undefined || row.status === "עתידי") &&
          !empty && (
            <span onClick={() => (row[item] = {})}>
              {<TiDelete className="text-xl" style={{ color: currentColor }} />}
            </span>
          )}
        {(item === "driver_names" || item === "drivers") &&
          (!row.status || row.status === "עתידי") &&
          !empty && (
            <span onClick={() => row[item].splice(index, 1)}>
              {<TiDelete className="text-xl" style={{ color: currentColor }} />}
            </span>
          )}
      </span>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
        className={currentMode === 'dark' ? 'dark ' : 'light '}
      >
        {tableSearch === "cars" && (
          <CarsSimpleTable setOpen={setOpen} item={item} row={row} />
        )}
        {tableSearch === "drivers" && (
          <DriversSimpleTable
            setOpen={setOpen}
            item={item}
            row={row}
            index={index}
          />
        )}
      </Modal>
    </div>
  );
};
