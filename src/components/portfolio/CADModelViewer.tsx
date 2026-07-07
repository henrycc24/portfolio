import * as React from 'react';
import PlaceholderBlock from './PlaceholderBlock';
import DownloadButton from './DownloadButton';

type DownloadLink = { label: string; file: string };

type CADModelViewerProps = {
    modelPath?: string;
    posterImage?: string;
    alt?: string;
    title?: string;
    caption?: string;
    downloadLinks?: DownloadLink[];
};

export default function CADModelViewer({
    modelPath,
    posterImage,
    alt,
    title,
    caption,
    downloadLinks = []
}: CADModelViewerProps) {
    const [autoRotate, setAutoRotate] = React.useState(true);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!modelPath) return;
        import('@google/model-viewer').catch(() => undefined);
    }, [modelPath]);

    return (
        <div className="rounded-xl border border-dark/10 bg-neutralAlt/30 p-4 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    {title && <h4 className="font-semibold">{title}</h4>}
                    {caption && <p className="text-sm text-dark/60 mt-1">{caption}</p>}
                </div>
                {modelPath && (
                    <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" checked={autoRotate} onChange={(e) => setAutoRotate(e.target.checked)} />
                        Auto-rotate
                    </label>
                )}
            </div>

            {modelPath ? (
                <div className="relative rounded-lg overflow-hidden bg-neutralAlt min-h-[320px]">
                    {!loaded && (
                        <div className="absolute inset-0 flex items-center justify-center text-sm text-dark/50">Loading 3D model…</div>
                    )}
                    {/* @ts-expect-error model-viewer web component */}
                    <model-viewer
                        src={modelPath}
                        poster={posterImage}
                        alt={alt || title || '3D model'}
                        camera-controls
                        auto-rotate={autoRotate ? '' : undefined}
                        shadow-intensity="1"
                        exposure="1"
                        style={{ width: '100%', height: '420px', background: '#ececec' }}
                        onLoad={() => setLoaded(true)}
                    />
                </div>
            ) : (
                <PlaceholderBlock
                    label="3D Model Placeholder"
                    hint="Add a .glb or .gltf file to public/models/[project-slug]/ and set model.glb in the project frontmatter."
                    aspectRatio="16/9"
                />
            )}

            {downloadLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {downloadLinks.map((link) => (
                        <DownloadButton key={link.file} label={link.label} file={link.file} />
                    ))}
                </div>
            )}
        </div>
    );
}
