import * as React from 'react';
import classNames from 'classnames';
import Link from '../atoms/Link';
import { getProjectUrl } from '../../utils/project-url';
import { cardHoverClass, mapCardTitleHoverStyles } from '../../utils/card-hover-styles';
import TechStackTags from './TechStackTags';

type ProjectCardProps = {
    project: any;
    showCategory?: boolean;
    hoverEffect?: string;
    cardColors?: string;
    index?: number;
};

export default function ProjectCard({
    project,
    showCategory = true,
    hoverEffect = 'shadow-plus-move-up',
    cardColors = 'bg-light-fg-dark',
    index = 0
}: ProjectCardProps) {
    return (
        <Link
            href={getProjectUrl(project)}
            className={classNames(
                'sb-card',
                'group',
                'block',
                'overflow-hidden',
                cardColors,
                cardHoverClass(hoverEffect, cardColors)
            )}
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutralAlt">
                {project.heroImage ? (
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-wide text-dark/40 transition duration-300 group-hover:text-dark/60">
                        Image placeholder
                    </div>
                )}
                {showCategory && project.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-light/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm transition duration-200 group-hover:-translate-y-0.5">
                        {project.category}
                    </span>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold">
                    <span className={classNames(mapCardTitleHoverStyles('thin-underline', cardColors))}>{project.title}</span>
                </h3>
                <p className="mt-2 text-sm text-dark/70 line-clamp-3">{project.summary}</p>
                <TechStackTags tags={(project.tags || []).slice(0, 4)} className="mt-4" />
            </div>
        </Link>
    );
}
