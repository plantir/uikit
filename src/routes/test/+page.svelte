<script lang="ts">
	import Avatar from "$lib/components/Avatar/Avatar.svelte";
	import type { AvatarColor } from "$lib/components/Avatar/Avatar.type.js";
	import Button from "$lib/components/Button/Button.svelte";
	import type { GlobalColor } from "$lib/utils/El.types.js";
    import './test.css'
    let colors: GlobalColor[] = ['neutral', 'primary', 'secondary', 'accent', 'info', 'warning', 'success', 'error']
</script>

<div>
test testes test stst

    <div class="daisy-btn daisy-btn-primary">in button daisy bayad bashe</div>
    <div class="flex gap-4 flex-wrap">
        <Button>default</Button>
        {#each colors as color}
            <Button {color}>{color[0]}</Button>
        {/each}
    </div>
    <div class="flex gap-4 flex-wrap mt-4">
        <!-- <Avatar ring>
            <img src="/swiper-example-01.jpg" alt="" />
        </Avatar>
        {#each colors as color}
            <Avatar ring {color}>
                <img src="/swiper-example-01.jpg" alt="" />
            </Avatar>
        {/each} -->
        
    </div>
    <div class="flex gap-4" >
        <!-- <Avatar text > default </Avatar>
        <Avatar text color="primary" > p </Avatar>
        <Avatar text color="secondary" > s </Avatar>
        <Avatar text color="accent" > a </Avatar>
        <Avatar text color="success" > s </Avatar>
        <Avatar text color="warning" > w </Avatar>
        <Avatar text color="info" > i </Avatar>
        <Avatar text color="error" > e </Avatar> -->
        </div>
</div>