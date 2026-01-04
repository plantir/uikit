---
title: Accordion – Plantir UIKit
description: Collapsible accordion component for organizing content in expandable sections with radio-based single-selection behavior.
---

# Accordion

The `Accordion` component provides a collapsible content area that can be expanded or collapsed. It uses radio inputs to ensure only one section is open at a time.

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="daisy-collapse bg-base-200">
    <input type="radio" name="my-accordion-1" checked="checked" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
        <p>hello</p>
    </div>
</div>
```

## Basic Usage

```svelte example
<script>
    import { Button } from 'plantir-uikit'
</script>

<div class="daisy-collapse bg-base-200">
    <input type="radio" name="my-accordion-1" checked="checked" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
        <p>Content for the first accordion item.</p>
    </div>
</div>
<div class="daisy-collapse bg-base-200">
    <input type="radio" name="my-accordion-1" />
    <div class="daisy-collapse-title text-xl font-medium">
        Click to open this one and close others
    </div>
    <div class="daisy-collapse-content">
        <p>Content for the second accordion item.</p>
    </div>
</div>
<div class="daisy-collapse bg-base-200">
    <input type="radio" name="my-accordion-1" />
    <div class="daisy-collapse-title text-xl font-medium">
        Click to open this one and close others
    </div>
    <div class="daisy-collapse-content">
        <p>Content for the third accordion item.</p>
    </div>
</div>
```
