import { useState, useEffect } from 'react';
import { apiGet } from '../../services/services';
import { Select } from 'antd';
import { IdcardOutlined, PhoneOutlined } from '@ant-design/icons';
import { useStateTableContext } from '../../contexts/tableContext';

export const DataList = ({ url, info1, info2, info3, mode, name, ...inputProps  }) => {
  console.log(name);
  const [optionsData, setOptionsData] = useState([]);
  const { values,setValues} = useStateTableContext();
  const updateValue = async (value) => {
    const objectValue = await apiGet(url  + "/single/" + value);
    setValues({ ...values, [name]: objectValue });
  };

  const fixUndefined = (value) => {
    return value === undefined ? '' : value
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiGet(url);
      console.log(data);
      const options = data.map((option) => ({
        value: option._id,
        label: `${option[info1]} | ${option[info2[0]]} ${fixUndefined(option[info2[1]])} | ${option[info3[0]]}`,
      }));
      setOptionsData(options);
    };
    fetchData();
  }, []);

  return (

    
    <Select
      // {...inputProps}
      // type='search'
      showSearch
      onChange={updateValue} 
      className='peer w-72 sm:w-120 py-2.5 mt-5 rounded dark:bg-dark border-1 border-color !text-zinc-600 dark:!text-zinc-400 focus:outline-none  focus:ring-1 focus:ring-sky-500
        invalid:border-red-500  focus:invalid:border-0 h-14 overflow-scroll
         block'
      bordered={false}
      mode={mode}
      options={optionsData}
      popupClassName='!text-zinc-400 text-2xl'
      optionFilterProp='children'
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      dropdownStyle={{ color: 'green !importent' }}
    />
  );
};
