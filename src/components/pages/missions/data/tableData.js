import { URL_MISSIONS_ID, URL_SINGLE_WORKER } from "../../../../data/constants";

export const missionsColumnsData = [
  {
    title: "עבור",
    col: "simpleObj",
    value: ["name"],
    defaultValue:'כולם',
    editable: false,
    type: "text",
    inObj:'for_id'
  },
  {
    title: "כותרת",
    col: "titles",
    value: ["title"],
    editable: true,
    type: "text",
  },
  {
    title: "משימה",
    col: "simple",
    value: ["mission"],
    editable: true,
    type: "text",
  },
  {
    title: "דגשים",
    col: "simple",
    value: ["remarks"],
    editable: true,
    type: "text",
  },
  {
    title: "דחיפות",
    col: "simple",
    value: ["importance"],
    editable: true,
    type: "text",
  },
  {
    title: "זמן לביצוע",
    col: "simple",
    value: ["time_to_do"],
    editable: true,
    type: "text",
  }, 
  {
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
    title: "סטטוס",
    col: "badge",
    value: "status",
    editable:true,
    type: "select",
    option: ["בוצע", "לא בוצע",],
    colors: ["green", "red",]
  },
  {
    title: "פעולות",
    col: "actions",
    files: true,
    value: "",
    editable: false,
    delete:true,
    type: "text",
  },
]

export const missionsObjSearch = [
  ["title", "כותרת"],
  ["mission", "משימה"],
  ["status", "סטטוס"],
]

export const missionsObjDateSearch = [
  ["time_to_do", "תאריך לידה"],
  ["Data_added", "תאריך הוצאת רשיון"],
]