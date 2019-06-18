import {lineChart} from "../components/chart/data";

export const chartTypes = [
    {
        key: 'line',
        value: 'Line Chart',
        explanation: 'A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.',
        datasets: lineChart.datasets,
        labels: lineChart.labels
    },
    {
        key: 'bar',
        value: 'Bar Chart',
        explanation: 'A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.',
        datasets: lineChart.datasets,
        labels: lineChart.labels
    },
    {
        key: 'radar',
        value: 'Radar Chart',
        explanation: 'A radar chart is a way of showing multiple data points and the variation between them.',
        datasets: lineChart.datasets,
        labels: lineChart.labels
    },
    {
        key: 'pie',
        value: 'Doughnut/Pie Chart',
        explanation: 'Doughnut/Pie Charts are divided into segments, the arc of each segment shows the proportional value of each piece of data. They are excellent at showing the relational proportions between data.',
        datasets: lineChart.datasets,
        labels: lineChart.labels
    },
    {
        key: 'polarArea',
        value: 'Polar Area',
        explanation: 'Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.',
        datasets: lineChart.datasets,
        labels: lineChart.labels
    },
    {
        key: 'bubble',
        value: 'Bubble Chart',
        explanation: 'A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.',
        datasets:[{
            label: ['Deer Population'],
            data: [{
                x: 100,
                y: 0,
                r: 10
            }, {
                x: 60,
                y: 30,
                r: 20
            }, {
                x: 40,
                y: 60,
                r: 25
            }, {
                x: 80,
                y: 80,
                r: 50
            }, {
                x: 20,
                y: 30,
                r: 25
            }, {
                x: 0,
                y: 100,
                r: 5
            }],
            backgroundColor: "#9966FF",
            hoverBackgroundColor: "#000000",
            hoverBorderColor: "#9966FF",
            hoverBorderWidth: 5,
            hoverRadius: 5
        }],
        labels: lineChart.labels
    },
    {
        key: 'scatter',
        value: 'Scatter Chart',
        explanation: 'Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties.',
        datasets: [{
            label: ['Deer Population'],
            data: [{
                x: 100,
                y: 0
            }, {
                x: 60,
                y: 30
            }, {
                x: 40,
                y: 60
            }, {
                x: 80,
                y: 80
            }, {
                x: 20,
                y: 30
            }, {
                x: 0,
                y: 100
            }],
            backgroundColor: "#9966FF",
            hoverBackgroundColor: "#000000",
            hoverBorderColor: "#9966FF",
            hoverBorderWidth: 5,
            hoverRadius: 5
        }]
    }
];