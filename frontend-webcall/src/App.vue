<template>
  <div id="app">
    <div class="topMenu" >
			<button data-bs-toggle="modal" class="hint-btn w-100" data-bs-target="#hintModal">
          <img src="../public/images/p_dw.svg" alt="arrdown">
      </button>
		</div>
		<!-- Hint Modal -->
    <div class="modal fade" id="hintModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <button type="button" class="btn-close position-absolute hint-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="" >
              <div class="contentStickTop">
                <p class="pe-4">歡迎您蒞臨承暉網路電話(Web Call)服務，本服務無須輸入客服電話，按下<span><img src="../public/images/greenphone.svg"
                      alt=""></span>即可接通客服專員。</p>
              </div>
              <div class="contentBox">
                <div class="borderBox">
                  <div class="contentIcon">
                    <img src="../public/images/icon1.svg" alt="icon1">
                  </div>
                  <p>請開啟喇叭(或裝上「耳機」)及「麥克風」</p>
                </div>
              </div>
              <div class="contentBox">
                <div class="borderBox ">
                  <div class="contentIcon">
                    <img src="../public/images/icon2.svg" alt="icon2">
                  </div>
                  <p>請留意網路順暢性</p>
                </div>
        
              </div>
              <div class="contentBox">
                <div class="borderBox removeBottomLine">
                  <div class="contentIcon">
                    <img src="../public/images/icon3.svg" alt="icon3">
                  </div>
                  <p>若遇客服中心忙線時段，建議使用「智能客服」。文字對談簡單又快速</p>
                </div>
              </div>
        
              <!-- 底部箭頭ICON -->
              <div class="topContentArrow">
                <img src="../public/images/p_dw.svg" alt="arrdown">
              </div>
            </div>
         
        </div>
      </div>
    </div>

		<!-- 導覽列: 公司LOGO 操作說明 -->
		<div class="navBar">
			<div class="company-logo">
				<img src="../public/images/info-logo.png" >
			</div>
			<div class="instruct-hint">
        <InstructModal />
			</div>
		</div>

		<!--服務元件 -->
		<component :is="currentService" @update-service="updateService"  />

  </div>
</template>

<script>
import InstructModal from '@/components/InstructModal.vue'
import WelcomePage from './views/WelcomePage.vue'


export default {
  name: 'App',
  components: {
    InstructModal, WelcomePage
  },
  data() {
    return {
      currentService: "WelcomePage"
    }
  },
  methods:{
    // 變更服務
    updateService(val){
      console.log(val);
    }
  }
}
</script>

<style>

</style>
