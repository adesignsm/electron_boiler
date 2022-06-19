const {app, BrowserWindow} = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        show: false,
        // fullscreen: true,
        // fullscreenable: false,
        // autoHideMenuBar: true,
        // kiosk: true, WHEN APP IS READY FOR PRODUCTION ENABLE KIOSK MODE
        resizable: false,
        alwaysOnTop: true,
        closable: false
    });

    const startURL = isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`;
    mainWindow.loadURL(startURL);

    mainWindow.once("ready-to-show", () => {
        mainWindow.maximize();
        mainWindow.show()
    });
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.on("ready", createWindow);