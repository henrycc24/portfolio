import * as React from 'react';
import DownloadButton from './DownloadButton';
import PlaceholderBlock from './PlaceholderBlock';

type PdfItem = {
    title: string;
    file: string;
};

type PDFEmbedProps = {
    pdfs?: PdfItem[];
    title?: string;
};

export default function PDFEmbed({ pdfs = [], title = 'Documents & Reports' }: PDFEmbedProps) {
    return (
        <section>
            <h3 className="mb-6 text-2xl font-bold">{title}</h3>
            {pdfs.length === 0 ? (
                <PlaceholderBlock
                    label="PDF / Report Placeholder"
                    hint="Add PDFs to public/pdfs/[project-slug]/ and list them in frontmatter under pdfs: [{ title, file }]"
                />
            ) : (
                <div className="space-y-6">
                    {pdfs.map((pdf) => (
                        <div key={pdf.file} className="rounded-xl border border-dark/10 overflow-hidden bg-light">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dark/5 px-4 py-3">
                                <p className="font-medium">{pdf.title}</p>
                                <DownloadButton label="Download PDF" file={pdf.file} />
                            </div>
                            <iframe src={pdf.file} title={pdf.title} className="w-full h-[480px] bg-neutralAlt" />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
