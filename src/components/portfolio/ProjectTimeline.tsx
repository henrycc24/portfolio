import * as React from 'react';

type ProjectTimelineProps = {
    timeline?: string;
};

export default function ProjectTimeline({ timeline }: ProjectTimelineProps) {
    if (!timeline) return null;
    return (
        <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-dark/50">Timeline</dt>
            <dd className="mt-1 text-sm">{timeline}</dd>
        </div>
    );
}
