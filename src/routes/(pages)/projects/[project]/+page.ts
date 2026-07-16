import type { PageLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';

export const load: PageLoad = ({ params }) => {
  const files = import.meta.glob('/src/lib/pages/projects/*.md', { query: '?raw', import: 'default' });
  const path = `/src/lib/pages/projects/${params.project}_${getLocale()}.md`;
  const contentPromise = files[path]?.() as Promise<string> | undefined;

  return {
    title: params.project,
    content: contentPromise,
    locale: getLocale(),
  };
};
