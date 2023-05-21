import React, { useEffect, useState } from 'react';
import { apiGet } from '../../services/services';
import { URL_DRIVERS } from '../../data/constants';
import { useStateContext } from '../../contexts/contextProvider';

export const DriversSimpleTable = ({ setOpen, item, row, index,}) => {
    const {  currentMode } = useStateContext();
    const [driversData, setDriversData] = useState({})
    const [search, setSearch] = useState('')
    const getData = async () => {
        console.log(URL_DRIVERS+'?limit=100000&'+search);
        const data = await apiGet(URL_DRIVERS+'?limit=100000&s='+search)
        setDriversData(data)
        console.log(data);
    }
    useEffect(() => { getData() }, [row])

    const titles = [
        "שם",
        "מספר זיהוי",
        "טלפון",
        "מייל",
        
    ]
    const rows = [
        "name",
        "identity",
        "phone_number",
        "email",
    ]
    return (
        <div className={currentMode === "dark" ? "dark" : "light"}>
            <div>
                <input type="text" placeholder='חיפוש...' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => getData()}>חפש</button>
            </div>
            {driversData.length > 0 &&
                <table className='w-full text-center text-sm  text-gray-500 dark:text-gray-400 '>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
                        <tr className="px-6 py-3">
                            {titles.map((title, i) => <th key={i} >{title}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {driversData.map((driver, i) => {
                            return (
                                <tr onClick={() => {
                                    console.log(row[item][index]);
                                    row[item][index] = driver
                                    setOpen(false)
                                }}
                                    key={i}
                                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                    {rows.map((row, j) =>
                                        (<td key={j} className="px-6 py-4">{driver[row]}</td>)
                                    )}

                                </tr>
                            );
                        })}
                    </tbody>
                </table>}
        </div>
    );
}
