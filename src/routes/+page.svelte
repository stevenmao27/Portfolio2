<script>
	import WordCarousel from "./WordCarousel.svelte";
    import PrimaryButton from "./PrimaryButton.svelte";
    import ArrowSvg from "$lib/arrow-svg.svelte";
	import { onMount } from "svelte";

    onMount(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }
            })
        });

        document.querySelectorAll('#about h2').forEach(el => observer.observe(el));
        document.querySelectorAll('#about li').forEach(el => observer.observe(el));
    })
    
</script>

<div id="loading" class="fixed w-screen h-screen bg-sbdarkgray flex justify-center items-center z-10">
    <svg class="w-[100px] h-[100px]">
        <circle cx=50 cy=50 r=44 stroke-width="4" fill="none" class="stroke-white -rotate-90 origin-center" stroke-linecap="round" stroke-dasharray=280 stroke-dashoffset=280 />
    </svg>
</div>


<div id="landing" class="relative h-screen grid grid-cols-1 gap-8 lg:grid-cols-2">

    <div class="flex flex-col justify-center lg:items-end gap-4">
        <h1 class="text-2xl tracking-wide">Steven Mao</h1>
        <WordCarousel framePeriod="50" />
    </div>

    <div class="flex flex-col justify-center items-center gap-16">
        <a href="/experience" class="py-2 text-lg font-medium border-b-2">Experience<ArrowSvg /></a>
        <a href="/projects" class="py-2 text-lg font-medium border-b-2">Projects (Empty) <ArrowSvg /></a>
        <PrimaryButton href="/resume" text="Resume" />
    </div>

</div>

<div id="about" class="flex flex-col p-24 gap-8 items-center">

    <h1 class="text-4xl m-4">About Me</h1>

    <h2 class="text-lg">Hello! This is my 4th personal website in development. I'm using this <a href="https://www.riotgames.com/en/news/complementary-visual-design-in-spirit-blossom" class="underline-link">color palette</a>.</h2>
    <ul class="list-disc pl-4 flex flex-col gap-2">
        <li>Former Software Engineer Intern @ VISA</li>
        <li>Honors Computer Science Major @ TAMU, Class of 2025</li>
        <li>Undergraduate TA for 2 years</li>
        <li>Email me at <button class="underline-link" on:click={async () => {navigator.clipboard.writeText("steven2003mao@gmail.com"); alert('Copied Email to Clipboard!')}}>steven2003mao@gmail.com</button></li>
        <li>See my <a href="https://linkedin.com/in/steven-mao" class="underline-link">Linkedin</a> or my <a href="https://github.com/stevenmao27" class="underline-link">Github</a> profile</li>
        <li>Interested in performance-critical programming (C++/Rust) and UI/UX design. Open-minded to anything and everything.</li>
        <li>Last year's <a href="https://stevenmao27.github.io/Portfolio" class="underline-link">Portfolio Website</a> for UI</li>
        <li><a href="http://people.tamu.edu/~stevenm27" class="underline-link">Dual-Style Portfolio</a> single week course project (may be unavailable). Source can be found <a href="https://github.com/stevenmao27/Dual-Style-Portfolio" class="underline-link">here</a></li>
    </ul>

    <h2 class="text-lg mt-8">Skills List:</h2>
    <ul class="list-disc pl-4 flex flex-col gap-2">
        <li>Highly Confident in Python, CSS, and my ability to learn!</li>
        <li>Professional experience in Java + Spring Boot + Kafka</li>
        <li>Interested in solidifying skills with Rust and C++</li>
        <li>Proficient with Javscript and Web Frameworks like React, Svelte, and Angular</li>
        <li>Dabbled in SQL, Golang, Most major cloud services (Google, AWS, Heroku)</li>
    </ul>

    <h2 class="text-lg mt-8">Coursework:</h2>
    <ul class="list-disc pl-4 flex flex-col gap-2">
        <li>Fundamentals: Discrete Structures, Data Structures and Algorithms, Design and Analysis of Algorithms</li>
        <li>Software: Software Engineering, Programming Languages (Java and Haskell), Parallel Computing</li>
        <li>Trifecta: Computer Organization (Assembly), Computer Systems (C/Unix), Operating Systems (C/Unix)</li>
        <li>Intelligence: Machine Learning, Artificial Intelligence</li>
        <li>Statistics: Linear Algebra, Statistics, Math Probability</li>
        <li>Design: Data Visualization</li>
    </ul>
</div>

<style>
    h2 {
        opacity: 0;
        transition: all 0.75s ease;
    }
    li {
        opacity: 0;
        transition: all 0.75s ease;
    }
    .underline-link {
        /* @apply relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-sbgreen after:-z-10 after:hover:h-full after:transition-all; */
        position: relative;
    }
    .underline-link::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.25rem;
        background-color: rgb(107, 214, 187);
        z-index: -10;
        transition: all 0.15s ease-in-out;
    }
    .underline-link:hover::after {
        height: 100%;
    }

    #loading {
        animation: fade 2s ease 1.5s forwards;
    }

    @keyframes fade {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            display: none;
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