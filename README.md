# Cypress E2E Framework

End-to-end test automation framework for [DemoQA](https://demoqa.com/) built with **Cypress**, **TypeScript**, and the **Page Object Model (PoM)** pattern.

## Project Structure

```
cypress-e2e/
├── cypress/
│   ├── e2e/DemoQA/
│   │   ├── API/       # API tests (*.spec.ts)
│   │   ├── E2E/       # End-to-end UI flows (*.spec.ts)
│   │   └── Sanity/    # Smoke / sanity checks (*.spec.ts)
│   ├── fixtures/
│   ├── pages/DemoQA/  # Page Object Model classes
│   └── support/
│       ├── commands/  # Custom Cypress commands
│       ├── commands.ts
│       ├── e2e.ts
│       └── index.d.ts
├── cypress.config.ts
├── tsconfig.json
└── package.json
```


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
| `npm run demoQA:sanity` | Sanity / smoke tests |
| `npm run demoQA:e2e` | Book Store E2E flows |
| `npm run demoQA:api` | Book Store API tests |
| `npm run demoQA:all` | All DemoQA tests |

Run a single spec:

```bash
npx cypress run --spec "cypress/e2e/DemoQA/Sanity/elements.spec.ts"
```

## Configuration

Environment variables in `cypress.config.ts`:

| Variable | Default |
|----------|---------|
| `demoQA` | `https://demoqa.com/` |
| `bookStoreAPI` | `https://demoqa.com/swagger/` |


## License

ISC
