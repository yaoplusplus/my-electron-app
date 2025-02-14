// import modules
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

// write files
function writeFile(_, data) {
    fs.writeFileSync('C:/Users/yaoyao/Desktop/HelloWorld.txt', data)
}

// read file
function readFile() {
    const res = fs.readFileSync('C:/Users/yaoyao/Desktop/HelloWorld.txt').toString()
    return res;
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        alwaysOnTop: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    }
    )

    ipcMain.on('file-save',writeFile)
    ipcMain.handle('file-read',readFile)

    // import page
    win.loadFile('pages/index/index.html')
    console.log("main.js")
}


app.on('ready', () => {
    createWindow()
    //兼容核心代码1
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})