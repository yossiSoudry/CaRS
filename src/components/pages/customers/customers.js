import { useState, useEffect } from 'react';
import { URL_CUSTOMERS, URL_CUSTOMER_ID } from '../../../data/constants';
import { apiGet, apiPut } from '../../../services/services';
import { useStateContext } from '../../../contexts/contextProvider';
import { customerValues, formInputsCustomer } from './data/formData';
import { customerObjDateSearch, customersColumnsData } from './data/tableData';
import Table from '../../table/table';

export default function CustomersTable() {
  // context
  const { setIsLoading, refresh } = useStateContext();
  // For getting data
  const [customersData, setCustomersData] = useState([]);
  // For edit one customer data
  const [singleCustomersData, setSingleCustomersData] = useState([]);
  // For form values
  const [values, setValues] = useState(customerValues);

  // Get the customers data
  const customerData = async () => {
    setIsLoading(true);
    const data = await apiGet(URL_CUSTOMERS);
    setIsLoading(false);
    setCustomersData(fixData(data));
  };
  useEffect(() => {
    customerData();
  }, [refresh]);

  // Corrects the data
  const fixData = (newData) => {
    newData.forEach((item, i) => {
      item.id = item._id;
      // item.date_join = item.date_join.substring(0, 10);
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
    await apiPut(URL_CUSTOMER_ID + id, row);
    customerData();
  };
  useEffect(() => {
    singleCustomersData.length !== 0 && upOne(singleCustomersData);
  }, [singleCustomersData]);

  return (
    <>
      <Table
        rows={customersData}
        columns={customersColumnsData}
        setData={setCustomersData}
        setRow={setSingleCustomersData}
        titles={['לקוחות', 'לקוח', 'customers']}
        search={[formInputsCustomer, customerObjDateSearch, fixData]}
        form={[values, setValues, formInputsCustomer, customerValues]}
      />
    </>
  );
}

