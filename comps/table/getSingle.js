import React, { useEffect, useState } from 'react'
import { apiGet } from '../../services/services';


export default function GetSingle({ column, item, index }) {
  const [i, setI] = useState("")

  const getSingleById = async (url) => {
    console.log(url);
    console.log(index);
    const data = await apiGet(url + item)
    console.log(data[column.returnData[index]]);
    setI(data[column.returnData[index]])
  }
  useEffect(() => {
    getSingleById(column.url)
  }, [])
  return (
    <div>
      {i}
    </div>
  )
}