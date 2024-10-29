# Open Alumn Portal

Welcome to Open Alumn Portal.

<!-- cover photo here -->

## More than a Website - An Astro Theme

This project is not just an Alumni Portal it is also an open source template for creating your own Alumni Portal or a Landing Page for your community. This project is built using [Astro](https://astro.build/), and available in the Astro theme section.

**[View Live Demo](https://ncitalums.com/)**

## Table of Contents

<!-- * [What's New](#whats-new) -->

- [Features](#features)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)

## Features

- **Astro Features**: A fast static site builder that is developer-friendly, **SEO**-friendly, and supports modern web technologies like React, Vue, Svelte, Tailwind CSS, etc.
- **Uniform & Responsive**: A responsive design with uniform style, use of colors, typography, and components layout across the site.
- **Multiple Applications**: A site that can be used for multiple purposes like Landing Page, Alumni Portal, Community Portal, Blog, etc.
- **Plug & Play**: A template where each component, each blog and the whole page can that can be easily customized and extended.

## Getting Started

This guide will provide you with the necessary steps to set up and familiarize yourself with the Alumni Portal on your local development machine.

### Use This Template

To get started, click the `Use this template` button (the big green one at the top right) to create your own repo from this template in your GitHub account. _If the button is not visible_, you can clone this repository to your local machine and create a new repository in your GitHub account. Don't forget to delete the `.git` folder to start fresh when pushing to your own repository.

### Clone the Repository

Once your repository is created, you can clone it to your local machine using the following commands:

```bash
git clone https://github.com/[YOUR_USERNAME]/ncitalums.git
cd [YOUR_REPO_NAME]
```

### Installation

Start by installing the project dependencies. Open your terminal, navigate to the project's root directory, and execute:

```bash
yarn install
```

This command will install all the necessary dependencies defined in the `package.json` file.

### Local Testing Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn run dev`             | Starts local dev server at `localhost:4321`      |
| `yarn run build`           | Build your production site to `./dist/`          |
| `yarn run preview`         | Preview your build locally, before deploying     |
| `yarn run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
yarn run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

### Deploying to GitHub Pages

You can easily deploy using github pages, with the pre-configured [workflow](.github/workflows/astro.yml) file.

### Deploying to Vercel

Click the button below to start deploying your project on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnoskofficial%2Fncitalums)

## Project Structure

Open Alumn Portal organizes modular components, content, and layouts to streamline development and content management.

```bash
.
├── src
│   ├── components                        # reusable components
│   │   ├── homepage                      # components for homepage
│   │   │   ├── BlogHighlight.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── JoinCTA.astro
│   │   │   └── ProfileHighlight.astro
│   │   ├── MainContent.astro
│   │   └── shared                        # essential components
│   │       ├── Footer.astro
│   │       ├── LeftSidebar.astro
│   │       └── TopNavigation.astro
│   ├── content                           # content data
│   │   ├── config.ts                     # site configuration
│   │   └── profiles
│   │       ├── 2005
│   │       ├── .
│   │       ├── .
│   │       └── 2024
│   ├── env.d.ts
│   ├── layout                            # layout components
│   │   ├── AlumniCardLayout.astro
│   │   ├── HomeLayout.astro
│   │   └── TwoColLayout.astro
│   ├── pages
│   │   ├── index.astro                   # root page
│   │   └── profiles                      # dynamic routes
│   │       ├── [faculty].astro
│   │       ├── index.astro
│   │       ├── [...slug].astro
│   │       └── [year].astro
│   ├── styles
│   │   └── style.css
│   └── utils                             # shared utilities
│       ├── loadconfig.ts                 # config loader for contents
│       └── types.ts
├── config.yml                            # content/data for configuration which shapes the site
├── public/                               # static assets
└── .github
    └── workflows
        └── astro.yml

```

## Customization

Easy customization to suit your specific needs. Here are a couple of ways you can configure components and content:

### Editing Component Variables

Some components have properties defined within the [config.yml](config.yml) file to make it easier to customize them. For example, the titles in the Navigation Bar can be changed by editing the `menu` section:

```yml
menu:
  title: NCIT Alumns # Change this to your desired title
  main:
    - title: Home
      link: /
    - title: Alumni Directory
```

Throughout the project, you will find similar properties that can be customized to suit your needs. Editing props in the component instances, social media links, and footer links are some examples.

## Contributing

### Hacktoberfest Participation

This project is also open for **[Hacktoberfest](https://hacktoberfest.com/)** contributions! Please follow the [`CONTRIBUTING.md`](CONTRIBUTING.md) file for more information on how to contribute and be part of Hacktoberfest.

As an open source community, we welcome contributions from everyone!

### Request for a Profile (Non-Developers)

1. Please fill and submit this form.
2. Someone from core team will review and create the profile for you.

### Self Contributing (Developers)

1. Fork this repository.
2. Clone the forked repository locally.
3. Create a new branch for each profile that you want to add.
4. Create a Pull Request against the upstream repository.
5. Wait for the Pull Request to be reviewed and merged.
