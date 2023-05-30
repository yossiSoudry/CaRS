import { useEffect, useState } from 'react';
import { apiGet, apiPut } from '../../../services/services';
import { URL_MISSIONS, URL_MISSIONS_ID } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';
import Table from '../../table/table';
import { missionsColumnsData, missionsObjDateSearch, missionsObjSearch } from './data/tableData';
import { formInputsMission, missionValues } from './data/formData';

export default function Mission() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [missionsData, setMissionsData] = useState([]);
  // For edit one order data
  const [singleMissionsData, setSingleMissionsData] = useState([]);
    // For form values
    const [values, setValues] = useState(missionValues);

  // Get the orders data
  const getMissionsData = async () => {
    setIsLoading(true);
    const data = await apiGet(URL_MISSIONS);
    setIsLoading(false);
    setMissionsData(fixData(data));
    console.log(missionsData);
  };
  useEffect(() => {
    getMissionsData();
  }, [refresh]);

  // Corrects the data
  const fixData = (newData) => {
    newData.map((item, i) => {
      item.time_to_do = item.time_to_do.substring(0, 10);
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
    await apiPut(URL_MISSIONS_ID + id, row);
    getMissionsData();
  };
  useEffect(() => {
    singleMissionsData.length !== 0 && upOne(singleMissionsData);
  }, [singleMissionsData]);


  return (
    <>
      <Table
        rows={missionsData}
        columns={missionsColumnsData}
        setData={setMissionsData}
        setRow={setSingleMissionsData}
        titles={['משימות', 'משימה', 'missions']}
        search={[missionsObjDateSearch, missionsObjSearch, fixData]}
        form={[values, setValues, formInputsMission, missionValues,]}
      />
    </>
  );
}
