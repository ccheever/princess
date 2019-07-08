let path = require('path');

let { app, BrowserWindow } = require('electron');

let PRINCESS_EXPO_APP_URL = process.env.PRINCESS_EXPO_APP_URL || 'http://localhost:19006';

function createWindow() {
  // Create the browser window
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, '..', '..', 'assets', 'AppIcon.icns'),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(PRINCESS_EXPO_APP_URL);
  console.log(path.join(__dirname, '..', '..', 'assets', 'AppIcon.icns'));
}

app.on('ready', createWindow);
