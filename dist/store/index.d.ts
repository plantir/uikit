export const importDocumentSrc: import("svelte/store").Writable<string>;
export const themes: import("svelte/store").Writable<string[]>;
export const components: import("svelte/store").Writable<{
    title: string;
    icon: string;
    items: {
        title: string;
        value: string;
    }[];
}[]>;
export const GlobalColorsText: string[];
export const GlobalSizesText: string[];
