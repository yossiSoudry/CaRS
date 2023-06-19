import { URL_SINGLE_WORKER } from "../../../../data/constants";

export const driversColumnsData = [
  {
    id: 1,
    title: "שם ות.ז",
    col: "main",
    lines: 2,
    value: ["users", ["name"],['identity']],
    editable: false,
    type: "text",
  },
  {
    id: 3,
    title: "פרטים",
    col: "links",
    lines: 2,
    value: ["email", "phone_number"],
    editable: true,
    type: ["email", "phone"],
  },
  {
    id: 4,
    title: "תאריך לידה",
    col: "simple",
    value: ["data_of_birth"],
    editable: false,
    type: "text",
  },
  {
    id: 4,
    title: "תאריך הוצאת רשיון",
    col: "simple",
    value: ["license_issuance_date"],
    editable: false,
    type: "text",
  },
  {
    id: 8,
    title: "תוקף רשיון",
    col: "calc-date",
    value: ["exp_license"],
    editable:true,
    type: "date",
  },
  {
    id: 4,
    title: "נוסף בתאריך",
    col: "simple",
    value: ["Date_added"],
    editable: false,
    type: "text",
  },
  {
    title: "נוסף ע''י",
    col: "getSingle",
    value: ["added_by"],
    editable: false,
    url:URL_SINGLE_WORKER,
    returnData: ["name"],
    
  },
  {
    title: "פעולות",
    col: "actions",
    files: true,
    value: "",
    editable: false,
    type: "text",
  },
]

export const driversObjSearch = [
  ["name", "שם"],
  ["identity", "ת.ז"],
  ["phone_number", "טלפון"],
  ["email", "מייל"],
]

export const driversObjDateSearch = [
  ["data_of_birth", "תאריך לידה"],
  ["license_issuance_date", "תאריך הוצאת רשיון"],
  ["exp_license", "תוקף רשיון"],
  ["Date_added", "תאריך הצטרפות"],
]