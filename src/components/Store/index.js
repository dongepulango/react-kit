//recoil
import { atom, selector } from 'recoil';

//mobile nav state
export const mobileNavState = atom({
  key: 'mobileNavState',
  default: false,
});
//toggle mobile nav
export const mobileNavToggle = selector({
  key: 'mobileNavToggle',
  set: ({ get, set }) => {
    const currentState = get(mobileNavState);
    set(mobileNavState, !currentState);
  },
});
//close mobile nav
export const mobileNavClose = selector({
  key: 'mobileNavClose',
  set: ({ set }) => {
    set(mobileNavState, false);
  },
});