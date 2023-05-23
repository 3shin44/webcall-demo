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
    <div v-if="devMode" class="btn-group ms-3" role="group" aria-label="Basic example">

      <button 
        v-for="(item, index) in 6" 
        :key="index" 
        @click="()=>{ urlParams.status = item }"
        type="button" 
        class="btn btn-dark">{{ item }}
      </button>
    </div>

  </div>
</template>

<script>
  // views
  import WelcomePage from './views/WelcomePage.vue'
  import LiveChat from './views/LiveChat.vue'
  import FullQueue from './views/FullQueue.vue'
  import NotSupport from './views/NotSupport.vue'
  import ChatComplete from './views/ChatComplete.vue'
  import AbnormalConnect from './views/AbnormalConnect.vue'
  // components
  import InstructModal from '@/components/InstructModal.vue'
  import TopModal from '@/components/TopModal.vue'
  // util JS
  import functionUtil from "@/util/functionUtil"

  export default {
    name: 'App',
    components: {
      WelcomePage, LiveChat,
      AbnormalConnect, FullQueue,
      NotSupport, ChatComplete,
      InstructModal, TopModal
    },
    data() {
      return {
        devMode: process.env.NODE_ENV == "development",
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
          1: "LiveChat",
          2: "NotSupport",
          3: "FullQueue",
          4: "AbnormalConnect",
          5: "ChatComplete",
          6: "WelcomePage",
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
      // 獲取網址參數 ( 預設服務6(歡迎頁) )
      let queryData = functionUtil.getQueryStringObj();
      this.urlParams.status = queryData.status || 6
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