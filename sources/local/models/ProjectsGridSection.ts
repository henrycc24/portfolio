import { Model } from '@stackbit/types';

export const ProjectsGridSection: Model = {
    type: 'object',
    name: 'ProjectsGridSection',
    label: 'Projects Grid',
    fields: [
        { type: 'string', name: 'title', label: 'Title', required: false },
        { type: 'string', name: 'subtitle', label: 'Subtitle', required: false },
        { type: 'string', name: 'filter', label: 'Filter (all/research/class)', required: false },
        { type: 'enum', name: 'colors', label: 'Colors', required: false, options: [{ label: 'Light', value: 'bg-light-fg-dark' }, { label: 'Neutral', value: 'bg-neutral-fg-dark' }] }
    ]
};

export const FeaturedProjectsSection: Model = {
    type: 'object',
    name: 'FeaturedProjectsSection',
    label: 'Featured Projects',
    fields: [
        { type: 'model', name: 'title', label: 'Title', models: ['TitleBlock'], required: false },
        { type: 'string', name: 'subtitle', label: 'Subtitle', required: false },
        { type: 'number', name: 'limit', label: 'Limit', required: false, default: 4 },
        { type: 'enum', name: 'colors', label: 'Colors', required: false, options: [{ label: 'Light', value: 'bg-light-fg-dark' }, { label: 'Neutral', value: 'bg-neutral-fg-dark' }] }
    ]
};
