<template>
  <div class="pending-page">
    <IconCard :display-msg="queueStatus" />
		<!-- 通話按鈕 -->
		<div class="align-bottom d-flex justify-content-center">
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
      count: 10
    }
  },
  methods:{
    // 模擬倒數人數
    updateQueue(){
      if( this.count==0 ){
        this.count=10
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
    setInterval(this.updateQueue, 5000)
  }
}
</script>


<style scoped>

</style>
