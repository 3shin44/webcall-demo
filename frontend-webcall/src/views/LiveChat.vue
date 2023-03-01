<template>
  <div class="live-chat  h-100 d-flex flex-column justify-content-between align-items-center">
    <IconCard :display-msg="serviceMsg" :alert-msg="alertMsg" />
    <DialButton @click="endCount" class="livechat-dialbutton" />
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
        serviceMsg: "通話連線中...",
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

      // 警示訊息
      showAlertMsg(){
        this.alertMsg = "您的裝置網路訊號不穩..."
      }
    },
    mounted() {
      setTimeout(() => {
        this.startCount();
      }, 1500);

      setTimeout(() => {
        this.showAlertMsg();
      }, 8000);
    }
  }
</script>


<style scoped>
.livechat-dialbutton{
  width: 60%;
  max-width: 150px;
}
</style>