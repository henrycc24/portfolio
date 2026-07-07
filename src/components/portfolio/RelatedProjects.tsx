import * as React from 'react';
import classNames from 'classnames';
import Link from '../atoms/Link';
import { getProjectUrl } from '../../utils/project-url';
import { cardHoverClass, mapCardTitleHoverStyles } from '../../utils/card-hover-styles';
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
                        className={classNames(
                            'sb-card',
                            'group',
                            'block',
                            'bg-light-fg-dark',
                            'overflow-hidden',
                            cardHoverClass('shadow-plus-move-up', 'bg-light-fg-dark')
                        )}
                    >
                        {project.heroImage && (
                            <div className="overflow-hidden aspect-video bg-neutralAlt">
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}
                        <div className="p-5">
                            <h4 className="font-semibold">
                                <span className={classNames(mapCardTitleHoverStyles('thin-underline', 'bg-light-fg-dark'))}>
                                    {project.title}
                                </span>
                            </h4>
                        <p className="mt-2 text-sm text-dark/70 line-clamp-2">{project.summary}</p>
                        <TechStackTags tags={(project.tags || []).slice(0, 3)} className="mt-3" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
