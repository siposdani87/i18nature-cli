# Dependency Version Constraints

This document explains why certain dependencies are pinned to specific major versions.

## ESM-Only Packages (Cannot Upgrade)

The following packages have moved to ESM-only in their latest versions, which is incompatible with our CommonJS setup:

### chalk
- **Current**: v4.1.2
- **Latest**: v5.6.2
- **Reason**: chalk v5+ is ESM-only
- **Migration**: Would require converting entire project to ESM
- **Alternative**: Stay on v4.x until ESM migration

### inquirer
- **Current**: v8.2.7
- **Latest**: v13.0.1
- **Reason**: inquirer v9+ is ESM-only
- **Migration**: Would require converting entire project to ESM
- **Alternative**: Stay on v8.x until ESM migration

## Other Version Constraints

### eslint
- **Current**: v8.57.1
- **Latest**: v9.39.1
- **Reason**: ESLint v9 introduced flat config (breaking change)
- **Migration**: Requires rewriting .eslintrc.json to eslint.config.js
- **Alternative**: Stay on v8.x for now (still supported)

### @typescript-eslint/*
- **Current**: v5.62.0
- **Latest**: v8.48.0
- **Reason**: v8 requires ESLint v9
- **Migration**: Must upgrade ESLint first
- **Alternative**: Stay on v5.x with ESLint v8

## Future Migration Path

To upgrade to the latest versions of these packages:

1. **Convert to ESM**:
   - Change `"type": "module"` in package.json
   - Convert all require() to import
   - Update tsconfig.json module settings
   - Update webpack configuration
   - Test all functionality

2. **Migrate ESLint**:
   - Upgrade to ESLint v9
   - Convert .eslintrc.json to eslint.config.js (flat config)
   - Upgrade @typescript-eslint to v8

## Recently Upgraded Packages

The following packages were successfully upgraded:

- **TypeScript**: v4.9.5 → v5.9.3
- **Jest**: v28.1.3 → v29.7.0
- **ts-jest**: v28.0.8 → v29.2.5
- **Prettier**: v2.8.8 → v3.7.1
- **@types/jest**: v28.1.8 → v29.5.14
- **@types/node**: v18.19.0 → v18.19.130
