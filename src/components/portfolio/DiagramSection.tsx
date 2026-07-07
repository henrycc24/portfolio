import * as React from 'react';
import ImageWithCaption from './ImageWithCaption';
import PlaceholderBlock from './PlaceholderBlock';

type Diagram = {
    src?: string;
    caption?: string;
    title?: string;
};

type DiagramSectionProps = {
    title: string;
    description?: string;
    diagrams?: Diagram[];
};

export default function DiagramSection({ title, description, diagrams = [] }: DiagramSectionProps) {
    return (
        <section>
            <h3 className="mb-3 text-2xl font-bold">{title}</h3>
            {description && <p className="mb-6 text-dark/70 leading-relaxed">{description}</p>}
            {diagrams.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                    {diagrams.map((diagram, index) =>
                        diagram.src ? (
                            <ImageWithCaption key={index} src={diagram.src} caption={diagram.caption || diagram.title} alt={diagram.title} />
                        ) : (
                            <PlaceholderBlock key={index} label={diagram.title || 'Diagram Placeholder'} hint={diagram.caption} />
                        )
                    )}
                </div>
            ) : (
                <PlaceholderBlock
                    label="Diagram Placeholder"
                    hint="Add block diagrams, wiring diagrams, signal flow, or ROS architecture images to public/images/projects/[slug]/ and reference them in frontmatter."
                />
            )}
        </section>
    );
}
