const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

// 讓mainWindow函數
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#FFFFFF',
    webPreferences: { nodeIntegration: true }
  });
  
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: 'file:',
      slashes: true 
    })
  );

  // 打開 DevTools, 包裝前記得 disable
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () { 
    mainWindow = null;
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', function(){ 
  // Mac系统透過 cmd+q 退出前, 不關閉app
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function() { 
  // Mac系统透過 cmd+q 退出前, 再次開啟 app 時再次創建視窗
  if (mainWindow === null) {
    createWindow();
  }
});  