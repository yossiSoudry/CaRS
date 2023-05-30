import { URL_WORKERS } from "../../../../data/constants";
import { DataList } from "../../../forms/dataList";

export const formInputsMission = [

  {
    name: "for_id",
    placeholder: 'עובד',
    label: 'עבור',
    tag: 'dataList',
    data: (
      <DataList url={URL_WORKERS} info1={['name']} info2={['user_name']} info3={['company_role']} name='for_id' />
      ),
    },
  {
    name: "title",
    type: "search",
    label: "כותרת",
    tag: "input",
    required: true,
  },
  {
    name: "time_to_do",
    type: "date",
    label: "תאריך לביצוע",
    tag: "input",
    required: false,
  },
  {
    name: "mission",
    type: "search",
    label: "משימה",
    tag: "input",
    required: true,
  },
  {
    name: "remarks",
    type: "search",
    label: "הדגשות",
    tag: "input",
    required: false,
  },
  {
    name: "importance",
    type: "search",
    label: "דחיפות",
    tag: "input",
    required: false,
  },
]

export const missionValues = {
  for_id:{},
  title: '',
  time_to_do: '',
  mission: '',
  remarks: '',
  importance: '',
};