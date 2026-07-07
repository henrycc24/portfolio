import * as React from 'react';
import Link from '../atoms/Link';

type DownloadButtonProps = {
    label: string;
    file: string;
    className?: string;
};

export default function DownloadButton({ label, file, className = '' }: DownloadButtonProps) {
    return (
        <Link
            href={file}
            className={`inline-flex items-center gap-2 rounded-lg border border-dark/15 bg-light px-4 py-2 text-sm font-medium transition hover:border-dark hover:bg-neutralAlt ${className}`}
        >
            <span aria-hidden="true">↓</span>
            {label}
        </Link>
    );
}
