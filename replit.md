# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## PH Navigator — Mailchimp Integration

Mailchimp newsletter signup is integrated via manual API credentials (user declined Replit OAuth connector).

- `MAILCHIMP_LIST_ID` — stored as a shared env var (audience ID: `a0668d6ca8`)
- `MAILCHIMP_API_KEY` — stored as a Replit secret (user's API key, server prefix `us14`)

Two newsletter endpoints exist:
- **Replit dev**: `artifacts/api-server/src/routes/newsletter.ts` → `POST /api/newsletter/subscribe` (Express)
- **Cloudflare Pages production**: `functions/api/newsletter/subscribe.ts` → `POST /api/newsletter/subscribe` (CF Pages Function)

If the API key needs to be rotated, update `MAILCHIMP_API_KEY` in both Replit Secrets and Cloudflare Pages environment variables.

## Cloudflare Pages Deployment

The site is structured for zero-server deployment on Cloudflare Pages.

### Build settings (set in Cloudflare Pages dashboard)

| Setting | Value |
|---|---|
| Build command | `pnpm --filter @workspace/ph-navigator run build` |
| Build output directory | `artifacts/ph-navigator/dist/public` |
| Root directory | *(leave blank)* |
| Node.js version | `24` |

### Environment variables (set in Cloudflare Pages → Settings → Environment variables)

| Key | Value | Notes |
|---|---|---|
| `BASE_PATH` | `/` | Required for Vite base config |
| `PORT` | `3000` | Required to pass build-time check |
| `MAILCHIMP_API_KEY` | *(user's key)* | Mark as secret |
| `MAILCHIMP_LIST_ID` | `a0668d6ca8` | Mailchimp audience ID |

### How it works

- Static frontend files are served from `artifacts/ph-navigator/dist/public/`
- `artifacts/ph-navigator/public/_redirects` enables SPA client-side routing (`/* → /index.html 200`)
- `functions/api/newsletter/subscribe.ts` is a Cloudflare Pages Function — CF automatically routes `POST /api/newsletter/subscribe` to it, no server needed
- The frontend's `fetch('/api/newsletter/subscribe')` call works identically in dev (hits Express via Replit proxy) and production (hits CF Pages Function)
