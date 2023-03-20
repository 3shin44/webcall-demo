<template>
  <div class="welcome-page">
    	
		<IconCard :display-msg="welcomeMsg" :icon-code="1" />

		<!-- 通話按鈕 -->
		<div class="d-flex justify-content-center align-items-center mt-3">
			<BaseButton :icon-code="1" @click="$emit('updateService', 1)"  />
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


<style scoped lang="scss">

</style>
