# Zap Pilot Documentation - Deployment Guide

This guide explains how to deploy the Zap Pilot documentation site using GitHub Actions and GitHub
Pages.

## 🚀 Automatic Deployment

The documentation site is automatically deployed when changes are pushed to the `main` branch.

### Deployment Pipeline

1. **Code Quality Check** - Prettier, ESLint, and TypeScript validation
2. **Build Process** - Generate static Docusaurus site
3. **Deploy** - Publish to GitHub Pages

## 📋 Prerequisites

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Set **Source** to "GitHub Actions"
4. Save the configuration

### 2. Repository Permissions

Ensure the repository has the following permissions:

- **Actions**: Read and write permissions
- **Pages**: Write permissions
- **Metadata**: Read permissions

## 🔧 Development Workflow

### Code Quality Tools

- **Prettier**: Code formatting
- **ESLint**: Code linting and best practices
- **TypeScript**: Type checking
- **Husky**: Pre-commit hooks
- **lint-staged**: Staged file processing

### Available Scripts

```bash
# Development
npm start                 # Start development server
npm run build            # Build production site
npm run serve            # Serve built site locally

# Code Quality
npm run format           # Format all files with Prettier
npm run format:check     # Check if files are formatted
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run typecheck        # Run TypeScript type checking
npm run quality:check    # Run all quality checks
npm run quality:fix      # Auto-fix all issues

# Git hooks
npm run pre-commit       # Run pre-commit checks
```

## 🎯 Pre-commit Hooks

Husky is configured to run quality checks before each commit:

1. **Prettier formatting** on staged files
2. **ESLint linting** on staged files
3. **Commit message validation**

### Commit Message Format

Follow conventional commit format:

```
type(scope): description

Examples:
feat(docs): add new strategy documentation
fix: correct fee calculation in comparison table
docs: update deployment guide
style: fix formatting in introduction page
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`,
`revert`

## 🏗️ GitHub Actions Workflows

### 1. Deploy Workflow (`.github/workflows/deploy.yml`)

**Triggers**: Push to main branch, pull requests, manual dispatch

**Jobs**:

- **quality-check**: Prettier, ESLint, TypeScript validation
- **build**: Build Docusaurus site and upload artifacts
- **deploy**: Deploy to GitHub Pages (main branch only)

### 2. Code Quality Workflow (`.github/workflows/code-quality.yml`)

**Triggers**: Pull requests, push to main, manual dispatch

**Jobs**:

- **lint-and-format**: Code quality checks
- **security-audit**: NPM security audit
- **dependency-review**: Review dependency changes (PRs only)
- **auto-fix**: Auto-fix and commit quality issues (PRs only)

### 3. Pages Setup Workflow (`.github/workflows/pages-setup.yml`)

**Triggers**: Manual dispatch only

**Purpose**: Initial GitHub Pages configuration

## 🔍 Troubleshooting

### Build Failures

1. **Check the Actions tab** in your GitHub repository
2. **Review error logs** in the failed workflow
3. **Run locally** to reproduce issues:
   ```bash
   npm run quality:check
   npm run build
   ```

### Common Issues

#### ESLint Errors

```bash
npm run lint:fix  # Auto-fix issues
npm run lint      # Check remaining issues
```

#### Prettier Formatting

```bash
npm run format    # Format all files
npm run format:check  # Check formatting
```

#### TypeScript Errors

```bash
npm run typecheck  # Check types
```

#### Pre-commit Hook Failures

```bash
npm run pre-commit  # Run manually
git add .           # Stage fixes
git commit -m "fix: resolve pre-commit issues"
```

### Deployment URL

After successful deployment, your site will be available at:

```
https://[username].github.io/[repository-name]/
```

Replace `[username]` and `[repository-name]` with your actual GitHub username and repository name.

## 📚 Additional Resources

- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🎨 Theme Customization

The site uses a custom dark theme matching the Zap Pilot landing page:

- Purple/blue gradient backgrounds
- Dark mode enforced
- Glassmorphism effects
- Custom color palette

Theme files:

- `src/css/custom.css` - Main theme customization
- `docusaurus.config.ts` - Site configuration
