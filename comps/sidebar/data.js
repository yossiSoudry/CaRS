import { AiOutlineCalendar, AiOutlineShoppingCart, AiFillCar } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiSettings } from 'react-icons/fi';
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
          name: 'pricing',
          hebrew: 'מחירונים',
          icon: <MdOutlinePriceChange />
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