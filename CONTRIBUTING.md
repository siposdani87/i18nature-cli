# Contributing to I18Nature CLI

Thank you for your interest in contributing to I18Nature CLI! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn
- Git

### Setting Up the Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/i18nature-cli.git
   cd i18nature-cli
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run coverage
```

### Linting and Formatting

```bash
# Run ESLint
npm run eslint

# Format code with Prettier
npm run format

# Run all checks (lint + type check)
npm run lint
```

### Building

```bash
# Build the project
npm run build
```

### Testing Locally

After building, you can test the CLI locally:

```bash
# Link the package globally
npm link

# Run the CLI
i18nature --help
```

## Code Quality Standards

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier configurations provided in the project
- Write descriptive variable and function names
- Add comments for complex logic

### Testing

- Write unit tests for new features
- Maintain or improve test coverage (minimum 70%)
- Ensure all tests pass before submitting a PR

### Type Safety

- Use TypeScript strict mode
- Avoid `any` types when possible
- Define proper interfaces and types

## Commit Guidelines

### Commit Message Format

Follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat(download): add progress indicator for file downloads

Add a visual progress bar when downloading translation files
to improve user experience.

Closes #123
```

## Pull Request Process

1. **Update Documentation**: Update README.md and other docs if needed
2. **Update CHANGELOG**: Add your changes to the CHANGELOG.md under "Unreleased"
3. **Run Tests**: Ensure all tests pass and coverage meets requirements
4. **Lint Your Code**: Run `npm run lint` and fix any issues
5. **Create PR**: Submit a pull request with a clear description
6. **Link Issues**: Reference any related issues in the PR description

### PR Description Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] All tests passing
- [ ] Code linted and formatted
```

## Security Issues

If you discover a security vulnerability, please **do not** open a public issue. Instead, email the maintainer directly at siposdani87@gmail.com.

## Questions?

Feel free to open an issue for:
- Questions about the codebase
- Clarifications on features
- Discussion of potential improvements

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

## Thank You!

Your contributions help make I18Nature CLI better for everyone. We appreciate your time and effort!
