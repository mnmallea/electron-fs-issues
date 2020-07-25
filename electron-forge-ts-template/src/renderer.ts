import { ipcRenderer } from 'electron';
import { READ_FILE_CHANNEL } from './constants';

const $placeholder = document.getElementById('placeholder') as HTMLElement;

console.log('Reading file..');
ipcRenderer.invoke(READ_FILE_CHANNEL, 'tini.csv')
    .then(content => {
        console.log('Done');
        const stringContent = content.toString();
        console.log(stringContent);
        $placeholder.innerText = stringContent;
    })
    .catch(console.error);