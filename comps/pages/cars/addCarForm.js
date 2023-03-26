import React, { useState } from "react";
import { useStateContext } from "../../../contexts/contextProvider";
import { IoIosReturnRight } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import { formInputsCar, carValues } from "../../../data/myData";
import { URL_CARS } from "../../../data/constants";
import { apiPost } from "../../sevices/servises";
import DoButton from "../../buttons/doButton";
import { Link } from "react-router-dom";
import FormInput from "./formInput";
import AutoFillCar from "./autoFillCar";

const AddCarForm = () => {
  const { currentColor } = useStateContext();
  const [values, setValues] = useState(carValues);
  const [status, setStatus] = useState("ready");
  const updateValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex-col">
      <Link to={"../cars"}>
        <DoButton
          color={currentColor}
          title="חזרה"
          size="2xl"
          icon={<IoIosReturnRight />}
          classN="mb-2"
          position="BottomRight"
          tooltip="חזרה"
        />
      </Link>
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h2 className="text-4xl text-center text-zinc-600 dark:text-zinc-400">
            הוספת רכב
          </h2>
          <AutoFillCar
            values={values}
            setValues={setValues}
            status={status}
            setStatus={setStatus}
          />
        </div>
      </div>
      <form className="flex items-center justify-center flex-wrap p-4 border-y-1 border-color m-4">
        {formInputsCar.map((input) =>
          input.tag === "input" ? (
            <FormInput
              {...input}
              key={input.id}
              value={values[input.name]}
              onChange={updateValue}
            />
          ) : (
            input.tag === "select" && (
              <div className="formInput flex flex-col">
                <label className="pr-4 text-zinc-600 dark:text-zinc-400">
                  {input.label}
                </label>
                <div className="w-60 p-4 mx-3 mt-1 rounded dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400">
                  <select className="w-44 mx-3 mt-1 rounded dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400" >
                    {input.option.map((option, i) => (
                      <option key={i} value={option[i]}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )
          )
        )}
      </form>
      <div className="flex items-center justify-end pl-28">
        <DoButton
          title={"שמור"}
          color={currentColor}
          size="4xl"
          customFunc={() => {
            console.log(values);
            apiPost(URL_CARS, values);
          }}
          icon={<FaRegSave />}
          classN="mt-2"
        />
      </div>
    </div>
  );
};

export default AddCarForm;
