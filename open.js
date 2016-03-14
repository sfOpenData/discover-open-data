$(function () {

    $('#container').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: true
        },

        title: {
            text: 'Lincoln High School - Wind Speeds'
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 0,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 10,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 4,
            tickPosition: 'inside',
            tickLength: 12,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'M/SEC'
            },
            plotBands: [{
                from: 0,
                to: 3,
                color: '#55BF3B' // green
            }, {
                from: 3,
                to: 6,
                color: '#DDDF0D' // yellow
            }, {
                from: 6,
                to: 10,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Speed',
            data: [0],
            tooltip: {
                valueSuffix: ' M/S'
            }
        }]
    },

    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                $.get('/output.txt', function(txt) {
                    var point = chart.series[0].points[0];
                    var lines = txt.split("\n");
                    var numbers = Math.floor(Math.random() * lines.length) + 1;
                    for (var i = 0, len = lines.length; i < len; i++) {
                        if (numbers == i) {
                        numbers = parseFloat(lines[i]);
                        point.update(numbers);
                        }
                    }
                });
            }, 3000);
        }
    });
});







