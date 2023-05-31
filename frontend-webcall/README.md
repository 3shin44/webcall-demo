# frontend-webcall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Quick Start 快速啟動

	1. (Optional) 更換對應版本 webCallCore.js
  
		將最對應版本webCallCore.js替換目錄下檔案: {project_frontendFolder}/public/js/webCallCore.js

	2. (Optional) 更新WebSocket參數

		在App.vue中更新audioConfig內部參數, 此參數通常由API取得, 若由API取得則將對應參數更新至audioConfig

	3. 啟動頁面

		頁面啟動後可在主控台看到chatCore版本號提示訊息, 例: webcallInterface 版本號 : vX.XX.X.X.XXXXXX

	4. 按下撥號即可與前述設定之WS URL撥號


## General Call Flow 一般撥號流程

	1. (啟動前準備) 更新對應版本webCallCore.js
		將最新版或對應版本之webCallCore.js替換目錄下檔案: {project_frontendFolder}/public/js/webCallCore.js

	2. 獲取WebSocket參數&實體化webcall
		在App.vue中啟動後, 於created階段經API(如: getConfig)取得WS參數, 取得參數後建立webcall實體並存於Vuex中供其他元件存取

		備註1: 此處若getConfig有帶其他參數 (例: DN), 則儲存至Vuex供後續使用

		備註2: 實體化webcall時會有WS連線狀態callback function, 此處使用eventBus觸發其他元件執行對應事件(如: 連線狀態改變...etc)

	3. 瀏覽器檢查
		此為webcall功能, 在webcall建立後進行檢查, 檢測到不支援結果, 跳轉不支援頁面(NotSupprot.vue)

	4-1. (使用者點擊撥號後) - 麥克風權限檢查
		檢查麥克風裝置與授權狀態, 裝置檢查失敗則阻擋撥號, 留在原頁面 (此功能由functionUtil內的requestPermission, checkMicrophone函式執行)

	4-2. (使用者點擊撥號後) - 客服忙線狀態檢查
		使用者點擊撥號按鈕後, 經API (如: isBusy)取得客服忙線狀態, 若忙線中跳轉忙線頁面(FullQueue.vue), 客服可接聽則執行webcall功能: audioCall()後, 跳轉接聽頁面(LiveChat.vue)

		備註: audioCall()若要call對應DN則直接傳入即可, 例: audioCall("8888")

	4. 進入客服對話
		進入LiveChat.vue頁面, 啟動eventBus接收事件, 以便更新WS訊息. 頁面預設功能: 對話時長計時器

	5. 對話中WS訊息更新
		透過先前綁定的webcall callback: onCallingStateChangeCallback, onConnectStatusBad, 接收訊息

	6. 對話結束
		WS連線關閉/使用者關閉轉向通話完成頁(ChatComplete.vue)

	0. 其他
		服務過程中任何連線異常皆視為網路不穩, 轉向連線不穩頁面(AbnormalConnect.vue), 如:APㄛ呼叫異常, WS回傳連線中斷事件