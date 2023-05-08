const fs = require('fs');
const path = require('path');

const { stdin, stdout, exit } = require('process');

const addtext = path.join(__dirname, 'mynotes.txt');
const output = fs.createWriteStream(addtext);
stdout.write('What do you think of Node.js?');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit'){
        stdout.write('Всё в порядке');
        code();
    }
    output.write(data);
    
});

/* process.on('exit', code => {
     {
        
        code();
    } else {
        stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`);
    }
}); */

process.on('SIGINT', code);
/* 
rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer) => {
      if (answer.match(/^y(es)?$/i)) rl.pause();
    });
  }); */

function code(){
    stdout.write('exit');
    exit();
}



