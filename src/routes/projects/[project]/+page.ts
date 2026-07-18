import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

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

  return { title };
};
