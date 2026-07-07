import * as React from 'react';

type ResearchAdvisorListProps = {
    collaborators?: string[];
    title?: string;
};

export default function ResearchAdvisorList({ collaborators = [], title = 'Collaborators & Advisors' }: ResearchAdvisorListProps) {
    if (!collaborators.length) return null;
    return (
        <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-dark/50">{title}</dt>
            <dd className="mt-2 space-y-1">
                {collaborators.map((person) => (
                    <p key={person} className="text-sm">{person}</p>
                ))}
            </dd>
        </div>
    );
}
