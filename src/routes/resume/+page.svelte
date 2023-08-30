<script>
    import PrimaryButton from "../PrimaryButton.svelte";
</script>

<section class="flex flex-col items-center gap-8 p-12">

    <h1 class="text-4xl">Resume</h1>
    <embed src='/resume.pdf' type="application/pdf" class="w-[500px] h-[680px]"/>

    <a href='/resume.pdf' download="StevenMaoResume.pdf" class="relative group">
        <div class="px-12 py-3 font-semibold rounded-md bg-white/50 backdrop-blur-md text-black group-hover:translate-x-1 group-hover:translate-y-0.5 transition-all">Download Resume</div>
        <div class={`absolute left-0 right-0 bottom-0 top-0 translate-x-3 translate-y-2 bg-gradient-to-r from-sblavender to-sblightgreen rounded-md -z-10`}></div>
    </a>
</section>
