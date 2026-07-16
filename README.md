# FALCON Frontend

Professional React + Tailwind CSS frontend for **FALCON Security** — Bangladesh's first and most trusted security solutions company.

## Tech Stack

| Tool                      | Purpose                 |
| ------------------------- | ----------------------- |
| **Vite**            | Build tool & dev server |
| **React 18**        | UI library              |
| **React Router v6** | Client-side routing     |
| **Tailwind CSS v3** | Utility-first styling   |
| **Context API**     | Global state management |
| **React Icons**     | Icon library            |

---

## Project Structure

```
frontend/
├── public/
│   └── images/          # Static images (replace placeholders)
├── src/
│   ├── components/
│   │   ├── contact/     # ContactForm component
│   │   ├── home/        # Hero, Stats, Clients, Services, Testimonials, News, CTA
│   │   ├── layout/      # Navbar, TopBar, Footer, Layout
│   │   └── ui/          # Button, Card, SectionHeading, StarRating, Toast, Spinner
│   ├── context/
│   │   ├── AppContext.jsx    # Global app state (company info, services, news)
│   │   ├── UIContext.jsx     # UI state (mobile menu, scroll, toasts, modals)
│   │   └── ContactContext.jsx # Contact form state & validation
│   ├── data/
│   │   ├── navLinks.js      # Navigation link configuration
│   │   └── siteData.js      # Services, testimonials, news, clients, stats
│   ├── hooks/
│   │   └── useCustomHooks.js # useIntersectionObserver, useDebounce, useLocalStorage, useMediaQuery
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Company.jsx
│   │   ├── WhatWeOffer.jsx
│   │   ├── RangeOfServices.jsx
│   │   ├── NewsAndEvents.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   └── helpers.js       # formatDate, slugify, truncate, groupBy, scrollToSection
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

---

## Context API Overview

| Context            | Purpose                                                    |
| ------------------ | ---------------------------------------------------------- |
| `AppContext`     | Company info, services, news data;`useReducer` pattern   |
| `UIContext`      | Mobile menu, scroll detection, modals, toast notifications |
| `ContactContext` | Contact form state, validation, and submission             |

Import hooks: `useApp()`, `useUI()`, `useContact()`

---

## Customisation

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors` (primary red = `#C8102E`)
- **Company info**: Edit `src/context/AppContext.jsx` → `initialState.companyInfo`
- **Services / News**: Edit `src/data/siteData.js`
- **Navigation**: Edit `src/data/navLinks.js`
- **Images**: Replace all `Image Placeholder` divs in components with `<img>` tags pointing to `/public/images/`
