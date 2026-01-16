interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const LetCode: $$__sveltets_2_IsomorphicComponent<{
    name?: string;
    value?: any;
    items?: any;
    dont_break?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type LetCode = InstanceType<typeof LetCode>;
export default LetCode;
