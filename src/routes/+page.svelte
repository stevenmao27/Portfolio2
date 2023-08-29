<script>
	import WordCarousel from "./WordCarousel.svelte";

</script>

<div id="loading" class="fixed w-screen h-screen bg-black flex justify-center items-center z-10">
    <svg class="w-[100px] h-[100px]">
        <circle cx=50 cy=50 r=44 stroke-width="5" fill="none" class="stroke-white -rotate-90 origin-center" stroke-linecap="round" stroke-dasharray=280 stroke-dashoffset=280 />
    </svg>
</div>


<div id="landing" class=" relative h-screen grid grid-cols-1 gap-8 lg:grid-cols-2">

    <div class="flex flex-col justify-center lg:items-end gap-4">
        <h1 class="text-2xl">Steven Mao</h1>
        <WordCarousel framePeriod="50" />
    </div>

    <div class="flex flex-col justify-center items-center gap-8">
        <a href="/experience" class="py-4 px-8">Experience (In Progress)</a>
        <a href="/projects" class="py-4 px-8">Projects (In Progress)</a>
        <a href="/resume" class="py-4 px-8">Resume (In Progress)</a>
    </div>

</div>

<h1>hi</h1>

<style>
    #loading {
        animation: fade 2s ease 1.5s forwards;
    }

    @keyframes fade {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            pointer-events: none;
        }
    }

    #loading circle {
        animation: spin 1s ease-in-out forwards;
    }

    @keyframes spin {
        25% {
            stroke-dashoffset: 280;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }
</style>