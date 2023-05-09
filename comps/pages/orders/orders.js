import { useEffect, useState } from 'react';
import { apiGet, apiPut } from '../../../services/services';
import { URL_INTERACTIONS, URL_INTERACTION_ID } from '../../../data/constants';
import { useStateContext } from '../../../contexts/contextProvider';
import { orderObjDateSearch, orderObjSearch, ordersColumnsData } from './data/tableData';
import Table from '../../table/table';

export default function Orders() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [ordersData, setOrdersData] = useState([]);
  // For edit one order data
  const [singleOrdersData, setSingleOrdersData] = useState([]);

  // Get the orders data
  const getOrdersData = async () => {
    setIsLoading(true);
    const data = await apiGet(URL_INTERACTIONS);
    setIsLoading(false);
    setOrdersData(fixData(data));
    console.log(ordersData);
  };
  useEffect(() => {
    getOrdersData();
  }, [refresh]);

  // Corrects the data
  const fixData = (newData) => {
    newData.map((item, i) => {
      item.pick_up_date = item.pick_up_date.substring(0, 10);
      item.return_date = item.return_date.substring(0, 10);
      item.date_created = item.date_created.substring(0, 10);
    });
    return newData;
  };

  // For edit one order data
  const upOne = async (row) => {
    const id = row._id;
    delete row._id;
    delete row.date_created;
    delete row.__v;
    console.log(row);
    await apiPut(URL_INTERACTION_ID + id, row);
    getOrdersData();
  };
  useEffect(() => {
    singleOrdersData.length !== 0 && upOne(singleOrdersData);
  }, [singleOrdersData]);


  return (
    <>
      <Table
        rows={ordersData}
        columns={ordersColumnsData}
        setsData={setOrdersData}
        setRow={setSingleOrdersData}
        titles={['הזמנות', 'הזמנה', 'interactions']}
        search={[orderObjSearch, orderObjDateSearch, fixData]}
        form={false}
      />
    </>
  );
}
