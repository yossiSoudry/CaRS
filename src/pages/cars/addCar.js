import React, { useState, useRef, useEffect } from "react";
import { useStateContext } from "../../contexts/contextProvider";
import Button from "../../comps/buttons/button";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { formInputsCar } from "../../data/myData";
import axios from 'axios';

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  
  return (
    <div className="formInput flex flex-col">
      <label className="pr-4 text-zinc-600 dark:text-zinc-400">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        className="w-60 p-4 mx-3 mt-1 rounded dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400"
      ></input>
    </div>
  );
};

const AddCar = () => {
  const [values, setValues] = useState({
    license_number: "",
    manufacturer_en: "",
    manufacturer_hb: "",
    model_en: "",
    model_hb: "",
    year: "",
    color: "",
    finish_level: "",
    km: "",
    status: "",
    branch: "",
    fuel_type: "",
    exp_test: "",
    exp_ins: "",
    last_treatment: "",
    km_next_treatment: "",
    nextTreatmentDate: "",
    class: "",
    deductible: "",
    coder: "",
    added_by: "",
    date_join: "",
    img_manufacturer: "",
  });

  

  const { currentColor } = useStateContext();

  const updateValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [flag,setFlag] = useState(0);

  useEffect(() => {
    if (flag === 0){
    }
    else{
    if(values.license_number.length >= 7){
     doApi(values.license_number)
    } else {
      alert("יש להזין מס' רישוי תקין"); 
   }
  }
  },[flag])

    
  


   const doApi = async (numLicense) => {
    try {
      let url = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=" +
      numLicense;
      let resp = await axios.get(url);
      let car = resp.data.result.records[0];
      // console.log(car);
      autoFill(car);
    }
    catch (err) {
      console.log(err);

    }
    
  };

   const autoFill = (_carObj) => {
     values.manufacturer_hb = _carObj.tozeret_nm;
     values.model_en = _carObj.kinuy_mishari;
     values.color = _carObj.tzeva_rechev;
     values.finish_level = _carObj.ramat_gimur;
     values.fuel_type = _carObj.sug_delek_nm;
     values.year = _carObj.shnat_yitzur;
     values.exp_test = _carObj.tokef_dt;

   };

  // console.log(values);

  return (
    <div className="flex-col">
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h2 className="text-4xl text-center text-zinc-600 dark:text-zinc-400">
            הוספת רכב
          </h2>
          <div className="flex pb-2">
            <FormInput
              name="license_number"
              placeholder="מס' רישוי"
              onChange={updateValue}
              // value={values.license_number}
            />
            {/* { <button onClick={() => setGetData(getData+1)}>do</button> } */}
            <Button
              color="white"
              bgColor={currentColor}
              borderRadius="10px"
              margin="-1"
              size="3xl"
              icon={<AiOutlineCloudDownload />}
              classN="my-0.5"
              onClick={() => setFlag(flag+1)}
            />
          </div>
        </div>
      </div>
      <form className="flex items-center justify-center flex-wrap p-4 border-y-1 border-color m-4">
        {formInputsCar.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={updateValue}
          />
        ))}
      </form>
      <div className="flex items-center justify-end pl-28">
        <Button
          color="white"
          bgColor={currentColor}
          borderRadius="6px"
          margin="r-auto"
          size="2xl"
          width="20"
          text="שמור"
          
        />
      </div>
    </div>
  );
};

export default AddCar;