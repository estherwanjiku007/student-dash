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
    icon: <HiOutlineQuestionMarkCircle />
  },
  // Add login link if needed
  {
    key: 'login',
    label: 'Login',
    path: '/login',
    icon: <HiLogin />
  },
  // Add other links based on roles
];

// Bottom links
export const Dashboard_bottom_links = [
  {
    key: 'contact',
    label: 'Contact',
    path: '/contact',
    icon: <IoIosCall />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />
  },
];
