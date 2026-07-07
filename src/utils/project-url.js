export function getProjectUrl(project) {
    const slug = (project.slug || '').replace(/^\/+/, '');
    return `/projects/${slug}/`;
}
