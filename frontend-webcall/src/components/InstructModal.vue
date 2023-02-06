<template>
  <div class="instruct-modal">

    <button type="button" data-bs-toggle="modal" data-bs-target="#instructModal">
      <img class="w-100" src="../../public/images/gd1.png" alt="info" >
    </button>

    <!-- Modal -->
    <div class="modal fade" id="instructModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">操作說明</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="steps">
              <h6 class="fw-bold">操作步驟</h6>
              <ol>
                <li><span>請裝置好麥克風及喇叭(或耳機)。</span> </li>
                <li><span>請點選綠色「通話」鍵，系統將自動為您接通，雙方開始通話。</span></li>
                <li><span>通話結束請點選紅色「結束」鍵，雙方結束通話。</span></li>
              </ol>
            </div>
            <div class="warning">
              <h6  class="fw-bold">注意事項</h6>
              <p>請使用瀏覽器 Chrome、Edge、Safari、Firefox以上最新版本，以避免無法正常操作。<br>
                若您一直響鈴無法通話，可能因為網路安全限制（例如防火牆阻擋），建議您改用一般電話或手機撥打 (00)0000-0000，0000-000-000通話，或改用文字交談功能。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'InstructModal',
    props: {
    }
  }
</script>


<style scoped>

.instruct-modal>button{
  padding: 0;
  max-width: 100px;
  background-color: transparent;
  border: none;
}
</style>