import { CgProfile } from 'react-icons/cg';
import { GoMailRead } from 'react-icons/go';
import { FaTasks } from 'react-icons/fa';
import elazar from './images/try/elazar.png';
import yossi from "./images/try/yossi.jpeg";
import ofer from "./images/try/ofer.jpeg";

// export const carObjSearch = [
//   ["branch", "סניף"],
//   ["class", "דרגה"],
//   ["color", "צבע"],
//   ["deductible", "שנה"],
//   ["finish_level", "רמת גימור"],
//   ["fuel_type", "סוג דלק"],
//   ["km", "קמ"],
//   ["license_number", "מספר רכב"],
//   ["manufacturer_en", "שם החברה באנגלית"],
//   ["manufacturer_hb", "שם החברה בעברית"],
//   ["model_en", "דגם באנגלית"],
//   ["model_hb", "דגם בעברית"],
//   ["status", "סטטוס"],
//   ["year", "שנה"]
// ]

// export const carObjDateSearch = [
//   ["last_treatment", "טיפןל אחרון"],
//   ["date_join", "תאריך הצטרפות"],
//   ["exp_test", "תאריך טסט אחרון"],
//   ["date_next_treatment", "תאריך הטיפול הבא"],
//   ["exp_ins", "פקיעת ביטוח"]
// ]







// Colors data
export const themeColors = [
  {
    name: 'Error',
    color: '#ef5350',
  },
  {
    name: 'Warning',
    color: '#ff9800',
  },
  {
    name: 'Success',
    color: '#4caf50',
  },
  {
    name: 'Secondary',
    color: '#ba68c8',
  },
  {
    name: 'Primary',
    color: '#727cf5',
  },
  {
    name: 'Info',
    color: '#03a9f4',
  },
];

// User profile
// export const userProfileData = [
//   {
//     icon: <CgProfile />,
//     title: 'אזור אישי',
//     desc: 'הגדרות & מידע',
//     iconColor: '#03C9D7',
//     iconBg: '#E5FAFB',
//   },
//   {
//     icon: <GoMailRead />,
//     title: 'דואר נכנס',
//     desc: 'הודעות & מיילים',
//     iconColor: 'rgb(0, 194, 146)',
//     iconBg: 'rgb(235, 250, 242)',
//   },
//   {
//     icon: <FaTasks />,
//     title: 'משימות',
//     desc: 'תזכורות & מטלות',
//     iconColor: 'rgb(255, 244, 229)',
//     iconBg: 'rgb(254, 201, 15)',
//   },
// ];
export const userProfileData = [
  {
    icon: <CgProfile />,
    title: 'אזור אישי',
    desc: 'הגדרות & מידע',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    onClick:'user',
    dataToRender:['name','user_name','company_role','email','address','phone_number','date_join'],
    textToRender:['שם','שם משתמש','תפקיד','מייל','כתובת','טלפון','תאריך הצטרפות']
  },
  ]

// chat data
export const chatData = [
  {
    image:
    elazar,
    message: 'מסמכי הסבה',
    desc: 'לשים לב לדדליין',
    time: '9:08',
  },
  {
    image:
      ofer,
    message: 'לקוח חדש נרשם',
    desc: 'אשר או דחה את ההצעה',
    time: '11:56',
  },
  {
    image:
      yossi,
    message: 'פקיעת ביטוח',
    desc: 'לחדש ביטוחים לפני סוף החודש',
    time: '16:39',
  },
  { 
    image:
      'https://drive.google.com/uc?id=1ZAoWsW3OcrjwaItLxWr8CPQr3q4OaCn9&export=download',
    message: 'עדכון מחירון',
    desc: 'לעדכן מחירונים בהקדם',
    time: '18:12',
  },
];







