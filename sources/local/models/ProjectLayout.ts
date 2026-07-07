import { Model } from '@stackbit/types';

export const ProjectLayout: Model = {
    type: 'page',
    name: 'ProjectLayout',
    label: 'Project',
    labelField: 'title',
    filePath: 'content/pages/projects/{slug}.md',
    fieldGroups: [
        { name: 'metadata', label: 'Metadata', icon: 'gear' },
        { name: 'media', label: 'Media', icon: 'image' },
        { name: 'seo', label: 'SEO', icon: 'page' }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'summary',
            label: 'Summary',
            required: false,
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: false,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'list',
            name: 'tags',
            label: 'Tags',
            required: false,
            hidden: false,
            localized: false,
            items: { type: 'string' },
            group: 'metadata'
        },
        {
            type: 'string',
            name: 'role',
            label: 'Role',
            required: false,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'string',
            name: 'timeline',
            label: 'Timeline',
            required: false,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'list',
            name: 'collaborators',
            label: 'Collaborators',
            required: false,
            hidden: false,
            localized: false,
            items: { type: 'string' },
            group: 'metadata'
        },
        {
            type: 'string',
            name: 'heroImage',
            label: 'Hero Image',
            required: false,
            hidden: false,
            localized: false,
            group: 'media'
        },
        {
            type: 'string',
            name: 'heroVideo',
            label: 'Hero Video URL',
            required: false,
            hidden: false,
            localized: false,
            group: 'media'
        },
        {
            type: 'number',
            name: 'order',
            label: 'Sort Order',
            required: false,
            default: 100,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'boolean',
            name: 'featured',
            label: 'Featured',
            required: false,
            default: false,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'boolean',
            name: 'isDraft',
            label: 'Draft',
            required: false,
            default: false,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'slug',
            name: 'slug',
            label: 'Slug',
            required: true,
            hidden: false,
            localized: false,
            group: 'metadata'
        },
        {
            type: 'model',
            name: 'seo',
            label: 'SEO',
            required: false,
            hidden: false,
            localized: false,
            models: ['Seo'],
            group: 'seo'
        }
    ]
};
