import * as React from 'react';
import Markdown from 'markdown-to-jsx';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import ProjectHero from '../../portfolio/ProjectHero';
import ProjectMetadata from '../../portfolio/ProjectMetadata';
import DiagramSection from '../../portfolio/DiagramSection';
import CADModelViewer from '../../portfolio/CADModelViewer';
import ResultsStats from '../../portfolio/ResultsStats';
import MediaGallery from '../../portfolio/MediaGallery';
import PDFEmbed from '../../portfolio/PDFEmbed';
import VideoEmbed from '../../portfolio/VideoEmbed';
import RelatedProjects from '../../portfolio/RelatedProjects';

export default function ProjectLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const {
        title,
        summary,
        tags = [],
        role,
        timeline,
        collaborators = [],
        heroImage,
        heroVideo,
        links = [],
        markdown_content,
        diagrams = {},
        model = {},
        stats = [],
        gallery = [],
        videos = [],
        pdfs = [],
        relatedProjects = []
    } = page;

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-project-layout">
                <ProjectHero title={title} summary={summary} heroImage={heroImage} heroVideo={heroVideo} tags={tags} />
                <ProjectMetadata role={role} timeline={timeline} collaborators={collaborators} links={links} />

                <div className="mx-auto max-w-screen-2xl px-4 py-16 lg:px-8">
                    <div className="max-w-3xl mx-auto sb-markdown mb-16">
                        {markdown_content && (
                            <Markdown options={{ forceBlock: true }} {...(enableAnnotations && { 'data-sb-field-path': 'markdown_content' })}>
                                {markdown_content}
                            </Markdown>
                        )}
                    </div>

                    <div className="space-y-16 max-w-5xl mx-auto">
                        <DiagramSection
                            title="System Architecture"
                            description={diagrams.architecture?.description}
                            diagrams={diagrams.architecture?.items}
                        />
                        <DiagramSection
                            title="Hardware / Electrical Design"
                            description={diagrams.hardware?.description}
                            diagrams={diagrams.hardware?.items}
                        />
                        <CADModelViewer
                            modelPath={model.glb}
                            posterImage={model.poster || heroImage}
                            title={model.title || 'Mechanical / CAD Design'}
                            caption={model.caption}
                            downloadLinks={model.downloads}
                        />
                        <DiagramSection
                            title="Software / Firmware / Algorithms"
                            description={diagrams.software?.description}
                            diagrams={diagrams.software?.items}
                        />
                        <ResultsStats stats={stats} />
                        {videos.length > 0 && (
                            <section>
                                <h3 className="mb-6 text-2xl font-bold">Videos</h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {videos.map((video) => (
                                        <VideoEmbed key={video.url} title={video.title} url={video.url} type={video.type} />
                                    ))}
                                </div>
                            </section>
                        )}
                        <MediaGallery items={gallery} />
                        <PDFEmbed pdfs={pdfs} />
                        <RelatedProjects projects={relatedProjects} />
                    </div>
                </div>
            </main>
        </BaseLayout>
    );
}
