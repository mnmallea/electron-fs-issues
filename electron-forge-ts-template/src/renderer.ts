import * as fs from 'fs';

const $placeholder = document.getElementById('placeholder') as HTMLElement;

console.log('Reading file..');
fs.promises.readFile('tini.csv')
    .then(content => {
        console.log('Done');
        const stringContent = content.toString();
        console.log(stringContent);
        $placeholder.innerText = stringContent;
    })
    .catch(console.error);
