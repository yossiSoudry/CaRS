import { URL_DRIVERS, URL_CUSTOMERS, URL_CARS } from '../../../../data/constants';
import { DataList } from '../../../forms/dataList';

export const formInputsOrder = [
  {
    name: "status",
    type: "search",
    label: "סוג",
    tag: "select",
    option: ["השכרה", "עתידי"],
    required: true,
  },
  {
    name: "category",
    type: "search",
    label: "דירוג",
    tag: "select",
    option: ["A - מיני", "B - סופר מיני", "C - חצי משפחתי", "D - משפחתי", "E - משפחתי משודרג", 'F - מיני וואן', 'G - מיני וואן משודרג', 'H - וואן', 'I - מסחרי', 'J - מנהלים'],
    required: true,
  },
  {
    name: 'car_obj',
    placeholder: 'רכב',
    label: 'רכב',
    tag: 'dataList',
    data: (
      <DataList url={URL_CARS} info1={['license_number']} info2={['manufacturer_hb', 'model_hb']} info3={['status']} name='car_obj' />
      ),
    },
    {
    name: "pick_up_date",
    type: "date",
    label: "מתאריך",
    tag: "input",
    required: true,
  },
  {
    name: "pick_up_time",
    type: "time",
    label: "בשעה",
    tag: "input",
    required: true,
  },
  {
    name: "return_date",
    type: "date",
    label: "עד תאריך",
    tag: "input",
    required: true,
  },
  {
    name: "return_time",
    type: "time",
    label: "בשעה",
    tag: "input",
    required: true,
  },
  {
    name: 'tenant_name',
    placeholder: 'לקוח',
    label: 'לקוח',
    tag: 'dataList',
    data: (
      <DataList url={URL_CUSTOMERS} info1={['name']} info2={['identity', '']} info3={['phone_number']} name='tenant_name' />
    ),
    required: true,
  },
  {
    name: 'driver_names',
    placeholder: 'נהגים',
    label: 'נהגים',
    tag: 'dataList',
    data: (
      <DataList mode='tags' url={URL_DRIVERS} info1={['name']} info2={['identity', '']} info3={['phone_number']} name='driver_names' />
    ),
  },
];

// car values object
export const orderValues = {
  tenant_name: {},
  car_obj: {},
  status: '',
  category: '',
  driver_names: [],
  pick_up_date: '',
  pick_up_time: '',
  return_date: '',
  return_time: '',

};