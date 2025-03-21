const fs = require('fs');

const task1 = fs.readFileSync("a.txt", "utf8");
console.log(task1);

const task2 = fs.readFileSync("b.txt", "utf8");
console.log(task2);

const task3 = fs.readFileSync("c.txt", "utf8");
console.log(task3);