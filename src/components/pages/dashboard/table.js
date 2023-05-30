import { useEffect, useState } from 'react';
import { useStateContext } from '../../../contexts/contextProvider';
import { Menu } from 'antd';
import { addDays, format } from 'date-fns'
import { apiGet } from '../../../services/services';
import { URL} from '../../../data/constants';
import { Fragment } from 'react';
import { dashboardTableItems, dashboardTableOrdersData, dashboardTableOrdersTitles } from './data/dashboardData';



export default function TableDashboard() {
  const { currentMode } = useStateContext();
  const [current, setCurrent] = useState('toDayOrders');
  const [data, setData] = useState([]);
  const onClick = (e) => {
    setCurrent(e.key);
    getData(e.key)

  };
  const fixCarsObj = (dataArr) => {
    dataArr.map((item, i) => {
      item.pick_up_date = item.pick_up_date.substring(0, 10)
      item.return_date = item.return_date.substring(0, 10)
      item.date_created = item.date_created.substring(0, 10)
    })
    return dataArr;
  }
  const getData = async (key) => {
    const d = new Date()
    // console.log(format(addDays(d, 1), 'MM-dd-yyyy'));
    const url =
      key === 'toDayOrders' ? `/interactions?searchDate=pick_up_date&searchDateS=${format(addDays(d, 0), 'MM-dd-yyyy')}&searchDateE=${format(addDays(d, 1), 'MM-dd-yyyy')}` :
        key === 'tomorrowOrders' ? `/interactions?searchDate=pick_up_date&searchDateS=${format(addDays(d, 1), 'MM-dd-yyyy')}&searchDateE=${format(addDays(d, 2), 'MM-dd-yyyy')}` :
          key === 'toDayReturns' ? `/interactions?searchDate=return_date&searchDateS=${format(addDays(d, 0), 'MM-dd-yyyy')}&searchDateE=${format(addDays(d, 1), 'MM-dd-yyyy')}` :
            key === 'tomorrowReturns' ? `/interactions?searchDate=return_date&searchDateS=${format(addDays(d, 1), 'MM-dd-yyyy')}&searchDateE=${format(addDays(d, 2), 'MM-dd-yyyy')}` : ''
    // console.log(url);
    const dataArr = await apiGet(URL + url)
    // console.log(dataArr);
    setData(dataArr)
  }

  useEffect(() => { getData('toDayOrders') }, [])
  return (
    <div className='h-[70vh] container scroll-auto'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={dashboardTableItems}  theme={currentMode === 'dark'? 'dark':'light'}/>

      {data.length > 0 &&
      <div className='overflow-scroll'>
        <table className='w-full'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
            <tr className="px-6 py-3">
              {dashboardTableOrdersTitles.map((title, i) => <th key={i} >{title}</th>)}
            </tr>
          </thead>
          <tbody>
            {fixCarsObj(data).map((car, i) => {
              return (
                <Fragment key={i}>
                  <tr
                    key={i}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 px-6 py-3'>
                    {dashboardTableOrdersData.map((row, j) =>
                      (<td key={j} className=" text-center py-4">{row === 'tenant_name' ? car[row]['name'] && car[row]['name'] : car[row]}</td>)
                    )}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
    </div>
        }
    </div>
  )
}
