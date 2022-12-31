const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book); // convert object to JSON string
fs.writeFileSync("1-json.json", bookJSON); // write JSON string to file

const dataBuffer = fs.readFileSync("1-json.json"); // read JSON string from file
const dataJSON = dataBuffer.toString(); // convert JSON string to object
const data = JSON.parse(dataJSON); // convert JSON string to object
console.log(data);
