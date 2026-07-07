# Henry Calderon — Engineering Portfolio

A content-driven engineering portfolio built on the [Netlify Content Ops Starter](https://github.com/netlify-templates/content-ops-starter) template. Showcases robotics, embedded systems, localization, CAD, circuits, and hardware research projects with photos, videos, CAD models, diagrams, and PDFs.

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Add a New Project

1. **Create a markdown file** in `content/pages/projects/`:

```bash
cp content/pages/projects/simon-says-pi4.md content/pages/projects/my-new-project.md
```

2. **Edit the frontmatter** at the top of the file:

```yaml
---
title: My New Project
slug: my-new-project
summary: One-sentence project summary.
category: Research
tags:
  - Robotics
  - Embedded Systems
role: What you personally worked on
timeline: Spring 2026
collaborators:
  - Advisor Name
featured: false
order: 10
heroImage: /images/projects/my-new-project/hero.jpg
links:
  - label: GitHub
    url: https://github.com/henrycc24/my-repo
gallery:
  - type: image
    src: /images/projects/my-new-project/photo1.jpg
    caption: Description of the photo
videos:
  - title: Demo Video
    url: https://www.youtube.com/watch?v=VIDEO_ID
    type: youtube
pdfs:
  - title: Project Report
    file: /pdfs/my-new-project/report.pdf
model:
  glb: /models/my-new-project/part.glb
  poster: /images/projects/my-new-project/render.jpg
  downloads:
    - label: Download STEP
      file: /models/my-new-project/part.step
stats:
  - label: Metric Name
    value: "42 ms"
    note: Optional note
type: ProjectLayout
---
```

3. **Write markdown body sections** below the frontmatter (`## Overview`, `## Motivation / Problem`, `## My Role`, etc.).

4. **Add assets**:

| Asset type | Folder |
|---|---|
| Images | `public/images/projects/my-new-project/` |
| CAD web models (.glb/.gltf) | `public/models/my-new-project/` |
| PDFs / reports | `public/pdfs/my-new-project/` |

5. **Rebuild** — the site auto-generates a page at `/projects/my-new-project/`.

## How to Add Images

1. Copy images into `public/images/projects/[project-slug]/`
2. Reference them in frontmatter:

```yaml
heroImage: /images/projects/jackal-floor-localization/robot-front.jpg
gallery:
  - type: image
    src: /images/projects/jackal-floor-localization/mount.jpg
    caption: Camera mount on Jackal
```

## How to Add Videos

```yaml
heroVideo: https://www.youtube.com/watch?v=VIDEO_ID
videos:
  - title: Field Test
    url: /videos/my-project/demo.mp4
    type: mp4
  - title: YouTube Demo
    url: https://www.youtube.com/watch?v=VIDEO_ID
    type: youtube
```

Place local `.mp4` files in `public/videos/[project-slug]/`.

## How to Add CAD / 3D Models

1. Export an interactive web model as `.glb` or `.gltf`
2. Place it in `public/models/[project-slug]/`
3. Add to frontmatter:

```yaml
model:
  glb: /models/rock-construction-robot/chassis.glb
  poster: /images/projects/rock-construction-robot/chassis-render.jpg
  title: Robot Chassis
  caption: Interactive CAD model — orbit to inspect
  downloads:
    - label: Download STEP
      file: /models/rock-construction-robot/chassis.step
    - label: Download STL
      file: /models/rock-construction-robot/chassis.stl
```

The `CADModelViewer` component renders automatically on the project page.

## How to Add PDFs

1. Place PDF in `public/pdfs/[project-slug]/`
2. Add to frontmatter:

```yaml
pdfs:
  - title: Final Report
    file: /pdfs/sisyphus-sand-table-ece5760/report.pdf
```

PDFs embed inline with a download button.

## How to Edit Project Text

- **Metadata** (title, tags, role, links): edit the YAML frontmatter in `content/pages/projects/[slug].md`
- **Narrative sections** (Overview, Motivation, etc.): edit the markdown body below the frontmatter
- **Site-wide info** (nav, footer, social links): edit `content/data/header.json`, `content/data/footer.json`, `content/data/site.json`
- **Home page sections**: edit `content/pages/index.md`

## Project Structure

```
portfolio/
├── content/
│   ├── data/                  # Site config (header, footer, site.json)
│   └── pages/
│       ├── index.md           # Home page
│       ├── projects.md        # Projects index
│       ├── research.md        # Research projects
│       ├── classes.md         # Class projects
│       ├── about.md
│       ├── contact.md
│       └── projects/          # One .md file per project
│           ├── jackal-floor-localization.md
│           └── ...
├── public/
│   ├── images/projects/[slug]/  # Project photos & diagrams
│   ├── models/[slug]/           # .glb / .gltf / .step / .stl
│   └── pdfs/[slug]/             # Reports & papers
├── src/
│   ├── components/
│   │   ├── portfolio/         # Reusable portfolio components
│   │   ├── layouts/ProjectLayout/
│   │   └── sections/
│   └── utils/project-utils.js
└── sources/local/models/      # Content models for visual editor
```

## Reusable Components

| Component | Purpose |
|---|---|
| `ProjectCard` | Project card for grids |
| `ProjectHero` | Project page hero with image/video |
| `ProjectMetadata` | Role, timeline, collaborators, links |
| `MediaGallery` | Image gallery with lightbox |
| `CADModelViewer` | Interactive 3D model viewer |
| `VideoEmbed` | YouTube/Vimeo/mp4 embeds |
| `PDFEmbed` | Inline PDF + download |
| `DiagramSection` | Block/wiring/architecture diagrams |
| `ResultsStats` | Performance metrics grid |
| `RelatedProjects` | Cross-linked project cards |
| `PlaceholderBlock` | Labeled drop-in placeholders |

## Deploy

### Netlify (recommended)

1. Push to GitHub
2. Connect repo in [Netlify](https://app.netlify.com/)
3. Build command: `npm run build`
4. Publish directory: `.next` (or configure for Next.js)
5. Contact form works via Netlify Forms automatically

### GitHub Pages

1. Push to `main` branch
2. Enable GitHub Pages → Source: **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` builds with static export
4. Site live at `https://[username].github.io/[repo-name]/`

For GitHub Pages, set the repo name as the base path:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

## Tech Stack

- **Next.js 15** (Pages Router, static export for GitHub Pages)
- **Netlify Content Ops Starter** (markdown content + visual editing)
- **Tailwind CSS 3**
- **@google/model-viewer** (interactive 3D CAD viewing)
- **markdown-to-jsx** (project page content rendering)

## Current Projects

| Slug | Type |
|---|---|
| `jackal-floor-localization` | Research |
| `drone-supercapacitor-power` | Research |
| `lighthouse-localization-lidar-fpga` | Research |
| `rock-construction-robot` | Research |
| `sisyphus-sand-table-ece5760` | Class (ECE 5760) |
| `wooden-mirror-info5321` | Class (INFO 5321) |
| `simon-says-pi4` | Class (ECE 5725) |
| `fast-robots-ece4160` | Class (ECE 4160) |
| `cow-collar-virtual-fence` | Class (MAE 4220) |

## TODO Placeholders

Search the codebase for assets still needed:
- Hero images for research projects (add to `public/images/projects/[slug]/`)
- CAD models (.glb files in `public/models/[slug]/`)
- Wiring diagrams and schematics
- Demo videos for research projects
- Resume PDF at `public/pdfs/resume.pdf`
