const fs = require("fs");
const csv = require("csvtojson");

const sourcefile = "src/raw.csv"; // Source File
const filename = "src/index.json"; // Output File

// Converts `raw.csv` (with headers) to `index.json`
(async () => {
  const json = await csv().fromFile(sourcefile);
  
  fs.writeFileSync(filename, JSON.stringify(json));
})()