<template>
  <div class="full-queue h-100 d-flex flex-column align-items-center">
    <IconCard :display-msg="fullQueueMsg" />
    		<!-- 通話按鈕 -->
		<div class="d-flex justify-content-center align-items-center mt-3">
			<BaseButton :icon-code="4" @click="$emit('updateService', 6)" />
		</div>
  </div>
</template>

<script>
import IconCard from '../components/IconCard.vue'
import BaseButton from '../components/BaseButton.vue'
export default {
  name: 'FullQueue',
  components: {
      IconCard, BaseButton
  },
  props: {
  },
  data() {
    return {
      fullQueueMsg: `目前網路客服滿線中，請稍後再試，或使用<a href="#">其他服務</a>`
    }
  },
  methods:{

  }
}
</script>


<style scoped>

</style>
