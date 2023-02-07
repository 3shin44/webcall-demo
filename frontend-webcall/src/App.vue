<template>
  <div id="app">
    <!-- 頂端提示導覽列 -->
    <TopModal class="mb-3" />

    <!-- 公司LOGO & 操作說明 -->
    <div class="d-flex justify-content-between">
      <div class="company-logo">
        <img src="">
      </div>
      <div class="d-flex align-items-center">
        <InstructModal :icon-code="isExtend" />
      </div>
    </div>

    <!--服務元件 -->
    <component :is="currentService" @updateService="updateService" />

  </div>
</template>

<script>
  // views  NotSupport
  import WelcomePage from './views/WelcomePage.vue'
  import LiveChat from './views/LiveChat.vue'
  import PendingPage from './views/PendingPage.vue'
  import FullQueue from './views/FullQueue.vue'
  import NotSupport from './views/NotSupport.vue'
  // components
  import InstructModal from '@/components/InstructModal.vue'
  import TopModal from '@/components/TopModal.vue'

  // util JS
  import functionUtil from "@/util/functionUtil"


  export default {
    name: 'App',
    components: {
      WelcomePage, LiveChat,
      PendingPage, FullQueue,
      NotSupport,
      InstructModal, TopModal
    },
    data() {
      return {
        urlParams: null,
      }
    },
    methods: {
      updateService(val){
        console.log("receive: ", val);
        this.urlParams.status = val
      }
    },
    computed:{
      // 解析網址後回傳對應元件名稱或預設元件
      currentService(val){
        // 服務元件列表
        let serviceList = {
          0: "WelcomePage",
          1: "LiveChat",
          2: "PendingPage",
          3: "FullQueue",
          4: "NotSupport"
        }
        if( typeof(val) =='number' ){
          return serviceList[val] || "WelcomePage"
        }else{
          return serviceList[this.urlParams.status] || "WelcomePage"
        }

        
      },
      // 僅在welcomepage展開操作說明圖示
      isExtend(){
        let imgCode = this.urlParams.status == 0 ? 1 : 2
        return imgCode
      }
    },
    created(){
      // 獲取網址參數
      this.urlParams = functionUtil.getQueryStringObj()
    }
  }
</script>

<style>

</style>