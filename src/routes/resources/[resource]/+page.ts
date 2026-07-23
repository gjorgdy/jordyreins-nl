import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {

  async function getContent(): Promise<string> {
    const files = import.meta.glob('$lib/assets/resources/*', { query: '?raw', import: 'default' });
    const file = files[`/src/lib/assets/resources/${params.resource}.md`];
    if (file) {
      return await file();
    }
    return '';
  };

  return { getContent };

};
