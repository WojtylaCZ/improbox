# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start        # Dev server on port 3003
yarn build        # Production build (+ react-snap post-build for static pre-rendering)
yarn test         # Jest tests (watch mode)
yarn deploy       # Build + deploy to GitHub Pages (improbox.cz)

yarn qr:generate  # CLI: generate QR codes for events
yarn qr:validate  # CLI: validate QR code data
yarn cal:generate # CLI: parse iCalendar files for event import
```

## Architecture

**Improbox.cz** is a bilingual (CS/EN) Czech improv theatre event listing — a static-first React 18 + TypeScript SPA deployed to GitHub Pages.

### Data layer

All data lives as static TypeScript files in `src/assets/data/`:
- `data-improevents.ts` (~10k lines) — the full event database, organized by month
- `data-organizers.ts` — organization profiles
- `data-locations.ts` — Czech region/district mappings
- `data-bookitems.ts` — book catalog
- `types.ts` — shared interfaces (`ImproEvent`, `Organizer`, `BookItem`, `District`, `EventType`)

There is no backend or API. Adding or updating events means editing `data-improevents.ts` directly.

### Rendering pipeline

```
app-router.tsx (React Router v6, locale prefix in URL)
  └── PageLayout (HeaderBar + PageHeaderImage + PageContent + FooterBar)
        └── Main          ← filter state lives here
              └── MonthCalendarSection
                    └── ImproEventCard (with ShareButton)
```

Routes use an optional `/:locale?` prefix (`/cs/`, `/en/`). i18next detects locale from the URL path first, falling back to Czech.

### Key patterns

- **No global state** — all filter/UI state in `Main` via `useState`, passed as props
- **Client-side filtering** — events are filtered in `Main` from the static data arrays
- **Analytics** — `analytics.ts` wraps react-ga4; use the `AnalyticsEvents` enum for tracking
- **i18n** — `useTranslation()` hook everywhere; translation files in `src/assets/locales/{cs,en}/translation.json`
- **Static pre-rendering** — `react-snap` runs post-build and pre-renders `/cs` and `/en` for SEO

### Deployment

`yarn deploy` runs `predeploy` (build) then pushes the `build/` directory to `gh-pages` branch. The `CNAME` file in `public/` points to `improbox.cz`.
