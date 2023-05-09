/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import { apiGet } from '../../../services/services';
import { URL_CARS } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';

export const CarsSimpleTable = ({ setOpen, item, row }) => {
  console.log(row.category);
  const { currentMode } = useStateContext();
  const [carsData, setCarsData] = useState({});
  const [search, setSearch] = useState('');
  const getData = async () => {
    console.log(`${URL_CARS}?limit=100000&s=${search !== '' ? search : row.category + '&search=class'}`);
    const data = await apiGet(`${URL_CARS}?limit=100000&s=${search !== '' ? search : row.category + '&search=class'}`);
    setCarsData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const titles = ['יצרן', 'דגם', 'מספר רישוי', 'שנה', 'צבע', 'קטגוריה'];
  const rows = ['manufacturer_hb', 'model_hb', 'license_number', 'year', 'color', 'class'];
  return (
    <div className={currentMode === 'dark' ? 'dark' : 'light'}>
      <div>
        <input type='text' placeholder='חיפוש...' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => getData()}>חפש</button>
      </div>
      {carsData.length > 0 && (
        <table className='w-full text-center text-sm  text-gray-500 dark:text-gray-400 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
            <tr className='px-6 py-3'>
              {titles.map((title, i) => (
                <th key={i}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, i) => {
              console.log(car);
              return (
                <Fragment key={i}>
                  {car.status === 'פנוי' && car.class.includes(row.category) && (
                    <tr
                      onClick={() => {
                        row[item] = car;
                        setOpen(false);
                      }}
                      key={i}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                    >
                      {rows.map((row, j) => (
                        <td key={j} className='px-6 py-4'>
                          {car[row]}
                        </td>
                      ))}
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
