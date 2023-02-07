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
}

export default functionUtil;
