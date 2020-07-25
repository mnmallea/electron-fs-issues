// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const fs = require('fs');

const $placheholder = document.getElementById('placeholder');

console.log('Reading file');
fs.promises.readFile('tini.csv')
    .then(content => {
        console.log('Done');
        const stringContent = content.toString();
        console.log(stringContent);
        $placheholder.innerText = stringContent;
    })
    .catch(console.error);
