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

The newsletter API endpoint is at `artifacts/api-server/src/routes/newsletter.ts` → `POST /api/newsletter/subscribe`.
If the API key needs to be rotated, the user must update the `MAILCHIMP_API_KEY` secret in the Replit Secrets tab.
