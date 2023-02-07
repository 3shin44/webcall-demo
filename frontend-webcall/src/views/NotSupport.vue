<template>
  <div class="not-support">
    <IconCard :icon-code="2" img-max-width="100" :display-msg="errorMsg" />

    <!-- 通話按鈕 -->
    <div class="align-bottom d-flex justify-content-center">
      <BaseButton :icon-code="3" @click="$emit('updateService', 0)" />
    </div>
  </div>
</template>

<script>
  import IconCard from '../components/IconCard.vue'
  import BaseButton from '../components/BaseButton.vue'
  export default {
    name: 'NotSupport',
    props: {
    },
    components: {
      IconCard, BaseButton
    },
    data() {
      return {
        errorMsg: `請確認目前使用的電腦或手機裝置網路連線是否開啟，確認連線正常後再點選下方按鈕重新連線`
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>