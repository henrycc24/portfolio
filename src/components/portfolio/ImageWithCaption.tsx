import * as React from 'react';

type ImageWithCaptionProps = {
    src: string;
    alt?: string;
    caption?: string;
    className?: string;
};

export default function ImageWithCaption({ src, alt = '', caption, className = '' }: ImageWithCaptionProps) {
    return (
        <figure className={`overflow-hidden rounded-xl border border-dark/10 bg-light ${className}`}>
            <div className="relative aspect-video w-full bg-neutralAlt">
                <img src={src} alt={alt || caption || 'Project image'} className="h-full w-full object-cover" loading="lazy" />
            </div>
            {caption && <figcaption className="px-4 py-3 text-sm text-dark/70 border-t border-dark/5">{caption}</figcaption>}
        </figure>
    );
}
