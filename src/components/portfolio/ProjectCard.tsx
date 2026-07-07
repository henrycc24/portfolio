import * as React from 'react';
import Link from '../atoms/Link';
import { getProjectUrl } from '../../utils/project-url';
import TechStackTags from './TechStackTags';

type ProjectCardProps = {
    project: any;
    showCategory?: boolean;
};

export default function ProjectCard({ project, showCategory = true }: ProjectCardProps) {
    return (
        <Link
            href={getProjectUrl(project)}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-dark/10 bg-light transition hover:-translate-y-1 hover:border-dark/20 hover:shadow-lg"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutralAlt">
                {project.heroImage ? (
                    <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-wide text-dark/40">Image placeholder</div>
                )}
                {showCategory && project.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-light/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                        {project.category}
                    </span>
                )}
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold group-hover:underline">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-dark/70 line-clamp-3">{project.summary}</p>
                <TechStackTags tags={(project.tags || []).slice(0, 4)} className="mt-4" />
            </div>
        </Link>
    );
}
