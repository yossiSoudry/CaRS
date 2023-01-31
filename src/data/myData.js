import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock, AiFillCar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart, FiSettings } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine, RiAdminLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';




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


// Cars data
export const cars = [
  {
    id: 1,
    licenseNumber: "85-510-85",
    manufacturer: "OPEL",
    model: "ASTRA",
    year: 2017,
  },
  {
    id: 2,
    licenseNumber: "361-89-202",
    manufacturer: "MITSUBISHI",
    model: "ATTRAGE",
    year: 2021,
  },
  {
    id: 3,
    licenseNumber: "519-27-002",
    manufacturer: "CHEVROLET",
    model: "SPARK",
    year: 2022,
  },
  {
    id: 4,
    licenseNumber: "69-525-34",
    manufacturer: "CITROEN",
    model: "BERLINGO",
    year: 2016,
  },
  {
    id: 5,
    licenseNumber: "614-17-301",
    manufacturer: "FORD",
    model: "FOCUS",
    year: 2021,
  },
  {
    id: 6,
    licenseNumber: "392-88-002",
    manufacturer: "HYUNDAI",
    model: "AIONIQ",
    year: 2021,
  },
  {
    id: 7,
    licenseNumber: "780-50-701",
    manufacturer: "HYUNDAI",
    model: "ACCENT",
    year: 2020,
  },
  {
    id: 8,
    licenseNumber: "741-01-402",
    manufacturer: "KIA",
    model: "CEED",
    year: 2021,
  },
  {
    id: 9,
    licenseNumber: "246-15-503",
    manufacturer: "MAZDA",
    model: "2",
    year: 2022,
  },
  {
    id: 10,
    licenseNumber: "202-24-701",
    manufacturer: "NISSAN",
    model: "SENTRA",
    year: 2018,
  },
  {
    id: 11,
    licenseNumber: "807-24-401",
    manufacturer: "TOYOTA",
    model: "COROLA",
    year: 2021,
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
