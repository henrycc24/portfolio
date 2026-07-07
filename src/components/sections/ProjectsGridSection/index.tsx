import * as React from 'react';
import ProjectCard from '../../portfolio/ProjectCard';

export default function ProjectsGridSection(props) {
    const { title, subtitle, projects = [], colors = 'bg-light-fg-dark', enableAnnotations, ...rest } = props;

    return (
        <section className={`px-4 py-16 sm:py-20 ${colors}`} {...rest}>
            <div className="mx-auto max-w-screen-2xl">
                {title && (
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        {typeof title === 'string' ? (
                            <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
                        ) : (
                            title?.text && <h2 className="text-3xl sm:text-4xl font-bold">{title.text}</h2>
                        )}
                        {subtitle && <p className="mt-4 text-dark/70">{subtitle}</p>}
                    </div>
                )}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
