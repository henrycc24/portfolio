import * as React from 'react';

type VideoEmbedProps = {
    title?: string;
    url: string;
    type?: 'youtube' | 'vimeo' | 'mp4';
};

function getEmbedUrl(url: string, type?: string) {
    if (type === 'mp4' || url.endsWith('.mp4')) return url;
    if (type === 'vimeo' || url.includes('vimeo.com')) {
        const id = url.split('/').pop();
        return `https://player.vimeo.com/video/${id}`;
    }
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
}

export default function VideoEmbed({ title, url, type }: VideoEmbedProps) {
    const embedUrl = getEmbedUrl(url, type);
    const isMp4 = type === 'mp4' || url.endsWith('.mp4');

    return (
        <div className="overflow-hidden rounded-xl border border-dark/10 bg-dark">
            {isMp4 ? (
                <video controls className="w-full aspect-video" title={title}>
                    <source src={embedUrl} type="video/mp4" />
                </video>
            ) : (
                <iframe
                    src={embedUrl}
                    title={title || 'Embedded video'}
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
            {title && <p className="px-4 py-2 text-sm text-light/80 bg-dark">{title}</p>}
        </div>
    );
}
