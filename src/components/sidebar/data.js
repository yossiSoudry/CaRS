import { AiOutlineCalendar, AiOutlineShoppingCart, AiFillCar, AiOutlineInsurance } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiSettings } from 'react-icons/fi';
import { SiSpeedtest } from 'react-icons/si';
import { BsTools } from 'react-icons/bs';
import { VscChecklist } from 'react-icons/vsc';
import { RiContactsLine, RiAdminLine, RiListSettingsLine } from 'react-icons/ri';
import { MdOutlinePriceChange, MdPeopleOutline } from 'react-icons/md';

// Menu data
export const links = [
    {
      title: 'דשבורד',
      links: [
        {
          name: 'dashboard',
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
          name: 'pricing',
          hebrew: 'מחירונים',
          icon: <MdOutlinePriceChange />
        },
        {
          name: 'tests',
          hebrew: 'טסטים',
          icon: <SiSpeedtest />
        },
        {
          name: 'insurance',
          hebrew: 'ביטוחים',
          icon: <AiOutlineInsurance />
        },
        {
          name: 'treatments',
          hebrew: 'טיפולים',
          icon: <BsTools />
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
          name: 'orders',
          hebrew: 'הזמנות',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'drivers',
          hebrew: 'נהגים',
          icon: <MdPeopleOutline />,
        },
        // {
        //   name: 'calendar',
        //   hebrew: 'הזמנות',
        //   icon: <AiOutlineCalendar />,
        // },
      ],  
    },
    {
      title: 'מנהל',
      links: [
        {
          name: 'users',
          hebrew: 'משתמשים',
          icon: <RiAdminLine />,
        },
        {
          name: 'missions',
          hebrew: 'משימות',
          icon: <VscChecklist />,
        },
        {
          name: 'pricingManagement',
          hebrew: 'ניהול מחירונים',
          icon: <RiListSettingsLine />,
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