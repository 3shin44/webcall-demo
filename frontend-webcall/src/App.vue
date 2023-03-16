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
    <div class="service-container p-2">
      <component :is="getComponent" @updateService="updateService" class="service-component mx-auto pt-3" />
    </div>

    <!-- dev tool -->
    <div class="btn-group ms-3" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-dark" @click="urlParams.status = 0">0</button>
      <button type="button" class="btn btn-dark" @click="urlParams.status = 1">1</button>
      <button type="button" class="btn btn-dark" @click="urlParams.status = 2">2</button>
      <button type="button" class="btn btn-dark" @click="urlParams.status = 3">3</button>
      <button type="button" class="btn btn-dark" @click="urlParams.status = 4">4</button>
    </div>

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
      // 改變當前服務值
      updateService(val) {
        this.urlParams.status = val
      },


    },
    computed: {
      // 回傳元件名稱
      getComponent() {
        // 服務元件列表
        let serviceList = {
          0: "WelcomePage",
          1: "LiveChat",
          2: "PendingPage",
          3: "FullQueue",
          4: "NotSupport",
          5: "ChatComplete"
        }
        return serviceList[this.urlParams.status] || "WelcomePage"
      },

      // 在welcomepage展開操作說明圖示
      isExtend() {
        let imgCode = this.urlParams.status == 0 ? 1 : 2
        return imgCode
      }
    },
    created() {
      // 獲取網址參數
      let queryData = functionUtil.getQueryStringObj();
      this.urlParams.status = queryData.status || 0
    },
    mounted() {

    }
  }
</script>

<style scoped land="scss">
  .company-logo img {
    max-width: 250px;
  }

  .service-component {
    max-width: 350px;
    min-height: 650px;
    border-radius: 10px;
    background-color: #f3f3f4;
  }
</style>