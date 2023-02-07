<template>
  <div class="top-modal">

    <!-- Launch modal button -->
    <div class="top-menu d-flex mb-2">
      <button data-bs-toggle="modal" class="hint-btn" data-bs-target="#hintModal">
        <img src="../../public/images/p_dw.svg" alt="arrdown">
      </button>
    </div>

    <!-- Hint Modal -->
    <div class="modal fade" id="hintModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <button type="button" class="btn-close position-absolute hint-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
          <div class="">
            <div class="contentStickTop">
              <p class="pe-4">歡迎您蒞臨承暉網路電話(Web Call)服務，本服務無須輸入客服電話，按下<span><img src="../../public/images/greenphone.svg"
                    alt=""></span>即可接通客服專員。</p>
            </div>
            <div class="contentBox">
              <div class="borderBox">
                <div class="contentIcon">
                  <img src="../../public/images/icon1.svg" alt="icon1">
                </div>
                <p class="p-2 m-0">請開啟喇叭(或裝上「耳機」)及「麥克風」</p>
              </div>
            </div>
            <div class="contentBox">
              <div class="borderBox ">
                <div class="contentIcon">
                  <img src="../../public/images/icon2.svg" alt="icon2">
                </div>
                <p class="p-2 m-0">請留意網路順暢性</p>
              </div>

            </div>
            <div class="contentBox">
              <div class="borderBox removeBottomLine">
                <div class="contentIcon">
                  <img src="../../public/images/icon3.svg" alt="icon3">
                </div>
                <p class="p-2 m-0">若遇客服中心忙線時段，建議使用「智能客服」。文字對談簡單又快速</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TopModal',
    props: {
    }
  }
</script>


<style scoped>
  .top-modal .modal-dialog {
    top: 0;
  }

  .top-menu img {
    position: relative;
    left: 0;
    right: 0;
    transform: translateY(0);
    width: 45px;
    height: 25px;
  }

  .hint-btn {
    width: 100%;
    margin: auto;
    position: relative;
    height: 5px;
    background-color: white;
    border: none;
    border-radius: 0 0 5px 5px;
  }


  #hintModal {
    --bs-modal-margin: 0;
    --bs-modal-width: 100%;
  }


  .contentStickTop {
    padding: 10px;
  }

  .contentStickTop p {
    font-weight: bold;
  }

  .contentStickTop img {
    margin: 0 5px 0 5px;
    width: 16px;
    height: 16px;
  }

  .contentBox {
    padding-left: 15px;
    padding-right: 15px;
  }

  .borderBox {
    display: flex;
    justify-content: start;
    align-items: center;
    color: var(--highightFontColor);
    border-bottom: 1px solid gray;
  }

  /* 不顯示底線 */
  .removeBottomLine {
    border-bottom: unset;
  }

  .borderBox p {
    padding: 10px;
  }

  .contentIcon img {
    padding: 5px;
    display: block;
    width: 30px;
    height: 30px;
  }
</style>