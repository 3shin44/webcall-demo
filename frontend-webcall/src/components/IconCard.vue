<template>
	<!-- 圖卡說明 元件 -->
	<div class="icon-card d-flex flex-column justify-content-center align-items-center">
		<!-- 客服圖示 -->
		<div class="icon-card-service-img">
			<img class="w-100 d-block" :src="iconSrc[iconCode]" alt="">
		</div>
		<!-- 顯示訊息 -->
		<p class="mt-3 text-center p-2 icon-card-font-size" v-html="displayMsg"></p>
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
			// 圖示編號
			iconCode:{
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
	.icon-card{
		border-radius: 10px;
		background-color: #f3f3f4;
	}

	.icon-card-service-img{
		width: 60%;
	}

	.icon-card-font-size{
		font-size: 18px;
	}
</style>