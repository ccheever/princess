let path = require('path');

let { app, BrowserWindow } = require('electron');

let PRINCESS_EXPO_APP_URL = process.env.PRINCESS_EXPO_APP_URL || 'http://localhost:19006';

function createWindow() {
  // Create the browser window
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    // icon: path.join(__dirname, '..', '..', 'assets', 'AppIcon.icns'),
    icon: path.join(__dirname, '..', '..', 'assets', 'AppIcon256.png'),
    title: 'Princess',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(PRINCESS_EXPO_APP_URL);
}

app.on('ready', createWindow);
