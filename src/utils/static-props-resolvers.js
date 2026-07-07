import {
    getRootPagePath,
    resolveReferences,
    getAllPostsSorted,
    getAllNonFeaturedPostsSorted,
    getAllCategoryPostsSorted,
    getPagedItemsForPage,
    isPublished,
    mapDeepAsync
} from './data-utils';
import { getAllProjects, getFeaturedProjects, getResearchProjects, getClassProjects, getRelatedProjects } from './project-utils';

export function resolveStaticProps(urlPath, data) {
    // get root path of paged path: /blog/page/2 => /blog
    const rootUrlPath = getRootPagePath(urlPath);
    const { __metadata, ...rest } = data.pages.find((page) => page.__metadata.urlPath === rootUrlPath);
    const props = {
        page: {
            __metadata: {
                ...__metadata,
                // override urlPath in metadata with paged path: /blog => /blog/page/2
                urlPath
            },
            ...rest
        },
        ...data.props
    };
    return mapDeepAsync(
        props,
        async (value, keyPath, stack) => {
            const objectType = value?.__metadata?.modelName;
            if (objectType && StaticPropsResolvers[objectType]) {
                const resolver = StaticPropsResolvers[objectType];
                return resolver(value, data, { keyPath, stack });
            }
            return value;
        },
        { postOrder: true }
    );
}

const StaticPropsResolvers = {
    ProjectLayout: (props) => {
        return {
            ...props,
            relatedProjects: getRelatedProjects(props.slug, props.tags, 3)
        };
    },
    PageLayout: (props) => {
        const slug = props.slug || '/';
        if (slug === '/projects' || slug === 'projects') {
            return { ...props, allProjects: getAllProjects() };
        }
        if (slug === '/research' || slug === 'research') {
            return { ...props, researchProjects: getResearchProjects() };
        }
        if (slug === '/classes' || slug === 'classes') {
            return { ...props, classProjects: getClassProjects() };
        }
        if (slug === '/' || slug === '') {
            return { ...props, featuredProjects: getFeaturedProjects(4) };
        }
        return props;
    },
    ProjectsGridSection: (props, data, debugContext) => {
        const projects = props.filter === 'research' ? getResearchProjects() : props.filter === 'class' ? getClassProjects() : getAllProjects();
        return { ...props, projects };
    },
    FeaturedProjectsSection: (props) => {
        return {
            ...props,
            projects: props.projects?.length ? props.projects : getFeaturedProjects(props.limit || 4)
        };
    },
    PostLayout: (props, data, debugContext) => {
        return resolveReferences(props, ['author', 'category'], data.objects, debugContext);
    },
    PostFeedLayout: (props, data) => {
        const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
        let allPosts = getAllNonFeaturedPostsSorted(data.objects);
        if (!process.env.stackbitPreview) {
            allPosts = allPosts.filter(isPublished);
        }
        const paginationData = getPagedItemsForPage(props, allPosts, numOfPostsPerPage);
        const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
        return {
            ...props,
            ...paginationData,
            items
        };
    },
    PostFeedCategoryLayout: (props, data) => {
        const categoryId = props.__metadata?.id;
        const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
        let allCategoryPosts = getAllCategoryPostsSorted(data.objects, categoryId);
        if (!process.env.stackbitPreview) {
            allCategoryPosts = allCategoryPosts.filter(isPublished);
        }
        const paginationData = getPagedItemsForPage(props, allCategoryPosts, numOfPostsPerPage);
        const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
        return {
            ...props,
            ...paginationData,
            items
        };
    },
    RecentPostsSection: (props, data) => {
        let allPosts = getAllPostsSorted(data.objects);
        if (!process.env.stackbitPreview) {
            allPosts = allPosts.filter(isPublished);
        }
        allPosts = allPosts.slice(0, props.recentCount || 6);
        const recentPosts = resolveReferences(allPosts, ['author', 'category'], data.objects);
        return {
            ...props,
            posts: recentPosts
        };
    },
    FeaturedPostsSection: (props, data, debugContext) => {
        return resolveReferences(props, ['posts.author', 'posts.category'], data.objects, debugContext);
    },
    FeaturedPeopleSection: (props, data, debugContext) => {
        return resolveReferences(props, ['people'], data.objects, debugContext);
    }
};
