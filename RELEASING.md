# Releasing Raven UI

## Automated gates

Every pull request and push to `main` must pass:

```bash
npm run ci
npm pack --dry-run
```

The package verification covers the complete component inventory, runtime and declaration parity, SSR rendering, CSS and dependency budgets, TypeScript Bundler/Node16/NodeNext resolution, package subpaths, and Button-only tree-shaking.

## Release checklist

1. Confirm the working tree is clean and CI is green.
2. Confirm `package.json` contains the intended version.
3. Create a GitHub release tagged `v<package-version>`.
4. Approve the protected `npm` environment deployment.
5. Confirm npm displays provenance for the published version.
6. Install the published version in the Vite and Next.js smoke projects.

The npm trusted publisher must be configured for repository `ravenopsnet/ui`, workflow `publish.yml`, environment `npm`, and the `npm publish` action.

## Supported consumer matrix

- React 19 with Vite
- React 19 with Next.js production SSR and Client Components
- TypeScript 5.x and 6.x using `bundler`, `node16`, or `nodenext`
- ESM production builds with root and component-subpath imports
- Light and dark themes, LTR and RTL direction
