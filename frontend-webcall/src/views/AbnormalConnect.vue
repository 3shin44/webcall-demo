<template>
  <div class="abnormal-connect h-100 d-flex flex-column align-items-center">
    <IconCard :icon-code="2" img-max-width="80" :display-msg="errorMsg" />

    <!-- 通話按鈕 -->
    <div class="d-flex justify-content-center align-items-center mt-3">
      <BaseButton :icon-code="3" @click="$emit('updateService', 6)" />
    </div>
  </div>
</template>

<script>
  import IconCard from '../components/IconCard.vue'
  import BaseButton from '../components/BaseButton.vue'
  export default {
    name: 'AbnormalConnect',
    props: {
    },
    components: {
      IconCard, BaseButton
    },
    data() {
      return {
        errorMsg: `請確認目前使用的電腦或手機裝置連線是否開啟，確認連線正常後再點選下方按鈕重新連線。`
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>