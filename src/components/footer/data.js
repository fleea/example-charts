const footerArray = new Array(15).fill('');
export const footerData = {
    type: 'line',
    labels: footerArray,
    datasets: [{
        fill: true,
        backgroundColor: '#00171f',
        data: footerArray.map(() => Math.floor(Math.random() * 16) + 5 )
    }],
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: -20
            }
        },
        legend: {
            display: false
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawBorder: false,
                    display:false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    display:false
                },
                ticks: {
                    display: false,
                    min:0,
                    max: 21,
                    stepSize:1
                }
            }]
        }
    }
}