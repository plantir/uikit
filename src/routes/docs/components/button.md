---
title: Button – Plantir UIKit
description: Reusable button component with color, size, variant, shape, and state options. Includes loading, block, wide, and link behaviors for flexible UI patterns.
---

# Button

The `Button` component provides a full set of interaction patterns: colors, variants, sizes, loading states, shapes, and behavioral flags such as `block`, `wide`, and `active`.

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<Button color="primary">Primary</Button>
```

## Colors

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="gap-4 flex flex-wrap">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="accent">Accent</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
    <Button color="neutral">Neutral</Button>
</div>
```

## Variants

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="gap-4 flex flex-wrap">
    <Button color="primary" variant="outline">Outline</Button>
    <Button color="secondary" variant="ghost">Ghost</Button>
    <Button color="accent" variant="glass">Glass</Button>
    <Button color="info" variant="link">Link</Button>
</div>
```

## Sizes

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="gap-4 flex flex-wrap items-center">
    <Button size="xs" color="primary">XS</Button>
    <Button size="sm" color="primary">SM</Button>
    <Button size="md" color="primary">MD</Button>
    <Button size="lg" color="primary">LG</Button>
    <Button size="xl" color="primary">XL</Button>
</div>
```

## Shapes

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="gap-4 flex items-center flex-wrap">
    <Button color="primary" shape="square">■</Button>
    <Button color="primary" shape="circle">●</Button>
</div>
```

## Loading

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<Button color="primary" loading>Loading</Button>
```

## Block & Wide

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="flex flex-col gap-4 w-full max-w-xs">
    <Button color="primary" block>Block Button</Button>
    <Button color="primary" wide>Wide Button</Button>
</div>
```

## As Link (anchro tag)
```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<Button href="https://github.com/plantir/uikit" color="primary">
    Visit Github
</Button>
```