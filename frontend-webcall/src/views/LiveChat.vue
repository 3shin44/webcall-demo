<template>
  <div class="live-chat d-flex flex-column align-items-center">
    <IconCard :display-msg="serviceMsg" :alert-msg="alertMsg" class="live-chat-msg" :alert-msg-min-height="true" />
    <DialButton @click="endCount" class="live-chat-dialbutton" />
  </div>
</template>

<script>
  import IconCard from '../components/IconCard.vue'
  import DialButton from '../components/DialButton.vue'
  
  export default {
    name: 'LiveChat',
    components: {
      IconCard, DialButton
    },
    props: {

    },
    data() {
      return {
        //顯示通話時間
        countIntervalId: -1,
        countingTime: 0,
        serviceMsg: "連線中...",
        alertMsg: ""
      }
    },
    methods: {
      startCount() {
        this.countIntervalId = setInterval(() => {
          let sec = this.countingTime % 60
          let min = Math.floor(this.countingTime / 60)
          let hour = Math.floor(this.countingTime / 3600)
          if (sec < 10) sec = '0' + sec
          if (min < 10) min = '0' + min
          if (hour < 10) hour = '0' + hour
          this.serviceMsg = `通話時間: ${hour}:${min}:${sec}`;
          this.countingTime++;
        }, 1000)
      },

      //清除通話時間
      endCount() {
        clearInterval(this.countIntervalId)
        this.countingTime = 0
        this.countIntervalId = -1

        this.$emit('updateService', 5)
      },

      // 訊號不穩提示
      showAlertMsg(trigger=false){
        this.alertMsg = trigger ? "您的裝置網路訊號不穩…" : ""
      }
    },
    mounted() {
      // start count
      setTimeout(() => {
        this.startCount();
      }, 1500)
      // show unstable connection
      setTimeout(() => {
        this.showAlertMsg(true)
      }, 7500)
      // hide alert msg
      setTimeout(() => {
        this.showAlertMsg()
      }, 12500)
    }
  }
</script>


<style scoped>
.live-chat-dialbutton{
  max-width: 230px;
}
</style>