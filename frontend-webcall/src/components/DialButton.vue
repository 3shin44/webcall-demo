<template>
	<!-- 電話按鈕組件 -->
	<div class="dial-button">
		<!-- 數字鍵盤 -->
		<div class="btn-padding">
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('1')" @touchstart.stop.prevent="keyPress('1')"
					@mouseup="keyUp('1')" @touchend="keyUp('1')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no1.svg" alt="1">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('2')" @touchstart.stop.prevent="keyPress('2')"
					@mouseup="keyUp('2')" @touchend="keyUp('2')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no2.svg" alt="2">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('3')" @touchstart.stop.prevent="keyPress('3')"
					@mouseup="keyUp('3')" @touchend="keyUp('3')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no3.svg" alt="3">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('4')" @touchstart.stop.prevent="keyPress('4')"
					@mouseup="keyUp('4')" @touchend="keyUp('4')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no4.svg" alt="4">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('5')" @touchstart.stop.prevent="keyPress('5')"
					@mouseup="keyUp('5')" @touchend="keyUp('5')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no5.svg" alt="5">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('6')" @touchstart.stop.prevent="keyPress('6')"
					@mouseup="keyUp('6')" @touchend="keyUp('6')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no6.svg" alt="6">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('7')" @touchstart.stop.prevent="keyPress('7')"
					@mouseup="keyUp('7')" @touchend="keyUp('7')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no7.svg" alt="7">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('8')" @touchstart.stop.prevent="keyPress('8')"
					@mouseup="keyUp('8')" @touchend="keyUp('8')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no8.svg" alt="8">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('9')" @touchstart.stop.prevent="keyPress('9')"
					@mouseup="keyUp('9')" @touchend="keyUp('9')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no9.svg" alt="9">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('*')" @touchstart.stop.prevent="keyPress('*')"
					@mouseup="keyUp('*')" @touchend="keyUp('*')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/noicon1.svg" alt="*">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('0')" @touchstart.stop.prevent="keyPress('0')"
					@mouseup="keyUp('0')" @touchend="keyUp('0')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/no0.svg" alt="0">
				</button>
			</div>
			<div class="btn-width">
				<button class="btn-outline-primary p-0 d-block mx-auto" :class="{'hide-dial': hideDial}" @mousedown.stop.prevent="keyPress('#')" @touchstart.stop.prevent="keyPress('#')"
					@mouseup="keyUp('#')" @touchend="keyUp('#')">
					<img class="w-50 h-50 m-auto" src="../../public/images/dial/noicon2.svg" alt="#">
				</button>
			</div>
			<!-- 功能按鈕列 -->
			<div class="btn-width">
				<!-- 靜音 -->
				<BaseButton class="d-flex justify-content-center" border :icon-code="switchMute ? 5 : 6" @click="switchMute = !switchMute" :button-width="52" />
			</div>
			<div class="btn-width">
				<!-- 結束通話 -->
				<BaseButton class="d-flex justify-content-center"  :icon-code="2" @click="emitClick" :button-width="58"  />
			</div>
			<div class="btn-width">
				<!-- 隱藏鍵盤 -->
				<BaseButton class="d-flex justify-content-center" border :icon-code="hideDial ? 8 : 7" @click="hideDial = !hideDial" :button-width="52"  />
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
	export default {
		name: 'DialButton',
		components: {
			BaseButton
		},
		props: {
			
		},
		data() {
			return {
				hideDial: false,
				switchMute: false,
				dtmf: null,
				dtmfFrequencies: {
					"1": { f1: 697, f2: 1209 },
					"2": { f1: 697, f2: 1336 },
					"3": { f1: 697, f2: 1477 },
					"4": { f1: 770, f2: 1209 },
					"5": { f1: 770, f2: 1336 },
					"6": { f1: 770, f2: 1477 },
					"7": { f1: 852, f2: 1209 },
					"8": { f1: 852, f2: 1336 },
					"9": { f1: 852, f2: 1477 },
					"*": { f1: 941, f2: 1209 },
					"0": { f1: 941, f2: 1336 },
					"#": { f1: 941, f2: 1477 }
				},
			}
		},
		methods: {
			// DTMF 
			DTMF(key) {
				// 使用者輸入號碼
				let number = key.toString();

				const keyPressed = number;
				const frequencyPair = this.dtmfFrequencies[keyPressed];

				this.dtmf.freq1 = frequencyPair.f1;
				this.dtmf.freq2 = frequencyPair.f2;

				if (this.dtmf.status == 0) {
					this.dtmf.start();
				}
			},

			keyPress(key){
				this.DTMF(key)
			},

			keyUp(key){
				if (typeof this.dtmf !== "undefined" && this.dtmf.status) {
					this.dtmf.stop()
				}
			},

			emitClick(){
				this.$emit("click")
			},


			hideDialButton(){
				this.hideDial = !this.hideDial
			}

		},
		mounted(){
			// Play DTMF Tone function 
			const AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

			function Tone(context, freq1, freq2) {
				this.context = context;
				this.status = 0;
				this.freq1 = freq1;
				this.freq2 = freq2;
			}
			Tone.prototype.setup = function () {
				this.osc1 = context.createOscillator();
				this.osc2 = context.createOscillator();
				this.osc1.frequency.value = this.freq1;
				this.osc2.frequency.value = this.freq2;

				this.gainNode = this.context.createGain();
				this.gainNode.gain.value = 0.25;

				this.filter = this.context.createBiquadFilter();
				this.filter.type = "lowpass";
				this.filter.frequency.value = 8000;

				this.osc1.connect(this.gainNode);
				this.osc2.connect(this.gainNode);

				this.gainNode.connect(this.filter);
				this.filter.connect(context.destination);
			}

			Tone.prototype.start = function () {
				this.setup();
				this.osc1.start(0);
				this.osc2.start(0);
				this.status = 1;
			}

			Tone.prototype.stop = function () {
				this.osc1.stop(0);
				this.osc2.stop(0);
				this.status = 0;
			}

			let context = new AudioContext();
			this.dtmf = new Tone(context, 350, 440);
		}
	}
</script>


<style scoped>
	/* 電話按鈕 */
	.btn-padding {
		/* 本體位置 */
		margin: auto;

		/* 內部按鈕排列 */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.btn-width {
		width: 33.33333%;
		padding: 5px;
	}

	.btn-width button{
		width: 52px;
	}

	.call-btn-width {
		width: 33.33333%;
	}

	.btn-outline-primary {
		border: none;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: white;
		border: 1px solid gray;
	}

	.hide-dial{
		visibility: hidden;
	}
</style>