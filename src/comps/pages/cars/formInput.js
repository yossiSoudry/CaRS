import React from 'react'

const FormInput = ({ label, onChange, id, ...inputProps }) => {

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

export default FormInput