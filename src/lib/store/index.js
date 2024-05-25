import { writable } from "svelte/store";

export const importDocumentSrc = writable('@plantir/uikit')
export const themes = writable([
    'light',
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
    "polaris",
    // "corporate",
    // "synthwave",
    // "retro",
    // "cyberpunk",
    // "valentine",
    // "halloween",
    // "garden",
    // "forest",
    // "aqua",
    // "lofi",
    // "pastel",
    // "fantasy",
    // "wireframe",
    // "black",
    // "luxury",
    // "dracula",
    // "cmyk",
    // "autumn",
    // "business",
    // "acid",
    // "lemonade",
    // "night",
    // "coffee",
    // "winter",
    // "dim",
    // "nord",
    // "sunset",
])
export const components = writable([
    {
        title: 'Avatar',
        value: 'component/avatar'
    },
    {
        title: 'Badge',
        value: 'component/badge'
    },
    {
        title: 'Button',
        value: 'component/button'
    },
    {
        title: 'Checkbox',
        value: 'component/checkbox'
    },
    {
        title: 'Collapse',
        value: 'component/collapse'
    },
    {
        title: 'ColorPicker',
        value: 'component/colorpicker'
    },
    // {
    // 	title: 'datepicker',
    // 	value: 'component/datepicker'
    // },
    {
        title: 'Dialog',
        value: 'component/dialog'
    },
    {
        title: 'Divider',
        value: 'component/divider'
    },
    {
        title: 'Drawer',
        value: 'component/drawer'
    },
    {
        title: 'Dropdown',
        value: 'component/dropdown'
    },
    {
        title: 'Loading',
        value: 'component/loading'
    },
    {
        title: 'Pagination',
        value: 'component/pagination'
    },
    {
        title: 'Progress',
        value: 'component/progress'
    },
    {
        title: 'Radio',
        value: 'component/radio'
    },
    {
        title: 'Range',
        value: 'component/range'
    },
    {
        title: 'Select',
        value: 'component/select'
    },
    {
        title: 'Steps',
        value: 'component/steps'
    },
    {
        title: 'Swiper',
        value: 'component/swiper'
    },
    {
        title: 'Switch',
        value: 'component/switch'
    },
    {
        title: 'Table',
        value: 'component/table'
    },
    {
        title: 'Tabs',
        value: 'component/tabs'
    },
    {
        title: 'Textarea',
        value: 'component/textarea'
    },
    {
        title: 'Text field',
        value: 'component/textfield'
    }
])