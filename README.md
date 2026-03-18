# Playwright TypeScript Project

A modern end-to-end testing project using Playwright and TypeScript.

## Project Structure

```
playwright-typescript-project/
├── tests/                    # Test files
│   └── example.spec.ts      # Sample test file
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (browser visible)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### View test report
```bash
npm run report
```

## Configuration

The project is configured with:

- **TypeScript**: Strict type checking enabled
- **Multiple browsers**: Chromium, Firefox, and WebKit
- **Parallel execution**: Tests run in parallel for faster execution
- **Screenshots**: Captured on test failure
- **Videos**: Recorded on test failure
- **Trace viewer**: Available for debugging failed tests

## Writing Tests

Tests are located in the `tests/` directory. Example test structure:

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- TypeScript support with type safety
- Built-in assertions and test utilities
- Automatic screenshot and video recording on failures
- HTML test reports
- Parallel test execution
- Trace viewer for debugging

## Learn More

- [Playwright Documentation](https://playwright.dev/)
- [Playwright TypeScript Guide](https://playwright.dev/docs/test-typescript)
- [Best Practices](https://playwright.dev/docs/best-practices)