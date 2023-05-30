import { useStateContext } from '../../contexts/contextProvider';
import { Select } from 'antd';

const FormInput = ({ label, onChange, onBlur, tag, data, errorMessage, option, classN, id, ...inputProps }) => {
  const { currentColor } = useStateContext();
  // data && console.log(data);

  return (
    <>
      <div className='formInput flex flex-col relative'>
        {tag === 'input' && (
          <input
          {...inputProps}
          onChange={onChange}
          onBlur={onBlur}
          className={`peer w-72 sm:w-60 p-4 mt-5 rounded dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400 focus:outline-none  focus:ring-1 focus:ring-sky-500
          invalid:border-red-500  focus:invalid:border-0
          block ${classN}
          `}
          placeholder=' '
          // type='search'
          ></input>
        )}

        {tag === 'select' && (
            <select
              {...inputProps}
              className='w-72 sm:w-60 p-4 mt-5 rounded dark:bg-dark border-1 border-color text-zinc-600 dark:text-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              invalid:border-red-500 focus:invalid:border-0'
              onChange={onChange}
            >
              <option></option>
              {option.map((op, i) => (
                <option key={i} value={op}>
                  {op}
                </option>
              ))}
            </select>
        )}
        {tag === 'dataList' && (
            data
        )}
        <label className='absolute text-slate-500 dark:text-slate-300 duration-300 -top-2 transform z-10 peer-placeholder-shown:top-9 peer-placeholder-shown:text-slate-400 peer-focus:text-slate-500 dark:peer-focus:text-slate-300 peer-focus:-top-2 right-4'>
          {label}
        </label>
        <span className='text-sm pb-3 pr-4 h-4 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-red-500'>
          {errorMessage}
        </span>
      </div>
    </>
  );
};

export default FormInput;
