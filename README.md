# layers-ui

A Simple, Fast CSS utility library.

**Docs:** https://athreyacodes.github.io/layers-ui/

```bash
npm i layers-ui
```

```html
<link rel="stylesheet" href="node_modules/layers-ui/layers.min.css" />
```

## Themes

Set attributes on `<html>`. Utilities, buttons, logo, and wave3 follow the CSS variables.

```html
<html data-primary="teal" data-color-scheme="system">
```

- **`data-primary`:** `teal` | `indigo` | `blue` | `rose` (default teal `#156064`)
- **`data-color-scheme`:** `light` | `dark` | `system` (default light)

Aliases: `.color-scheme-dark` still forces dark on a subtree. `.auto` still follows `prefers-color-scheme` (same as `system`).

The docs toolbar is a CSS recipe (`.theme-toolbar`, `.theme-picker`, `.theme-menu-swatches`, `.theme-menu-scheme`) plus a few lines of JS that set those attributes and persist them. layers-ui does not ship Angular. Wrap the same markup in `@apps/ui` for Nx apps, or a local header in how.
