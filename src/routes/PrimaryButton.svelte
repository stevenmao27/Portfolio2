<script>
    export let href = "";
    export let text = "";
    export let from = "from-sbblue";
    export let to = "to-sbpink";
</script>

<a id="resumelink" href={href} class="relative group">
    <div class="px-12 py-3 font-semibold rounded-md bg-white/50 backdrop-blur-md text-black group-hover:translate-x-1 group-hover:translate-y-0.5 transition-all">{text}</div>
    <div class={`absolute left-0 right-0 bottom-0 top-0 translate-x-3 translate-y-2 bg-gradient-to-r ${from} ${to} rounded-md -z-10`}></div>
</a>