import * as React from 'react';
import classNames from 'classnames';

import Section from '../Section';
import { Action } from '../../atoms';
import TitleBlock from '../../blocks/TitleBlock';
import ProjectCard from '../../portfolio/ProjectCard';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function FeaturedProjectsSection(props) {
    const {
        title,
        subtitle,
        projects = [],
        actions = [],
        hoverEffect = 'shadow-plus-move-up',
        colors = 'bg-neutral-fg-dark',
        styles = {},
        enableAnnotations
    } = props;

    return (
        <Section className="sb-component-featured-projects-section" colors={colors} styles={styles?.self}>
            <div className={classNames('w-full', mapStyles({ alignItems: styles?.self?.justifyContent ?? 'flex-start' }))}>
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dark/50">Featured Work</p>
                        {title && (
                            <TitleBlock
                                {...(typeof title === 'object' ? title : { text: title })}
                                className="mt-2"
                                {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                            />
                        )}
                        {subtitle && <p className="mt-3 text-lg text-dark/70">{subtitle}</p>}
                    </div>
                    {actions?.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {actions.map((action, i) => (
                                <Action key={i} {...action} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.slice(0, 4).map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            hoverEffect={hoverEffect}
                            cardColors="bg-light-fg-dark"
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
