import React from 'react'
import Table from "../../table/table"
import { usersColumnsData, usersRowsData } from "./usersData";

function users() {
  return (
    <Table rows={usersRowsData} columns={usersColumnsData} />
  )
}

export default users