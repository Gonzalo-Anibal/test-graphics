let csvToJson = require('convert-csv-to-json');

let fileInputName = 'NPS-2024-04-08.csv'; 
let fileOutputName = 'myOutputFile.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}