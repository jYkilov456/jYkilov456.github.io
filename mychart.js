$(function () { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Валюты'
        },
        xAxis: {
            categories: ['Доллары', 'Евро', 'Гривны']
        },
        yAxis: {
            title: {
                text: 'Затраты'
            }
        },
        series: [{
            name: 'Игорь',
            data: [1, 0, 4]
        }, {
            name: 'Кирилл',
            data: [5, 7, 3]
        }]
    });
});