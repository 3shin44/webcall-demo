<template>
	<!-- 電話按鈕組件 -->
	<div class="base-button">
		<button class="webcall-btn-primary p-0 bg-transparent" @click="emitClick">
			<img class="d-block w-100" :src="iconSrc[iconCode]" alt="">
		</button>
	</div>
</template>

<script>
	export default {
		name: 'BaseButton',
		components: {},
		props: {
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
			emitClick(){
				this.$emit('click')
			}
		}
	}
</script>


<style scoped>
</style>