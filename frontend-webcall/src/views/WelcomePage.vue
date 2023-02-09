<template>
  <div class="welcome-page h-100 d-flex flex-column justify-content-between align-items-center">
    	
		<IconCard :display-msg="welcomeMsg" :icon-code="1" />

		<!-- 通話按鈕 -->
		<div class="d-flex justify-content-center align-items-center">
			<BaseButton :icon-code="1" @click="$emit('updateService', 2)"  />
		</div>

  </div>
</template>

<script>
import IconCard from '../components/IconCard.vue'
import BaseButton from '../components/BaseButton.vue'

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
}
</script>


<style scoped>
</style>
