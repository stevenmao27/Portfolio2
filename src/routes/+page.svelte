<script>
	import WordCarousel from "./WordCarousel.svelte";

</script>


<div id="landing" class="w-screen h-screen p-4 grid grid-cols-1 gap-8 lg:grid-cols-2">

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

