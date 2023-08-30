/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'sbblue': 'rgb(33,191,254)',
        'sbgreen': 'rgb(107,214,187)',
        'sblightgreen': 'rgb(145,215,216)',
        'sblightblue': 'rgb(178,218,253)',
        'sbwhiteblue': 'rgb(221,239,251)',
        'sbyellow': 'rgb(242,218,189)',
        'sblightyellow': 'rgb(254,241,223)',
        'sbmutepink': 'rgb(233,174,196)',
        'sblightpink': 'rgb(244,190,216)',
        'sbpink': 'rgb(254,141,214)',
        'sblavender': 'rgb(118,136,254)',
        'sbdarkgray': 'rgb(27,28,49)',
        'sbpurple': 'rgb(136,3,127)'
      }
    },
  },
  plugins: [],
}
