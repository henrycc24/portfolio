import * as React from 'react';
import Link from '../../atoms/Link';
import ProjectCard from '../../portfolio/ProjectCard';

export default function FeaturedProjectsSection(props) {
    const { title, subtitle, projects = [], actions = [], colors = 'bg-neutral-fg-dark', ...rest } = props;

    return (
        <section className={`px-4 py-16 sm:py-20 ${colors}`} {...rest}>
            <div className="mx-auto max-w-screen-2xl">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dark/50">Featured Work</p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title?.text || title || 'Selected Projects'}</h2>
                        {subtitle && <p className="mt-3 text-dark/70 max-w-2xl">{subtitle}</p>}
                    </div>
                    {actions?.map((action, i) => (
                        <Link key={i} href={action.url || '/projects/'} className="sb-component-button sb-component-button-secondary">
                            {action.label}
                        </Link>
                    ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.slice(0, 4).map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
