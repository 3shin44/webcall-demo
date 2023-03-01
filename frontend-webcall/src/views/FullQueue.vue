<template>
  <div class="full-queue h-100 d-flex flex-column justify-content-between align-items-center">
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
      fullQueueMsg: `目前電銷專員忙線中，建議您改用一般電話撥打0800-081-108按888，或手機撥打(02) 2171-1055按888，與電銷專員通話。`
    }
  },
  methods:{

  }
}
</script>


<style scoped>

</style>
