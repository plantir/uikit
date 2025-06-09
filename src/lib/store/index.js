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
const actionIcon = `<svg width="18" height="18" viewBox="0 0 48 48" fill="none" stroke="currentColor" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M24 4V12" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z" fill="none" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M38.1421 9.85789L32.4853 15.5147" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M9.85787 38.1421L15.5147 32.4853" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M4 24H12" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M9.85795 9.85787L15.5148 15.5147" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>`
export const components = writable([
    {
        title: 'Actions',
        icon: actionIcon,
        items: [
            {
                title: 'Button',
                value: 'component/button'
            },
            {
                title: 'Dropdown',
                value: 'component/dropdown'
            },
            {
                title: 'Dialog',
                value: 'component/dialog'
            },
            {
                title: "Swap",
                value: "component/swap"
            }
        ]
    },
    {
        title: 'Avatar',
        value: 'component/avatar'
    },
    {
        title: 'Badge',
        value: 'component/badge'
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
    {
        title: 'Datepicker',
        value: 'component/datepicker'
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