import { useState, useEffect } from 'react';
import { apiGet } from '../../services/services';
import { Select } from 'antd';
import { IdcardOutlined, PhoneOutlined } from '@ant-design/icons';
import { useStateTableContext } from '../../contexts/tableContext';

export const DataList = ({ url, info1, info2, info3, name, ...inputProps  }) => {
  console.log(name);
  const [optionsData, setOptionsData] = useState([]);
  const { values,setValues} = useStateTableContext();
  const updateValue = (value) => {
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiGet(url);
      console.log(data);
      const options = data.map((option) => ({
        value: option._id,
        label: `${option[info1]} | ${info2[0]}: ${option[info2[1]]} | ${info3[0]} ${option[info3[1]]}`,
      }));
      setOptionsData(options);
    };
    fetchData();
  }, []);

  return (
    <Select
      {...inputProps}
      type='search'
      onChange={updateValue} 
      className='peer w-72 sm:w-120 py-2.5 mt-5 rounded dark:bg-dark border-1 border-color !text-zinc-600 dark:!text-zinc-400 focus:outline-none  focus:ring-1 focus:ring-sky-500
        invalid:border-red-500  focus:invalid:border-0
         block'
      bordered={false}
      mode='multiple'
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
