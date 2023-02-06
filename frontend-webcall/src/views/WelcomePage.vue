<template>
  <div class="welcome-page">
    		<!-- 客服圖示 -->
			<div class="d-flex justify-content-center serviceIcon">
				<img src="../../public/images/callcenter.svg" alt="">
			</div>
			<!-- 歡迎訊息 -->
			<div class="welcomeMsg d-flex justify-content-center mt-3" v-html="welcomeMsg"></div>

			<!-- 通話按鈕 -->
			<div>
				<DialButton :call-button="true" :dial-button="true"  />
			</div>

  </div>
</template>

<script>
import DialButton from '../components/DialButton.vue'

export default {
  name: 'WelcomePage',
  components: {
    DialButton
  },
  data() {
    return {
      welcomeMsg: "歡迎您使用承暉資訊WebCall"
    }
  },
}
</script>


<style scoped>
	.serviceIcon img{
		max-width: 150px;
	}
</style>
