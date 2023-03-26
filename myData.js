import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiFillCar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiSettings } from 'react-icons/fi';
import { BsKanban } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoMailRead } from 'react-icons/go';
import { FaTasks } from 'react-icons/fa';
import { BiColorFill } from 'react-icons/bi';
import { RiContactsLine, RiAdminLine } from 'react-icons/ri';
import elazar from './images/try/elazar.png';
import yossi from "./images/try/yossi.jpeg";
import ofer from "./images/try/ofer.jpeg";

// export const roles =[
//   {
//     id:1,
//     theRole:"admin",
//     theColor:"bg-green-300"
//   },
//   {
//     id:2,
//     theRole:"user",
//     theColor:"bg-lime-300"
//   },
//   {
//     id:4,
//     theRole:"dormant",
//     theColor:"bg-red-300"
//   },
//   {
//     id:4,
//     theRole:"pending",
//     theColor:"bg-yellow-300"
//   },
// ]


// Menu data
export const links = [
  {
    title: 'דשבורד',
    links: [
      {
        name: 'ecommerce',
        hebrew: 'סקירה כללית',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'רכבים',
    links: [
      {
        name: 'cars',
        hebrew: 'צי רכב',
        icon: <AiFillCar />,
      },
      {
        name: 'orders',
        hebrew: 'הזמנות',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'editor',
        hebrew: 'איתור',
        icon: <FiEdit />,
      },
    ],
  },
  {
    title: 'לקוחות',
    links: [
      {
        name: 'customers',
        hebrew: 'רשימת לקוחות',
        icon: <RiContactsLine />,
      },
      {
        name: 'calendar',
        hebrew: 'הזמנות',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'מנהל',
    links: [
      {
        name: 'permissions',
        hebrew: 'הרשאות',
        icon: <RiAdminLine />,
      },
      {
        name: 'users',
        hebrew: 'משתמשים',
        icon: <RiAdminLine />,
      },
    ],
  },
  {
    title: 'תחזוקה',
    links: [
      {
        name: 'settings',
        hebrew: 'הגדרות',
        icon: <FiSettings />,
      },
    ],
  },
];

// Cars column data
export const carsColumn = [
  { field: "license_number", headerName: "מס' רישוי", width: 120 },

  // {
  //   width: 68,
  //   editable: false,
  //   sortable: false,
  //   filterable: false,
  //   renderCell: item => 
  //     // <Avatar
  //     // // key={item.row.manufacturer}
  //     // src={require(`../data/images/cars/${item.row.manufacturer.toLowerCase()}.png`)}
  //     // sx={{ width: 32, height: 28 }}
  //     // />
  //     <img
  //             className="rounded-full h-10 w-12 hover:scale-125 delay-50 duration-500"
  //             src={require(`../data/images/cars/${item.row.manufacturer.toLowerCase()}.png`)}
  //             alt={item.row.manufacturer}
  //             key={item.row.id}
  //             item={item}
  //           />

  //   },
  {
    field: "fullName",
    headerName: "דגם יצרן",
    description: "This column has a value getter and is not sortable.",
    width: 180,
    valueGetter: (params) =>
      `${params.row.manufacturer_hb || ""} ${params.row.model_en || ""}`,
  },
  {
    field: "branch",
    headerName: "סניף",
    width: 120,
    editable: false,
  },
  {
    field: "fuel_type",
    headerName: "סוג דלק",
    width: 120,
    editable: false,
  },
  {
    field: "status",
    headerName: "סטטוס",
    width: 120,
    editable: false,
  },
  {
    field: "last_treatment",
    headerName: "טיפול אחרון",
    width: 120,
    editable: false,
  },
  {
    field: "exp_ins",
    headerName: "פקיעת ביטוח",
    width: 120,
    editable: false,
  },
  {
    field: "finish_level",
    headerName: "רמת גימור",
    width: 120,
    editable: false,
  },
  {
    field: "year",
    headerName: "שנתון",
    width: 100,
    editable: false,
  },
  {
    field: "color",
    headerName: "צבע",
    width: 100,
    editable: false,
  },
  {
    type: 'number',
    field: "km",
    headerName: "ק''מ",
    width: 80,
    editable: false,
  },
];

export const carsColumnData = [
  {
    id: 1,
    title: "יצרן ודגם",
    col: "fullName",
    editable: false,
    type: "text",

  },
  {
    id: 2,
    title: "מס' רישוי",
    col: "license_number",
    editable: false,
    type: "text",

  },
  {
    id: 3,
    title: "סניף",
    col: "branch",
    editable: false,
    type: "text",

  },
  {
    id: 4,
    title: "סוג דלק",
    col: "fuel_type",
    editable: false,
    type: "text",

  },
  {
    id: 5,
    title: "סטטוס",
    col: "status",
    editable: false,
    type: "text",

  },
  {
    id: 6,
    title: "טיפול אחרון",
    col: "last_treatment",
    editable: false,
    type: "text",

  },
  {
    id: 7,
    title: "פקיעת ביטוח",
    col: "exp_ins",
    editable: false,
    type: "text",

  },
  {
    id: 8,
    title: "רמת גימור",
    col: "finish_level",
    editable: false,
    type: "text",

  },
  {
    id: 9,
    title: "שנתון",
    col: "year",
    editable: false,
    type: "text",

  },
  {
    id: 10,
    title: "צבע",
    col: "color",
    editable: false,
    type: "text",

  },
  {
    id: 11,
    title: "ק''מ",
    col: "number",
    editable: false,
    type: "text",

  },
];


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
export const userProfileData = [
  {
    icon: <CgProfile />,
    title: 'אזור אישי',
    desc: 'הגדרות & מידע',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <GoMailRead />,
    title: 'דואר נכנס',
    desc: 'הודעות & מיילים',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FaTasks />,
    title: 'משימות',
    desc: 'תזכורות & מטלות',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

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
      elazar,
    message: 'עדכון מחירון',
    desc: 'לעדכן מחירונים בהקדם',
    time: '18:12',
  },
];

// form inputs for car adding
export const formInputsCar = [
    {
      id: 1,
      name: "manufacturer_en",
      type: "text",
      // placeholder: "יצרן",
      label: "manufacturer",
      tag: "input",
    },
    {
      id: 20,
      name: "manufacturer_hb",
      type: "text",
      // placeholder: "יצרן",
      label: "יצרן",
      tag: "input",
    },
    {
      id: 2,
      name: "model_en",
      type: "text",
      // placeholder: "דגם",
      label: "model",
      tag: "input",
    },
    {
      id: 21,
      name: "model_hb",
      type: "text",
      // placeholder: "דגם",
      label: "דגם",
      tag: "input",
    },
    {
      id: 3,
      name: "year",
      type: "text",
      // placeholder: "שנתון",
      label: "שנתון",
      tag: "input",
    },
    {
      id: 4,
      name: "color",
      type: "text",
      // placeholder: "צבע",
      label: "צבע",
      tag: "input",
    },
    {
      id: 5,
      name: "finish_level",
      type: "text",
      // placeholder: "רמת גימור",
      label: "רמת גימור",
      tag: "input",
    },
    {
      id: 6,
      name: "km",
      type: "number",
      // placeholder: "ק''מ",
      label: "ק''מ",
      tag: "input",
    },
    {
      id: 7,
      name: "status",
      type: "text",
      // placeholder: "סטטוס",
      label: "סטטוס",
      tag: "select",
      option: ["פנוי", "מוסך", "נמכר", "מושכר", "הושבת"]
    },
    {
      id: 8,
      name: "branch",
      type: "text",
      // placeholder: "סניף",
      label: "סניף",
      tag: "input",
    },
    {
      id: 9,
      name: "fuel_type",
      type: "text",
      // placeholder: "סוג דלק",
      label: "סוג דלק",
      tag: "input",
    },
    {
      id: 10,
      name: "exp_test",
      type: "date",
      // placeholder: "תוקף טסט",
      label: "תוקף טסט",
      tag: "input",
    },
    {
      id: 11,
      name: "exp_ins",
      type: "date",
      // placeholder: "תוקף ביטוח",
      label: "תוקף ביטוח",
      tag: "input",
    },
    {
      id: 12,
      name: "last_treatment",
      type: "date",
      // placeholder: "טיפול אחרון",
      label: "טיפול אחרון",
      tag: "input",
    },
    {
      id: 13,
      name: "km_next_treatment",
      type: "number",
      // placeholder: "ק''מ טיפול הבא",
      label: "ק''מ טיפול הבא",
      tag: "input",
    },
    {
      id: 14,
      name: "date_next_treatment",
      type: "date",
      // placeholder: "תאריך טיפול הבא",
      label: "תאריך טיפול הבא",
      tag: "input",
    },
    {
      id: 15,
      name: "class",
      type: "text",
      // placeholder: "דירוג",
      label: "דירוג",
      tag: "input",
    },
    {
      id: 16,
      name: "deductible",
      type: "number",
      // placeholder: "השתתפות עצמית",
      label: "השתתפות עצמית",
      tag: "input",
    },
    {
      id: 17,
      name: "coder",
      type: "text",
      // placeholder: "קודנית",
      label: "קודנית",
      tag: "input",
    },
];

// car values object
export const carValues = {
  license_number: "",
  manufacturer_en: "",
  manufacturer_hb: "",
  model_en: "",
  model_hb: "",
  year: "",
  color: "",
  finish_level: "",
  km: "",
  status: "",
  branch: "",
  fuel_type: "",
  exp_test: "",
  exp_ins: "",
  last_treatment: "",
  km_next_treatment: "",
  class: "",
  deductible: "",
  coder: "",
  img_manufacturer: "",
}

// Car companies in hebrew
export const carCompaniesEn =  {
  8: "LTTE",
  11: "Seat",
  19: "Audi",
  21: "Audi",
  32: "BMW",
  33: "Opel",
  49: "Mazda",
  57: "DS",
  63: "Renault",
  67: "Ivoco",
  70: "Buick",
  71: "Seat",
  74: "Alfa",
  76: "Opel",
  79: "Ford",
  82: "Volkswagen",
  92: "Isuzu",
  101: "Ivoco",
  103: "Opel",
  104: "Opel",
  114: "DaimlerChrysler",
  121: "Lancia",
  127: "Isuzu",
  136: "DaimlerChrysler",
  138: "Opel",
  139: "Mazda",
  143: "BMW",
  145: "Man",
  152: "Mercedes",
  155: "Honda",
  156: "Buick",
  174: "Hyundai",
  177: "Fiat",
  183: "Hammer",
  185: "Nissan",
  187: "Toyota",
  188: "Opel",
  189: "Buick",
  191: "Volkswagen",
  194: "DaimlerChrysler",
  197: "Mercedes",
  201: "GMC",
  219: "Lexus",
  226: "Volvo",
  229: "Dongfeng",
  234: "Gip",
  237: "Peugeot",
  239: "Jeep",
  253: "Hyundai",
  259: "Dodge",
  263: "Ford",
  268: "Audi",
  279: "Citroen",
  281: "Daihatsu",
  283: "Audi",
  285: "Dodge",
  288: "Daewoo",
  299: "Suzuki",
  301: "Volkswagen",
  305: "Kia",
  310: "Peugeot",
  312: "Honda",
  313: "Honda",
  318: "M.C.C.",
  322: "Suzuki",
  335: "Peugeot",
  338: "Mitsubishi",
  341: "Honda",
  346: "Honda",
  347: "Hammer",
  349: "Aston",
  351: "Dacia",
  361: "Volvo",
  380: "Suzuki",
  385: "Then",
  386: "Volvo",
  388: "Volvo",
  402: "Fiat",
  403: "Peugeot",
  404: "Lexus",
  412: "TC",
  413: "Toyota",
  416: "Kia",
  421: "Hyundai",
  423: "Seat",
  430: "Toyota",
  432: "Toyota",
  441: "Lamborghini",
  443: "MG",
  445: "Honda",
  450: "Telco",
  451: "Opel",
  452: "Cadillac",
  459: "Volkswagen",
  465: "Jaguar",
  481: "Hyundai",
  488: "Toyota",
  490: "Toyota",
  492: "Citroen",
  496: "Citroen",
  502: "Hyundai",
  503: "Great",
  504: "Da-tommaso",
  509: "Lincoln",
  513: "Lancia",
  516: "Citroen",
  518: "Fiat",
  527: "Toyota",
  531: "Mazda",
  542: "Subaru",
  544: "Dacia",
  551: "Audi",
  568: "Peugeot",
  571: "Volvo",
  588: "Mazda",
  590: "Mitsubishi",
  593: "Mercedes",
  601: "Honda",
  603: "Mitsubishi",
  609: "Suzuki",
  616: "DaimlerChrysler",
  624: "Nissan",
  634: "Nissan",
  637: "Nissan",
  640: "Honda",
  644: "Saab",
  647: "Nissan",
  650: "Subaru",
  653: "Nissan",
  657: "Smart",
  672: "Toyota",
  674: "Fiat",
  675: "Renault",
  676: "Skoda",
  678: "Fiat",
  683: "Suzuki",
  686: "Toyota",
  695: "BMW",
  697: "Seat",
  704: "Skoda",
  710: "Saab",
  711: "Renault",
  712: "Sangyong",
  715: "Volkswagen",
  722: "BMW",
  724: "Volkswagen",
  725: "Pontiac",
  727: "Volkswagen",
  728: "Ford",
  729: "Ford",
  730: "Ford",
  731: "Ford",
  734: "Ford",
  735: "Porsche",
  736: "Piagio",
  737: "Fiat",
  739: "Peugeot",
  743: "Peugeot",
  751: "Chevrolet",
  766: "Renault",
  770: "Ferrari",
  771: "Renault",
  775: "Ford",
  776: "Ford",
  778: "Seat",
  782: "Fiat",
  787: "Volkswagen",
  792: "Belgian",
  794: "Fiat",
  798: "Fiat",
  802: "Ford",
  806: "Mercedes",
  811: "Citroen",
  817: "Citroen",
  822: "Pigo",
  830: "Mercedes",
  833: "Fiat",
  839: "Toyota",
  840: "Cadillac",
  844: "Mazarti",
  845: "Hyundai",
  851: "Saab",
  855: "Chrysler",
  858: "Peugeot",
  862: "Citroen",
  863: "Toyota",
  869: "Chrysler",
  870: "Mercedes",
  885: "Kia",
  896: "Burg",
  899: "Chrysler",
  907: "Chrysler",
  910: "BMW",
  920: "Smart",
  925: "Mitsubishi",
  926: "Kia",
  928: "Renault",
  936: "J.M.",
  940: "Renault",
  941: "England",
  943: "Renault",
  961: "Chevrolet",
  962: "Chevrolet",
  968: "Opel",
  973: "Isuzu",
  977: "Smart",
  981: "Chevrolet",
  983: "Bentley",
  990: "Audi",
  1014: "BVD",
  1020: "Jeep",
  1029: "Gofel",
  1044: "Porsche",
  1049: "Peugeot",
  1106: "Nissan",
  1130: "Mercedes",
  1152: "Maxus",
  1169: "DFSK",
  1207: "Mercedes",
  1213: "G.I.C",
  1229: "Tesla",
  1231: "GIC",
  1236: "Eways",
  1242: "Toyota",
  1245: "Landrover",
  1246: "Slovak",
  1276: "BMW",
  1283: "Central",
  1286: "Toyota",
  1287: "Jeep",
  1294: "SERES",
  1318: "Ford",
  1321: "Ages",
  1327: "Tesla",
  1331: "L.I.V.C",
  1334: "Mercedes",
  1341: "Toyota",
  1346: "Link",
  1349: "BMW",
  1356: "Seat",
  1358: "Skyvel",
  1364: "Karma",
  1365: "Citroen",
  1378: "Ford",
  1381: "F.A.W",
  1384: "DS",
  1394: "Dacia",
  1414: "Polstar",
  1417: "Tesla",
  1422: "Jaguar",
  1426: "Ora",
  1427: "Peugeot",
  1434: "Ioyaisi",
  1435: "Volkswagen",
  1436: "Lipmotor",
  1437: "Mazda",
  1450: "Cherry",
  1455: "Volkswagen",
  1465: "Dongfeng",
  1468: "Via",
}
