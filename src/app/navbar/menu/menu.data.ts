interface MenuItem {
  title: string;
  route: string;
}

export const MENU_DATA: MenuItem[] = [
  {
    title: 'Home',
    route: '/'
  },
  {
    title: 'Technology',
    route: '/technology'
  },
  {
    title: 'Service',
    route: '/service'
  },
  {
    title: 'Studio',
    route: '/studio'
  },
  {
    title: 'Blog',
    route: '/blog'
  }
];
