import { readFile } from 'fs';


fs.readFile("a.txt", "utf8", function (err, data){
    console.log(data);
})

fs.readFile("b.txt", "utf8", (err, data) => {
    console.log(data);
})

fs.readFile("c.txt", "utf8", (err, data) => {
    console.log(data);
})