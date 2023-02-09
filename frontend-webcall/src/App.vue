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
        <InstructModal  />
      </div>
    </div>

    <p></p>
    <!--服務元件 -->
    <div class="service-container mx-auto p-2">
      <component :is="currentService" @updateService="updateService"  />
    </div>
    <div class="service-container-footer"></div>

  </div>
</template>

<script>
  // views  NotSupport
  import WelcomePage from './views/WelcomePage.vue'
  import LiveChat from './views/LiveChat.vue'
  import PendingPage from './views/PendingPage.vue'
  import FullQueue from './views/FullQueue.vue'
  import NotSupport from './views/NotSupport.vue'
  import ChatComplete from './views/ChatComplete.vue'
  // components
  import InstructModal from '@/components/InstructModal.vue'
  import TopModal from '@/components/TopModal.vue'

  // util JS
  import functionUtil from "@/util/functionUtil"

  import helloNpm from 'info-npm-test-package'

  export default {
    name: 'App',
    components: {
      WelcomePage, LiveChat,
      PendingPage, FullQueue,
      NotSupport, ChatComplete,
      InstructModal, TopModal
    },
    data() {
      return {
        urlParams: {
          status: 0,
        }
      }
    },
    methods: {
      updateService(val){
        this.urlParams.status = val
      }
    },
    computed:{
      // 解析網址後回傳對應元件名稱或預設元件, 或元件傳值更新所需服務
      currentService(val){
        
        // 服務元件列表
        let serviceList = {
          0: "WelcomePage",
          1: "LiveChat",
          2: "PendingPage",
          3: "FullQueue",
          4: "NotSupport",
          5: "ChatComplete"
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
      let queryData = functionUtil.getQueryStringObj();
      this.urlParams.status = queryData.status || 0
    },
    mounted(){
    }
  }
</script>

<style>

</style>