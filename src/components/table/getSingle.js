import React, { useEffect, useState } from 'react'
import { apiGet } from '../../services/services';


export default function GetSingle({ column, item, index }) {
  const [i, setI] = useState("")

  const getSingleById = async (url) => {
    const data = await apiGet(url + item)
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