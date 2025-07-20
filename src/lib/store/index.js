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
    "caramellatte",
    "abyss",
    "silk",
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
const layoutIcon = `<svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></rect><path d="M6 22L42 22" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M29 22V6" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M26 6H32" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M6 19V25" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M42 19V25" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>`
const dataInputIcon = `<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 42H43" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></path></svg>`
const feedbackIcon = `<svg width="18" height="18" class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H44V36H29L24 41L19 36H4V6Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M23 21H25.0025" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path><path d="M33.001 21H34.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path><path d="M13.001 21H14.9999" stroke="currentColor" stroke-width="4" stroke-linecap="butt"></path></svg>`
const navigationIcon = `<svg width="18" height="18" viewBox="0 0 48 48" class="size-5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>`
const dataDisplayIcon = `<svg width="18" height="18" viewBox="0 0 48 48" class="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" stroke-width="4" stroke-linejoin="bevel"></rect><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z" fill="none" stroke="currentColor" stroke-width="4"></path><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="currentColor"></circle><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="currentColor"></circle></svg>`
const actionIcon = `<svg width="18" height="18" viewBox="0 0 48 48" fill="none" stroke="currentColor" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M24 4V12" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z" fill="none" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M38.1421 9.85789L32.4853 15.5147" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M9.85787 38.1421L15.5147 32.4853" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M4 24H12" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M9.85795 9.85787L15.5148 15.5147" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>`
export const components = writable([
    {
        title: 'Actions',
        icon: actionIcon,
        items: [
            {
                title: 'Button',
                value: 'button'
            },
            {
                title: 'Dropdown',
                value: 'dropdown'
            },
            {
                title: "Swap",
                value: "swap"
            }
        ]
    },
    {
        title: 'Data Display',
        icon: dataDisplayIcon,
        items: [
            {
                title: 'Accordion',
                value: 'accordion'
            },
            {
                title: 'Avatar',
                value: 'avatar'
            },
            {
                title: 'Badge',
                value: 'badge'
            },
            {
                title: 'Card',
                value: 'card'
            },
            {
                title: 'Chat',
                value: 'chat'
            },
            {
                title: 'CountDown',
                value: 'countdown'
            },
            {
                title: 'Diff',
                value: 'diff'
            },
            {
                title: 'Kbd',
                value: 'kbd'
            },
            {
                title: 'Stat',
                value: 'stat'
            },
            {
                title: 'Status',
                value: 'status'
            },
            {
                title: 'Table',
                value: 'table'
            },
            {
                title: 'Timeline',
                value: 'timeline'
            },
        ]
    },
    {
        title: 'Navigation',
        icon: navigationIcon,
        items: [
            {
                title: 'Breadcrumbs',
                value: 'breadcrumbs'
            },
            {
                title: 'Dock',
                value: 'dock'
            },
            {
                title: 'Menu',
                value: 'menu'
            },
            {
                title: 'Navbar',
                value: 'navbar'
            },

            {
                title: 'Pagination',
                value: 'pagination'
            },
            {
                title: 'Steps',
                value: 'steps'
            },
            {
                title: 'Tabs',
                value: 'tabs'
            },
        ]
    },
    {
        title: 'Feedback',
        icon: feedbackIcon,
        items: [
            {
                title: 'Alert',
                value: 'alert'
            },
            {
                title: 'Loading',
                value: 'loading'
            },
            {
                title: 'Progress',
                value: 'progress'
            },
            {
                title: 'Radial progress',
                value: 'radial-progress'
            },
            {
                title: 'Skeleton',
                value: 'skeleton'
            },
        ]
    },
    {
        title: 'Data input',
        icon: dataInputIcon,
        items: [
            {
                title: 'Checkbox',
                value: 'checkbox'
            },
            {
                title: 'ColorPicker',
                value: 'colorpicker'
            },
            {
                title: 'Datepicker',
                value: 'datepicker'
            },
            {
                title: 'Radio',
                value: 'radio'
            },
            {
                title: 'Range',
                value: 'range'
            },
            {
                title: 'Select',
                value: 'select'
            },

            {
                title: 'Swiper',
                value: 'swiper'
            },
            {
                title: 'Switch',
                value: 'switch'
            },


            {
                title: 'Textarea',
                value: 'textarea'
            },
            {
                title: 'Text field',
                value: 'textfield'
            }
        ]
    },
    {
        title: 'Layout',
        icon: layoutIcon,
        items: [
            {
                title: 'Divider',
                value: 'divider'
            },
            {
                title: 'Dialog',
                value: 'dialog'
            },
            {
                title: 'Drawer',
                value: 'drawer'
            },
        ]
    },
])
export const GlobalColorsText = ["primary", "secondary", "accent", "success", "warning", "info", "error", "neutral"]
export const GlobalSizesText = ["xl", "lg", "md", "sm", "xs"]