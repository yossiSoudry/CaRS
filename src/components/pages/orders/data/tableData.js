import { URL_SINGLE_CAR, URL_SINGLE_CUSTOMER, URL_SINGLE_DRIVER, URL_SINGLE_WORKER } from "../../../../data/constants";


export const ordersColumnsData = [

  {
    title: "לקוח",
    col: "main",
    value: ["users", ["name"], [""]],
    editable: false,
    inObj:'tenant_name'
  },
  {
    title: "קטגוריה",
    col: "dot",
    value: ["category"],
    editable:true,
    option: ["A - מיני", "B - סופר מיני", "C - חצי משפחתי", "D - משפחתי", "E - משפחתי משודרג", "F - ג'יפון", 'G - מיני וואן', 'H - מיני וואן משודרג', 'I - וואן', 'J - מסחרי', 'K - מנהלים'],
    colors: ["green", "emerald", "teal", "cyan","sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink"]
  },
  {
    title: "פרטי רכב",
    col: "simpleObj",
    lines:2,
    value: ["manufacturer_hb","model_hb"],
    editable: true,
    type: "text",
    table:'cars',
    inObj:'car_obj'
  },
  {
    title: "מס' רישוי",
    col: "simpleObj",
    value: ["license_number"],
    editable: false,
    type: "text",
    inObj:'car_obj'
  },
  
  {
    title: " תאריך ביצוע",
    col: "simple",
    lines: 2,
    value: ["date_created"],
    editable: false,
  },
  {
    title: "התחלה",
    col: "simple",
    lines: 2,
    value: ["pick_up_date","pick_up_time"],
    editable: true,
  },
  {
    title: "סיום",
    col: "simple",
    lines: 2,
    value: ["return_date","return_time"],
    editable: true,
  },
  {
    title: "נהגים",
    col: "arrayObj",
    value: ["name"],
    editable: true,
    table:'drivers',
    inObj:'driver_names',
  },
  {
    title: "הופק ע''י",
    col: "getSingle",
    value: ["done_by"],
    editable: false,
    url:URL_SINGLE_WORKER,
    returnData: ["name"],
    
  },
  {
    title: "סטטוס",
    col: "badge",
    value: "status",
    editable:true,
    type: "select",
    option: ["עתידי", "השכרה", "הוחזר", "בירור","נמכר"],
    colors: ["green", "purple", "red", "yellow","gray"]
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

export const orderObjSearch = [
  ["customer_name", "שם"],
  ["category", "קטגוריה"],
  ["manufacturer", "יצרן"],
  ["model", "מודל"],
  ["license_number", "מספר רכב"],
  ["driver_names", "שמות הנהגים"],
  ["status", "סטטוס"],
  
]

export const orderObjDateSearch = [
  ["date_created", "תאריך הזמנה"],
  ["pick_up_date", "תאריך לקיחה"],
  ["exp_test", "תאריך טסט אחרון"],
  ["return_date", "תאריך החזרה"],
]