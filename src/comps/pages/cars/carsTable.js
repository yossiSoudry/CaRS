import React from "react";
import Table from "../../table/table";
import { URL_CARS } from "../../../data/constants"
import { useState, useEffect } from "react";
import { apiGet } from "../../sevices/servises";

function CarsTable() {

  const carsColumnsData = [

    {
      id: 1,
      title: "דגם ויצרן",
      col: "main",
      lines: 2,
      value: ["cars", "manufacturer_en", "manufacturer_hb"],
      editable: false,
      type: "text",
    },
    {
      id: 2,
      title: "מס' רישוי",
      col: "titles",
      value: ["license_number"],
      editable: false,
      type: "text",
    },
    {
      id: 3,
      title: "סניף",
      col: "single",
      value: ["branch"],
      editable: true,
      type: "select",
      option: ["בני ברק", "קריית שמונה", "תל אביב-יפו", "עפולה"]
    },
    {
      id: 4,
      title: "סוג דלק",
      col: "single",
      value: ["fuel_type"],
      editable: false,
      type: "text",
    },
    {
      id: 7,
      title: "טיפול אחרון",
      col: "single",
      value: ["last_treatment"],
      editable: false,
      type: "date",
    },
    {
      id: 8,
      title: "פקיעת ביטוח",
      col: "single",
      value: ["exp_ins"],
      editable: false,
      type: "date",
    },
    {
      id: 9,
      title: "רמת גימור",
      col: "single",
      value: ["finish_level"],
      editable: false,
      type: "date",
    },
    {
      id: 10,
      title: "שנתון",
      col: "single",
      value: ["year"],
      editable: false,
      type: "date",
    },
    {
      id: 11,
      title: "צבע",
      col: "single",
      value: ["color"],
      editable: false,
      type: "date",
    },
    {
      id: 12,
      title: "ק''מ",
      col: "single",
      value: ["km"],
      editable: false,
      type: "date",
    },
    {
      id: 5,
      title: "סטטוס",
      col: "badge",
      value: "status",
      editable: true,
      type: "select",
      option: ["פנוי", "השכרה", "מוסך", "מושבת", "תקין"],
      colors: ["green", "lime", "red", "yellow", "green"]
    },
    {
      id: 6,
      title: "פעולות",
      col: "icon",
      value: "",
      editable: false,
      type: "text",
    },
  ];

  useEffect(() => {
    carData();
  }, []);

  const [carsData, setCarsData] = useState([]);

  const carData = async () => {
    const carsRow = await apiGet(URL_CARS);
    // console.log(carsRow);
    carsRow.map((item) => {
      item.id = item._id;
      item.manufacturer_hb = item.manufacturer_hb.substring(
        0,
        item.manufacturer_hb.indexOf(" ")
      );
      item.last_treatment = item.last_treatment.substring(0, 10);
      item.exp_ins = item.exp_ins.substring(0, 10);
    });
    setCarsData(carsRow);
  };
  return <Table rows={carsData} columns={carsColumnsData} />;
}

export default CarsTable;
