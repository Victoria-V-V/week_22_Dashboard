//moment
const moment = require('moment');
let date = moment().format('dddd, DD MMMM YYYY');
document.querySelector('.header__date').innerHTML = date;

//chart.js
const Chart = require('chart.js');
const ctx = document.getElementById('line-chart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(133, 130, 185, 1)');
gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            data: [2, 6, 5, 8, 4, 7, 3],
            label: "Tasks",
            borderColor: 'rgb(102, 99, 142)',
            backgroundColor: gradient,
            fill: true,
            tension: 0.5,
            pointBackgroundColor: 'rgb(203, 131, 137)',
            pointRadius: 10,
            pointBorderWidth: 5,
            pointBorderColor: 'rgb(255, 255, 255)'
        }]
    },
    options: {
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
                display: true
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 10
            }

        }
    }
});

//tiny-slider
var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: true,
    controlsPosition: 'bottom',
    autoplayButtonOutput: false,
    mouseDrag: true,
    nav: false,
    controlsText: ["prev", "next"]
});