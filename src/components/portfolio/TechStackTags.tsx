import * as React from 'react';

type TechStackTagsProps = {
    tags?: string[];
    className?: string;
};

export default function TechStackTags({ tags = [], className = '' }: TechStackTagsProps) {
    if (!tags.length) return null;
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-dark/10 bg-neutralAlt px-3 py-1 text-xs font-medium uppercase tracking-wide text-dark/80"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
