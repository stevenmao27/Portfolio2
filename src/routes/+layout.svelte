<script>
    import "../app.css";
    import { spring } from "svelte/motion";
	import { onMount } from "svelte";
    import { page } from "$app/stores";

    let mounted = false;
    let coords = spring({ x: 0, y: 0 }, { stiffness: 0.07, damping: 0.7 });
    let radius = spring(10, { stiffness: 0.1, damping: 0.25 });

    function moveCursor(e) {
        coords.set({ x: e.clientX, y: e.clientY });
    }

    // every page change
    $: {
        if (mounted) {
            $page;
            window.addEventListener('mousemove', moveCursor);
            document.querySelectorAll('a').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    radius.set(25);
                })
                el.addEventListener('mouseleave', () => {
                    radius.set(10);
                })
            })
            document.querySelectorAll('button').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    radius.set(25);
                })
                el.addEventListener('mouseleave', () => {
                    radius.set(10);
                })
            })
        }
    }

    onMount(() => {
        mounted = true;
        document.addEventListener('mousedown', () => radius.set(5));
        document.addEventListener('mouseup', () => radius.set(10));
    });
</script>

<svg role="none" on:mousedown={() => console.log('mousedown')} on:mouseup={() => radius.set(10)} class="fixed w-screen h-screen pointer-events-none z-20">
    <circle cx={$coords.x} cy={$coords.y} r={$radius} stroke-width=1 fill=none class=" fill-white/50 bg-sb mix-blend-color-dodge" />
</svg>

<slot />

<style>
    /* global styles */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&display=swap');

    :global(body) {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        color: white;
        background-color: rgb(33, 33, 36);
        font-family: 'Montserrat', sans-serif;
    }
</style>