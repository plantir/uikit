export async function load({params}) {
    const content = await import(`../${params.slug}.md`);

    return {
        content
    }
}