import * as React from 'react';
import TechStackTags from './TechStackTags';
import VideoEmbed from './VideoEmbed';
import PlaceholderBlock from './PlaceholderBlock';

type ProjectHeroProps = {
    title: string;
    summary?: string;
    heroImage?: string;
    heroVideo?: string;
    tags?: string[];
};

export default function ProjectHero({ title, summary, heroImage, heroVideo, tags = [] }: ProjectHeroProps) {
    return (
        <section className="relative overflow-hidden bg-neutralAlt/30 border-b border-dark/5">
            <div className="absolute inset-0 engineering-grid opacity-40 pointer-events-none" aria-hidden="true" />
            <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:py-20 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dark/50 mb-4">Project</p>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
                        {summary && <p className="mt-4 text-lg text-dark/70 leading-relaxed">{summary}</p>}
                        <TechStackTags tags={tags} className="mt-6" />
                    </div>
                    <div>
                        {heroVideo ? (
                            <VideoEmbed url={heroVideo} title={`${title} demo`} />
                        ) : heroImage ? (
                            <div className="overflow-hidden rounded-xl border border-dark/10 shadow-lg sb-hero-float">
                                <img src={heroImage} alt={title} className="w-full aspect-video object-cover" />
                            </div>
                        ) : (
                            <PlaceholderBlock label="Hero Image / Video Placeholder" hint="Set heroImage or heroVideo in project frontmatter." />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
