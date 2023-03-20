<template>
	<!-- 電話按鈕組件 -->
	<div class="base-button">
		<button class="base-button-primary p-0" :class="{'base-button-outline-primary': $attrs.border=='' }" @click="emitClick" :style="{width : buttonWidth +'px'}">
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
			buttonWidth:{
				Type: Number,
				default: 68
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
					5: require("../../public/images/mute_on.svg"),
					6: require("../../public/images/mute_off.svg"),
					7: require("../../public/images/dial_on.svg"),
					8: require("../../public/images/dial_off.svg"),
				}
			}
		},
		methods: {
			emitClick() {
				this.$emit('click')
			}
		}
	}
</script>


<style scoped lang="scss">
	.base-button-primary {
		border-radius: 50%;
		border: none;
		
	}

	.base-button-primary img {
		border-radius: 50%;
		width: 100%;
		aspect-ratio: 1;
		display: block;
	}

	.webcall-theme-text {
		color: var(--text-color);
	}

	.base-button-outline-primary {
		border: none;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: white;
		border: 1px solid gray;
	}
</style>