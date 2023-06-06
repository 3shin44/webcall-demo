<template>
  <div class="welcome-page">
    	
		<IconCard :display-msg="welcomeMsg" :icon-code="1" />

		<!-- 通話按鈕 -->
		<div class="d-flex justify-content-center align-items-center mt-3">
			<BaseButton :icon-code="1" @click="makeCall" :button-width="68" />
		</div>

  </div>
</template>

<script>
import IconCard from '../components/IconCard.vue'
import BaseButton from '../components/BaseButton.vue'
import functionUtil from '../util/functionUtil'

export default {
  name: 'WelcomePage',
  components: {
    BaseButton, IconCard
  },
  data() {
    return {
      welcomeMsg: "歡迎您使用<br>承暉資訊WebCall"
    }
  },
  methods: {
    makeCall(){
      // PROD: 正常流程, DEV為離線使用, 僅展示頁面不檢查裝置
      if( process.env.NODE_ENV == "production" ){
        functionUtil.requestPermission( this.checkBusy )
      }else{
        this.checkBusy()
      }
      
    },
    // 檢查客服狀態與進線
    checkBusy(){
      this.$emit('updateService', 1)
    }
  }

}
</script>


<style scoped lang="scss">

</style>
