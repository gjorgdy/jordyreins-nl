type Project = {
  id: string;
  title: string;
  banner: string;
  content: Record<string, string>;
  thumbnail: string;
  path: string;
};

export class Projects {

  static async get(id: string): Promise<Project | undefined> {
    const files = import.meta.glob('$lib/assets/projects/*/project.json', { query: '?raw', import: 'default' });
    for (const [path, file] of Object.entries(files)) {
      if (!path.endsWith(`${id}/project.json`)) continue;
      const data = JSON.parse(await file?.() ?? '{}') as Project;
      const strippedPath = path.replaceAll(/\/project\.json$/, '');
      return { ...data, id, path: strippedPath };
    }
  }

}
