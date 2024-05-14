(function () {

    const csvParser = require("csv-parser");
    const fs = require("fs");

    const result = [];
    const c1 = [];
    const c2 = [];

    fs.createReadStream("./NPS-2024-04-08.csv")
    .pipe(csvParser())
    .on("data", (row) => {
        result.push(row);
        if (row.canal == 'C1') {
            c1.push(row);
        }
        if (row.canal == 'C2') {
            c2.push(row);
        }
    })
    .on("end", () => {
        console.log(result);
        // console.log(c1);
        // console.log(c2);

    });
})();