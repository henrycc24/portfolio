import { allContent } from './local-content';

export function getAllProjects() {
    const { objects } = allContent();
    return objects
        .filter((obj) => obj.__metadata?.modelName === 'ProjectLayout' && !obj.isDraft)
        .sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
}

export function getFeaturedProjects(limit = 4) {
    return getAllProjects()
        .filter((p) => p.featured)
        .slice(0, limit);
}

export function getResearchProjects() {
    return getAllProjects().filter((p) => (p.category || '').toLowerCase().includes('research'));
}

export function getClassProjects() {
    return getAllProjects().filter((p) => (p.category || '').toLowerCase().includes('class'));
}

export function getRelatedProjects(currentSlug, tags = [], limit = 3) {
    const tagSet = new Set(tags || []);
    return getAllProjects()
        .filter((p) => p.slug !== currentSlug)
        .map((p) => ({
            project: p,
            score: (p.tags || []).filter((t) => tagSet.has(t)).length
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ project }) => project);
}
