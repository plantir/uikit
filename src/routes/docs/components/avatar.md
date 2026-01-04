---
title: Avatar – Plantir UIKit
description: Display user avatars with various sizes, shapes, masks, rings, and status indicators. Supports images, text, and avatar groups.
---

# Avatar

The `Avatar` component displays user profile images or text initials with extensive customization options including sizes, shapes, masks, rings, and online/offline status indicators.

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<Avatar size="md">
    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
</Avatar>
```

## Sizes

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<div class="flex gap-4 items-center">
    <Avatar size="xs">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar size="sm">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar size="md">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar size="lg">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
</div>
```

## Shapes

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<div class="flex gap-4">
    <Avatar shape="rounded" size="md">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar shape="circle" size="md">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar shape="square" size="md">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
</div>
```

## Masks

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<div class="flex gap-2 flex-wrap">
    <Avatar mask="circle" size="xs">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar mask="hexagon" size="xs">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar mask="heart" size="xs">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar mask="star" size="xs">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar mask="diamond" size="xs">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
</div>
```

## Ring Colors

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<div class="flex gap-4">
    <Avatar ring shape="circle" color="primary">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar ring shape="circle" color="secondary">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar ring shape="circle" color="accent">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar ring shape="circle" color="success">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
</div>
```

## Text Avatars

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<div class="flex items-center gap-3">
    <Avatar text shape="circle" size="xs" color="primary">
        <div class="text-2xl">A</div>
    </Avatar>
    <Avatar text shape="circle" size="sm" color="secondary">
        <div class="text-2xl">B</div>
    </Avatar>
    <Avatar text shape="circle" color="success">
        <div class="text-2xl">C</div>
    </Avatar>
    <Avatar text size="lg" shape="circle" color="error">
        <div class="text-2xl">D</div>
    </Avatar>
</div>
```

## Status Indicators

```svelte example
<script>
    import { Avatar } from 'plantir-uikit'
</script>

<div class="flex items-center gap-3">
    <Avatar text shape="circle" color="secondary" online>
        <div class="text-2xl">A</div>
    </Avatar>
    <Avatar text shape="circle" color="natural" offline>
        <div class="text-2xl">B</div>
    </Avatar>
</div>
```

## Avatar Group

```svelte example
<script>
    import { Avatar, AvatarGroup } from 'plantir-uikit'
</script>

<AvatarGroup>
    <Avatar shape="circle" color="primary">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar shape="circle" color="secondary">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar shape="circle" color="accent">
        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
    </Avatar>
    <Avatar text shape="circle" color="natural">
        <div class="text-xl font-medium">+9</div>
    </Avatar>
</AvatarGroup>
```
