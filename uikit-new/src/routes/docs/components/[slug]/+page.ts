export async function load({params}) {
    // let files = readdirSync('$lib/../routes/' + params.slug);

    // console.log(files)

    const content = await import(`../${params.slug}.md`);


    return {
        content
    }
}