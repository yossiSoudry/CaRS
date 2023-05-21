import { AiOutlineCalendar, AiOutlineShoppingCart, AiFillCar, AiOutlineInsurance } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiSettings } from 'react-icons/fi';
import { SiSpeedtest } from 'react-icons/si';
import { BsKanban } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { RiContactsLine, RiAdminLine } from 'react-icons/ri';
import { MdOutlinePriceChange } from 'react-icons/md';

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
          name: 'orders',
          hebrew: 'הזמנות',
          icon: <AiOutlineShoppingCart />,
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