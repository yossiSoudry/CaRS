import { URL_DRIVER_ID, URL_SINGLE_CUSTOMER, URL_SINGLE_DRIVER } from "../../../../data/constants";

export const customersColumnsData = [
  {
    title: "שם",
    col: "main",
    lines: 1,
    value: ["users", ["name"], [""]],
    editable: false,
    type: "text",
  },
  {
    title: "מס' זהות",
    col: "titles",
    value: ["identity"],
    editable: false,
    type: "text",
  },
  {
    title: "סוג מזהה",
    col: "simple",
    value: ["ID_type"],
    editable: false,
    type: "text",
  },
  {
    title: "טלפון",
    lines:2,
    col: "links",
    value: ["phone_number","another_phone_number"],
    editable: true,
  },
  {
    title: "ארץ",
    col: "simple",
    value: ["country"],
    editable: false,
    type: "text",
  },
  {
    title: "עיר",
    col: "simple",
    value: ["city"],
    editable: false,
    type: "text",
  },
  {
    title: "כתובת",
    col: "simple",
    value: ["address"],
    editable: false,
    type: "date",
  },
  {
    title: "דוא''ל",
    col: "simple",
    value: ["email"],
    editable: false,
    type: "date",
  },
  {
    title: "נהגים",
    col: "arrayObj",
    value: ["name"],
    editable: true,
    table:'drivers',
    inObj:'drivers',
  },
  {
    title: "פעולות",
    col: "actions",
    files: true,
    value: "",
    editable: false,
    type: "text",
  },
];

// export const customerObjSearch = [
//   ["name", "שם"],
//   ["identity", "מספר זהות"],
//   ["ID_type", "סוג מזהה"],
//   ["country", "ארץ"],
//   ["city", "עיר"],
//   ["address", "כתובת"],
//   ["phone_number", "טלפון"],
//   ["phone_number_2", "טלפון נוסף"],
//   ["email", "דוא''ל"],
//   ["drivers", "נהגים"],
//   ["added_by", "הוקם ע''י"],
//   ["date_join", "תאריך הקמה"],
// ];

export const customerObjDateSearch = [["date_added", "תאריך הקמה"]];
