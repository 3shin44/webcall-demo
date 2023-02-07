<template>
	<!-- CSS佈景主題切換器 -->
	<div class="theme-switcher py-3 d-flex justify-content-center">
		<label class="switch">
			<input type="checkbox" v-model="value">
			<span class="slider"></span>
		</label>
	</div>
</template>

<script>
	export default {
		name: 'ThemeSwitcher',
		components: {},
		props: {
			toggleValue: {
				Type: Boolean,
				default: true
			} 

		},
		data() {
			return {
				value: this.toggleValue
			}
		},
		methods: {
      themeSwitch: function (val) {
        let themeName = val ? "dark" : "light"
        document.documentElement.className = themeName;
      }

		},
		watch: {
			toggleValue: function (newVal){
				this.value = newVal
			}
		},
		created(){
			let themeName = this.themeSwitch ? "dark" : "light"
      document.documentElement.className = themeName;
		}
	}
</script>


<style scoped>
	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 24px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 20px;
		width: 20px;
		left: 2px;
		top: 2px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 50%;
	}

	input:checked+.slider {
		background-color: green;
	}

	input:checked+.slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>