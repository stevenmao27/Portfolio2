

<svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <line class="head" x1="50" y1="20" x2="80" y2="50" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/>
    <line class="head" x1="50" y1="80" x2="80" y2="50" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/>
    <line class="left-line" x1="20" y1="50" x2="65" y2="50" stroke="white" stroke-width="8" stroke-linecap="round"/>
    <line class="right-line" x1="65" y1="50" x2="75" y2="50" stroke="white" stroke-width="8" stroke-linecap="round"/>
</svg>

<style>
    svg {
        overflow: visible;
        display: inline-block;
    }
    .left-line {
        stroke-dasharray: 60;
        stroke-dashoffset: -60;
        transition: all 0.3s ease;
    }
    .right-line {
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        transition: all 0.3s ease;
    }
    .head {
        transform: translateX(-15px);
        transition: all 0.3s ease;
    }
    a:hover svg .left-line {
        stroke-dashoffset: 0;
    }
    a:hover svg .right-line {
        stroke-dashoffset: 0;
    }
    a:hover svg .head {
        transform: translateX(0px);
    }
</style>