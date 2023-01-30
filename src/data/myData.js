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
      // {
      //   name: 'area',
      //   icon: <AiOutlineAreaChart />,
      // },

      // {
      //   name: 'bar',
      //   icon: <AiOutlineBarChart />,
      // },
      // {
      //   name: 'pie',
      //   icon: <FiPieChart />,
      // },
      // {
      //   name: 'financial',
      //   icon: <RiStockLine />,
      // },
      // {
      //   name: 'color-mapping',
      //   icon: <BsBarChart />,
      // },
      // {
      //   name: 'pyramid',
      //   icon: <GiLouvrePyramid />,
      // },
      // {
      //   name: 'stacked',
      //   icon: <AiOutlineBarChart />,
      // },
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



export const themeColors = [
  {
    name: 'Primary',
    color: '#42a5f5',
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
