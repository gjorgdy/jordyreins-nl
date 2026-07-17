import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ route }) => {
  return {
    isHomePage: route.id === "/"
  };
};
