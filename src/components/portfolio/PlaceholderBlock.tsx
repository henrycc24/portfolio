import * as React from 'react';

type PlaceholderBlockProps = {
    label: string;
    hint?: string;
    aspectRatio?: string;
    className?: string;
};

export default function PlaceholderBlock({ label, hint, aspectRatio = '16/9', className = '' }: PlaceholderBlockProps) {
    return (
        <div
            className={`rounded-xl border-2 border-dashed border-neutralAlt bg-neutralAlt/40 flex flex-col items-center justify-center text-center p-8 ${className}`}
            style={{ aspectRatio }}
        >
            <p className="text-sm font-semibold uppercase tracking-wide text-dark/70">{label}</p>
            {hint && <p className="mt-2 text-sm text-dark/50 max-w-md">{hint}</p>}
        </div>
    );
}
