import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime';
import type { PageLoad } from './$types';

export type Content = { text: string, isCurrentLocale: boolean };

export const load: PageLoad = async ({ params }) => {

  const title = await (async () => {
    const files = import.meta.glob('$lib/assets/projects/*/project.json', { query: '?raw', import: 'default' });
    for (const [path, file] of Object.entries(files)) {
      if (path.endsWith(`${params.project}/project.json`)) {
        const data = JSON.parse(await file()) as { title: string };
        return data.title;
      }
    }
    return error(404, { message: 'Project not found' });
  })();

  async function getContent(locale: string): Promise<Content|undefined> {
    const langPref: string[] = locale === 'en' ? ['en', 'nl'] : ['nl', 'en'];
    const files = import.meta.glob('$lib/assets/projects/*/*', { query: '?raw', import: 'default' });
    for (const lang in langPref) {
      const file = files[`/src/lib/assets/projects/${params.project}/content_${langPref[lang]}.md`];
      if (file) {
        return { isCurrentLocale: langPref[lang] === locale, text: await file() } as Content;
      }
    }
    return undefined;
  };

  return { title, getContent, content: await getContent(getLocale()) };
};
