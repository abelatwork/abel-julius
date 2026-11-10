<div align="center">

# ✨ Abel Julius

### _A responsive portfolio showcasing selected work, skills, and ways to connect._

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)]()
[![Last Commit](https://img.shields.io/github/last-commit/abelatwork/abel-julius?style=for-the-badge)](https://github.com/abelatwork/abel-julius/commits)

[**Features**](#-features) · [**Getting Started**](#-getting-started) · [**Report a Bug**](https://github.com/abelatwork/abel-julius/issues) · [**Request a Feature**](https://github.com/abelatwork/abel-julius/issues)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 About

**Abel Julius** is a single-page portfolio for full-stack web developer Abel
Julius. It introduces the developer and brings together selected projects,
technologies, client reviews, and contact options.

On larger screens, the site opens with a full-height welcome section that
transitions into a sticky profile beside the projects. On phones and tablets,
the introduction adapts to a portrait-led hero.

The interface supports light and dark system themes and uses motion
considerately, including reduced-motion preferences.

---

## 🚀 Features

- 🖥️ **Responsive introduction**: desktop welcome-to-profile transition and a
  dedicated mobile/tablet hero.
- 🧭 **Scroll-aware navigation**: active section tracking and an animated
  desktop navigation indicator.
- 🛠️ **Technology marquees**: continuously moving stack displays that pause
  when offscreen.
- ⭐ **Client reviews**: horizontally scrolling, snapping review cards with
  automatic advancement.
- ✉️ **Contact options**: Forminit contact form, email, and social links.
- 🌗 **Theme and motion support**: follows the system color scheme and respects
  reduced-motion settings.

---

## 🛠 Tech Stack

| Layer     | Technology                 |
| --------- | -------------------------- |
| Language  | JavaScript (ES modules)    |
| UI        | React 19                   |
| Styling   | Tailwind CSS 4             |
| Build     | Vite 8                     |
| Quality   | ESLint                     |

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) with npm
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/abelatwork/abel-julius.git

# 2. Move into the project folder
cd abel-julius

# 3. Install dependencies
npm install

# 4. Start the project
npm run dev
```

---

## 🎯 Usage

Start the local development server:

```bash
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

Check the project with ESLint:

```bash
npm run lint
```

Portfolio content is maintained in `src/data/`. Update `site.js`, `about.js`,
`projects.js`, `reviews.js`, `tools.js`, or `socials.js` to change the displayed
details. Place or replace image assets in `public/images/`. The contact form
endpoint is configured in `src/data/site.js`.

---

## 📂 Project Structure

```text
abel-julius/
├── public/
│   └── images/     # Portraits, project images, logos, and tool marks
├── src/
│   ├── components/ # Page sections and reusable UI
│   ├── data/       # Site details and portfolio content
│   ├── hooks/      # Scroll and viewport behavior
│   ├── lib/        # Shared utilities
│   ├── App.jsx     # Page composition
│   └── index.css   # Theme tokens, Tailwind, and animations
├── index.html
├── package.json
└── README.md
```

---

## 🗺 Roadmap

- [x] Responsive portfolio layout and content sections
- [x] Scroll-aware navigation and desktop welcome transition
- [x] Theme-aware presentation and motion preferences

See the [open issues](https://github.com/abelatwork/abel-julius/issues) for
proposed improvements and known bugs.

---

## 🤝 Contributing

Contributions make open source great, and any you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **Apache License 2.0**. See [`LICENSE`](LICENSE) for
details.

---

## 📬 Contact

**Abel**: [@abelatwork](https://github.com/abelatwork)

Project link: [https://github.com/abelatwork/abel-julius](https://github.com/abelatwork/abel-julius)

<div align="center">

⭐ **If you like this project, give it a star!** ⭐

</div>
