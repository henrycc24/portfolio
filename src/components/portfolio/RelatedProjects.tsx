import * as React from 'react';
import Link from '../atoms/Link';
import { getProjectUrl } from '../../utils/project-url';
import TechStackTags from './TechStackTags';

type RelatedProjectsProps = {
    projects?: any[];
};

export default function RelatedProjects({ projects = [] }: RelatedProjectsProps) {
    if (!projects.length) return null;

    return (
        <section>
            <h3 className="mb-6 text-2xl font-bold">Related Projects</h3>
            <div className="grid gap-4 md:grid-cols-3">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={getProjectUrl(project)}
                        className="group rounded-xl border border-dark/10 bg-light p-5 transition hover:border-dark/30 hover:shadow-md"
                    >
                        {project.heroImage && (
                            <div className="mb-4 overflow-hidden rounded-lg aspect-video bg-neutralAlt">
                                <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                            </div>
                        )}
                        <h4 className="font-semibold group-hover:underline">{project.title}</h4>
                        <p className="mt-2 text-sm text-dark/70 line-clamp-2">{project.summary}</p>
                        <TechStackTags tags={(project.tags || []).slice(0, 3)} className="mt-3" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
