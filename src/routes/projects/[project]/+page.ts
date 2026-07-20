import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime';
import type { PageLoad } from './$types';

export type Content = { text: string, isCurrentLocale: boolean };
export type Link = { icon: string, url: string };
export type Project = {
  title: string,
  source_code?: string;
  website?: string;
};

export const load: PageLoad = async ({ params }) => {
  let project: Project | undefined;


  const files = import.meta.glob('$lib/assets/projects/*/project.json', { query: '?raw', import: 'default' });
  for (const [path, file] of Object.entries(files)) {
    if (path.endsWith(`${params.project}/project.json`)) {
      project = JSON.parse(await file()) as Project;
      break;
    }
  }
  if (!project) error(404, { message: 'Project not found' });

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

  return { project, getContent, content: await getContent(getLocale()) };
};
