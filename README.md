# RAVEN UI

## Support policy

- React 19 (`react` and `react-dom` 19.x)
- TypeScript 5.x and 6.x with `bundler`, `node16`, or `nodenext` resolution
- ESM-only package output
- Modern browsers supported by Tailwind CSS 4
- Styles are imported explicitly and are not injected by JavaScript
- Editor navigation targets published declarations; source-level declaration maps are not shipped

## Setup

To install, run the following command:

```bash
pnpm add @ravenopsnet/ui
```

Import `styles.css` in your base CSS file:

```css
@import "@ravenopsnet/ui/styles.css";
```

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@ravenopsnet/ui"
```
