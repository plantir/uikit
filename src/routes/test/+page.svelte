<script lang="ts">
	import Avatar from "$lib/components/Avatar/Avatar.svelte";
	import type { AvatarColor } from "$lib/components/Avatar/Avatar.type.js";
    import '$lib/css/app.css'

    let colors: AvatarColor[] = ['neutral', 'primary', 'secondary', 'accent', 'info', 'warning', 'success', 'error']
</script>

<div>
    <div class="flex gap-4 flex-wrap">
        <Avatar text>default</Avatar>
        {#each colors as color}
            <Avatar text {color}>{color[0]}</Avatar>
        {/each}
    </div>
    <div class="flex gap-4 flex-wrap mt-4">
        <Avatar ring>
            <img src="/swiper-example-01.jpg" alt="" />
        </Avatar>
        {#each colors as color}
            <Avatar ring {color}>
                <img src="/swiper-example-01.jpg" alt="" />
            </Avatar>
        {/each}
        
    </div>
    <div class="flex gap-4" >
        <Avatar text > default </Avatar>
        <Avatar text color="primary" > p </Avatar>
        <Avatar text color="secondary" > s </Avatar>
        <Avatar text color="accent" > a </Avatar>
        <Avatar text color="success" > s </Avatar>
        <Avatar text color="warning" > w </Avatar>
        <Avatar text color="info" > i </Avatar>
        <Avatar text color="error" > e </Avatar>
        </div>
</div>