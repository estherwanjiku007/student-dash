import { HiOutlineLogout, HiCollection, HiLogin, HiHome, HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { IoIosCall, IoMdSettings } from 'react-icons/io';

// Sidebar links
export const DashBoard_Sidebar_Links = [
  {
    key: 'home',
    label: 'Home',
    path: '/',
    icon: <HiHome />
  },
  
  {
    key: 'about',
    label: 'About',
    path: '/about',
    icon: <HiCollection />
  },
  {
    key: 'contacts',
    label: 'Contacts',
    path: '/contacts',
    icon: <IoIosCall />
  },
  {
    key: 'login',
    label: 'Login',
    path: '/login',
    icon: <HiLogin />
  }
];

// Bottom links
export const Dashboard_bottom_links = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />
  },
  
];
