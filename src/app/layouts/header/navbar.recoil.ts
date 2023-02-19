import { atom } from 'recoil';

export const activeNavbarAtom = atom<boolean>({
  key: 'ACTIVE_NAVBAR_ATOM',
  default: new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
    }
    resolve(window.pageYOffset > 50);
  })
});
