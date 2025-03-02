# AI News Timeline

A curated timeline of high-signal events in artificial intelligence and machine learning.

**[📊 View Live Timeline](https://jdehorty.github.io/ai-news-timeline)** - Check out the live deployment on GitHub Pages!

## Quick Start

- 🌐 **Live Demo**: [https://jdehorty.github.io/ai-news-timeline](https://jdehorty.github.io/ai-news-timeline)
- 🚀 **Run Locally**: `docker-compose up dev` or `npm start`
- 🔄 **Contribute**: Open an issue to suggest new AI events to add to the timeline

## Table of Contents

- [AI News Timeline](#ai-news-timeline)
  - [Quick Start](#quick-start)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Live Demo](#live-demo)
  - [Features](#features)
  - [Updates](#updates)
  - [Technology](#technology)
  - [Docker Setup](#docker-setup)
    - [Prerequisites](#prerequisites)
    - [Development Mode](#development-mode)
    - [Production Mode](#production-mode)
    - [Building for GitHub Pages](#building-for-github-pages)
      - [Manual Deployment](#manual-deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## About

AI News Timeline is an ongoing project that tracks and visualizes significant developments in the AI/ML landscape. Rather than capturing every news item, this timeline focuses on high-impact events that shape the direction of AI research, applications, and policy.

The timeline is presented as an interactive web application that allows users to:
- Browse events chronologically
- Filter by month, category, and company
- Share specific views via URL parameters

## Live Demo

The project is deployed and accessible at: **[https://jdehorty.github.io/ai-news-timeline](https://jdehorty.github.io/ai-news-timeline)**

Key features you can try in the live demo:
- Navigate through the timeline of AI events
- Use the filters to focus on specific categories or companies
- Share your filtered view with others via URL
- Explore the responsive design on both desktop and mobile devices

## Features

- **Chronological Timeline**: Events are organized by date and displayed in an intuitive timeline format
- **Categorized Events**: Filter events by categories such as "Major AI Model Releases", "AI Research & Development", "AI Safety & Ethics", and more
- **Company Filters**: Focus on developments from specific organizations
- **Month Selection**: Navigate between different time periods
- **Responsive Design**: Works on desktop and mobile devices
- **Shareable URLs**: Generate links to specific timeline views

## Updates

This timeline is updated periodically as significant AI events occur. Each update includes carefully selected events that represent meaningful developments in the field.

The project aims to be a reliable historical record of AI progress, focusing on quality over quantity. Events are researched and curated to ensure accuracy and relevance.

## Technology

Built with:
- React
- Material UI
- Styled Components
- Docker (for development and deployment)

## Docker Setup

This project can be run using Docker, which ensures consistent development and deployment environments.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Development Mode

To run the application in development mode with hot-reloading:

```bash
docker-compose up dev
```

This will start the application on http://localhost:3000 with live reloading enabled.

### Production Mode

To build and run the production version:

```bash
docker-compose up prod
```

This will build the optimized production version and serve it on http://localhost:3000.

### Building for GitHub Pages

The project is automatically deployed to GitHub Pages using GitHub Actions. The live site is available at:
**[https://jdehorty.github.io/ai-news-timeline](https://jdehorty.github.io/ai-news-timeline)**

When you push to the main branch, the workflow will automatically:

1. Build the project using Node.js
2. Package the build artifacts
3. Deploy to GitHub Pages

You can view the deployment workflow in `.github/workflows/deploy.yml`.

#### Manual Deployment

You can also manually deploy to GitHub Pages using:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch, which is configured to serve the GitHub Pages site.

## Contributing

Suggestions for events to include are welcome! Please open an issue with:
- Event date
- Event title
- Brief description
- Category
- Related company/organization
- Any relevant sources

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This project is maintained as an educational resource for those interested in tracking the evolution of artificial intelligence and machine learning technologies. 