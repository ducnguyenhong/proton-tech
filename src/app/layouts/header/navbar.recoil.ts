import { atom } from 'recoil';

export const activeNavbarAtom = atom<boolean>({
  key: 'ACTIVE_NAB_BAR_ATOM',
  default: false
});
