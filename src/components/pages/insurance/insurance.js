import { useState, useEffect } from 'react';
import { URL_CARS, URL_CAR_ID } from '../../../data/constants';
import { apiGet, apiPut } from '../../../services/services';
import { useStateContext } from '../../../contexts/contextProvider';
import { carObjDateSearch, carsColumnsData } from './data/tableData';
import Table from '../../table/table';
import AutoFillCarDetails from '../cars/autoFillCar';

export default function CarsTable() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [carsData, setCarsData] = useState([]);
  // For edit one car data
  const [singleCarsData, setSingleCarsData] = useState([]);
  // For form values
  // For the auto fill component
  const [status, setStatus] = useState('ready');

  // Get the cars data
  const getCarsData = async () => {
    setIsLoading(true);
    const data = await apiGet(URL_CARS + "?limit=" + localStorage.limitForReq);
    setIsLoading(false);
    setCarsData(fixData(data));
  };
  useEffect(() => {
    getCarsData();
  }, [refresh]);

  // Corrects the data
  const fixData = (newData) => {
    [...newData].forEach((item) => {
      item.id = item._id;
      item.license_number = /^[0-9]{7}$/.test(item.license_number)
        ? `${item.license_number.substring(0, 2)}-${item.license_number.substring(
            2,
            5
          )}-${item.license_number.substring(5)}`
        : /^[0-9]{8}$/.test(item.license_number)
        ? `${item.license_number.substring(0, 3)}-${item.license_number.substring(
            3,
            5
          )}-${item.license_number.substring(5)}`
        : '';
      item.last_treatment = item.last_treatment.substring(0, 10);
      item.exp_ins = item.exp_ins.substring(0, 10);
      item.date_join = item.date_join.substring(0, 10);
      item.exp_test = item.exp_test.substring(0, 10);
    });
    return newData;
  };

  // For edit one car data
  const upOne = async (row) => {
    const id = row._id;
    delete row._id;
    delete row.id;
    delete row.__v;
    delete row.date_join;
    delete row.added_by;
    row.license_number = row.license_number.replaceAll('-', '');
    await apiPut(URL_CAR_ID + id, row);
    getCarsData();
  };
  useEffect(() => {
    singleCarsData.length !== 0 && upOne(singleCarsData);
  }, [singleCarsData]);

  return (
    <>
      <Table
        rows={carsData}
        columns={carsColumnsData}
        setData={setCarsData}
        setRow={setSingleCarsData}
        titles={['רכבים', 'רכב', 'cars']}
        search={[carObjDateSearch, carObjDateSearch, fixData]}
        form={false}
      />
    </>
  );
}
