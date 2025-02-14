// const {contextBridge, ipcRenderer} = require('electron')

// contextBridge.exposeInMainWorld('myAPI',{
//     version: process.versions,
//     saveFile: (data) =>{
//         ipcRenderer.send('file-save',data)
//     },
//     readFile(){
//         return  ipcRenderer.invoke('file-read')
//     }
// })

const {contextBridge, ipcRenderer} = require('electron')
contextBridge.exposeInMainWorld('myAPI', {
    version: process.version,
    saveFile: (data) => {
        ipcRenderer.send('file-save', data)
    },
    readFile() {
        return ipcRenderer.invoke('file-read')
    }
})