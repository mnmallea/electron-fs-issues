import * as fs from 'fs';

console.log('Reading file..');
fs.promises.readFile('tini.csv')
    .then(content => {
        console.log('Done');
        console.log(content.toString());
    })
    .catch(console.error);
