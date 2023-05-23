<template>
	<!-- 圖卡說明 元件 -->
	<div class="icon-card d-flex flex-column justify-content-center align-items-center">
		<!-- 客服圖示 -->
		<div class="icon-card-service-img">
			<img class="w-100 d-block" :src="iconSrc[iconCode]" alt="">
		</div>
		<div class="icon-card-msg-container p-3">
			<!-- 顯示訊息 -->
			<p class="text-center text-reset" v-html="displayMsg"></p>
			<!-- 警示訊息 -->
			<p class="text-center text-reset" :class="{'icon-card-min-height': alertMsgMinHeight}" v-html="alertMsg"></p>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'IconCard',
		components: {},
		props: {
			// 顯示訊息: HTML格式
			displayMsg: {
				Type: String,
				default: ""
			},
			// 警示訊息: HTML格式
			alertMsg: {
				Type: String,
				default: ""
			},
			// 警示訊息最小高度
			alertMsgMinHeight:{
				Type: Boolean,
				default: false
			},
			// 圖示編號
			iconCode: {
				Type: Number,
				default: 1
			},
		},
		data() {
			return {
				// 客服圖示 圖片來源
				iconSrc: {
					1: require("../../public/images/call-center.png"),
					2: require("../../public/images/sorry.svg"),
				}
			}
		},
		methods: {
		}
	}
</script>

<style scoped>
	.icon-card {
		border-radius: 10px;
		background-color: #f3f3f4;
	}

	.icon-card-service-img {
		width: 60%;
	}

	.icon-card-msg-container p {
		font-size: 18px;
	}

	.icon-card-min-height {
		min-height: 27px;
	}
</style>