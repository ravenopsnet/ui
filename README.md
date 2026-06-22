# Raven UI

Tree-shakeable React component library built from the shadcn/ui component set.

## Requirements

- React and React DOM 19.x
- ESM-compatible bundler or runtime
- A modern browser supported by Tailwind CSS 4
- TypeScript 5.x or 6.x when using TypeScript

The declarations support TypeScript `bundler`, `node16`, and `nodenext` module resolution.

## Installation

```bash
pnpm add @ravenopsnet/ui
```

```bash
npm install @ravenopsnet/ui
```

Import the component stylesheet once in your application entry point:

```ts
import "@ravenopsnet/ui/styles.css"
```

The stylesheet contains the compiled component utilities, Tailwind base styles,
Raven theme tokens, and the light/dark global theme. Consumers do not need to
redefine the shadcn theme.

Inter is intentionally not embedded in the package stylesheet. Install and
import it separately when you want the default Raven typography:

```css
@import "@fontsource-variable/inter";
@import "@ravenopsnet/ui/styles.css";
```

Applications that also use Tailwind for their own source can keep their normal
Tailwind import:

```css
@import "tailwindcss";
@import "@fontsource-variable/inter";
@import "@ravenopsnet/ui/styles.css";
```

## Usage

Import from the root barrel:

```tsx
import { Button, Card, CardContent } from "@ravenopsnet/ui"

export function Example() {
  return (
    <Card>
      <CardContent>
        <Button>Continue</Button>
      </CardContent>
    </Card>
  )
}
```

For the smallest and most direct module graph, use component subpaths:

```tsx
import { Button } from "@ravenopsnet/ui/components/button"
```

Both import styles are tree-shakeable.

## TypeScript

Public declarations are included in the package. Frequently composed components also expose named prop types:

```tsx
import { Button, type ButtonProps } from "@ravenopsnet/ui"

export function SubmitButton(props: ButtonProps) {
  return <Button type="submit" {...props} />
}
```

Go to Definition opens the published declaration for the selected component. Source-level declaration maps are intentionally not shipped to keep the package compact.

## Dark mode and themes

Dark mode is activated by adding the `dark` class to a document ancestor, normally `<html>`.

The `Toaster` component integrates with `next-themes`. Applications using automatic theme detection should mount a `ThemeProvider` from `next-themes`:

```tsx
import { ThemeProvider } from "next-themes"
import { Toaster } from "@ravenopsnet/ui"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
```

## Server rendering

Server rendering is supported. In React Server Component frameworks, import
the library from a Client Component and keep event handlers and browser-only
values on the client side.

## Components

The public package includes:

- Accordion, Alert, Alert Dialog, Aspect Ratio and Avatar
- Badge, Breadcrumb, Button, Button Group and Calendar
- Card, Carousel, Chart, Checkbox, Collapsible, Combobox and Command
- Context Menu, Dialog, Direction Provider, Drawer and Dropdown Menu
- Empty, Field, Hover Card, Input, Input Group, Input OTP and Item
- Kbd, Label, Menubar, Native Select, Navigation Menu and Pagination
- Popover, Progress, Radio Group, Resizable Panels and Scroll Area
- Select, Separator, Sheet, Sidebar, Skeleton, Slider and Sonner
- Spinner, Switch, Table, Tabs, Textarea, Toggle, Toggle Group and Tooltip

## Development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Run the complete local verification suite with:

```bash
npm test
npm run lint
npm run format:check
```

## License

MIT
