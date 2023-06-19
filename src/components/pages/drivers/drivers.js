import { useEffect, useState } from 'react';
import { apiGet, apiPut } from '../../../services/services';
import { URL_DRIVERS, URL_DRIVER_ID } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';
import { driversObjDateSearch, driversObjSearch, driversColumnsData } from './data/tableData';
import { formInputsDriver, driverValues } from './data/formData';
import Table from '../../table/table';

export default function Drivers() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [driversData, setDriversData] = useState([]);
  // For edit one order data
  const [singleDriversData, setSingleDriversData] = useState([]);
    // For form values
    const [values, setValues] = useState(driverValues);

  // Get the orders data
  const getDriversData = async () => {
    setIsLoading(true);
    const data = await apiGet(URL_DRIVERS);
    setIsLoading(false);
    setDriversData(fixData(data));
    // console.log(driversData);
  };
  useEffect(() => {
    getDriversData();
  }, [refresh]);

  // Corrects the data
  const fixData = (newData) => {
    newData.map((item, i) => {
      item.data_of_birth = item.data_of_birth.substring(0, 10);
      item.license_issuance_date = item.license_issuance_date.substring(0, 10);
      item.exp_license = item.exp_license.substring(0, 10);
      item.Date_added=item.Date_added.substring(0, 10);
    });
    return newData;
  };

  // For edit one order data
  const upOne = async (row) => {
    const id = row._id;
    delete row._id;
    delete row.Date_added;
    delete row.added_by;
    delete row.__v;
    console.log(row);
    await apiPut(URL_DRIVER_ID + id, row);
    getDriversData();
  };
  useEffect(() => {
    singleDriversData.length !== 0 && upOne(singleDriversData);
  }, [singleDriversData]);


  return (
    <>
      <Table
        rows={driversData}
        columns={driversColumnsData}
        setData={setDriversData}
        setRow={setSingleDriversData}
        titles={['נהגים', 'נהג', 'drivers']}
        search={[driversObjDateSearch, driversObjSearch, fixData]}
        form={[values, setValues, formInputsDriver, driverValues,]}
      />
    </>
  );
}
