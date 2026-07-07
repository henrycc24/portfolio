import * as React from 'react';
import classNames from 'classnames';

import Section from '../Section';
import TitleBlock from '../../blocks/TitleBlock';
import ProjectCard from '../../portfolio/ProjectCard';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function ProjectsGridSection(props) {
    const {
        title,
        subtitle,
        projects = [],
        hoverEffect = 'shadow-plus-move-up',
        colors = 'bg-light-fg-dark',
        styles = {},
        enableAnnotations
    } = props;

    return (
        <Section className="sb-component-projects-grid-section" colors={colors} styles={styles?.self}>
            <div className={classNames('w-full', mapStyles({ alignItems: styles?.self?.justifyContent ?? 'flex-start' }))}>
                {(title || subtitle) && (
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        {title &&
                            (typeof title === 'string' ? (
                                <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
                            ) : (
                                <TitleBlock {...title} {...(enableAnnotations && { 'data-sb-field-path': '.title' })} />
                            ))}
                        {subtitle && <p className="mt-4 text-lg text-dark/70">{subtitle}</p>}
                    </div>
                )}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} hoverEffect={hoverEffect} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
