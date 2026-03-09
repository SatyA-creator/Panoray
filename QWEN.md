# Panoray - Project Context

## Project Overview

**Panoray** is a modern, visually-stunning corporate website built with React, TypeScript, and Vite. The project was generated using [Lovable](https://lovable.dev), an AI-powered development platform. It serves as a professional business presence with pages for home, portfolio, partners, team, and contact.

### Tech Stack

- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.19
- **UI Library:** shadcn-ui (Radix UI primitives)
- **Styling:** Tailwind CSS with custom animations and effects
- **Routing:** React Router DOM 6.30.1
- **State Management:** TanStack React Query
- **Form Handling:** React Hook Form with Zod validation
- **Animations:** Framer Motion
- **Testing:** Vitest with Testing Library
- **Icons:** Lucide React

### Architecture

```
src/
├── components/
│   ├── home/          # Home page specific components
│   ├── ui/            # shadcn-ui reusable components (40+ components)
│   ├── AnimatedCounter.tsx
│   ├── FloatingOrbs.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── NavLink.tsx
│   ├── ScrollReveal.tsx
│   └── Sidebar.tsx
├── hooks/
│   ├── use-mobile.tsx # Mobile detection hook
│   └── use-toast.ts   # Toast notification hook
├── lib/
│   └── utils.ts       # Utility functions (cn for class merging)
├── pages/
│   ├── Index.tsx      # Home page
│   ├── Portfolio.tsx  # Portfolio/projects showcase
│   ├── Partners.tsx   # Partner organizations
│   ├── Team.tsx       # Team members
│   ├── Contact.tsx    # Contact form/info
│   └── NotFound.tsx   # 404 page
├── test/
│   └── setup.ts       # Test configuration
├── App.tsx            # Main app with routing
├── main.tsx           # Entry point
└── index.css          # Global styles with Tailwind
```

## Building and Running

### Prerequisites

- Node.js & npm (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Bun (optional, for faster package management)

### Installation

```bash
npm install
# or
bun install
```

### Development

```bash
# Start development server (port 8080)
npm run dev

# Start with Bun
bun run dev
```

### Production

```bash
# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
npm run lint
```

## Development Conventions

### Code Style

- **TypeScript:** Strict null checks disabled, implicit any allowed for flexibility
- **Component Naming:** PascalCase for components (e.g., `ScrollReveal.tsx`)
- **File Structure:** Feature-based organization with separate `ui` and `pages` directories
- **Path Aliases:** Use `@/` for `src/` directory (configured in `tsconfig.json` and `vite.config.ts`)

### Styling Patterns

- **Tailwind-first:** Utility classes with `cn()` helper for conditional classes
- **Custom Design System:**
  - Primary color: Teal (`hsl(177 46% 53%)`)
  - Accent color: Green (`hsl(70 72% 54%)`)
  - Fonts: Playfair Display (headings), Inter (body)
- **Custom Utilities:** `text-gradient`, `glass`, `hover-lift`, `text-shimmer`, `line-glow`
- **Animations:** Custom keyframes for marquee, float, pulse-glow effects

### Component Patterns

- All UI components use Radix UI primitives via shadcn-ui
- Components export both default and named exports where applicable
- Hooks follow `use-` prefix convention
- Toast notifications use custom `use-toast` hook

### Testing Practices

- Tests located in `src/**/*.{test,spec}.{ts,tsx}`
- Uses Testing Library for React component testing
- JSDOM environment for browser-like testing
- Global test matchers configured in `src/test/setup.ts`

### Git Workflow

- Lovable integration: Changes made via Lovable are auto-committed
- Standard Git workflow for manual edits
- `.gitignore` excludes `node_modules`, `dist`, editor files, and local configs

## Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite config with React SWC, path aliases, dev server (port 8080) |
| `tailwind.config.ts` | Tailwind with custom theme, colors, animations |
| `tsconfig.json` | TypeScript project references |
| `tsconfig.app.json` | App-specific TS config |
| `components.json` | shadcn-ui configuration |
| `vitest.config.ts` | Vitest test configuration |
| `eslint.config.js` | ESLint rules for React/TypeScript |

## Important Notes

- The project uses **CSS variables** for theming (defined in `src/index.css`)
- **shadcn-ui components** are copy-pasted into `src/components/ui/` (not npm dependencies)
- **Lovable tagger** plugin is active in development mode for AI-assisted development
- Server configured to listen on `::` (all interfaces) on port **8080**
- HMR overlay is disabled for cleaner development experience
