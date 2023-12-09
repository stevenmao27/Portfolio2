<script>

</script>

<div class="flex flex-col items-center gap-8">

    <h1 class=" mt-32 text-4xl font-bold">Experience</h1>

    <section class="relative self-stretch flex justify-center py-20 overflow-visible">
        <div class="section-background blue-circle -translate-x-64 -translate-y-24"></div>
        <div class="section-background yellow-circle translate-x-36 -translate-y-64"></div>
        
        <div class="flex flex-row p-12 max-w-6xl bg-white/5 backdrop-blur-lg rounded-md shadow-sm">
            <div class="flex-none">
                <h1 class="text-lg font-bold">VISA</h1>
                <h2>Software Engineer Intern</h2>
                <h3 class="italic">May 2023 - August 2023</h3>
            </div>
            <div class="flex-auto h-full w-px bg-white/20 mx-8"></div>
            <div class="flex flex-col gap-4">
                <p>Worked on full stack development and data engineering. 
                    Wrote a Spring Boot microservice from scratch that processes business clients into the system.
                    Setup pipeline, unit tested with Junit, and deployed on Cloudview with Docker and Kubernetes.
                    </p>
                <div class="flex gap-4">
                    {#each ["Java", "Spring Boot", "Kafka", "Cloudview", "Docker", "Kubernetes", "Junit"] as tech}
                        <p class="bg-white/70 text-black rounded-full px-3 py-1">{tech}</p>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <section class="relative self-stretch flex justify-center py-20 overflow-visible">
        <div class="flex flex-row p-12 max-w-6xl bg-white/5 backdrop-blur-lg rounded-md shadow-sm">
            <div class="flex-none">
                <h1 class="text-lg font-bold">TAMU Engineering</h1>
                <h2>Undergraduate Teacher Assistant</h2>
                <h3 class="italic">August 2022 - Present</h3>
            </div>
            <div class="flex-auto h-full w-px bg-white/20 mx-8"></div>
            <p>Held 4 Solo Exam Reviews for a CS Python Course @ TAMU Engineering.
                Led Weekly Recitation (class) for a Professional Engineering Development Course.
                Hold weekly office hours for tutoring and lab work, grade assignments.
                Taught 3 separate courses
            </p>
        </div>
    </section>
    
</div>

<style>
    .section-background {
        position: absolute;
        width: 600px;
        height: 600px;
        z-index: -10;
        background-repeat: no-repeat;
    }
    .blue-circle {
        background: radial-gradient(circle 300px, rgba(12, 50, 204, 0.5), transparent);
    }
    .yellow-circle {
        background: radial-gradient(circle 300px, rgba(252, 190, 21, 0.5), transparent);
    }
</style>