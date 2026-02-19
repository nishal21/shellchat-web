# ShellChat Website 🐚🌐

The official website for **ShellChat** - The Retro-Futuristic, Serverless P2P Chat Application.

![ShellChat Website Demo](/public/demo.png)

## 🚀 Overview

This repository contains the source code for the ShellChat landing page and documentation portal. It features a premium "Hacker/Cyberpunk" aesthetic with neon accents, CRT effects, and terminal-style typography.

**Live URL**: [shellchat.org](https://shellchat.org) (Coming Soon)

## 🛠️ Tech Stack

-   **Framework**: [React 19](https://react.dev/)
-   **Bundler**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Routing**: [React Router](https://reactrouter.com/)
-   **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Fira Code](https://fonts.google.com/specimen/Fira+Code)
-   **Icons**: [Material Symbols](https://fonts.google.com/icons)

## ✨ Features

-   **Retro-Futuristic Design**: Custom CSS variables for neon glow, scanlines, and terminal effects.
-   **Interactive Documentation**:
    -   Tabbed interface for Usage, Commands, and FAQ.
    -   Internal rendering of Markdown docs (Readme, License, Security).
-   **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile.
-   **Downloads Page**: Direct links to GitHub Releases for all platforms.

## 📦 Development Setup

### Prerequisites

-   Node.js 18+
-   npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/nishal21/shellchat-website.git
cd shellchat-website-react

# Install dependencies
npm install
```

### Run Locally

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

Generate static files for deployment:

```bash
npm run build
```

 The output will be in the `dist/` folder.

## 📂 Project Structure

```
src/
├── assets/          # Static images and icons
├── components/      # Reusable UI components (Navbar, Footer, Hero)
├── pages/           # Route components
│   ├── legal/       # Internal docs (Readme, License, etc.)
│   ├── Landing.jsx  # Home page
│   ├── Docs.jsx     # Documentation portal
│   └── Downloads.jsx # Download links
├── App.jsx          # Main application layout & routing
├── index.css        # Tailwind imports & custom CSS variables
└── main.jsx         # Entry point
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Part of the [ShellChat](https://github.com/nishal21/shellchat) Ecosystem.*

