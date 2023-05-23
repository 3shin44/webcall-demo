// 共用參數
let utilState = {
	initDeviceFlag: true
}

const functionUtil = {
	/**
 * 取得URL參數
 * @returns {Object} 將URL參數組成物件{ key: value }
 */
	getQueryStringObj() {
		const resultObj = {};
		if (location.search) {
			const paramArr = decodeURI(location.search).split("&");
			paramArr.forEach((item) => {
				let key = item.split("=")[0];
				let value = item.split("=")[1];
				value = value.replace(/%40/g, "@");
				value = value.replace(/%/g, "%25");
				value = decodeURIComponent(value);
				key = key.replace("?", "");
				key = key.toLocaleLowerCase();
				resultObj[key] = value;
			});
		}
		return resultObj;
	},

	// 網頁高度重新計算 (vue virtualDOM cause incorrect height)
	documentHeight(domId) {
		let getId = document.getElementById(domId)
		let resetHeight = window.innerHeight
		if (getId) {
			resetHeight = getId.scrollHeight
		}
		const doc = document.documentElement
		doc.style.setProperty('--doc-height', `${resetHeight}px`)
	},

	// window.alert 警示訊息
	deviceAlert(type) {
		let msg = ""
		switch (type) {
			case "permissionFail":
				msg = '您未授予使用麥克風使用權限，請重新整理後選擇允許，或至設定中變更使用權限。'
				break
			case "noDevice":
				msg = '系統無法偵測到麥克風，請確認麥克風是否已連接並開啟。'
				break
			default:
				msg = type
				break
		}
		window.alert(msg)
	},

	// 要求裝置權限 獲取成功後callback: success, fail
	requestPermission(success = function () { }, fail = function () { }) {
		// 檢查麥克風權限
		navigator.mediaDevices.getUserMedia({ audio: true })
			.then(() => {
				success()

				// 初次授予權限後 監聽裝置狀態改變
				if (utilState.initDeviceFlag) {
					utilState.initDeviceFlag = false
					// 監聽 權限狀態變動
					functionUtil.permissionChanged()
					// 監聽 裝置狀態變動
					functionUtil.deviceChanged()
				}
			})
			.catch(error => {
				// fail function
				fail()
				// , console.log提示
				console.log(error)
				// 有授予權限但沒裝置 getUserMedia會直接走catch
				if (error.message.includes("Requested device not found")) {
					functionUtil.deviceAlert("noDevice")
				} else {
					functionUtil.deviceAlert("permissionFail")
				}
			})
	},

	// 授權狀態改變 (未授予權限提示訊息)
	permissionChanged() {
		navigator.permissions.query({ name: 'microphone' })
			.then((permissionStatus) => {
				permissionStatus.onchange = function () {
					if (permissionStatus.state != "granted") {
						functionUtil.deviceAlert("permissionFail")
					}
				}
			})
	},

	// 裝置狀態改變
	deviceChanged() {
		navigator.mediaDevices.ondevicechange = (event) => {
			functionUtil.checkMicrophone()
		};
	},

	// 檢查麥克風是否存在
	checkMicrophone() {
		// audio device
		let audio_input_counts = 0;
		navigator.mediaDevices.enumerateDevices()
			.then(function (devices) {
				devices.forEach(function (device) {
					if (device.kind == 'audioinput' && device.deviceId) {
						audio_input_counts++;
					}
				})
			})
			.then(() => {
				if (audio_input_counts == 0) {
					functionUtil.deviceAlert("noDevice")
				}
			})
			.catch(function (err) {
				console.log(err)
			})
	}
}

export default functionUtil;
