import { FaBlog, FaGlobeAmericas, FaHome, FaMobileAlt, FaShareAlt } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface MenuItem {
  title: string;
  route: string;
  icon?: IconType;
}

export const MENU_DATA: MenuItem[] = [
  {
    title: 'Trang chủ',
    route: '/',
    icon: FaHome
  },
  {
    title: 'Website',
    route: '/dich-vu-website',
    icon: FaGlobeAmericas
  },
  {
    title: 'Mobile App',
    route: '/dich-vu-mobile-app',
    icon: FaMobileAlt
  },
  {
    title: 'Dịch vụ',
    route: '/danh-sach-dich-vu',
    icon: FaShareAlt
  },
  {
    title: 'Blog',
    route: '/blog',
    icon: FaBlog
  }
];
