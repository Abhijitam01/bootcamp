import fs from 'fs';
import { Command } from 'commander'
const program = new Command();

program
    .name('counter')
    .description('cli for this application')
    .version('1.0.0')


program
    .description('count the number of words')
    .argument('<file>' , 'file to count')
    .action((file) => {
        fs.readFile(file,"utf8" , (err,data) => {
            if(err){
                console.log(err)
            } else {
                const lines = data.split(' ').length;
                console.log('their are '  + lines + " line in the  " + file)
            }
        })
    })
program.parse();
    
