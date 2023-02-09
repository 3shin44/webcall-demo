<template>
  <div class="pending-page h-100 d-flex flex-column justify-content-between align-items-center">
    <IconCard :display-msg="queueStatus" />
		<!-- 通話按鈕 -->
		<div class="mt-5 pt-5 d-flex justify-content-center">
			<BaseButton :icon-code="1"  />
		</div>
  </div>
</template>

<script>
import IconCard from '../components/IconCard.vue'
import BaseButton from '../components/BaseButton.vue'
export default {
  name: 'PendingPage',
  components: {
      IconCard, BaseButton
    },
  props: {
    
  },
  data() {
    return {
      count: 3
    }
  },
  methods:{
    // 模擬倒數人數
    updateQueue(){
      if( this.count == 1 ){
        this.$emit('updateService', 1)
      }else{
        this.count --
      }
    }
  },
  computed:{
    queueStatus(){
      return `目前等待人數為 ${this.count} 人`
    }
  },
  mounted(){
    setInterval(this.updateQueue, 1500)
  }
}
</script>


<style scoped>

</style>
