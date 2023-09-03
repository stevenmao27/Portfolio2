<script>
    export let headers = ['SOFTWARE ENGINEER', 'SYSTEMS PROGRAMMER', 'UI/UX DESIGNER', 'TEXAS A&M UNIVERSITY', 'FULL STACK DEV'];
    export let framePeriod = 30; // minimum time between frames in ms

    import { onMount } from "svelte";

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let element;
    let wordIndex = 0;
    let loopIndex = 0;
    let headerCarousel = '';

    function shuffleText() {
        loopIndex = 0;
        let animationFrameId;
        let lastTime = 0;

        function animate(time) {
            if (time - lastTime < framePeriod) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }
            lastTime = time;

            headerCarousel = headers[wordIndex]
                .split('')
                .map((letter, index) => (index < loopIndex || letter === ' ') ? letter : letters[Math.floor(Math.random() * letters.length)])
                .join('');

            loopIndex += 1 / 2;
            if (loopIndex <= headers[wordIndex].length) {
                animationFrameId = requestAnimationFrame(animate);
            }
        }

        animate(0);
        return () => cancelAnimationFrame(animationFrameId);
    }

    onMount(() => {
        // run first iteration
        shuffleText();

        const intervalId = setInterval(() => {
            wordIndex = (wordIndex + 1) % headers.length;
            if (element.getBoundingClientRect().bottom < window.innerHeight) {
                shuffleText();
            }
        }, 4000);

        return () => clearInterval(intervalId);
    });
</script>

<h2 bind:this={element} class='text-6xl font-mono font-bold'>{headerCarousel}</h2>

