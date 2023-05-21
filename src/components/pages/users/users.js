import { useEffect, useState } from 'react';
import { apiGet, apiPatch, apiPut } from '../../../services/services';
import { URL_ALL_WORKERS, URL_WORKER_ID } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';
import { userObjDateSearch, userObjSearch, usersColumnsData } from './data/tableData';
import Table from '../../table/table';

export default function Users() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [usersData, setUsersData] = useState([]);
  // For edit one user user
  const [singleUsersData, setSingleUsersData] = useState([]);

  // Get the users data
  const getUserData = async () => {
    setIsLoading(true);
    const data = await apiGet(URL_ALL_WORKERS + "?limit=" + localStorage.limitForReq);
    setIsLoading(false);
    console.log(data);
    setUsersData(fixData(data));
  };
  useEffect(() => {
    getUserData();
  }, [refresh]);

  // Corrects the data
  const fixData = (newData) => {
    [...newData].forEach((item) => {
      item.id = item._id;
      item.date_join = item.date_join.substring(0, 10);
    });
    return newData;
  };

  // For edit one user data
  const upOne = async (row) => {
    const role = {
      role: row.role,
    };
    const id = row._id;
    delete row._id;
    delete row.role;
    delete row.__v;
    delete row.date_join;
    await apiPatch(URL_WORKER_ID + id, role);
    await apiPut(URL_WORKER_ID + id, row);
    getUserData();
  };
  useEffect(() => {
    singleUsersData.length !== 0 && upOne(singleUsersData);
  }, [singleUsersData]);


  return (
    <>
      <Table
        rows={usersData}
        columns={usersColumnsData}
        setData={setUsersData}
        setRow={setSingleUsersData}
        titles={['משתמשים', 'משתמש', 'workers']}
        search={[userObjSearch, userObjDateSearch, fixData]}
        form={false}
      />
    </>
  );
}

