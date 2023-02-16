interface MenuItem {
  title: string;
  route: string;
}

export const MENU_DATA: MenuItem[] = [
  {
    title: 'Trang chủ',
    route: '/'
  },
  {
    title: 'Công nghệ',
    route: '/technology'
  },
  {
    title: 'Dịch vụ',
    route: '/service'
  },
  {
    title: 'PR Studio',
    route: '/studio'
  },
  {
    title: 'Blog',
    route: '/blog'
  }
];
