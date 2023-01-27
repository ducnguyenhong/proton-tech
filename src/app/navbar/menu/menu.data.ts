import { FaBlog, FaGlobeAmericas, FaHome, FaMobileAlt, FaShareAlt } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface MenuItem {
  title: string;
  route?: string;
  icon?: IconType;
  subs?: MenuItem[];
}

export const MENU_DATA: MenuItem[] = [
  {
    title: 'Trang chủ',
    route: '/',
    icon: FaHome
  },
  {
    title: 'Website',
    route: '/website',
    icon: FaGlobeAmericas
  },
  {
    title: 'Mobile App',
    route: '/mobile-app',
    icon: FaMobileAlt
  },
  {
    title: 'Dịch vụ',
    route: '/service',
    icon: FaShareAlt
  },
  {
    title: 'Blog',
    route: '/blog',
    icon: FaBlog
  }
];
