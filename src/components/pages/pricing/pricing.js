import { useState, useEffect } from 'react';
import { URL_PRICES } from '../../../data/constants';
import { apiGet, apiPut } from '../../../services/services';
import { useStateContext } from '../../../contexts/contextProvider';
import { pricingValues, formInputsPricing } from './data/formData';
import { pricingObjDateSearch, pricingColumnsData, userObjSearch } from './data/tableData';
import Table from '../../table/table';

export default function PricingTable() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [pricesData, setPricesData] = useState([]);
  // For edit one pricing data
  const [singlePricingData, setSinglePricingData] = useState([]);
  // For form values
  const [values, setValues] = useState(pricingValues);
  const [index, setIndex] = useState('מחירון 1');
  const [titles, setTitles] = useState([]);

  // Get the pricing data
  const pricingData = async () => {
    console.log(index);
    setIsLoading(true);
    console.log(URL_PRICES+`?s=מחירון${index}`);
    const data = await apiGet(URL_PRICES+`?s=${index}`);
    console.log(data);
    setIsLoading(false);
    setPricesData(data);
  };

  const titlesData = async() => {
    const data = await apiGet(URL_PRICES+'/titles')
    setTitles(data);
  }

  useEffect(() => {
    pricingData();
  }, [refresh,index]);

  useEffect(() => {
    titlesData()
  }, []);

  // Corrects the data
  // const fixData = (newData) => {
  //   newData.forEach((item, i) => {
  //     item.id = item._id;
  //     // item.date_join = item.date_join.substring(0, 10);
  //   });
  //   return newData;
  // };

  // For edit one car data
//   const upOne = async (row) => {
//     const id = row._id;
//     delete row._id;
//     delete row.id;
//     delete row.__v;
//     delete row.date_join;
//     delete row.added_by;
//     await apiPut(URL_pricing_ID + id, row);
//     pricingData();
//   };
//   useEffect(() => {
//     singlePricingData.length !== 0 && upOne(singlePricingData);
//   }, [singlePricingData]);

  return (
    <>
    

<select onChange={(e) => { setIndex(`מחירון ${e.target.value}`)}} className="bg-gray-50 border text-lg border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto mx-auto p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  {titles.map((item, i) => 
    (
      <option key={i} value={i+1} >{item.title} מ- {item.from} עד {item.to}</option>
    )
  )}

</select>

      <Table
        rows={pricesData}
        columns={pricingColumnsData}
        setData={setPricesData}
        setRow={setSinglePricingData}
        titles={['מחירונים', 'מחירון', 'prices']}
        search={false}
        form={false}
      />
    </>
  );
}
