export default ExampleWrapper;
type ExampleWrapper = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const ExampleWrapper: import("svelte").Component<{
    src: any;
    meta: any;
    example: any;
    code: any;
}, {}, "">;
type $$ComponentProps = {
    src: any;
    meta: any;
    example: any;
    code: any;
};
