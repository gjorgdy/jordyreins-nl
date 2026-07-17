import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageLoad = ({ params }) => {
  const paths = import.meta.glob('$lib/assets/projects/*/*', { eager: true, query: '?url', import: 'default' });
  const exists = Object.entries(paths).some((e): boolean => e[0].includes(`${params.project}/content`));

  if (!exists) {
    return error(404, { message: 'Project not found' });
  }

  return {
    title: params.project,
    locale: getLocale(),
  };
};
