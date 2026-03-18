# Playwright TypeScript Project Instructions

This is a Playwright TypeScript project for end-to-end testing.

## Project Structure
- `/tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## Getting Started
1. Install dependencies: `npm install`
2. Install browsers: `npx playwright install`
3. Run tests: `npm test`

## Available Commands
- `npm test` - Run all tests
- `npm run test:headed` - Run tests with browser visible
- `npm run test:debug` - Debug tests
- `npm run test:ui` - Run tests in UI mode
- `npm run report` - View test report

## Development
- Tests are written in TypeScript
- Examples are provided in the `/tests/` directory
- Configuration supports multiple browsers (Chromium, Firefox, WebKit)