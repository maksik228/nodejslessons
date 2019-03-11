const fs = require("fs");

fs.appendFileSync("hello.txt", "Привет ми ми ми!");

fs.readFile("hello.txt", "utf8", function(error, data){
  console.log("Ассинхронное чтение файла: ");
  if(error) throw error;
  console.log(data);
})

console.log("Cинхронное чтение файла: ");
let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);
