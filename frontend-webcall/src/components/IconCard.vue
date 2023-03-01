<template>
	<!-- 圖卡說明 元件 -->
	<div class="icon-card d-flex flex-column justify-content-center align-items-center bg-transparent">
		<!-- 客服圖示 -->
		<div :style="{ maxWidth: imgMaxWidth + 'px' }" class="pt-3">
			<img class="w-100 d-block" :class="{'bcg-gray': iconCode==1 }" :src="iconSrc[iconCode]" alt="">
		</div>
		<!-- 顯示訊息 -->
		<p class="mt-3 text-center p-1 text-color-white text-unset" v-html="displayMsg"></p>
		<!-- 警示訊息 -->
		<p class="text-center p-1 text-color-white text-unset" v-html="alertMsg"></p>
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
			alertMsg: {
				Type: String,
				default: ""
			},
			// 圖示編號
			iconCode:{
				Type: Number,
				default: 1
			},
			// 圖示最大寬度
			imgMaxWidth:{
				Type: Number,
				default: 150
			}
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
		width: 50%;
		border-radius: 10px;
		background-color: #f3f3f4;
	}
</style>