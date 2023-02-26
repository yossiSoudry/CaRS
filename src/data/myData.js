import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock, AiFillCar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart, FiSettings } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoMailRead } from 'react-icons/go';
import { FaTasks } from 'react-icons/fa';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine, RiAdminLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import Avatar from "@mui/material/Avatar";
import elazar from './images/try/elazar.png';
import avatar2 from './images/try/avatar2.jpg';
import avatar3 from './images/try/avatar3.png';
import avatar4 from './images/try/avatar4.jpg';




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


// Cars row data
export const carsRow = [
  {
    id: 1,
    licenseNumber: "85-510-85",
    manufacturer: "OPEL",
    model: "ASTRA",
    finish_level: "berlina",
    exp_ins: "01/06/2023",
    year: 2017,
    color: "כסוף",
    km: 67825,
    status: "פנוי",
    branch: "בני ברק",
    gas: "בנזין",
    lest_rteatment: "18/08/2022",
    code: "*1234",
  },
  {
    id: 2,
    licenseNumber: "361-89-202",
    manufacturer: "MITSUBISHI",
    model: "ATTRAGE",
    finish_level: "LX",
    exp_ins: "01/07/2023",
    year: 2021,
    color: "אפור",
    km: 21523,
    status: "השכרה",
    branch: "ירושלים",
    gas: "סולר",
    lest_rteatment: "01/01/2023",
    code: "*4422",
  },
  {
    id: 3,
    licenseNumber: "519-27-002",
    manufacturer: "CHEVROLET",
    model: "SPARK",
    finish_level: "Eco",
    exp_ins: "01/02/2024",
    year: 2022,
    color: "שחור",
    km: 70500,
    status: "מוסך",
    branch: "בני ברק",
    gas: "בנזין",
    lest_rteatment: "22/02/2023",
    code: "*6666",
  },
  {
    id: 4,
    licenseNumber: "69-525-34",
    manufacturer: "CITROEN",
    model: "BERLINGO",
    finish_level: "Maxi",
    exp_ins: "01/09/2023",
    year: 2016,
    color: "שמפניה",
    km: 160399,
    status: "השכרה",
    branch: "בני ברק",
    gas: "סולר",
    lest_rteatment: "10/10/2022",
    code: "X",
  },
  {
    id: 5,
    licenseNumber: "614-17-301",
    manufacturer: "FORD",
    model: "FOCUS",
    finish_level: "comfort",
    exp_ins: "30/11/2023",
    year: 2021,
    color: "שחור",
    km: 37201,
    status: "השכרה",
    branch: "בית שמש",
    gas: "היברידי",
    lest_rteatment: "06/06/2022",
    code: "*8520",
  },
  {
    id: 6,
    licenseNumber: "392-88-002",
    manufacturer: "HYUNDAI",
    model: "AIONIQ",
    finish_level: "EL",
    exp_ins: "30/11/2023",
    year: 2021,
    color: "בז'",
    km: 7652,
    status: "תקלה",
    branch: "בני ברק",
    gas: "היברידי",
    lest_rteatment: "01/01/2023",
    code: "*0258",
  },
  {
    id: 7,
    licenseNumber: "780-50-701",
    manufacturer: "HYUNDAI",
    model: "ACCENT",
    finish_level: "active",
    exp_ins: "01/01/2024",
    year: 2020,
    color: "לבן",
    km: 119025,
    status: "מוסך",
    branch: "מודיעין עילית",
    gas: "היברידי",
    lest_rteatment: "01/01/2023",
    code: "*1234",
  },
  {
    id: 8,
    licenseNumber: "741-01-402",
    manufacturer: "KIA",
    model: "CEED",
    finish_level: "active",
    exp_ins: "01/01/2024",
    year: 2021,
    color: "לבן",
    km: 20000,
    status: "פנוי",
    branch: "אלעד",
    gas: "היברידי",
    lest_rteatment: "01/01/2023",
    code: "*1234",
  },
  {
    id: 9,
    licenseNumber: "246-15-503",
    manufacturer: "MAZDA",
    model: "2",
    finish_level: "active",
    exp_ins: "01/01/2024",
    year: 2022,
    color: "לבן",
    km: 20000,
    status: "פנוי",
    branch: "אלעד",
    gas: "היברידי",
    lest_rteatment: "01/01/2023",
    code: "*1234",
  },
  {
    id: 10,
    licenseNumber: "202-24-701",
    manufacturer: "NISSAN",
    model: "SENTRA",
    finish_level: "active",
    exp_ins: "01/01/2024",
    year: 2018,
    color: "לבן",
    km: 20000,
    status: "פנוי",
    branch: "אלעד",
    gas: "היברידי",
    lest_rteatment: "01/01/2023",
    code: "*1234",
  },
  {
    id: 11,
    licenseNumber: "807-24-401",
    manufacturer: "TOYOTA",
    model: "COROLA",
    finish_level: "active",
    exp_ins: "01/01/2024",
    year: 2021,
    color: "לבן",
    km: 200000,
    status: "פנוי",
    branch: "אלעד",
    gas: "היברידי",
    lest_rteatment: "01/01/2023",
    code: "*1234",
  },
];


// Cars column data
export const carsColumn = [
  { field: "licenseNumber", headerName: "מס' רישוי", width: 120 },
  {
    width: 68,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: item => 
      // <Avatar
      // // key={item.row.manufacturer}
      // src={require(`../data/images/cars/${item.row.manufacturer.toLowerCase()}.png`)}
      // sx={{ width: 32, height: 28 }}
      // />
      <img
              className="rounded-full h-10 w-12 hover:scale-125 delay-50 duration-500"
              src={require(`../data/images/cars/${item.row.manufacturer.toLowerCase()}.png`)}
              alt={item.row.manufacturer}
              key={item.row.id}
              item={item}
            />
      
    },
    {
      field: "fullName",
      headerName: "דגם יצרן",
      description: "This column has a value getter and is not sortable.",
      width: 180,
      valueGetter: (params) =>
      `${params.row.manufacturer || ""} ${params.row.model || ""}`,
    },
    {
      field: "branch",
      headerName: "סניף",
      width: 120,
      editable: false,
    },
    {
      field: "gas",
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
      field: "lest_rteatment",
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


// Colors data
export const themeColors = [
  {
    name: 'Primary',
    color: '#727cf5',
  },
  {
    name: 'Secondary',
    color: '#ba68c8',
  },
  {
    name: 'Error',
    color: '#ef5350',
  },
  {
    name: 'Warning',
    color: '#ff9800',
  },
  {
    name: 'Info',
    color: '#03a9f4',
  },
  {
    name: 'Success',
    color: '#4caf50',
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
      avatar3,
    message: 'לקוח חדש נרשם',
    desc: 'אשר או דחה את ההצעה',
    time: '11:56',
  },
  {
    image:
      avatar4,
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
