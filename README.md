# AI News Timeline

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=for-the-badge&logo=github)](https://jdehorty.github.io/ai-news-timeline)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/jdehorty/ai-news-timeline/deploy.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/jdehorty/ai-news-timeline/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg?style=for-the-badge)](https://github.com/jdehorty/ai-news-timeline/issues)

A curated timeline of high-signal events in artificial intelligence and machine learning.

**[📊 View Live Timeline](https://jdehorty.github.io/ai-news-timeline)** - Check out the live deployment on GitHub Pages!

## 🚀 Quick Start

<table>
  <tr>
    <td>
      <strong>🌐 Live Demo</strong>
    </td>
    <td>
      <a href="https://jdehorty.github.io/ai-news-timeline">https://jdehorty.github.io/ai-news-timeline</a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>💻 Run Locally</strong>
    </td>
    <td>
      <code>npm install</code> then <code>npm start</code>
    </td>
  </tr>
  <tr>
    <td>
      <strong>🐳 Run with Docker</strong>
    </td>
    <td>
      <code>docker-compose up dev</code> or <code>npm run docker:dev</code>
    </td>
  </tr>
  <tr>
    <td>
      <strong>🔄 Contribute</strong>
    </td>
    <td>
      Open an issue to suggest new AI events to add to the timeline
    </td>
  </tr>
</table>

### Running the Application

You have two options to run this application:

#### Option 1: Run Locally (without Docker)

1. Make sure you have Node.js installed (v16 or later recommended)
2. Clone the repository:
   ```bash
   git clone https://github.com/jdehorty/ai-news-timeline.git
   cd ai-news-timeline
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to http://localhost:3000

#### Option 2: Run with Docker

1. Make sure you have Docker and Docker Compose installed
2. Clone the repository:
   ```bash
   git clone https://github.com/jdehorty/ai-news-timeline.git
   cd ai-news-timeline
   ```
3. Start the development container:
   ```bash
   docker-compose up dev
   ```
   Or use the npm script:
   ```bash
   npm run docker:dev
   ```
4. Open your browser and navigate to http://localhost:3000

## 📸 Timeline Preview

<div align="center">
  <img src="public/timeline-screenshot.png" alt="AI News Timeline Screenshot" width="800">
  <p><i>Note: Add a screenshot of your timeline to the public directory to display it here.</i></p>
</div>

## Table of Contents

- [AI News Timeline](#ai-news-timeline)
  - [🚀 Quick Start](#-quick-start)
    - [Running the Application](#running-the-application)
      - [Option 1: Run Locally (without Docker)](#option-1-run-locally-without-docker)
      - [Option 2: Run with Docker](#option-2-run-with-docker)
  - [📸 Timeline Preview](#-timeline-preview)
  - [Table of Contents](#table-of-contents)
  - [ℹ️ About](#ℹ️-about)
  - [🌐 Live Demo](#-live-demo)
  - [✨ Features](#-features)
  - [🔄 Updates](#-updates)
  - [🛠️ Technology](#️-technology)
  - [🐳 Docker Setup](#-docker-setup)
    - [📋 Prerequisites](#-prerequisites)
    - [💻 Development Mode](#-development-mode)
    - [🚀 Production Mode](#-production-mode)
    - [🔧 Building for GitHub Pages](#-building-for-github-pages)
      - [🔨 Manual Deployment](#-manual-deployment)
  - [👥 Contributing](#-contributing)
  - [📄 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)

## ℹ️ About

AI News Timeline is an ongoing project that tracks and visualizes significant developments in the AI/ML landscape. Rather than capturing every news item, this timeline focuses on high-impact events that shape the direction of AI research, applications, and policy.

The timeline is presented as an interactive web application that allows users to:
- Browse events chronologically
- Filter by month, category, and company
- Share specific views via URL parameters

## 🌐 Live Demo

The project is deployed and accessible at: **[https://jdehorty.github.io/ai-news-timeline](https://jdehorty.github.io/ai-news-timeline)**

Key features you can try in the live demo:
- Navigate through the timeline of AI events
- Use the filters to focus on specific categories or companies
- Share your filtered view with others via URL
- Explore the responsive design on both desktop and mobile devices

## ✨ Features

- **Chronological Timeline**: Events are organized by date and displayed in an intuitive timeline format
- **Categorized Events**: Filter events by categories such as "Major AI Model Releases", "AI Research & Development", "AI Safety & Ethics", and more
- **Company Filters**: Focus on developments from specific organizations
- **Month Selection**: Navigate between different time periods
- **Responsive Design**: Works on desktop and mobile devices
- **Shareable URLs**: Generate links to specific timeline views

## 🔄 Updates

This timeline is updated periodically as significant AI events occur. Each update includes carefully selected events that represent meaningful developments in the field.

The project aims to be a reliable historical record of AI progress, focusing on quality over quantity. Events are researched and curated to ensure accuracy and relevance.

## 🛠️ Technology

Built with:

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

## 🐳 Docker Setup

This project uses a simplified Docker setup with a multi-stage Dockerfile that works for both development and production environments.

### 📋 Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 💻 Development Mode

To run the application in development mode with hot-reloading:

```bash
docker-compose up dev
```

This will start the application on http://localhost:3000 with live reloading enabled.

### 🚀 Production Mode

To build and run the production version:

```bash
docker-compose up prod
```

This will build the optimized production version and serve it on http://localhost:3000.

### 🔧 Building for GitHub Pages

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://jdehorty.github.io/ai-news-timeline)

The project is automatically deployed to GitHub Pages using GitHub Actions. The live site is available at:
**[https://jdehorty.github.io/ai-news-timeline](https://jdehorty.github.io/ai-news-timeline)**

When you push to the main branch, the workflow will automatically:

1. Build the project using Node.js
2. Package the build artifacts
3. Deploy to GitHub Pages

You can view the deployment workflow in `.github/workflows/deploy.yml`.

#### 🔨 Manual Deployment

You can also manually deploy to GitHub Pages using:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch, which is configured to serve the GitHub Pages site.

## 👥 Contributing

Suggestions for events to include are welcome! Please open an issue with:
- Event date
- Event title
- Brief description
- Category
- Related company/organization
- Any relevant sources

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

This project is maintained as an educational resource for those interested in tracking the evolution of artificial intelligence and machine learning technologies. 