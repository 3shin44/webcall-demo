<template>
  <div class="full-queue">
    <IconCard :display-msg="fullQueueMsg" />
    		<!-- 通話按鈕 -->
		<div class="align-bottom d-flex justify-content-center">
			<BaseButton :icon-code="4" />
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
