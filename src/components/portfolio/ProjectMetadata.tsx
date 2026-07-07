import * as React from 'react';
import Link from '../atoms/Link';
import ProjectTimeline from './ProjectTimeline';
import ResearchAdvisorList from './ResearchAdvisorList';

type ProjectLink = {
    label: string;
    url: string;
};

type ProjectMetadataProps = {
    role?: string;
    timeline?: string;
    collaborators?: string[];
    links?: ProjectLink[];
};

export default function ProjectMetadata({ role, timeline, collaborators, links = [] }: ProjectMetadataProps) {
    return (
        <section className="border-b border-dark/5 bg-light">
            <div className="mx-auto max-w-screen-2xl px-4 py-8 lg:px-8">
                <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {role && (
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-wide text-dark/50">My Role</dt>
                            <dd className="mt-1 text-sm">{role}</dd>
                        </div>
                    )}
                    <ProjectTimeline timeline={timeline} />
                    <ResearchAdvisorList collaborators={collaborators} />
                </dl>
                {links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {links.map((link) => (
                            <Link
                                key={link.url}
                                href={link.url}
                                className="inline-flex items-center rounded-lg border border-dark/15 px-4 py-2 text-sm font-medium hover:bg-neutralAlt transition"
                            >
                                {link.label} →
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
