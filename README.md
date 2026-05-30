# Cypress E2E Framework

End-to-end test automation framework for [DemoQA](https://demoqa.com/) built with **Cypress**, **TypeScript**, and the **Page Object Model (PoM)** pattern.

## Project Structure

```
cypress-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── DemoQA/
│   │   │   ├── API/       # Book Store API tests (*.spec.ts)
│   │   │   ├── E2E/       # Book Store UI flows (*.spec.ts)
│   │   │   └── Sanity/    # Homepage & Elements smoke tests (*.spec.ts)
│   │   └── Project 2/     # Scaffold for a second test suite (API, E2E, Sanity)
│   ├── fixtures/          # Test data (e.g. example.json)
│   ├── pages/
│   │   ├── DemoQA/        # Page Object classes (selectors & page data)
│   │   └── Project 2/     # Page objects for Project 2
│   ├── screenshots/       # Failure screenshots (generated on run)
│   └── support/
│       ├── commands/
│       │   ├── actions.ts       # Reusable interaction commands
│       │   ├── assertions.ts    # Reusable assertion commands
│       │   ├── demoQA/          # DemoQA page-specific commands
│       │   │   ├── homePage.ts
│       │   │   ├── bookStorePage.ts
│       │   │   └── elementsPage.ts
│       │   └── Project 2/       # Custom commands for Project 2
│       ├── commands.ts    # Registers all command modules
│       ├── e2e.ts         # Global hooks & support setup
│       └── index.d.ts     # TypeScript declarations for custom commands
├── cypress.config.ts
├── tsconfig.json
└── package.json
```

### Layout conventions

- **Specs** live under `cypress/e2e/<project>/` grouped by type: `API`, `E2E`, or `Sanity`.
- **Page objects** in `cypress/pages/<project>/` hold selectors and static page data; specs and commands import from there.
- **Custom commands** are split into shared `actions` / `assertions` and project-specific modules under `cypress/support/commands/<project>/`, loaded from `commands.ts`.

## Prerequisites

- Node.js v18+
- npm

## Setup

```bash
git clone <repository-url>
cd cypress-e2e
npm install
npx cypress install
npx cypress verify
```

## Running Tests

| Script | Description |
|--------|-------------|
| `npm run open:runner` | Open Cypress Test Runner |
| `npm run demoQA:sanity` | DemoQA sanity / smoke tests |
| `npm run demoQA:e2e` | DemoQA Book Store E2E flows |
| `npm run demoQA:api` | DemoQA Book Store API tests |
| `npm run demoQA:all` | All DemoQA specs under `cypress/e2e/DemoQA/` |

Run a single spec:

```bash
npx cypress run --spec "cypress/e2e/DemoQA/Sanity/elements.spec.ts"
```

Run all specs (including Project 2 scaffold):

```bash
npx cypress run
```

## Configuration

Key settings in `cypress.config.ts`:

| Setting | Value |
|---------|--------|
| Viewport | 1920 × 1080 |
| `defaultCommandTimeout` / `requestTimeout` | 10000 ms |
| `specPattern` | `cypress/e2e/**/*.spec.ts` |
| `includeShadowDom` | `true` |
| Video | disabled |

Environment variables (`Cypress.env`):

| Variable | Default | Purpose |
|----------|---------|---------|
| `demoQA` | `https://demoqa.com/` | Base URL for UI tests |
| `bookStoreAPI` | `https://demoqa.com/swagger/` | Book Store API reference |
| `hideXHRInCommandLog` | `true` | Hide XHR/request noise in the command log |

## License

ISC
