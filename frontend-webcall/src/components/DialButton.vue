<template>
	<!-- 電話按鈕組件 -->
	<div class="dial-button-page">
		<!-- 數字鍵盤 -->
		<div class="btnPadding" :class="{'invisible': !dialButton}">
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('1')" @touchstart.stop.prevent="keyPress('1')"
					@mouseup="keyUp('1')" @touchend="keyUp('1')">
					<img src="../../public/images/dial/no1.svg" alt="1">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('2')" @touchstart.stop.prevent="keyPress('2')"
					@mouseup="keyUp('2')" @touchend="keyUp('2')">
					<img src="../../public/images/dial/no2.svg" alt="2">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('3')" @touchstart.stop.prevent="keyPress('3')"
					@mouseup="keyUp('3')" @touchend="keyUp('3')">
					<img src="../../public/images/dial/no3.svg" alt="3">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('4')" @touchstart.stop.prevent="keyPress('4')"
					@mouseup="keyUp('4')" @touchend="keyUp('4')">
					<img src="../../public/images/dial/no4.svg" alt="4">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('5')" @touchstart.stop.prevent="keyPress('5')"
					@mouseup="keyUp('5')" @touchend="keyUp('5')">
					<img src="../../public/images/dial/no5.svg" alt="5">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('6')" @touchstart.stop.prevent="keyPress('6')"
					@mouseup="keyUp('6')" @touchend="keyUp('6')">
					<img src="../../public/images/dial/no6.svg" alt="6">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('7')" @touchstart.stop.prevent="keyPress('7')"
					@mouseup="keyUp('7')" @touchend="keyUp('7')">
					<img src="../../public/images/dial/no7.svg" alt="7">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('8')" @touchstart.stop.prevent="keyPress('8')"
					@mouseup="keyUp('8')" @touchend="keyUp('8')">
					<img src="../../public/images/dial/no8.svg" alt="8">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('9')" @touchstart.stop.prevent="keyPress('9')"
					@mouseup="keyUp('9')" @touchend="keyUp('9')">
					<img src="../../public/images/dial/no9.svg" alt="9">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('*')" @touchstart.stop.prevent="keyPress('*')"
					@mouseup="keyUp('*')" @touchend="keyUp('*')">
					<img src="../../public/images/dial/noicon1.svg" alt="*">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('0')" @touchstart.stop.prevent="keyPress('0')"
					@mouseup="keyUp('0')" @touchend="keyUp('0')">
					<img src="../../public/images/dial/no0.svg" alt="0">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0" @mousedown.stop.prevent="keyPress('#')" @touchstart.stop.prevent="keyPress('#')"
					@mouseup="keyUp('#')" @touchend="keyUp('#')">
					<img src="../../public/images/dial/noicon2.svg" alt="#">
				</button>
			</div>
		</div>

		<!-- 通話按鈕 -->
		<div class="callBtn btnPadding" v-if="callButton" >
			<div class="call-btn-width">
				<button class="callServiceBtn p-0" @click="callService(iconCode)">
					<img :src="iconSrc[iconCode]" alt="">
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DialButton',
		components: {},
		props: {
			// 數字鍵盤, 撥號按鈕 開關
			dialButton: {
				Type: Boolean,
				default: false
			},
			callButton: {
				Type: Boolean,
				default: false
			},
			// 撥號按鈕 狀態圖示
			iconCode: {
				Type: Number,
				default: 1
			},
		},
		data() {
			return {
				// 防止短時間多次點按 
				clicked: false,

				// 通話按鈕圖示 圖片來源
				iconSrc: {
					1: require("../../public/images/greenphone.svg"),
					2: require("../../public/images/redphone.svg"),
					3: require("../../public/images/reld.svg"),
					4: require("../../public/images/home.svg"),
				}
			}
		},
		methods: {
			// 按鍵值emit至上層做處理
			keyPress(key) {
				this.$bus.$emit("key-press", key);
			},
			keyUp(key) {
				this.$bus.$emit("key-up", key);
			},

			// emit通話按鈕訊息
			callService(iconCode) {

				switch (iconCode) {
					// 開始通話
					case 1:
						// emit觸發app進入通話服務
						this.$bus.$emit("start-call");
						break;

					// 停止通話: emit訊息(觸發結束通話)
					case 2:
						this.$bus.$emit('stop-call');
						break;

					// 重新整理
					case 3:
						this.$bus.$emit('refresh', "3");
						break;

					// 回首頁: 導向KGI首頁
					case 4:
						location.href = "https://www.kgi.com.tw";
						break;

					default:
						break;
				}

			}

		},
	}
</script>


<style scoped>
	/* 電話按鈕 */
	.btnPadding {
		/* 本體位置 */
		padding-top: 25px;
		margin: auto;
		max-width: 45%;
		height: 80%;

		/* 內部按鈕排列 */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	@media screen and (min-width: 576px) {

		/* 電話按鈕 */
		.btnPadding {
			/* 本體位置 */
			max-width: 250px;
			height: unset;
		}
	}

	.btn-width {
		width: 33.33333%;
		padding: 5px;
	}

	.call-btn-width {
		width: 33.33333%;
	}

	.btn-outline-primary {
		border: none;
		aspect-ratio: 1;
		border-radius: 50%;
	}

	.btn-outline-primary img {
		display: block;
		width: 100%;
	}

	.invisible {
		display: none;
	}

	.callBtn {
		height: 20%;
	}

	.callServiceBtn {
		display: block;
		margin: auto;
		width: 100%;
		max-width: 80px;
		max-height: 80px;
		border-radius: 50%;
		border: none;
	}

	.callServiceBtn img {
		display: block;
		width: 100%;
	}

	/* .alignBottom {
		position: absolute;
		bottom: 15px;
		left: 0;
		right: 0;
		margin: auto;
	} */
</style>