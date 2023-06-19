import React, { useEffect } from "react";
import { useStateContext } from "../../../contexts/contextProvider";
import { AiOutlineCloudDownload } from "react-icons/ai";
import axios from "axios";
import DoButton from "../../buttons/doButton";
import FormInput from "../../forms/formInput";
import { carCompaniesEn } from "./data/formData";
import { loadingMsg } from "../../../services/services";

const AutoFillCar = ({ values, setValues, status, setStatus }) => {
  const { currentColor } = useStateContext();

  useEffect(() => {
    if (
      (status === "req" || status === "res") &&
      values.license_number.length >= 7
    ) {
      values.license_number = values.license_number.replaceAll("-", "");
      doApi(values.license_number);
    }
  }, [status]);

  const updateValue = (e) => {
    e.target.value = e.target.value.replaceAll("-", "");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const doApi = async (numLicense) => {
    try {
      let url =
        "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=" +
        numLicense;
      let resp = await axios.get(url);
      let car = resp.data.result.records[0];
      // console.log(car);
      // console.log(resp);(values);
      autoFill(car);
    } catch (err) {
      console.log("err");
      loadingMsg(
        "הבקשה נכשלה. יש לוודא כי הוזן מס' רישוי נכון.",
        "red",
        "error"
      );
      setStatus("ready");
    }
  };

  const autoFill = (_carObj) => {
    values.manufacturer_hb =
      _carObj.tozeret_nm.indexOf(" ") !== -1
        ? _carObj.tozeret_nm.substring(0, _carObj.tozeret_nm.indexOf(" "))
        : _carObj.tozeret_nm;
    values.manufacturer_en =
      carCompaniesEn[parseInt(_carObj.tozeret_cd)].toUpperCase();
    values.model_en = _carObj.kinuy_mishari.match(/\d+/g)
      ? _carObj.kinuy_mishari.split(" ")[1]
      : _carObj.kinuy_mishari.split(" ")[0];
    values.color =
      _carObj.tzeva_rechev.indexOf(" ") !== -1
        ? _carObj.tzeva_rechev.substring(0, _carObj.tzeva_rechev.indexOf(" "))
        : _carObj.tzeva_rechev;
    values.finish_level = _carObj.ramat_gimur;
    values.fuel_type = _carObj.sug_delek_nm;
    values.year = String(_carObj.shnat_yitzur);
    values.exp_test = _carObj.tokef_dt.slice(0, 10);
    setStatus("res");
  };

  const validationLicenseNumber = (e) => {
    const value = e.target.value.replaceAll("-", "");
    if (/^[0-9]{7}$/.test(value)) {
      const formattedValue = `${value.substring(0, 2)}-${value.substring(
        2,
        5
      )}-${value.substring(5)}`;
      e.target.value = formattedValue;
      setStatus("ready");
    } else if (/^[0-9]{8}$/.test(value)) {
      const formattedValue = `${value.substring(0, 3)}-${value.substring(
        3,
        5
      )}-${value.substring(5)}`;
      e.target.value = formattedValue;
      setStatus("ready");
    } else {
      setStatus("err");
    }
  };

  return (
    <>
      <div className="flex items-center">
        <FormInput
          name="license_number"
          placeholder="מס' רישוי"
          value={values.license_number}
          onChange={updateValue}
          onBlur={validationLicenseNumber}
          tag="input"
          label="מס' רישוי"
          classN="focus:ring-0"
        />
        <div>
          <DoButton
            title="מילוי אוטונטי"
            color={currentColor}
            size="4xl"
            customFunc={() => {
              status != "err" && setStatus("req");
            }}
            icon={<AiOutlineCloudDownload />}
            classN="-mr-12 rounded-r-none shadow-none hover:scale-100 border-r-0 group-focus:border group-focus:border-sky-500 group-focus:ring-1 group-focus:ring-sky-500 dark:bg-dark py-2.5 mt-1"
          />
          {/* <div className='pb-3 pr-4 h-4 w-1'></div> */}
        </div>
      </div>
      <div className="flex text-sm h-4 text-red-400 -mt-4 pr-4">
        {status === "err" && <p>מס' רישוי לא תקין</p>}
      </div>
    </>
  );
};

export default AutoFillCar;
