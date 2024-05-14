
// let csvToJson = require('convert-csv-to-json');

// let fileInputName = 'NPS-2024-04-08.csv'; 
// let fileOutputName = 'myOutputFile.json';

// csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);

// let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }

import data from './myOutputFile.json' with { type: 'json' };

var dataC1 = data.filter(function(obj) {
    return obj.canal === 'C1';
});

var dataC2 = data.filter(function(obj) {
    return obj.canal === 'C2';
});

var datasetC1 = {
    label: 'Canal C1',
    data: dataC1.map(row => row.nps_global),
    borderWidth: 1
}

var datasetC2 = {
    label: 'Canal C2',
    data: dataC2.map(row => row.nps_global),
    borderWidth: 1
}

var scales = {
    yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
}

var ctx = document.getElementById('myChartC1').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataC1.map(row => row.created),
        datasets: [datasetC1]
    },
    options: {
        scales,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Gráfico Canal C1',
              padding: {
                top: 10,
                bottom: 30
            }
            }
          }
    }
});

var ctx = document.getElementById('myChartC2').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataC2.map(row => row.created),
        datasets: [datasetC2]
    },
    options: {
        scales,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Gráfico Canal C2',
              padding: {
                top: 50,
                bottom: 30
            }
            },
            layout: {
                padding: 20
            }
          }
    }
});

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.map(row => row.created),
        datasets: [
        {
            label: 'Canal C1',
            data: dataC1.map(row => row.nps_global),
            // backgroundColor: 'red',
            borderWidth: 1
        },
        {
            label: 'Canal C2',
            data: dataC2.map(row => row.nps_global),
            // backgroundColor: 'blue',
            borderWidth: 1
        }]
    },
    options: {
        scales,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Gráfico de Canales',
              padding: {
                top: 50,
                bottom: 30
            }
            }
          },
          
    }
});