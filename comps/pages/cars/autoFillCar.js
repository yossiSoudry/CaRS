import React, { useEffect } from "react";
import { useStateContext } from "../../../contexts/contextProvider";
import { AiOutlineCloudDownload } from "react-icons/ai";
import axios from "axios";
import DoButton from "../../buttons/doButton";
import FormInput from "./formInput";
import { carCompaniesEn } from "../../../data/myData"

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
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const doApi = async (numLicense) => {
    try {
      let url =
        "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=" +
        numLicense;
      let resp = await axios.get(url);
      let car = resp.data.result.records[0];
      console.log(car);
      console.log(values);
      autoFill(car);
    } catch (err) {
      console.log(err);
      alert("הבקשה נכשלה. יש לוודא כי הוזן מס' רישוי נכון.");
      setStatus("ready");
    }
  };

  const autoFill = (_carObj) => {
    values.manufacturer_hb = _carObj.tozeret_nm;
    values.manufacturer_en = carCompaniesEn[parseInt(_carObj.tozeret_cd)].toUpperCase();
    values.model_en = _carObj.kinuy_mishari;
    values.color = _carObj.tzeva_rechev;
    values.finish_level = _carObj.ramat_gimur;
    values.fuel_type = _carObj.sug_delek_nm;
    values.year = _carObj.shnat_yitzur;
    values.exp_test = _carObj.tokef_dt;
    setStatus("res");
  };

  const validationLicenseNumber = (e) => {
    e.target.value = e.target.value.replaceAll("-", "");
    updateValue(e);
    if (e.target.value.length === 7 && /^[0-9]+$/.test(e.target.value)) {
      e.target.value =
        e.target.value.substring(0, 2) +
        "-" +
        e.target.value.substring(2, 5) +
        "-" +
        e.target.value.substring(5);
      setStatus("ready");
    } else if (e.target.value.length === 8 && /^[0-9]+$/.test(e.target.value)) {
      e.target.value =
        e.target.value.substring(0, 3) +
        "-" +
        e.target.value.substring(3, 5) +
        "-" +
        e.target.value.substring(5);
      setStatus("ready");
    } else {
      setStatus("err");
    }
  };

  return (
    <>
      <div className="flex">
        <FormInput
          name="license_number"
          placeholder="מס' רישוי"
          onChange={validationLicenseNumber}
        />
        <DoButton
          tooltip="מילוי אוטונטי"
          color={currentColor}
          size="4xl"
          customFunc={() => {
            status != "err" && setStatus("req");
          }}
          icon={<AiOutlineCloudDownload />}
          classN="mt-2"
        />
      </div>
      <div className="flex text-sm h-4 text-red-400 pr-4">
        {status === "err" && <p>מס' רישוי לא תקין</p>}
      </div>
    </>
  );
};

export default AutoFillCar;
