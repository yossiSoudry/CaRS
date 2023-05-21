import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';


export const dashboardTableItems = [
  {
    label: 'הזמנות להיום',
    key: 'toDayOrders',
  },
  {
    label: 'הזמנות למחר',
    key: 'tomorrowOrders',
  },
  {
    label: 'החזרות להיום',
    key: 'toDayReturns',
  },
  {
    label: 'החזרות למחר',
    key: 'tomorrowReturns',
  },
];
export const dashboardTableOrdersTitles = [
  'שם',
  'קטגוריה',
  'תאריך הזמנה',
  'שעת הזמנה',
  'תאריך החזרה',
  'שעת החזרה',
  'תאריך ביצוע הזמנה',
]
export const dashboardTableOrdersData = [
  'tenant_name',
  'category',
  'pick_up_date',
  'pick_up_time',
  'return_date',
  'return_time',
  'date_created'
]

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];
export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '54',
    percentage: '-4%',
    title: 'פניות באמצעות האתר',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'yellow-400',
  },
  {
    icon: <BsBoxSeam />,
    amount: '6',
    percentage: '+23%',
    title: 'ביטולים',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-400',
  },
  {
    icon: <FiBarChart />,
    amount: '339',
    percentage: '+38%',
    title: 'הזמנות',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-400',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39',
    percentage: '-12%',
    title: 'השכרות פעילות',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'blue-400',
  },
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '54',
    percentage: '-4%',
    title: 'פניות באמצעות האתר',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'yellow-400',
  },
  {
    icon: <BsBoxSeam />,
    amount: '6',
    percentage: '+23%',
    title: 'ביטולים',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-400',
  },
  {
    icon: <FiBarChart />,
    amount: '339',
    percentage: '+38%',
    title: 'הזמנות',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-400',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39',
    percentage: '-12%',
    title: 'השכרות פעילות',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'blue-400',
  },
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '54',
    percentage: '-4%',
    title: 'פניות באמצעות האתר',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'yellow-400',
  },
  {
    icon: <BsBoxSeam />,
    amount: '6',
    percentage: '+23%',
    title: 'ביטולים',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-400',
  },
  {
    icon: <FiBarChart />,
    amount: '339',
    percentage: '+38%',
    title: 'הזמנות',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-400',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39',
    percentage: '-12%',
    title: 'השכרות פעילות',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'blue-400',
  },
];