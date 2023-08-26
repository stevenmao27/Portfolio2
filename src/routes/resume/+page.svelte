<script>

    
    const resumePath = '/resume.pdf';
</script>

<section class="flex flex-col items-center gap-8 p-12">

    <h1 class="text-4xl">Resume</h1>
    <embed src={resumePath} type="application/pdf" class="w-[500px] h-[600px]"/>
    <a href={resumePath} download="SMR.pdf" class="py-4 px-8 border border-transparent hover:border-white transition-all">Download</a>

</section>
