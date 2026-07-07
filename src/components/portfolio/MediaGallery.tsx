import * as React from 'react';
import ImageWithCaption from './ImageWithCaption';
import PlaceholderBlock from './PlaceholderBlock';

type GalleryItem = {
    type?: string;
    src?: string;
    caption?: string;
};

type MediaGalleryProps = {
    items?: GalleryItem[];
    title?: string;
};

export default function MediaGallery({ items = [], title = 'Media Gallery' }: MediaGalleryProps) {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
    const images = items.filter((item) => item.src);

    return (
        <section>
            <h3 className="mb-6 text-2xl font-bold">{title}</h3>
            {images.length === 0 ? (
                <PlaceholderBlock
                    label="Media Gallery Placeholder"
                    hint="Add gallery items in project frontmatter: gallery: [{ type: image, src: /images/projects/slug/photo.jpg, caption: ... }]"
                />
            ) : (
                <>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {images.map((item, index) => (
                            <button
                                key={`${item.src}-${index}`}
                                type="button"
                                className="text-left transition hover:opacity-90"
                                onClick={() => setActiveIndex(index)}
                            >
                                <ImageWithCaption src={item.src!} alt={item.caption} caption={item.caption} />
                            </button>
                        ))}
                    </div>
                    {activeIndex !== null && images[activeIndex] && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4"
                            onClick={() => setActiveIndex(null)}
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                                <img
                                    src={images[activeIndex].src}
                                    alt={images[activeIndex].caption || 'Gallery image'}
                                    className="max-h-[80vh] w-full object-contain rounded-lg"
                                />
                                {images[activeIndex].caption && (
                                    <p className="mt-3 text-center text-light">{images[activeIndex].caption}</p>
                                )}
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}
